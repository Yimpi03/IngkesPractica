import { Injectable } from '@angular/core';

export interface Phrase {
  id:   number;
  en:   string;
  es:   string;
  note: string;
}

const ALL_PHRASES: Phrase[] = [
  { id:  1, en: 'Good to see you',           es: 'Me alegra verte',       note: 'Se usa cuando te alegra ver a alguien después de tiempo. Ej: al saludar a un amigo en una reunión.' },
  { id:  2, en: 'Hurry up',                  es: 'Date prisa',            note: 'Para pedir a alguien que se apure o acelere. Ej: cuando alguien llega tarde.' },
  { id:  3, en: "Don't give up",             es: 'No te rindas',          note: 'Para animar a alguien a seguir adelante a pesar de las dificultades.' },
  { id:  4, en: 'How embarrassing',          es: 'Qué vergüenza',         note: 'Para expresar que algo resulta muy bochornoso o incómodo.' },
  { id:  5, en: 'It depends',                es: 'Depende',               note: 'Cuando la respuesta varía según la situación. Muy usada en conversaciones cotidianas.' },
  { id:  6, en: "It's about time",           es: 'Ya era hora',           note: 'Para indicar que algo tardó más de lo esperado en ocurrir.' },
  { id:  7, en: "Don't mention it",          es: 'No hay de qué',         note: "Respuesta cortés cuando alguien te da las gracias. Similar a 'de nada'." },
  { id:  8, en: 'How cute',                  es: 'Qué lindo',             note: 'Para expresar ternura o agrado ante algo o alguien adorable.' },
  { id:  9, en: "It's unnecessary",          es: 'Está de más',           note: 'Para indicar que algo no hace falta, que es excesivo.' },
  { id: 10, en: "I'm so sorry",              es: 'Lo siento mucho',       note: 'Expresión de disculpa profunda o condolencia ante algo doloroso.' },
  { id: 11, en: "Don't even think about it", es: 'Ni se te ocurra',       note: 'Para prohibir algo con firmeza. Indica que una idea es inaceptable.' },
  { id: 12, en: 'Listen to me',              es: 'Hazme caso',            note: 'Para pedir atención o que alguien siga tus instrucciones.' },
  { id: 13, en: 'How boring',                es: 'Qué aburrido',          note: 'Para expresar que algo resulta tedioso o sin interés.' },
  { id: 14, en: "There's no rush",           es: 'No hay prisa',          note: 'Para indicar que no hay urgencia, que se puede tomar el tiempo necesario.' },
  { id: 15, en: 'I give up',                 es: 'Me rindo',              note: 'Para indicar que ya no se puede continuar o que uno abandona algo.' },
  { id: 16, en: 'How bad',                   es: 'Qué atrevido',          note: 'En contexto negativo o irónico, para señalar algo que va demasiado lejos.' },
  { id: 17, en: 'It makes no sense',         es: 'No tiene sentido',      note: 'Para señalar que algo es ilógico, absurdo o incomprensible.' },
  { id: 18, en: 'Take it easy',              es: 'Tómatelo con calma',    note: 'Para pedir a alguien que se relaje. También es despedida informal.' },
  { id: 19, en: "It's all the same to me",   es: 'Me da igual',           note: 'Para expresar indiferencia total entre opciones.' },
  { id: 20, en: 'How outrageous',            es: 'Qué barbaridad',        note: 'Para expresar indignación ante algo excesivo o inapropiado.' },
  { id: 21, en: "You'll see",                es: 'Ya lo verás',           note: 'Para decir que con el tiempo alguien comprobará algo que ahora no cree.' },
  { id: 22, en: "Don't exaggerate",          es: 'No exageres',           note: 'Para pedir a alguien que sea más objetivo y no aumente las cosas.' },
  { id: 23, en: 'Those were the days',       es: 'Qué tiempos aquellos',  note: 'Para recordar con nostalgia épocas pasadas mejores o más felices.' },
  { id: 24, en: "It's not worth it",         es: 'No vale la pena',       note: 'Para señalar que el esfuerzo o costo no justifica el resultado.' },
  { id: 25, en: 'Just to be safe',           es: 'Por las dudas',         note: 'Para tomar una precaución aunque no sea estrictamente necesaria.' }
];

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  getAll(): Phrase[] {
    return ALL_PHRASES;
  }

  getById(id: number): Phrase | undefined {
    return ALL_PHRASES.find(p => p.id === id);
  }

  getRandom(n: number): Phrase[] {
    return this.shuffle([...ALL_PHRASES]).slice(0, n);
  }

  getShuffled(): Phrase[] {
    return this.shuffle([...ALL_PHRASES]);
  }

  getOptions(correct: Phrase): string[] {
    const wrong = ALL_PHRASES
      .filter(p => p.id !== correct.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(p => p.es);
    return this.shuffle([correct.es, ...wrong]);
  }

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}