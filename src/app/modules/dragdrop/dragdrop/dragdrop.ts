import { Component, OnInit } from '@angular/core';
import { PhrasesService, Phrase } from '../../../shared/services/phrases.service';
import { ScoreService } from '../../../shared/services/score.service';

interface DndItem {
  phrase: Phrase;
  filled: string;
  status: 'empty' | 'filled' | 'correct' | 'incorrect';
  showError: boolean;
  showHint: boolean;
}

@Component({
  selector:    'app-dragdrop',
  templateUrl: './dragdrop.html',
  styleUrls:   ['./dragdrop.css'],
  standalone:  false
})
export class Dragdrop implements OnInit {

  items:        DndItem[] = [];
  bank:         string[]  = [];
  dragValue:    string    = '';
  dragOverItem: DndItem | null = null;
  checked:      boolean   = false;
  correctCount: number    = 0;
  progress:     number    = 0;

  constructor(
    private phrasesService: PhrasesService,
    private scoreService:   ScoreService
  ) {}

  ngOnInit(): void { this.init(); }

  init(): void {
    this.checked = false;
    this.correctCount = 0;
    this.progress = 0;
    this.dragValue = '';
    this.dragOverItem = null;
    const subset = this.phrasesService.getRandom(8);
    this.items = subset.map(p => ({ 
      phrase: p, 
      filled: '', 
      status: 'empty' as const,
      showError: false,
      showHint: false
    }));
    this.bank  = this.shuffle(subset.map(p => p.es));
  }

  onDragStart(value: string): void {
    this.dragValue = value;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    this.dragOverItem = null;
  }

  onDrop(item: DndItem, event: DragEvent): void {
    event.preventDefault();
    this.dragOverItem = null;

    if (!this.dragValue || this.checked) return;

    // Si el item ya tiene un valor correcto, no permitir cambios
    if (item.status === 'correct') return;

    // Si el item ya tiene un valor incorrecto, limpiar error
    if (item.showError) {
      item.showError = false;
      item.showHint = false;
    }

    // Verificar si la palabra es correcta
    const isCorrect = this.dragValue === item.phrase.es;

    if (isCorrect) {
      // ✅ CORRECTO
      // Si el item ya tenía un valor, devolverlo al banco
      if (item.filled) {
        this.bank.push(item.filled);
      }

      // Remover del banco
      const idx = this.bank.indexOf(this.dragValue);
      if (idx > -1) {
        this.bank.splice(idx, 1);
      }

      // Asignar valor correcto
      item.filled = this.dragValue;
      item.status = 'correct';
      item.showError = false;
      item.showHint = false;
      this.dragValue = '';
      this.updateProgress();

    } else {
      // ❌ INCORRECTO
      // Mostrar error
      item.showError = true;
      item.showHint = true;
      
      // La palabra se queda en el drop zone pero con error
      // y NO se remueve del banco
      if (!item.filled) {
        item.filled = this.dragValue;
        item.status = 'filled';
      }
      
      // La palabra vuelve al banco (se duplica en el drop y en el banco)
      // pero solo si no estaba ya en el banco
      if (!this.bank.includes(this.dragValue)) {
        this.bank.push(this.dragValue);
      }
      
      // Reiniciar drag
      this.dragValue = '';
      
      // NO actualizar progreso porque es incorrecto
      
      // Auto-limpiar el error después de 2 segundos
      setTimeout(() => {
        if (item.showError && !this.checked) {
          // Devolver la palabra al banco si aún está en el drop
          if (item.filled && !this.bank.includes(item.filled)) {
            this.bank.push(item.filled);
          }
          item.filled = '';
          item.status = 'empty';
          item.showError = false;
          item.showHint = false;
        }
      }, 2000);
    }
  }

  removeFromZone(item: DndItem): void {
    if (this.checked || !item.filled || item.status === 'correct') return;
    
    // Devolver al banco
    if (!this.bank.includes(item.filled)) {
      this.bank.push(item.filled);
    }
    item.filled = '';
    item.status = 'empty';
    item.showError = false;
    item.showHint = false;
    this.updateProgress();
  }

  check(): void {
    this.checked = true;
    this.correctCount = 0;

    // Limpiar errores temporales
    this.items.forEach(item => {
      item.showError = false;
      item.showHint = false;
      
      if (!item.filled) {
        item.status = 'incorrect';
      } else if (item.filled === item.phrase.es) {
        item.status = 'correct';
        this.correctCount++;
      } else {
        item.status = 'incorrect';
      }
    });

    // Calcular puntuación
    const baseScore = this.correctCount * 5;
    this.scoreService.add(baseScore);

    // Bonus por completitud
    if (this.correctCount === this.items.length) {
      this.scoreService.addStreak();
    } else {
      this.scoreService.resetStreak();
    }
  }

  get resultMessage(): string {
    const pct = Math.round((this.correctCount / this.items.length) * 100);
    if (pct === 100) return '🎉 ¡Perfecto! Has acertado todas las traducciones.';
    if (pct >= 70) return `👏 Excelente trabajo. Has acertado ${this.correctCount} de ${this.items.length} (${pct}%).`;
    return `💪 Buen intento. Has acertado ${this.correctCount} de ${this.items.length} (${pct}%). ¡Sigue practicando!`;
  }

  get isPerfect(): boolean {
    return this.correctCount === this.items.length && this.items.length > 0;
  }

  get allFilled(): boolean {
    return this.items.every(i => i.filled !== '');
  }

  private updateProgress(): void {
    const correct = this.items.filter(i => i.status === 'correct').length;
    this.progress = Math.round((correct / this.items.length) * 100);
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