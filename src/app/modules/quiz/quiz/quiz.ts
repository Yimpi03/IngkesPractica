import { Component, OnInit } from '@angular/core';
import { PhrasesService, Phrase } from '../../../shared/services/phrases.service';
import { ScoreService } from '../../../shared/services/score.service';

interface QuizQuestion {
  phrase:      Phrase;
  options:     string[];
  chosen:      string;
  answered:    boolean;
  correct:     boolean;
  showExplain: boolean;
  revealed:    boolean;
}

@Component({
  selector:    'app-quiz',
  templateUrl: './quiz.html',
  styleUrls:   ['./quiz.css'],
  standalone:  false
})
export class Quiz implements OnInit {

  questions:    QuizQuestion[] = [];
  currentIndex: number         = 0;
  score:        number         = 0;
  correct:      number         = 0;
  wrong:        number         = 0;
  streak:       number         = 0;
  finished:     boolean        = false;
  showCorrectAnswer: boolean  = false;
  showConfetti: boolean = false;

  // 🔒 Guardamos las preguntas en orden fijo (sin mezclar)
  private fixedQuestions: Phrase[] = [];

  constructor(
    private phrasesService: PhrasesService,
    private scoreService:   ScoreService
  ) {}

  private fetchPhrases(): Phrase[] {
    const service = this.phrasesService as any;
    return service.getQuestions?.()
      ?? service.getPhrases?.()
      ?? service.getAll?.()
      ?? service.phrases
      ?? service.questions
      ?? [];
  }

  ngOnInit(): void { 
    this.init(); 
  }

  init(): void {
    this.currentIndex = 0;
    this.score = 0;
    this.correct = 0;
    this.wrong = 0;
    this.streak = 0;
    this.finished = false;
    this.showCorrectAnswer = false;
    this.showConfetti = false;

    // 🔥 OBTENEMOS LAS PREGUNTAS EN ORDEN FIJO (SIN MEZCLAR)
    // Si ya tenemos las preguntas guardadas, las reutilizamos
    if (this.fixedQuestions.length === 0) {
      // Obtenemos las frases en el orden original del servicio
      this.fixedQuestions = this.fetchPhrases();
    }

    // Creamos las preguntas del quiz en el orden fijo
    this.questions = this.fixedQuestions.map(p => ({
      phrase:      p,
      options:     this.phrasesService.getOptions(p),
      chosen:      '',
      answered:    false,
      correct:     false,
      showExplain: false,
      revealed:    false
    }));
  }

  get current(): QuizQuestion { return this.questions[this.currentIndex]; }

  get progress(): number {
    return Math.round((this.currentIndex + 1) / this.questions.length * 100);
  }

  answer(option: string): void {
    if (this.current.answered) return;
    
    this.current.chosen   = option;
    this.current.answered = true;
    this.current.correct  = option === this.current.phrase.es;

    if (this.current.correct) {
      this.correct++;
      this.streak++;
      this.score += 5 + (this.streak >= 3 ? 2 : 0);
      this.scoreService.correct(5);
      
      if (this.streak >= 3) {
        this.showConfetti = true;
        setTimeout(() => this.showConfetti = false, 1500);
      }
    } else {
      this.wrong++;
      this.streak = 0;
      this.scoreService.wrong();
      this.current.revealed = false;
    }
  }

  revealAnswer(): void {
    this.current.revealed = true;
    this.showCorrectAnswer = true;
  }

  next(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showCorrectAnswer = false;
      this.showConfetti = false;
    } else {
      this.finished = true;
    }
  }

  toggleExplain(): void {
    this.current.showExplain = !this.current.showExplain;
    if (this.current.showExplain) {
      this.current.revealed = true;
      this.showCorrectAnswer = true;
    }
  }

  get pct(): number { 
    return this.questions.length > 0 
      ? Math.round(this.correct / this.questions.length * 100) 
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