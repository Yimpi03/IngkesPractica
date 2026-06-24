import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhrasesService, Phrase } from '../../../shared/services/phrases.service';
import { ScoreService } from '../../../shared/services/score.service';

interface ExamQuestion {
  phrase:      Phrase;
  options:     string[];
  chosen:      string;
  answered:    boolean;
  correct:     boolean;
  showExplain: boolean;
}

@Component({
  selector:    'app-exam',
  templateUrl: './exam.html',
  styleUrls:   ['./exam.css'],
  standalone:  false
})
export class Exam implements OnInit, OnDestroy {

  questions:    ExamQuestion[] = [];
  currentIndex: number         = 0;
  score:        number         = 0;
  correctCount: number         = 0;
  time:         number         = 0;
  started:      boolean        = false;
  finished:     boolean        = false;
  wrongItems:   Phrase[]       = [];

  private timerRef: any;
  private readonly TIME_LIMIT = 300;
  timeUp: boolean = false;
  isTabVisible: boolean = true;
  penaltyApplied: boolean = false;
  
  // Usar un objeto para que Angular lo detecte
  timer: { display: string } = { display: '5:00' };

  constructor(
    private phrasesService: PhrasesService,
    private scoreService:   ScoreService
  ) {}

  ngOnInit(): void {
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  ngOnDestroy(): void {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  private handleVisibilityChange(): void {
    if (document.hidden) {
      this.isTabVisible = false;
      this.penaltyApplied = false;
    } else {
      this.isTabVisible = true;
      if (this.started && !this.finished && !this.timeUp) {
        if (!this.penaltyApplied) {
          this.penaltyApplied = true;
          this.time = Math.min(this.time + 60, this.TIME_LIMIT);
          this.actualizarTiempo();
          
          if (this.time >= this.TIME_LIMIT) {
            this.timeUp = true;
            this.finish();
          }
          this.showPenaltyNotification();
        }
      }
    }
  }

  private actualizarTiempo(): void {
    const restante = Math.max(0, this.TIME_LIMIT - this.time);
    const minutos = Math.floor(restante / 60);
    const segundos = restante % 60;
    this.timer.display = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
    this.actualizarDOM();
  }

  private actualizarDOM(): void {
    // Método 1: Por ID
    const el1 = document.getElementById('timerDisplay');
    if (el1) {
      el1.textContent = this.timer.display;
    }
    
    // Método 2: Por clase
    const el2 = document.querySelector('.timer-box span');
    if (el2) {
      el2.textContent = this.timer.display;
    }
    
    // Método 3: Todos los spans dentro de timer-box
    const el3 = document.querySelectorAll('.timer-box span');
    el3.forEach(el => {
      el.textContent = this.timer.display;
    });
  }

  private showPenaltyNotification(): void {
    const notification = document.createElement('div');
    notification.className = 'penalty-notification';
    notification.innerHTML = `
      ⚠️ ¡Penalización! Has perdido 1 minuto por cambiar de pestaña
      <span style="float:right;cursor:pointer;margin-left:16px;" onclick="this.parentElement.remove()">✕</span>
    `;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #dc3545;
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(220, 53, 69, 0.4);
      max-width: 90%;
      text-align: center;
      animation: slideDown 0.5s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
      }
    }, 4000);
  }

  start(): void {
    console.log('🚀 Iniciando examen...');
    
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }

    this.currentIndex = 0;
    this.score = 0;
    this.correctCount = 0;
    this.time = 0;
    this.started = true;
    this.finished = false;
    this.wrongItems = [];
    this.timeUp = false;
    this.isTabVisible = true;
    this.penaltyApplied = false;
    this.timer.display = '5:00';

    // Actualizar DOM inmediatamente
    this.actualizarDOM();

    const shuffled = this.phrasesService.getShuffled();
    this.questions = shuffled.map(p => ({
      phrase: p,
      options: this.phrasesService.getOptions(p),
      chosen: '',
      answered: false,
      correct: false,
      showExplain: false
    }));

    // INICIAR TIMER - SIN NGZONE, SIN CHANGEDETECTOR, SOLO DOM
    this.timerRef = setInterval(() => {
      if (this.isTabVisible) {
        this.time++;
        
        const restante = Math.max(0, this.TIME_LIMIT - this.time);
        const minutos = Math.floor(restante / 60);
        const segundos = restante % 60;
        const nuevoTiempo = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
        
        // Actualizar variable
        this.timer.display = nuevoTiempo;
        
        // ACTUALIZAR DOM DIRECTAMENTE - MÚLTIPLES MÉTODOS
        this.actualizarDOM();
        
        // MÉTODO EXTRA: Actualizar usando querySelectorAll
        document.querySelectorAll('.timer-box').forEach(el => {
          const spans = el.querySelectorAll('span');
          spans.forEach(span => {
            if (span.id === 'timerDisplay' || span.textContent?.includes(':')) {
              span.textContent = nuevoTiempo;
            }
          });
        });

        console.log('⏱️ Tiempo restante:', nuevoTiempo);

        if (this.time >= this.TIME_LIMIT) {
          this.timeUp = true;
          this.finish();
        }
      }
    }, 1000);

    console.log('⏱️ Temporizador iniciado - 5:00');
  }

  get current(): ExamQuestion {
    return this.questions[this.currentIndex];
  }

  get progress(): number {
    return Math.round((this.currentIndex + 1) / this.questions.length * 100);
  }

  get timeRemaining(): number {
    return Math.max(0, this.TIME_LIMIT - this.time);
  }

  get timeRemainingStr(): string {
    const m = Math.floor(this.timeRemaining / 60);
    const s = this.timeRemaining % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  get timeStr(): string {
    const m = Math.floor(this.time / 60);
    const s = this.time % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  get isTimeLow(): boolean {
    return this.timeRemaining <= 60;
  }

  answer(option: string): void {
    if (this.current.answered || this.finished) return;
    this.current.chosen = option;
    this.current.answered = true;
    this.current.correct = option === this.current.phrase.es;

    if (this.current.correct) {
      this.correctCount++;
      this.score += 8;
      this.scoreService.correct(8);
    } else {
      this.wrongItems.push(this.current.phrase);
      this.scoreService.wrong();
    }
  }

  next(): void {
    if (this.finished) return;
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.finish();
    }
  }

  finish(): void {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
    this.finished = true;
    const timeBonus = Math.max(0, Math.floor(this.timeRemaining / 10));
    this.scoreService.add(this.pct * 2 + timeBonus);
    this.actualizarTiempo();
    this.actualizarDOM();
  }

  toggleExplain(): void {
    this.current.showExplain = !this.current.showExplain;
  }

  get pct(): number {
    return this.questions.length > 0
      ? Math.round(this.correctCount / this.questions.length * 100)
      : 0;
  }

  get stars(): string {
    if (this.pct >= 90) return '⭐⭐⭐⭐⭐';
    if (this.pct >= 75) return '⭐⭐⭐⭐';
    if (this.pct >= 60) return '⭐⭐⭐';
    if (this.pct >= 40) return '⭐⭐';
    return '⭐';
  }

  get levelText(): string {
    if (this.pct >= 90) return '🌟 Excelente';
    if (this.pct >= 70) return '👍 Muy bien';
    if (this.pct >= 50) return '📚 Regular';
    return '💪 Sigue practicando';
  }

  get levelClass(): string {
    if (this.pct >= 90) return 'level-a';
    if (this.pct >= 70) return 'level-b';
    if (this.pct >= 50) return 'level-c';
    return 'level-d';
  }
}