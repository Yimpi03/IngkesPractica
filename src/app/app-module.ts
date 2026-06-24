// app-module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { SharedModule } from './shared/shared-module'; // ← Importar SharedModule

@NgModule({
  declarations: [
    App,
    Home
    // Header QUITADO de aquí (ahora está en SharedModule)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule  // ← Añadir SharedModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }