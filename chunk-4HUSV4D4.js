import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PGTZPRSX.js";

// src/app/shared/services/phrases.service.ts
var ALL_PHRASES = [
  { id: 1, en: "Good to see you", es: "Me alegra verte", note: "Se usa cuando te alegra ver a alguien despu\xE9s de tiempo. Ej: al saludar a un amigo en una reuni\xF3n." },
  { id: 2, en: "Hurry up", es: "Date prisa", note: "Para pedir a alguien que se apure o acelere. Ej: cuando alguien llega tarde." },
  { id: 3, en: "Don't give up", es: "No te rindas", note: "Para animar a alguien a seguir adelante a pesar de las dificultades." },
  { id: 4, en: "How embarrassing", es: "Qu\xE9 verg\xFCenza", note: "Para expresar que algo resulta muy bochornoso o inc\xF3modo." },
  { id: 5, en: "It depends", es: "Depende", note: "Cuando la respuesta var\xEDa seg\xFAn la situaci\xF3n. Muy usada en conversaciones cotidianas." },
  { id: 6, en: "It's about time", es: "Ya era hora", note: "Para indicar que algo tard\xF3 m\xE1s de lo esperado en ocurrir." },
  { id: 7, en: "Don't mention it", es: "No hay de qu\xE9", note: "Respuesta cort\xE9s cuando alguien te da las gracias. Similar a 'de nada'." },
  { id: 8, en: "How cute", es: "Qu\xE9 lindo", note: "Para expresar ternura o agrado ante algo o alguien adorable." },
  { id: 9, en: "It's unnecessary", es: "Est\xE1 de m\xE1s", note: "Para indicar que algo no hace falta, que es excesivo." },
  { id: 10, en: "I'm so sorry", es: "Lo siento mucho", note: "Expresi\xF3n de disculpa profunda o condolencia ante algo doloroso." },
  { id: 11, en: "Don't even think about it", es: "Ni se te ocurra", note: "Para prohibir algo con firmeza. Indica que una idea es inaceptable." },
  { id: 12, en: "Listen to me", es: "Hazme caso", note: "Para pedir atenci\xF3n o que alguien siga tus instrucciones." },
  { id: 13, en: "How boring", es: "Qu\xE9 aburrido", note: "Para expresar que algo resulta tedioso o sin inter\xE9s." },
  { id: 14, en: "There's no rush", es: "No hay prisa", note: "Para indicar que no hay urgencia, que se puede tomar el tiempo necesario." },
  { id: 15, en: "I give up", es: "Me rindo", note: "Para indicar que ya no se puede continuar o que uno abandona algo." },
  { id: 16, en: "How bad", es: "Qu\xE9 atrevido", note: "En contexto negativo o ir\xF3nico, para se\xF1alar algo que va demasiado lejos." },
  { id: 17, en: "It makes no sense", es: "No tiene sentido", note: "Para se\xF1alar que algo es il\xF3gico, absurdo o incomprensible." },
  { id: 18, en: "Take it easy", es: "T\xF3matelo con calma", note: "Para pedir a alguien que se relaje. Tambi\xE9n es despedida informal." },
  { id: 19, en: "It's all the same to me", es: "Me da igual", note: "Para expresar indiferencia total entre opciones." },
  { id: 20, en: "How outrageous", es: "Qu\xE9 barbaridad", note: "Para expresar indignaci\xF3n ante algo excesivo o inapropiado." },
  { id: 21, en: "You'll see", es: "Ya lo ver\xE1s", note: "Para decir que con el tiempo alguien comprobar\xE1 algo que ahora no cree." },
  { id: 22, en: "Don't exaggerate", es: "No exageres", note: "Para pedir a alguien que sea m\xE1s objetivo y no aumente las cosas." },
  { id: 23, en: "Those were the days", es: "Qu\xE9 tiempos aquellos", note: "Para recordar con nostalgia \xE9pocas pasadas mejores o m\xE1s felices." },
  { id: 24, en: "It's not worth it", es: "No vale la pena", note: "Para se\xF1alar que el esfuerzo o costo no justifica el resultado." },
  { id: 25, en: "Just to be safe", es: "Por las dudas", note: "Para tomar una precauci\xF3n aunque no sea estrictamente necesaria." }
];
var PhrasesService = class _PhrasesService {
  getAll() {
    return ALL_PHRASES;
  }
  getById(id) {
    return ALL_PHRASES.find((p) => p.id === id);
  }
  getRandom(n) {
    return this.shuffle([...ALL_PHRASES]).slice(0, n);
  }
  getShuffled() {
    return this.shuffle([...ALL_PHRASES]);
  }
  getOptions(correct) {
    const wrong = ALL_PHRASES.filter((p) => p.id !== correct.id).sort(() => Math.random() - 0.5).slice(0, 3).map((p) => p.es);
    return this.shuffle([correct.es, ...wrong]);
  }
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  static \u0275fac = function PhrasesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhrasesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PhrasesService, factory: _PhrasesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhrasesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PhrasesService
};
//# sourceMappingURL=chunk-4HUSV4D4.js.map
