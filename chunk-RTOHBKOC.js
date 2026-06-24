import {
  PhrasesService
} from "./chunk-4HUSV4D4.js";
import {
  ProgressBar,
  ScoreService,
  SharedModule
} from "./chunk-HZT7I3MG.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PGTZPRSX.js";

// src/app/modules/exam/exam/exam.ts
function Exam_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 6);
    \u0275\u0275text(4, "Examen Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6, "25 preguntas aleatorias \xB7 \u23F1\uFE0F 5 minutos para completarlo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "span");
    \u0275\u0275text(10, "\u2753");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " 25 preguntas de opci\xF3n m\xFAltiple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "span");
    \u0275\u0275text(14, "\u23F1\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " L\xEDmite de 5 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "span");
    \u0275\u0275text(18, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Penalizaci\xF3n de 1 minuto al cambiar de pesta\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 9)(21, "span");
    \u0275\u0275text(22, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, ' Bot\xF3n "Expl\xEDcame mi error" en cada fallo');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9)(25, "span");
    \u0275\u0275text(26, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " An\xE1lisis inteligente al finalizar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 10);
    \u0275\u0275listener("click", function Exam_div_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275text(29, "Comenzar Examen \u{1F680}");
    \u0275\u0275elementEnd()();
  }
}
function Exam_ng_container_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, " \u26A0\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function Exam_ng_container_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function Exam_ng_container_2_button_17_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.answer(opt_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opt-correct", ctx_r1.current.answered && opt_r4 === ctx_r1.current.phrase.es)("opt-wrong", ctx_r1.current.answered && opt_r4 === ctx_r1.current.chosen && !ctx_r1.current.correct);
    \u0275\u0275property("disabled", ctx_r1.current.answered || ctx_r1.finished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4, " ");
  }
}
function Exam_ng_container_2_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Tu respuesta: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5, " Correcta: ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.current.chosen);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.current.phrase.es);
  }
}
function Exam_ng_container_2_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.current.phrase.note);
  }
}
function Exam_ng_container_2_div_18_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function Exam_ng_container_2_div_18_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleExplain());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.current.showExplain ? "\u{1F53C} Ocultar" : "\u{1F4A1} Expl\xEDcame mi error", " ");
  }
}
function Exam_ng_container_2_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " significa ");
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br")(8, "br");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', ctx_r1.current.phrase.en, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', ctx_r1.current.phrase.es, '"');
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(', no "', ctx_r1.current.chosen, '".');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.current.phrase.note, " ");
  }
}
function Exam_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Exam_ng_container_2_div_18_div_3_Template, 8, 2, "div", 2)(4, Exam_ng_container_2_div_18_div_4_Template, 2, 1, "div", 2)(5, Exam_ng_container_2_div_18_button_5_Template, 2, 1, "button", 29)(6, Exam_ng_container_2_div_18_div_6_Template, 10, 4, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fb-correct", ctx_r1.current.correct)("fb-wrong", !ctx_r1.current.correct);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.current.correct ? "\u2705 \xA1Correcto! +8 pts" : "\u274C Incorrecto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.current.correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.current.correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.current.correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.current.showExplain);
  }
}
function Exam_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function Exam_ng_container_2_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentIndex < ctx_r1.questions.length - 1 ? "Siguiente \u2192" : "\u{1F4CA} Ver calificaci\xF3n", " ");
  }
}
function Exam_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6, " \u23F1\uFE0F ");
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, Exam_ng_container_2_span_9_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "app-progress-bar", 17);
    \u0275\u0275elementStart(11, "div", 18)(12, "div", 19);
    \u0275\u0275text(13, "\xBFQu\xE9 significa en espa\xF1ol?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275template(17, Exam_ng_container_2_button_17_Template, 2, 6, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, Exam_ng_container_2_div_18_Template, 7, 9, "div", 23)(19, Exam_ng_container_2_div_19_Template, 3, 1, "div", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Pregunta ", ctx_r1.currentIndex + 1, " de ", ctx_r1.questions.length);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("timer-warning", ctx_r1.isTimeLow)("timer-penalty", ctx_r1.penaltyApplied);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timeStr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isTabVisible);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.progress);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.current.phrase.en);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.current.options);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.current.answered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.current.answered);
  }
}
function Exam_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " \u23F0 \xA1Tiempo agotado! ");
    \u0275\u0275elementEnd();
  }
}
function Exam_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " \u26A0\uFE0F Se aplic\xF3 penalizaci\xF3n por cambio de pesta\xF1a ");
    \u0275\u0275elementEnd();
  }
}
function Exam_div_3_div_36_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 62);
    \u0275\u0275text(6, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r8.en);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r8.es);
  }
}
function Exam_div_3_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h3");
    \u0275\u0275text(2, "\u{1F50D} An\xE1lisis inteligente de errores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "Debes repasar estas expresiones:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Exam_div_3_div_36_div_5_Template, 9, 2, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.wrongItems);
  }
}
function Exam_div_3_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, " \u{1F31F} \xA1Sin errores! Dominas todas las expresiones. ");
    \u0275\u0275elementEnd();
  }
}
function Exam_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4, "Calificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, Exam_div_3_div_13_Template, 2, 0, "div", 42)(14, Exam_div_3_div_14_Template, 2, 0, "div", 43);
    \u0275\u0275elementStart(15, "div", 44)(16, "div", 45)(17, "div", 46);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 47);
    \u0275\u0275text(20, "Correctas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 45)(22, "div", 48);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 47);
    \u0275\u0275text(25, "Incorrectas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 45)(27, "div", 49);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 47);
    \u0275\u0275text(30, "Tiempo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 45)(32, "div", 50);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275text(35, "Puntos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, Exam_div_3_div_36_Template, 6, 1, "div", 51)(37, Exam_div_3_div_37_Template, 2, 0, "div", 52);
    \u0275\u0275elementStart(38, "div", 33)(39, "button", 34);
    \u0275\u0275listener("click", function Exam_div_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275text(40, "\u{1F504} Repetir examen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 53);
    \u0275\u0275text(42, "\u{1F3E0} Inicio");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.correctCount, "/", ctx_r1.questions.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stars);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.levelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.levelText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.timeUp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.penaltyApplied);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2705 ", ctx_r1.correctCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u274C ", ctx_r1.questions.length - ctx_r1.correctCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u23F1\uFE0F ", ctx_r1.timeStr);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F3C5} ", ctx_r1.score);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wrongItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wrongItems.length === 0);
  }
}
var Exam = class _Exam {
  phrasesService;
  scoreService;
  questions = [];
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  time = 0;
  started = false;
  finished = false;
  wrongItems = [];
  timerRef;
  TIME_LIMIT = 300;
  timeUp = false;
  isTabVisible = true;
  penaltyApplied = false;
  // Usar un objeto para que Angular lo detecte
  timer = { display: "5:00" };
  constructor(phrasesService, scoreService) {
    this.phrasesService = phrasesService;
    this.scoreService = scoreService;
  }
  ngOnInit() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
  }
  ngOnDestroy() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
    document.removeEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
  }
  handleVisibilityChange() {
    if (document.hidden) {
      this.isTabVisible = false;
      this.penaltyApplied = false;
    } else {
      this.isTabVisible = true;
      if (this.started && !this.finished && !this.timeUp) {
        if (!this.penaltyApplied) {
          this.penaltyApplied = true;
          this.time = Math.min(this.time + 60, this.TIME_LIMIT);
          this.actualizarTiempo();
          if (this.time >= this.TIME_LIMIT) {
            this.timeUp = true;
            this.finish();
          }
          this.showPenaltyNotification();
        }
      }
    }
  }
  actualizarTiempo() {
    const restante = Math.max(0, this.TIME_LIMIT - this.time);
    const minutos = Math.floor(restante / 60);
    const segundos = restante % 60;
    this.timer.display = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
    this.actualizarDOM();
  }
  actualizarDOM() {
    const el1 = document.getElementById("timerDisplay");
    if (el1) {
      el1.textContent = this.timer.display;
    }
    const el2 = document.querySelector(".timer-box span");
    if (el2) {
      el2.textContent = this.timer.display;
    }
    const el3 = document.querySelectorAll(".timer-box span");
    el3.forEach((el) => {
      el.textContent = this.timer.display;
    });
  }
  showPenaltyNotification() {
    const notification = document.createElement("div");
    notification.className = "penalty-notification";
    notification.innerHTML = `
      \u26A0\uFE0F \xA1Penalizaci\xF3n! Has perdido 1 minuto por cambiar de pesta\xF1a
      <span style="float:right;cursor:pointer;margin-left:16px;" onclick="this.parentElement.remove()">\u2715</span>
    `;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #dc3545;
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(220, 53, 69, 0.4);
      max-width: 90%;
      text-align: center;
      animation: slideDown 0.5s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.5s";
        setTimeout(() => notification.remove(), 500);
      }
    }, 4e3);
  }
  start() {
    console.log("\u{1F680} Iniciando examen...");
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
    this.currentIndex = 0;
    this.score = 0;
    this.correctCount = 0;
    this.time = 0;
    this.started = true;
    this.finished = false;
    this.wrongItems = [];
    this.timeUp = false;
    this.isTabVisible = true;
    this.penaltyApplied = false;
    this.timer.display = "5:00";
    this.actualizarDOM();
    const shuffled = this.phrasesService.getShuffled();
    this.questions = shuffled.map((p) => ({
      phrase: p,
      options: this.phrasesService.getOptions(p),
      chosen: "",
      answered: false,
      correct: false,
      showExplain: false
    }));
    this.timerRef = setInterval(() => {
      if (this.isTabVisible) {
        this.time++;
        const restante = Math.max(0, this.TIME_LIMIT - this.time);
        const minutos = Math.floor(restante / 60);
        const segundos = restante % 60;
        const nuevoTiempo = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
        this.timer.display = nuevoTiempo;
        this.actualizarDOM();
        document.querySelectorAll(".timer-box").forEach((el) => {
          const spans = el.querySelectorAll("span");
          spans.forEach((span) => {
            if (span.id === "timerDisplay" || span.textContent?.includes(":")) {
              span.textContent = nuevoTiempo;
            }
          });
        });
        console.log("\u23F1\uFE0F Tiempo restante:", nuevoTiempo);
        if (this.time >= this.TIME_LIMIT) {
          this.timeUp = true;
          this.finish();
        }
      }
    }, 1e3);
    console.log("\u23F1\uFE0F Temporizador iniciado - 5:00");
  }
  get current() {
    return this.questions[this.currentIndex];
  }
  get progress() {
    return Math.round((this.currentIndex + 1) / this.questions.length * 100);
  }
  get timeRemaining() {
    return Math.max(0, this.TIME_LIMIT - this.time);
  }
  get timeRemainingStr() {
    const m = Math.floor(this.timeRemaining / 60);
    const s = this.timeRemaining % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  get timeStr() {
    const m = Math.floor(this.time / 60);
    const s = this.time % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  get isTimeLow() {
    return this.timeRemaining <= 60;
  }
  answer(option) {
    if (this.current.answered || this.finished)
      return;
    this.current.chosen = option;
    this.current.answered = true;
    this.current.correct = option === this.current.phrase.es;
    if (this.current.correct) {
      this.correctCount++;
      this.score += 8;
      this.scoreService.correct(8);
    } else {
      this.wrongItems.push(this.current.phrase);
      this.scoreService.wrong();
    }
  }
  next() {
    if (this.finished)
      return;
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.finish();
    }
  }
  finish() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
    this.finished = true;
    const timeBonus = Math.max(0, Math.floor(this.timeRemaining / 10));
    this.scoreService.add(this.pct * 2 + timeBonus);
    this.actualizarTiempo();
    this.actualizarDOM();
  }
  toggleExplain() {
    this.current.showExplain = !this.current.showExplain;
  }
  get pct() {
    return this.questions.length > 0 ? Math.round(this.correctCount / this.questions.length * 100) : 0;
  }
  get stars() {
    if (this.pct >= 90)
      return "\u2B50\u2B50\u2B50\u2B50\u2B50";
    if (this.pct >= 75)
      return "\u2B50\u2B50\u2B50\u2B50";
    if (this.pct >= 60)
      return "\u2B50\u2B50\u2B50";
    if (this.pct >= 40)
      return "\u2B50\u2B50";
    return "\u2B50";
  }
  get levelText() {
    if (this.pct >= 90)
      return "\u{1F31F} Excelente";
    if (this.pct >= 70)
      return "\u{1F44D} Muy bien";
    if (this.pct >= 50)
      return "\u{1F4DA} Regular";
    return "\u{1F4AA} Sigue practicando";
  }
  get levelClass() {
    if (this.pct >= 90)
      return "level-a";
    if (this.pct >= 70)
      return "level-b";
    if (this.pct >= 50)
      return "level-c";
    return "level-d";
  }
  static \u0275fac = function Exam_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Exam)(\u0275\u0275directiveInject(PhrasesService), \u0275\u0275directiveInject(ScoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Exam, selectors: [["app-exam"]], standalone: false, decls: 4, vars: 3, consts: [[1, "exam-wrap"], ["class", "start-screen", 4, "ngIf"], [4, "ngIf"], ["class", "final-card", 4, "ngIf"], [1, "start-screen"], [1, "start-icon"], [1, "start-title"], [1, "start-sub"], [1, "rules"], [1, "rule-item"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "exam-top"], [1, "q-num"], [1, "timer-wrapper"], [1, "timer-box"], ["id", "timerDisplay"], ["class", "timer-status", "title", "\u26A0\uFE0F Cambiaste de pesta\xF1a", 4, "ngIf"], ["label", "Avance", 3, "value"], [1, "phrase-card"], [1, "pc-label"], [1, "pc-phrase"], [1, "options-grid"], ["class", "opt", 3, "opt-correct", "opt-wrong", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "feedback-box", 3, "fb-correct", "fb-wrong", 4, "ngIf"], ["class", "btn-row", 4, "ngIf"], ["title", "\u26A0\uFE0F Cambiaste de pesta\xF1a", 1, "timer-status"], [1, "opt", 3, "click", "disabled"], [1, "feedback-box"], [1, "fb-title"], ["class", "explain-btn", 3, "click", 4, "ngIf"], ["class", "explain-box", 4, "ngIf"], [1, "explain-btn", 3, "click"], [1, "explain-box"], [1, "btn-row"], [1, "btn", "btn-primary", 3, "click"], [1, "final-card"], [1, "final-icon"], [1, "final-label"], [1, "final-score"], [1, "final-pct"], [1, "final-stars"], [1, "final-level", 3, "ngClass"], ["class", "time-up-badge", 4, "ngIf"], ["class", "penalty-badge", 4, "ngIf"], [1, "result-stats"], [1, "rs"], [1, "rs-num", "green"], [1, "rs-lbl"], [1, "rs-num", "red"], [1, "rs-num", "blue"], [1, "rs-num", "gold"], ["class", "retro-box", 4, "ngIf"], ["class", "perfect-box", 4, "ngIf"], ["routerLink", "/", 1, "btn", "btn-secondary"], [1, "time-up-badge"], [1, "penalty-badge"], [1, "retro-box"], [1, "retro-sub"], ["class", "retro-item", 4, "ngFor", "ngForOf"], [1, "retro-item"], [1, "ri-icon"], [1, "ri-en"], [1, "ri-dash"], [1, "ri-es"], [1, "perfect-box"]], template: function Exam_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, Exam_div_1_Template, 30, 0, "div", 1)(2, Exam_ng_container_2_Template, 20, 13, "ng-container", 2)(3, Exam_div_3_Template, 43, 14, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.started && !ctx.finished);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.started && !ctx.finished);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.finished);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, ProgressBar], styles: ['\n.exam-wrap[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px 20px;\n  min-height: 100vh;\n  background: #fdf8f0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.start-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 30px;\n  background: #fffcf5;\n  border-radius: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0e8d8;\n}\n.start-icon[_ngcontent-%COMP%] {\n  font-size: 72px;\n  margin-bottom: 16px;\n}\n.start-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #4a3728;\n  margin: 0 0 8px;\n}\n.start-sub[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #8a7a6a;\n  margin-bottom: 32px;\n}\n.rules[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin: 24px 0 32px;\n  text-align: left;\n}\n.rule-item[_ngcontent-%COMP%] {\n  background: #f5ede4;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #4a3728;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.rule-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin: 20px 0 12px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  border: none;\n  border-radius: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #4a3728;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #5a4738;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(74, 55, 40, 0.25);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e8ddd0;\n  color: #4a3728;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #ddd0c0;\n  transform: translateY(-2px);\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  font-size: 18px;\n}\n.exam-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  font-weight: 500;\n  color: #4a3728;\n}\n.q-num[_ngcontent-%COMP%] {\n  font-size: 16px;\n  background: #f5ede4;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.timer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.timer-box[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background: #f5ede4;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  color: #4a3728;\n  transition: all 0.3s;\n  min-width: 70px;\n  text-align: center;\n}\n.timer-warning[_ngcontent-%COMP%] {\n  background: #fff0e0;\n  color: #c0392b;\n  animation: _ngcontent-%COMP%_pulse 1s ease-in-out infinite;\n}\n.timer-penalty[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.timer-status[_ngcontent-%COMP%] {\n  font-size: 18px;\n  animation: _ngcontent-%COMP%_blink 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-8px);\n  }\n  75% {\n    transform: translateX(8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.phrase-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 32px 24px;\n  margin: 20px 0 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0e8d8;\n  text-align: center;\n}\n.pc-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #8a7a6a;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.pc-phrase[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin: 16px 0 20px;\n}\n.opt[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border: 2px solid #e8ddd0;\n  background: #ffffff;\n  border-radius: 14px;\n  font-size: 16px;\n  color: #4a3728;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n}\n.opt[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5ede4;\n  border-color: #c4b5a0;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.opt[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.opt-correct[_ngcontent-%COMP%] {\n  background: #d4edda !important;\n  border-color: #28a745 !important;\n  color: #155724;\n}\n.opt-wrong[_ngcontent-%COMP%] {\n  background: #f8d7da !important;\n  border-color: #dc3545 !important;\n  color: #721c24;\n}\n.feedback-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 24px;\n  margin: 16px 0;\n  border-left: 6px solid #6c757d;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.fb-correct[_ngcontent-%COMP%] {\n  border-left-color: #28a745;\n  background: #f8fff9;\n}\n.fb-wrong[_ngcontent-%COMP%] {\n  border-left-color: #dc3545;\n  background: #fff8f8;\n}\n.fb-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.explain-btn[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: none;\n  border: none;\n  color: #007bff;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 4px 0;\n  font-size: 14px;\n}\n.explain-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.explain-box[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 16px;\n  background: #f8f4ee;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #4a3728;\n}\n.final-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 40px 32px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0e8d8;\n}\n.final-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 8px;\n}\n.final-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #8a7a6a;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.final-score[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #4a3728;\n  margin: 8px 0;\n}\n.final-pct[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #6c7a8a;\n  margin-bottom: 8px;\n}\n.final-stars[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 8px 0;\n}\n.final-level[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 8px 24px;\n  border-radius: 30px;\n  display: inline-block;\n  margin: 8px auto 16px;\n}\n.level-a[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.level-b[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.level-c[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.level-d[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.time-up-badge[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  padding: 8px 20px;\n  border-radius: 30px;\n  display: inline-block;\n  font-weight: 600;\n  margin: 8px auto;\n}\n.penalty-badge[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 30px;\n  display: inline-block;\n  font-weight: 600;\n  margin: 8px auto;\n}\n.result-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin: 24px 0;\n}\n.rs[_ngcontent-%COMP%] {\n  background: #f8f4ee;\n  border-radius: 16px;\n  padding: 16px 8px;\n}\n.rs-num[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.rs-num.green[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.rs-num.red[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.rs-num.blue[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.rs-num.gold[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n.rs-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a7a6a;\n  margin-top: 4px;\n}\n.retro-box[_ngcontent-%COMP%] {\n  background: #fdf6f0;\n  border-radius: 16px;\n  padding: 20px 24px;\n  margin: 16px 0;\n  text-align: left;\n}\n.retro-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #4a3728;\n}\n.retro-sub[_ngcontent-%COMP%] {\n  color: #8a7a6a;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.retro-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  border: 1px solid #f0e8d8;\n  font-size: 15px;\n}\n.ri-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.ri-en[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.ri-dash[_ngcontent-%COMP%] {\n  color: #8a7a6a;\n}\n.ri-es[_ngcontent-%COMP%] {\n  color: #4a3728;\n  font-weight: 500;\n}\n.perfect-box[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  padding: 16px 20px;\n  border-radius: 16px;\n  font-size: 18px;\n  margin: 16px 0;\n}\n.penalty-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #dc3545;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  z-index: 9999;\n  box-shadow: 0 4px 20px rgba(220, 53, 69, 0.4);\n  max-width: 90%;\n  text-align: center;\n  animation: _ngcontent-%COMP%_slideDown 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateX(-50%) translateY(-100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(-50%) translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 640px) {\n  .exam-wrap[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .start-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .rules[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pc-phrase[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .result-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .final-score[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n  .btn-lg[_ngcontent-%COMP%] {\n    padding: 14px 32px;\n    font-size: 16px;\n  }\n  .penalty-notification[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 16px;\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=exam.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Exam, [{
    type: Component,
    args: [{ selector: "app-exam", standalone: false, template: `<div class="exam-wrap">

  <!-- PANTALLA DE INICIO -->
  <div class="start-screen" *ngIf="!started && !finished">
    <div class="start-icon">\u{1F393}</div>
    <h2 class="start-title">Examen Final</h2>
    <p class="start-sub">25 preguntas aleatorias \xB7 \u23F1\uFE0F 5 minutos para completarlo</p>

    <div class="rules">
      <div class="rule-item"><span>\u2753</span> 25 preguntas de opci\xF3n m\xFAltiple</div>
      <div class="rule-item"><span>\u23F1\uFE0F</span> L\xEDmite de 5 minutos</div>
      <div class="rule-item"><span>\u26A0\uFE0F</span> Penalizaci\xF3n de 1 minuto al cambiar de pesta\xF1a</div>
      <div class="rule-item"><span>\u{1F4A1}</span> Bot\xF3n "Expl\xEDcame mi error" en cada fallo</div>
      <div class="rule-item"><span>\u{1F4CA}</span> An\xE1lisis inteligente al finalizar</div>
    </div>

    <button class="btn btn-primary btn-lg" (click)="start()">Comenzar Examen \u{1F680}</button>
  </div>

  <!-- EXAMEN ACTIVO -->
  <ng-container *ngIf="started && !finished">

    <div class="exam-top">
      <span class="q-num">Pregunta {{ currentIndex + 1 }} de {{ questions.length }}</span>
      <div class="timer-wrapper">
        <span class="timer-box" [class.timer-warning]="isTimeLow" [class.timer-penalty]="penaltyApplied">
          \u23F1\uFE0F <span id="timerDisplay">{{ timeStr }}</span>
        </span>
        <span class="timer-status" *ngIf="!isTabVisible" title="\u26A0\uFE0F Cambiaste de pesta\xF1a">
          \u26A0\uFE0F
        </span>
      </div>
    </div>

    <app-progress-bar [value]="progress" label="Avance"></app-progress-bar>

    <!-- FRASE -->
    <div class="phrase-card">
      <div class="pc-label">\xBFQu\xE9 significa en espa\xF1ol?</div>
      <div class="pc-phrase">{{ current.phrase.en }}</div>
    </div>

    <!-- OPCIONES -->
    <div class="options-grid">
      <button
        *ngFor="let opt of current.options"
        class="opt"
        [class.opt-correct]="current.answered && opt === current.phrase.es"
        [class.opt-wrong]="current.answered && opt === current.chosen && !current.correct"
        [disabled]="current.answered || finished"
        (click)="answer(opt)">
        {{ opt }}
      </button>
    </div>

    <!-- FEEDBACK -->
    <div class="feedback-box" *ngIf="current.answered" [class.fb-correct]="current.correct" [class.fb-wrong]="!current.correct">
      <div class="fb-title">{{ current.correct ? '\u2705 \xA1Correcto! +8 pts' : '\u274C Incorrecto' }}</div>

      <div *ngIf="!current.correct">
        Tu respuesta: <b>{{ current.chosen }}</b><br>
        Correcta: <b>{{ current.phrase.es }}</b>
      </div>

      <div *ngIf="current.correct">{{ current.phrase.note }}</div>

      <button *ngIf="!current.correct" class="explain-btn" (click)="toggleExplain()">
        {{ current.showExplain ? '\u{1F53C} Ocultar' : '\u{1F4A1} Expl\xEDcame mi error' }}
      </button>
      <div class="explain-box" *ngIf="current.showExplain">
        <b>"{{ current.phrase.en }}"</b> significa <b>"{{ current.phrase.es }}"</b>, no "{{ current.chosen }}".<br><br>
        {{ current.phrase.note }}
      </div>
    </div>

    <div class="btn-row" *ngIf="current.answered">
      <button class="btn btn-primary" (click)="next()">
        {{ currentIndex < questions.length - 1 ? 'Siguiente \u2192' : '\u{1F4CA} Ver calificaci\xF3n' }}
      </button>
    </div>

  </ng-container>

  <!-- RESULTADO FINAL -->
  <div class="final-card" *ngIf="finished">
    <div class="final-icon">\u{1F3C6}</div>
    <div class="final-label">Calificaci\xF3n</div>
    <div class="final-score">{{ correctCount }}/{{ questions.length }}</div>
    <div class="final-pct">{{ pct }}%</div>
    <div class="final-stars">{{ stars }}</div>
    <div class="final-level" [ngClass]="levelClass">{{ levelText }}</div>

    <div class="time-up-badge" *ngIf="timeUp">
      \u23F0 \xA1Tiempo agotado!
    </div>

    <div class="penalty-badge" *ngIf="penaltyApplied">
      \u26A0\uFE0F Se aplic\xF3 penalizaci\xF3n por cambio de pesta\xF1a
    </div>

    <div class="result-stats">
      <div class="rs"><div class="rs-num green">\u2705 {{ correctCount }}</div><div class="rs-lbl">Correctas</div></div>
      <div class="rs"><div class="rs-num red">\u274C {{ questions.length - correctCount }}</div><div class="rs-lbl">Incorrectas</div></div>
      <div class="rs"><div class="rs-num blue">\u23F1\uFE0F {{ timeStr }}</div><div class="rs-lbl">Tiempo</div></div>
      <div class="rs"><div class="rs-num gold">\u{1F3C5} {{ score }}</div><div class="rs-lbl">Puntos</div></div>
    </div>

    <!-- AN\xC1LISIS DE ERRORES -->
    <div class="retro-box" *ngIf="wrongItems.length > 0">
      <h3>\u{1F50D} An\xE1lisis inteligente de errores</h3>
      <p class="retro-sub">Debes repasar estas expresiones:</p>
      <div *ngFor="let p of wrongItems" class="retro-item">
        <span class="ri-icon">\u274C</span>
        <span class="ri-en">{{ p.en }}</span>
        <span class="ri-dash">\u2014</span>
        <span class="ri-es">{{ p.es }}</span>
      </div>
    </div>

    <div class="perfect-box" *ngIf="wrongItems.length === 0">
      \u{1F31F} \xA1Sin errores! Dominas todas las expresiones.
    </div>

    <div class="btn-row">
      <button class="btn btn-primary" (click)="start()">\u{1F504} Repetir examen</button>
      <button class="btn btn-secondary" routerLink="/">\u{1F3E0} Inicio</button>
    </div>
  </div>

</div>`, styles: ['/* src/app/modules/exam/exam/exam.css */\n.exam-wrap {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px 20px;\n  min-height: 100vh;\n  background: #fdf8f0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.start-screen {\n  text-align: center;\n  padding: 50px 30px;\n  background: #fffcf5;\n  border-radius: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0e8d8;\n}\n.start-icon {\n  font-size: 72px;\n  margin-bottom: 16px;\n}\n.start-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #4a3728;\n  margin: 0 0 8px;\n}\n.start-sub {\n  font-size: 16px;\n  color: #8a7a6a;\n  margin-bottom: 32px;\n}\n.rules {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin: 24px 0 32px;\n  text-align: left;\n}\n.rule-item {\n  background: #f5ede4;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #4a3728;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.rule-item span {\n  font-size: 20px;\n}\n.btn-row {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin: 20px 0 12px;\n  flex-wrap: wrap;\n}\n.btn {\n  padding: 12px 32px;\n  border: none;\n  border-radius: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background: #4a3728;\n  color: #fff;\n}\n.btn-primary:hover {\n  background: #5a4738;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(74, 55, 40, 0.25);\n}\n.btn-secondary {\n  background: #e8ddd0;\n  color: #4a3728;\n}\n.btn-secondary:hover {\n  background: #ddd0c0;\n  transform: translateY(-2px);\n}\n.btn-lg {\n  padding: 16px 48px;\n  font-size: 18px;\n}\n.exam-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  font-weight: 500;\n  color: #4a3728;\n}\n.q-num {\n  font-size: 16px;\n  background: #f5ede4;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.timer-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.timer-box {\n  font-size: 18px;\n  background: #f5ede4;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  color: #4a3728;\n  transition: all 0.3s;\n  min-width: 70px;\n  text-align: center;\n}\n.timer-warning {\n  background: #fff0e0;\n  color: #c0392b;\n  animation: pulse 1s ease-in-out infinite;\n}\n.timer-penalty {\n  background: #dc3545 !important;\n  color: white !important;\n  animation: shake 0.5s ease;\n}\n.timer-status {\n  font-size: 18px;\n  animation: blink 1s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-8px);\n  }\n  75% {\n    transform: translateX(8px);\n  }\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.phrase-card {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 32px 24px;\n  margin: 20px 0 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f0e8d8;\n  text-align: center;\n}\n.pc-label {\n  font-size: 14px;\n  color: #8a7a6a;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.pc-phrase {\n  font-size: 28px;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.options-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin: 16px 0 20px;\n}\n.opt {\n  padding: 16px 20px;\n  border: 2px solid #e8ddd0;\n  background: #ffffff;\n  border-radius: 14px;\n  font-size: 16px;\n  color: #4a3728;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n}\n.opt:hover:not(:disabled) {\n  background: #f5ede4;\n  border-color: #c4b5a0;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.opt:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.opt-correct {\n  background: #d4edda !important;\n  border-color: #28a745 !important;\n  color: #155724;\n}\n.opt-wrong {\n  background: #f8d7da !important;\n  border-color: #dc3545 !important;\n  color: #721c24;\n}\n.feedback-box {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px 24px;\n  margin: 16px 0;\n  border-left: 6px solid #6c757d;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.fb-correct {\n  border-left-color: #28a745;\n  background: #f8fff9;\n}\n.fb-wrong {\n  border-left-color: #dc3545;\n  background: #fff8f8;\n}\n.fb-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.explain-btn {\n  margin-top: 12px;\n  background: none;\n  border: none;\n  color: #007bff;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 4px 0;\n  font-size: 14px;\n}\n.explain-btn:hover {\n  text-decoration: underline;\n}\n.explain-box {\n  margin-top: 12px;\n  padding: 16px;\n  background: #f8f4ee;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #4a3728;\n}\n.final-card {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 40px 32px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0e8d8;\n}\n.final-icon {\n  font-size: 64px;\n  margin-bottom: 8px;\n}\n.final-label {\n  font-size: 14px;\n  color: #8a7a6a;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.final-score {\n  font-size: 48px;\n  font-weight: 700;\n  color: #4a3728;\n  margin: 8px 0;\n}\n.final-pct {\n  font-size: 24px;\n  color: #6c7a8a;\n  margin-bottom: 8px;\n}\n.final-stars {\n  font-size: 32px;\n  margin: 8px 0;\n}\n.final-level {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 8px 24px;\n  border-radius: 30px;\n  display: inline-block;\n  margin: 8px auto 16px;\n}\n.level-a {\n  background: #d4edda;\n  color: #155724;\n}\n.level-b {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.level-c {\n  background: #fff3cd;\n  color: #856404;\n}\n.level-d {\n  background: #f8d7da;\n  color: #721c24;\n}\n.time-up-badge {\n  background: #dc3545;\n  color: #fff;\n  padding: 8px 20px;\n  border-radius: 30px;\n  display: inline-block;\n  font-weight: 600;\n  margin: 8px auto;\n}\n.penalty-badge {\n  background: #dc3545;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 30px;\n  display: inline-block;\n  font-weight: 600;\n  margin: 8px auto;\n}\n.result-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin: 24px 0;\n}\n.rs {\n  background: #f8f4ee;\n  border-radius: 16px;\n  padding: 16px 8px;\n}\n.rs-num {\n  font-size: 24px;\n  font-weight: 700;\n}\n.rs-num.green {\n  color: #28a745;\n}\n.rs-num.red {\n  color: #dc3545;\n}\n.rs-num.blue {\n  color: #007bff;\n}\n.rs-num.gold {\n  color: #f39c12;\n}\n.rs-lbl {\n  font-size: 12px;\n  color: #8a7a6a;\n  margin-top: 4px;\n}\n.retro-box {\n  background: #fdf6f0;\n  border-radius: 16px;\n  padding: 20px 24px;\n  margin: 16px 0;\n  text-align: left;\n}\n.retro-box h3 {\n  margin: 0 0 4px;\n  color: #4a3728;\n}\n.retro-sub {\n  color: #8a7a6a;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.retro-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  border: 1px solid #f0e8d8;\n  font-size: 15px;\n}\n.ri-icon {\n  font-size: 18px;\n}\n.ri-en {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.ri-dash {\n  color: #8a7a6a;\n}\n.ri-es {\n  color: #4a3728;\n  font-weight: 500;\n}\n.perfect-box {\n  background: #d4edda;\n  color: #155724;\n  padding: 16px 20px;\n  border-radius: 16px;\n  font-size: 18px;\n  margin: 16px 0;\n}\n.penalty-notification {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #dc3545;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  z-index: 9999;\n  box-shadow: 0 4px 20px rgba(220, 53, 69, 0.4);\n  max-width: 90%;\n  text-align: center;\n  animation: slideDown 0.5s ease;\n}\n@keyframes slideDown {\n  from {\n    transform: translateX(-50%) translateY(-100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(-50%) translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 640px) {\n  .exam-wrap {\n    padding: 16px;\n  }\n  .start-title {\n    font-size: 28px;\n  }\n  .rules {\n    grid-template-columns: 1fr;\n  }\n  .options-grid {\n    grid-template-columns: 1fr;\n  }\n  .pc-phrase {\n    font-size: 22px;\n  }\n  .result-stats {\n    grid-template-columns: 1fr 1fr;\n  }\n  .final-score {\n    font-size: 36px;\n  }\n  .btn {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n  .btn-lg {\n    padding: 14px 32px;\n    font-size: 16px;\n  }\n  .penalty-notification {\n    font-size: 14px;\n    padding: 12px 16px;\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=exam.css.map */\n'] }]
  }], () => [{ type: PhrasesService }, { type: ScoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Exam, { className: "Exam", filePath: "src/app/modules/exam/exam/exam.ts", lineNumber: 20 });
})();

// src/app/modules/exam/exam-routing-module.ts
var examRoutes = [
  { path: "", component: Exam }
];

// src/app/modules/exam/exam-module.ts
var ExamModule = class _ExamModule {
  static \u0275fac = function ExamModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExamModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExamModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(examRoutes),
    SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamModule, [{
    type: NgModule,
    args: [{
      declarations: [Exam],
      imports: [
        CommonModule,
        RouterModule.forChild(examRoutes),
        SharedModule
      ],
      exports: [Exam]
    }]
  }], null, null);
})();
export {
  ExamModule
};
//# sourceMappingURL=chunk-RTOHBKOC.js.map
