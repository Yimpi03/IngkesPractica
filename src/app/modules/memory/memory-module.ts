// modules/memory/memory-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Memory } from './memory/memory';
import { memoryRoutes } from './memory-routing-module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [Memory],
  imports: [
    CommonModule,
    RouterModule.forChild(memoryRoutes),
    SharedModule  // ← Usar SharedModule (ya tiene ProgressBar y ScorePill)
  ],
  exports: [Memory]
})
export class MemoryModule { }