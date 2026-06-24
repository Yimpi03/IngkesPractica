// modules/exam/exam-routing-module.ts
import { Routes } from '@angular/router';
import { Exam } from './exam/exam';

export const examRoutes: Routes = [  // ← Asegurar que está exportado
  { path: '', component: Exam }
];