// home.ts - Con featured cards
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: false
})
export class Home {
  constructor(private router: Router) {}

  goTo(route: string): void {
    this.router.navigate(['/' + route]);
  }

  scrollToModules(): void {
    document.getElementById('modules')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  getProgress(route: string): number {
    const progressMap: { [key: string]: number } = {
      'flashcards': 75,
      'memory': 45,
      'dragdrop': 30,
      'quiz': 60,
      'exam': 20
    };
    return progressMap[route] || 0;
  }

  featured = [
    { icon: '📚', title: '25+ Expresiones', desc: 'Vocabulario esencial', color: '#E8F4FD' },
    { icon: '🎮', title: '5 Modos', desc: 'Diferentes estilos', color: '#FDE8F0' },
    { icon: '⭐', title: '100% Gratis', desc: 'Sin costo alguno', color: '#E8FDE8' }
  ];

  modules = [
    {
      icon: '📚',
      title: 'Tarjetas Flash',
      desc: 'Estudia cada expresión con flashcards interactivas',
      route: 'flashcards',
      tag: 'Aprender',
      color: 'linear-gradient(135deg, #E8F4FD, #D4E8F5)'
    },
    {
      icon: '🧠',
      title: 'Juego de Memoria',
      desc: 'Encuentra las parejas inglés-español',
      route: 'memory',
      tag: 'Memorizar',
      color: 'linear-gradient(135deg, #FDE8F0, #F5D4E8)'
    },
    {
      icon: '🎯',
      title: 'Arrastrar y Soltar',
      desc: 'Conecta frases con su traducción',
      route: 'dragdrop',
      tag: 'Practicar',
      color: 'linear-gradient(135deg, #E8FDE8, #D4F5D4)'
    },
    {
      icon: '❓',
      title: 'Quiz Interactivo',
      desc: '25 preguntas de opción múltiple',
      route: 'quiz',
      tag: 'Evaluar',
      color: 'linear-gradient(135deg, #FDF0E8, #F5E0D4)'
    },
    {
      icon: '🏆',
      title: 'Examen Final',
      desc: 'Pon a prueba todo lo aprendido',
      route: 'exam',
      tag: 'Certificar',
      color: 'linear-gradient(135deg, #FDE8E8, #F5D4D4)'
    }
  ];
}