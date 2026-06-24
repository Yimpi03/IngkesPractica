// modules/quiz/quiz-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { quizRoutes } from './quiz-routing-module';
import { SharedModule } from '../../shared/shared-module'; // ← Ruta correcta

@NgModule({
  declarations: [Quiz],
  imports: [
    CommonModule,
    RouterModule.forChild(quizRoutes),
    SharedModule  // ← Usar SharedModule en lugar de imports individuales
  ],
  exports: [Quiz]
})
export class QuizModule { }