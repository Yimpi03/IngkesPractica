// modules/exam/exam-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Exam } from './exam/exam';
import { examRoutes } from './exam-routing-module';
import { SharedModule } from '../../shared/shared-module'; // ← Ruta correcta

@NgModule({
  declarations: [Exam],
  imports: [
    CommonModule,
    RouterModule.forChild(examRoutes),
    SharedModule
  ],
  exports: [Exam]
})
export class ExamModule { }