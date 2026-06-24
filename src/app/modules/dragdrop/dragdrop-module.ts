// modules/dragdrop/dragdrop-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dragdrop } from './dragdrop/dragdrop';
import { dragdropRoutes } from './dragdrop-routing-module';
import { SharedModule } from '../../shared/shared-module'; // ← Ruta correcta

@NgModule({
  declarations: [Dragdrop],
  imports: [
    CommonModule,
    RouterModule.forChild(dragdropRoutes),
    SharedModule
  ],
  exports: [Dragdrop]
})
export class DragdropModule { }