import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// ─── Interfaz de estadísticas ─────────────────────────────────────────────────
export interface Stats {
  score:       number;   // Puntos totales
  streak:      number;   // Racha actual de aciertos
  bestStreak:  number;   // Mejor racha histórica
  totalRight:  number;   // Total de respuestas correctas
  totalWrong:  number;   // Total de respuestas incorrectas
}

// ─── Servicio ─────────────────────────────────────────────────────────────────
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  // ── Estado interno con BehaviorSubject (reactivo) ──────────────────────────
  private _stats = new BehaviorSubject<Stats>({
    score:      0,
    streak:     0,
    bestStreak: 0,
    totalRight: 0,
    totalWrong: 0
  });

  // Observable público — los componentes se suscriben a este
  stats$: Observable<Stats> = this._stats.asObservable();

  // ── Getters de acceso rápido ───────────────────────────────────────────────
  get score():      number { return this._stats.value.score;      }
  get streak():     number { return this._stats.value.streak;     }
  get bestStreak(): number { return this._stats.value.bestStreak; }
  get totalRight(): number { return this._stats.value.totalRight; }
  get totalWrong(): number { return this._stats.value.totalWrong; }

  get accuracy(): number {
    const total = this.totalRight + this.totalWrong;
    return total === 0 ? 0 : Math.round(this.totalRight / total * 100);
  }

  // ── Sumar puntos ───────────────────────────────────────────────────────────
  add(pts: number): void {
    const s = this._stats.value;
    this._emit({ ...s, score: s.score + pts });
  }

  // ── Incrementar racha ──────────────────────────────────────────────────────
  addStreak(): void {
    const s = this._stats.value;
    const newStreak = s.streak + 1;
    this._emit({
      ...s,
      streak:     newStreak,
      bestStreak: Math.max(newStreak, s.bestStreak),
      totalRight: s.totalRight + 1
    });
  }

  // ── Resetear racha (error) ─────────────────────────────────────────────────
  resetStreak(): void {
    const s = this._stats.value;
    this._emit({
      ...s,
      streak:     0,
      totalWrong: s.totalWrong + 1
    });
  }

  // ── Registrar respuesta correcta con puntos ────────────────────────────────
  correct(pts: number = 5): void {
    const s    = this._stats.value;
    const newStreak = s.streak + 1;
    // Bonus por racha: +2 pts por cada 3 aciertos seguidos
    const bonus = newStreak % 3 === 0 ? 2 : 0;
    this._emit({
      ...s,
      score:      s.score + pts + bonus,
      streak:     newStreak,
      bestStreak: Math.max(newStreak, s.bestStreak),
      totalRight: s.totalRight + 1
    });
  }

  // ── Registrar respuesta incorrecta ─────────────────────────────────────────
  wrong(): void {
    const s = this._stats.value;
    this._emit({
      ...s,
      streak:     0,
      totalWrong: s.totalWrong + 1
    });
  }

  // ── Resetear todo (nuevo juego) ────────────────────────────────────────────
  reset(): void {
    this._emit({
      score:      0,
      streak:     0,
      bestStreak: 0,
      totalRight: 0,
      totalWrong: 0
    });
  }

  // ── Guardar en localStorage ────────────────────────────────────────────────
  save(): void {
    try {
      localStorage.setItem('english-express-stats', JSON.stringify(this._stats.value));
    } catch { /* SSR o modo privado */ }
  }

  // ── Cargar desde localStorage ──────────────────────────────────────────────
  load(): void {
    try {
      const raw = localStorage.getItem('english-express-stats');
      if (raw) {
        this._emit(JSON.parse(raw));
      }
    } catch { /* SSR o datos corruptos */ }
  }

  // ── Helper interno ─────────────────────────────────────────────────────────
  private _emit(stats: Stats): void {
    this._stats.next(stats);
  }
}