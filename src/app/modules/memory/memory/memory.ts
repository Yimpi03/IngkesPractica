import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PhrasesService, Phrase } from '../../../shared/services/phrases.service';
import { ScoreService } from '../../../shared/services/score.service';

interface MemCard {
  id:      number;
  type:    'en' | 'es';
  text:    string;
  pair:    number;
  state:   'hidden' | 'revealed' | 'matched' | 'wrong';
}

@Component({
  selector:    'app-memory',
  templateUrl: './memory.html',
  styleUrls:   ['./memory.css'],
  standalone:  false
})
export class Memory implements OnInit, OnDestroy {

  cards:    MemCard[] = [];
  flipped:  number[]  = [];
  matched:  number    = 0;
  moves:    number    = 0;
  time:     number    = 0;
  busy:     boolean   = false;
  numPairs: number    = 6;
  won:      boolean   = false;
  bestScore: number   = Infinity;

  private timerRef: any;
  private timeoutRef: any;

  constructor(
    private phrasesService: PhrasesService,
    private scoreService:   ScoreService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void { 
    this.loadBestScore();
    this.init(); 
  }

  ngOnDestroy(): void { 
    clearInterval(this.timerRef);
    clearTimeout(this.timeoutRef);
    this.removeConfetti();
  }

  trackById(index: number, card: MemCard): number {
    return card.id;
  }

  setDiff(n: number): void { 
    this.numPairs = n; 
    this.init(); 
  }

  init(): void {
    clearInterval(this.timerRef);
    clearTimeout(this.timeoutRef);
    this.flipped = []; 
    this.matched = 0; 
    this.moves = 0;
    this.time = 0; 
    this.busy = false; 
    this.won = false;
    this.removeConfetti();

    const subset = this.phrasesService.getRandom(this.numPairs);
    const all: MemCard[] = [
      ...subset.map((p, i) => ({ 
        id: i * 2,     
        type: 'en' as const, 
        text: p.en, 
        pair: i, 
        state: 'hidden' as const 
      })),
      ...subset.map((p, i) => ({ 
        id: i * 2 + 1, 
        type: 'es' as const, 
        text: p.es, 
        pair: i, 
        state: 'hidden' as const 
      }))
    ];
    this.cards = this.shuffle(all);
    this.cdr.detectChanges();
    
    this.timerRef = setInterval(() => {
      this.time++;
      this.cdr.detectChanges();
    }, 1000);
  }

  click(idx: number): void {
    console.log('🔵 Click en carta:', idx);
    const card = this.cards[idx];
    
    if (this.busy || card.state === 'matched' || card.state === 'revealed') {
      console.log('⛔ Bloqueado');
      return;
    }

    if (this.flipped.length === 2) {
      console.log('⛔ Ya hay 2 cartas');
      return;
    }

    // VOLTEAR CARTA
    card.state = 'revealed';
    this.flipped.push(idx);
    this.cdr.detectChanges();
    
    console.log('🔄 Carta volteada:', idx, 'Estado:', card.state);

    if (this.flipped.length === 2) {
      this.moves++;
      this.busy = true;
      this.cdr.detectChanges();

      const [a, b] = this.flipped;
      const ca = this.cards[a];
      const cb = this.cards[b];

      const isMatch = (ca.pair === cb.pair && ca.type !== cb.type);

      console.log('🔍 ¿Son pareja?', isMatch);

      if (isMatch) {
        console.log('✅ ¡Pareja!');
        this.timeoutRef = setTimeout(() => {
          this.cards[a].state = 'matched';
          this.cards[b].state = 'matched';
          this.matched++;
          this.scoreService.correct(10);
          this.flipped = [];
          this.busy = false;
          this.cdr.detectChanges();

          if (this.matched === this.numPairs) {
            this.win();
          }
        }, 500);
      } else {
        console.log('❌ No son pareja');
        this.scoreService.wrong();
        
        this.cards[a].state = 'wrong';
        this.cards[b].state = 'wrong';
        this.cdr.detectChanges();

        this.timeoutRef = setTimeout(() => {
          this.cards[a].state = 'hidden';
          this.cards[b].state = 'hidden';
          this.flipped = [];
          this.busy = false;
          this.cdr.detectChanges();
          console.log('🔄 Cartas ocultadas');
        }, 1000);
      }
    }
  }

  win(): void {
    clearInterval(this.timerRef);
    this.won = true;
    this.scoreService.add(50);
    this.cdr.detectChanges();
    
    if (this.moves < this.bestScore) {
      this.bestScore = this.moves;
      this.saveBestScore();
    }

    this.launchConfetti();
  }

  get medal(): string {
    const ratio = this.moves / this.numPairs;
    if (ratio <= 1.5) return '🥇';
    if (ratio <= 2.5) return '🥈';
    return '🥉';
  }

  get timeStr(): string {
    const m = Math.floor(this.time / 60);
    const s = this.time % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  get accuracy(): number {
    if (this.moves === 0) return 0;
    return Math.round((this.matched / this.moves) * 100);
  }

  private launchConfetti(): void {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF9FF3', '#6C5CE7'];
    const emojis = ['🎉', '✨', '⭐', '🌟', '💫', '🎊', '🌈', '🎆'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        const isEmoji = Math.random() > 0.5;
        const isCircle = !isEmoji && Math.random() > 0.5;
        
        if (isEmoji) {
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -20px;
            font-size: ${20 + Math.random() * 35}px;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 2.5}s ease-in forwards;
            opacity: ${0.7 + Math.random() * 0.3};
            transform: rotate(${Math.random() * 360}deg);
          `;
        } else {
          const size = 6 + Math.random() * 12;
          el.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -10px;
            width: ${size}px;
            height: ${isCircle ? size : size * 2.5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${isCircle ? '50%' : '2px'};
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 3}s ease-in forwards;
            opacity: ${0.6 + Math.random() * 0.4};
            transform: rotate(${Math.random() * 360}deg);
          `;
        }
        
        document.body.appendChild(el);
        
        setTimeout(() => {
          if (el.parentNode) el.remove();
        }, 5000);
      }, i * 60);
    }
  }

  private removeConfetti(): void {
    document.querySelectorAll('[style*="confettiFall"]').forEach(el => {
      if (el.parentNode) el.remove();
    });
  }

  private loadBestScore(): void {
    try {
      const saved = localStorage.getItem('memory_best_score');
      if (saved) {
        this.bestScore = parseInt(saved, 10);
      }
    } catch (e) {}
  }

  private saveBestScore(): void {
    try {
      localStorage.setItem('memory_best_score', String(this.bestScore));
    } catch (e) {}
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}