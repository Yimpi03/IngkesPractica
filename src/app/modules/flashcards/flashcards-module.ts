// C:\Codigos\HTml\ingles\english-express\src\app\modules\flashcards\flashcards-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Flashcards } from './flashcards/flashcards';
import { flashcardsRoutes } from './flashcards-routing-module';

@NgModule({
  declarations: [Flashcards],
  imports: [
    CommonModule,
    RouterModule.forChild(flashcardsRoutes)
  ],
  exports: [Flashcards]
})
export class FlashcardsModule { }