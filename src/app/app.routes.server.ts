import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Ruta raíz - Home
  {
    path: '',
    renderMode: RenderMode.Client
  },

  // Módulo 1 - Tarjetas Flash
  {
    path: 'flashcards',
    renderMode: RenderMode.Client
  },

  // Módulo 2 - Juego de Memoria
  {
    path: 'memory',
    renderMode: RenderMode.Client
  },

  // Módulo 3 - Arrastrar y Soltar
  {
    path: 'dragdrop',
    renderMode: RenderMode.Client
  },

  // Módulo 4 - Quiz Interactivo
  {
    path: 'quiz',
    renderMode: RenderMode.Client
  },

  // Módulo 5 - Examen Final
  {
    path: 'exam',
    renderMode: RenderMode.Client
  },

  // Cualquier ruta no definida
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];