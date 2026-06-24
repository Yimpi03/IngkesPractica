/* header.ts - Añadimos tooltips y nivel */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService, Stats } from '../../services/score.service';

@Component({
  selector:    'app-header',
  templateUrl: './header.html',
  styleUrls:   ['./header.css'],
  standalone:  false
})
export class Header implements OnInit {

  stats: Stats = { score: 0, streak: 0, bestStreak: 0, totalRight: 0, totalWrong: 0 };

  navItems = [
    { label: 'Inicio',   route: '/',          icon: '🏠', tooltip: 'Página principal' },
    { label: 'Tarjetas', route: '/flashcards', icon: '📚', tooltip: 'Estudia con flashcards' },
    { label: 'Memoria',  route: '/memory',     icon: '🧠', tooltip: 'Juego de memoria' },
    { label: 'Arrastrar', route: '/dragdrop',  icon: '🎯', tooltip: 'Arrastra y suelta' },
    { label: 'Quiz',     route: '/quiz',       icon: '❓', tooltip: 'Preguntas rápidas' },
    { label: 'Examen',   route: '/exam',       icon: '🏆', tooltip: 'Examen final' },
  ];

  constructor(
    private scoreService: ScoreService,
    private router:       Router
  ) {}

  ngOnInit(): void {
    this.scoreService.stats$.subscribe(s => this.stats = s);
    this.scoreService.load();
  }

  goTo(route: string): void { this.router.navigate([route]); }

  isActive(route: string): boolean { return this.router.url === route; }

  getLevel(): number {
    return Math.floor(this.stats.score / 100) + 1;
  }

  getProgress(): number {
    return Math.min((this.stats.score % 100), 100);
  }
}