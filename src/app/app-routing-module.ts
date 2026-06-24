// app-routing-module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', component: Home },
  { 
    path: 'flashcards', 
    loadChildren: () => import('./modules/flashcards/flashcards-module')
      .then(m => m.FlashcardsModule) 
  },
  { 
    path: 'memory', 
    loadChildren: () => import('./modules/memory/memory-module')
      .then(m => m.MemoryModule) 
  },
  { 
    path: 'dragdrop', 
    loadChildren: () => import('./modules/dragdrop/dragdrop-module')
      .then(m => m.DragdropModule) 
  },
  { 
    path: 'quiz', 
    loadChildren: () => import('./modules/quiz/quiz-module')
      .then(m => m.QuizModule) 
  },
  { 
    path: 'exam', 
    loadChildren: () => import('./modules/exam/exam-module')
      .then(m => m.ExamModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }