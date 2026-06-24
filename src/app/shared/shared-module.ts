// shared/shared-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressBar } from './components/progress-bar/progress-bar';
import { ScorePill } from './components/score-pill/score-pill';
import { Header } from './components/header/header';

@NgModule({
  declarations: [
    ProgressBar,
    ScorePill,
    Header  // ← Header declarado AQUÍ
  ],
  imports: [
    CommonModule,
    RouterModule  // ← Necesario para routerLink
  ],
  exports: [
    ProgressBar,
    ScorePill,
    Header  // ← Exportado para que otros módulos lo usen
  ]
})
export class SharedModule { }