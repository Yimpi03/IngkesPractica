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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PGTZPRSX.js";

// src/app/modules/quiz/quiz/quiz.ts
var _c0 = () => ["A", "B", "C", "D"];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function Quiz_ng_container_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F525} Racha x", ctx_r0.streak);
  }
}
function Quiz_ng_container_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " \u{1F4A1} Pista: piensa en el contexto... ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_ng_container_1_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function Quiz_ng_container_1_button_39_Template_button_click_0_listener() {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.answer(opt_r3));
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r4 * 0.06 + "s");
    \u0275\u0275classProp("opt-correct", ctx_r0.current.answered && ctx_r0.current.correct && opt_r3 === ctx_r0.current.phrase.es)("opt-wrong", ctx_r0.current.answered && !ctx_r0.current.correct && opt_r3 === ctx_r0.current.chosen)("opt-revealed", ctx_r0.current.revealed && opt_r3 === ctx_r0.current.phrase.es);
    \u0275\u0275property("disabled", ctx_r0.current.answered);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pureFunction0(11, _c0)[i_r4]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r3);
  }
}
function Quiz_ng_container_1_div_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3, "Respuesta correcta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.es);
  }
}
function Quiz_ng_container_1_div_40_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.note);
  }
}
function Quiz_ng_container_1_div_40_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " No te rindas, \xA1sigue intent\xE1ndolo! \u{1F4AA} ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_ng_container_1_div_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Ahora ya sabes la respuesta correcta. \xA1La pr\xF3xima ser\xE1! ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_ng_container_1_div_40_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function Quiz_ng_container_1_div_40_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.revealAnswer());
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ver respuesta correcta ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_ng_container_1_div_40_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function Quiz_ng_container_1_div_40_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleExplain());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.current.showExplain ? "\u{1F53C}" : "\u{1F4A1}");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.current.showExplain ? "Ocultar explicaci\xF3n" : "Expl\xEDcame m\xE1s", " ");
  }
}
function Quiz_ng_container_1_div_40_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "span", 52);
    \u0275\u0275text(4, "\u{1F4D6} Ingl\xE9s:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "span", 52);
    \u0275\u0275text(9, "\u{1F1EA}\u{1F1F8} Espa\xF1ol:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "span", 52);
    \u0275\u0275text(14, "\u{1F4DD} Nota:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.en);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.es);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.note);
  }
}
function Quiz_ng_container_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, Quiz_ng_container_1_div_40_div_6_Template, 6, 1, "div", 36);
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275template(8, Quiz_ng_container_1_div_40_span_8_Template, 2, 1, "span", 1)(9, Quiz_ng_container_1_div_40_span_9_Template, 2, 0, "span", 1)(10, Quiz_ng_container_1_div_40_span_10_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, Quiz_ng_container_1_div_40_button_11_Template, 4, 0, "button", 38)(12, Quiz_ng_container_1_div_40_button_12_Template, 4, 2, "button", 39)(13, Quiz_ng_container_1_div_40_div_13_Template, 17, 3, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fb-correct", ctx_r0.current.correct)("fb-wrong", !ctx_r0.current.correct);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.current.correct ? "\u{1F389}" : "\u{1F605}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.current.correct ? "\xA1Correcto!" : "\xA1Incorrecto!");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.current.revealed && !ctx_r0.current.correct);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.current.correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.current.correct && !ctx_r0.current.revealed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.current.correct && ctx_r0.current.revealed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.current.correct && !ctx_r0.current.revealed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.current.correct && ctx_r0.current.revealed || ctx_r0.current.correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.current.showExplain);
  }
}
function Quiz_ng_container_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275listener("click", function Quiz_ng_container_1_div_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.next());
    });
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentIndex < ctx_r0.questions.length - 1 ? "Siguiente" : "Ver resultados", " ");
  }
}
function Quiz_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 3)(2, "span", 4);
    \u0275\u0275text(3, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "Quiz Interactivo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Quiz_ng_container_1_span_6_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-progress-bar", 7);
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "span", 10)(11, "span", 11);
    \u0275\u0275text(12, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "span", 13)(16, "span", 14);
    \u0275\u0275text(17, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 16)(21, "span", 14);
    \u0275\u0275text(22, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 17)(26, "span", 14);
    \u0275\u0275text(27, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 15);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "span", 20);
    \u0275\u0275text(33, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " \xBFQu\xE9 significa en espa\xF1ol? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, Quiz_ng_container_1_div_37_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 23);
    \u0275\u0275template(39, Quiz_ng_container_1_button_39_Template, 5, 12, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, Quiz_ng_container_1_div_40_Template, 14, 13, "div", 25)(41, Quiz_ng_container_1_div_41_Template, 6, 1, "div", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.streak >= 3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.progress);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r0.currentIndex + 1, " / ", ctx_r0.questions.length, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.correct);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wrong);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.current.phrase.en);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.current.answered && !ctx_r0.current.correct);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.current.options);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.current.answered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.current.answered);
  }
}
function Quiz_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 78);
  }
}
function Quiz_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " \u{1F31F} \xA1Impresionante! Eres un verdadero experto. ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_div_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " \u{1F44F} \xA1Muy bien! Sigue as\xED para mejorar. ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_div_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " \u{1F4D6} \xA1Buen intento! Practica un poco m\xE1s. ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_div_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " \u{1F4AA} \xA1No te rindas! La pr\xE1ctica hace al maestro. ");
    \u0275\u0275elementEnd();
  }
}
function Quiz_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275template(2, Quiz_div_2_div_2_Template, 1, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 66);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 67)(14, "div", 68)(15, "div", 69);
    \u0275\u0275text(16, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 70);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 71);
    \u0275\u0275text(20, "Correctas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 72)(22, "div", 69);
    \u0275\u0275text(23, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 73);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 71);
    \u0275\u0275text(27, "Incorrectas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 74)(29, "div", 69);
    \u0275\u0275text(30, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 75);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 71);
    \u0275\u0275text(34, "Puntos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, Quiz_div_2_div_35_Template, 2, 0, "div", 76)(36, Quiz_div_2_div_36_Template, 2, 0, "div", 76)(37, Quiz_div_2_div_37_Template, 2, 0, "div", 76)(38, Quiz_div_2_div_38_Template, 2, 0, "div", 76);
    \u0275\u0275elementStart(39, "button", 77);
    \u0275\u0275listener("click", function Quiz_div_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.init());
    });
    \u0275\u0275elementStart(40, "span", 58);
    \u0275\u0275text(41, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 57);
    \u0275\u0275text(43, "Repetir quiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(15, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pct >= 70 ? "\u{1F3C6}" : "\u{1F4DA}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.correct, "/", ctx_r0.questions.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.stars);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.levelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.levelText);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.correct);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.wrong);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.score);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.pct >= 90);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pct >= 70 && ctx_r0.pct < 90);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pct >= 50 && ctx_r0.pct < 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pct < 50);
  }
}
var Quiz = class _Quiz {
  phrasesService;
  scoreService;
  questions = [];
  currentIndex = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  finished = false;
  showCorrectAnswer = false;
  showConfetti = false;
  // 🔒 Guardamos las preguntas en orden fijo (sin mezclar)
  fixedQuestions = [];
  constructor(phrasesService, scoreService) {
    this.phrasesService = phrasesService;
    this.scoreService = scoreService;
  }
  fetchPhrases() {
    const service = this.phrasesService;
    return service.getQuestions?.() ?? service.getPhrases?.() ?? service.getAll?.() ?? service.phrases ?? service.questions ?? [];
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.currentIndex = 0;
    this.score = 0;
    this.correct = 0;
    this.wrong = 0;
    this.streak = 0;
    this.finished = false;
    this.showCorrectAnswer = false;
    this.showConfetti = false;
    if (this.fixedQuestions.length === 0) {
      this.fixedQuestions = this.fetchPhrases();
    }
    this.questions = this.fixedQuestions.map((p) => ({
      phrase: p,
      options: this.phrasesService.getOptions(p),
      chosen: "",
      answered: false,
      correct: false,
      showExplain: false,
      revealed: false
    }));
  }
  get current() {
    return this.questions[this.currentIndex];
  }
  get progress() {
    return Math.round((this.currentIndex + 1) / this.questions.length * 100);
  }
  answer(option) {
    if (this.current.answered)
      return;
    this.current.chosen = option;
    this.current.answered = true;
    this.current.correct = option === this.current.phrase.es;
    if (this.current.correct) {
      this.correct++;
      this.streak++;
      this.score += 5 + (this.streak >= 3 ? 2 : 0);
      this.scoreService.correct(5);
      if (this.streak >= 3) {
        this.showConfetti = true;
        setTimeout(() => this.showConfetti = false, 1500);
      }
    } else {
      this.wrong++;
      this.streak = 0;
      this.scoreService.wrong();
      this.current.revealed = false;
    }
  }
  revealAnswer() {
    this.current.revealed = true;
    this.showCorrectAnswer = true;
  }
  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showCorrectAnswer = false;
      this.showConfetti = false;
    } else {
      this.finished = true;
    }
  }
  toggleExplain() {
    this.current.showExplain = !this.current.showExplain;
    if (this.current.showExplain) {
      this.current.revealed = true;
      this.showCorrectAnswer = true;
    }
  }
  get pct() {
    return this.questions.length > 0 ? Math.round(this.correct / this.questions.length * 100) : 0;
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
  static \u0275fac = function Quiz_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Quiz)(\u0275\u0275directiveInject(PhrasesService), \u0275\u0275directiveInject(ScoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Quiz, selectors: [["app-quiz"]], standalone: false, decls: 3, vars: 2, consts: [[1, "quiz-wrap"], [4, "ngIf"], ["class", "final-card", 4, "ngIf"], [1, "mod-title"], [1, "title-icon"], [1, "title-text"], ["class", "title-badge", 4, "ngIf"], ["label", "Avance", 3, "value"], [1, "q-meta"], [1, "q-meta-left"], [1, "q-num"], [1, "q-num-icon"], [1, "q-meta-right"], [1, "stat", "stat-correct"], [1, "stat-icon"], [1, "stat-value"], [1, "stat", "stat-wrong"], [1, "stat", "stat-score"], [1, "phrase-card"], [1, "pc-label"], [1, "pc-label-icon"], [1, "pc-phrase"], ["class", "pc-hint", 4, "ngIf"], [1, "options-grid"], ["class", "opt", 3, "animation-delay", "opt-correct", "opt-wrong", "opt-revealed", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "feedback-box", 3, "fb-correct", "fb-wrong", 4, "ngIf"], ["class", "btn-row", 4, "ngIf"], [1, "title-badge"], [1, "pc-hint"], [1, "opt", 3, "click", "disabled"], [1, "opt-letter"], [1, "opt-text"], [1, "feedback-box"], [1, "fb-header"], [1, "fb-icon"], [1, "fb-title"], ["class", "fb-answer-reveal", 4, "ngIf"], [1, "fb-message"], ["class", "btn-reveal", 3, "click", 4, "ngIf"], ["class", "btn-explain", 3, "click", 4, "ngIf"], ["class", "explain-box", 4, "ngIf"], [1, "fb-answer-reveal"], [1, "fb-answer-box"], [1, "fb-answer-label"], [1, "fb-answer-value"], [1, "btn-reveal", 3, "click"], [1, "btn-reveal-icon"], [1, "btn-explain", 3, "click"], [1, "btn-explain-icon"], [1, "explain-box"], [1, "explain-content"], [1, "explain-row"], [1, "explain-label"], [1, "explain-value"], [1, "explain-row", "explain-note"], [1, "btn-row"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-text"], [1, "btn-icon"], [1, "final-card"], [1, "final-decoration"], ["class", "final-sparkle", 4, "ngFor", "ngForOf"], [1, "final-icon"], [1, "final-score"], [1, "final-pct"], [1, "final-stars"], [1, "final-level", 3, "ngClass"], [1, "result-stats"], [1, "rs", "rs-correct"], [1, "rs-icon"], [1, "rs-num", "green"], [1, "rs-lbl"], [1, "rs", "rs-wrong"], [1, "rs-num", "red"], [1, "rs", "rs-score"], [1, "rs-num", "blue"], ["class", "final-message", 4, "ngIf"], [1, "btn", "btn-primary", "btn-restart", 3, "click"], [1, "final-sparkle"], [1, "final-message"]], template: function Quiz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, Quiz_ng_container_1_Template, 42, 12, "ng-container", 1)(2, Quiz_div_2_Template, 44, 16, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.finished);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.finished);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, ProgressBar], styles: ['\n[_nghost-%COMP%] {\n  --primary: #3d2e1e;\n  --primary-light: #6b4f3a;\n  --primary-dark: #2a1f14;\n  --accent: #d4a373;\n  --accent-light: #e8c9a0;\n  --accent-dark: #b8895c;\n  --accent-glow: rgba(212, 163, 115, 0.35);\n  --bg-cream: #fdf8f0;\n  --bg-warm: #f5ede4;\n  --bg-card: #fffbf5;\n  --success: #7cb892;\n  --success-dark: #5d9b75;\n  --success-glow: rgba(124, 184, 146, 0.3);\n  --success-bg: #ebf7f0;\n  --danger: #d48a7a;\n  --danger-dark: #c07363;\n  --danger-glow: rgba(212, 138, 122, 0.25);\n  --danger-bg: #fdf0eb;\n  --gold: #e8b86d;\n  --gold-glow: rgba(232, 184, 109, 0.35);\n  --glass-bg: rgba(255, 251, 245, 0.75);\n  --glass-border: rgba(212, 163, 115, 0.2);\n  --glass-shadow: 0 8px 32px rgba(61, 46, 30, 0.06);\n  --shadow-xs: 0 2px 8px rgba(61, 46, 30, 0.04);\n  --shadow-sm: 0 4px 16px rgba(61, 46, 30, 0.06);\n  --shadow-md: 0 8px 32px rgba(61, 46, 30, 0.08);\n  --shadow-lg: 0 16px 48px rgba(61, 46, 30, 0.1);\n  --shadow-xl: 0 24px 64px rgba(61, 46, 30, 0.12);\n  --shadow-2xl: 0 32px 80px rgba(61, 46, 30, 0.14);\n  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);\n  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  background: #f5ede4;\n}\n.quiz-wrap[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 3rem auto;\n  padding: 3rem 3.5rem;\n  background:\n    linear-gradient(\n      160deg,\n      #fffbf5 0%,\n      #f8f0e7 100%);\n  border-radius: 3.5rem;\n  box-shadow: var(--shadow-2xl), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s var(--ease-spring);\n  animation: _ngcontent-%COMP%_containerEntrance 0.8s var(--ease-spring);\n}\n@keyframes _ngcontent-%COMP%_containerEntrance {\n  0% {\n    opacity: 0;\n    transform: scale(0.95) translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.quiz-wrap[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 20%,\n      rgba(212, 163, 115, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 80% 80%,\n      rgba(124, 184, 146, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(232, 184, 109, 0.02) 0%,\n      transparent 70%);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_gradientShift 20s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  33% {\n    transform: scale(1.1) rotate(2deg);\n  }\n  66% {\n    transform: scale(0.9) rotate(-1deg);\n  }\n  100% {\n    transform: scale(1.05) rotate(1deg);\n  }\n}\n.quiz-wrap[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background-image:\n    radial-gradient(\n      2px 2px at 20% 30%,\n      rgba(212, 163, 115, 0.12),\n      transparent),\n    radial-gradient(\n      2px 2px at 40% 70%,\n      rgba(124, 184, 146, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 60% 20%,\n      rgba(232, 184, 109, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 80% 80%,\n      rgba(212, 163, 115, 0.1),\n      transparent),\n    radial-gradient(\n      2px 2px at 10% 90%,\n      rgba(124, 184, 146, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 90% 10%,\n      rgba(232, 184, 109, 0.06),\n      transparent);\n  background-size: 200px 200px;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_particlesFloat 30s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_particlesFloat {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-50px, -50px);\n  }\n}\n.mod-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0 0 0.75rem 0;\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  position: relative;\n  flex-wrap: wrap;\n}\n.title-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  animation: _ngcontent-%COMP%_iconDance 3s var(--ease-in-out) infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_iconDance {\n  0%, 100% {\n    transform: scale(1) rotate(0deg);\n  }\n  25% {\n    transform: scale(1.1) rotate(-5deg);\n  }\n  75% {\n    transform: scale(1.05) rotate(5deg);\n  }\n}\n.title-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n}\n.title-text[_ngcontent-%COMP%]::before {\n  content: "Quiz Interactivo";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      var(--primary) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_glitchText 4s infinite;\n}\n@keyframes _ngcontent-%COMP%_glitchText {\n  0%, 90%, 100% {\n    opacity: 0;\n    transform: translate(0);\n  }\n  92% {\n    opacity: 1;\n    transform: translate(-2px, -2px);\n  }\n  94% {\n    opacity: 1;\n    transform: translate(2px, 2px);\n  }\n  96% {\n    opacity: 1;\n    transform: translate(-1px, 1px);\n  }\n}\n.title-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8b86d,\n      #d4a373);\n  color: white;\n  padding: 0.2rem 1.2rem;\n  border-radius: 60px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  -webkit-text-fill-color: white;\n  animation: _ngcontent-%COMP%_badgeGlow 2s var(--ease-in-out) infinite;\n  box-shadow: 0 4px 20px rgba(232, 184, 109, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.title-badge[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  animation: _ngcontent-%COMP%_badgeShine 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_badgeShine {\n  0% {\n    transform: translateX(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(45deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_badgeGlow {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 4px 20px rgba(232, 184, 109, 0.3);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 4px 40px rgba(232, 184, 109, 0.5);\n  }\n}\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.6rem 1.5rem;\n  background: var(--glass-bg);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 80px;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--glass-shadow);\n  margin: 0.5rem 0 0.25rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.q-meta[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 163, 115, 0.06),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmerMeta 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmerMeta {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.q-meta-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.q-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 700;\n  color: var(--primary);\n  font-size: 0.9rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  color: white;\n  padding: 0.3rem 1.2rem;\n  border-radius: 60px;\n  box-shadow: 0 4px 12px rgba(212, 163, 115, 0.25);\n  transition: all 0.3s var(--ease-spring);\n}\n.q-num[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 20px rgba(212, 163, 115, 0.35);\n}\n.q-num-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.q-meta-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-weight: 700;\n  font-size: 0.85rem;\n  padding: 0.2rem 0.8rem;\n  border-radius: 60px;\n  transition: all 0.3s var(--ease-spring);\n  cursor: default;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.stat-correct[_ngcontent-%COMP%] {\n  color: var(--success-dark);\n  background: rgba(124, 184, 146, 0.1);\n  border: 1px solid rgba(124, 184, 146, 0.15);\n}\n.stat-wrong[_ngcontent-%COMP%] {\n  color: var(--danger-dark);\n  background: rgba(212, 138, 122, 0.1);\n  border: 1px solid rgba(212, 138, 122, 0.15);\n}\n.stat-score[_ngcontent-%COMP%] {\n  color: var(--accent-dark);\n  background: rgba(212, 163, 115, 0.1);\n  border: 1px solid rgba(212, 163, 115, 0.15);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  transition: transform 0.3s var(--ease-spring);\n}\n.stat[_ngcontent-%COMP%]:hover   .stat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.phrase-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #faf3ea 0%,\n      #f5ede4 100%);\n  border-radius: 2.5rem;\n  padding: 2.8rem 3rem 2.2rem;\n  margin: 1.75rem 0 2rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: var(--shadow-lg), inset 0 2px 0 rgba(255, 255, 255, 0.8);\n  position: relative;\n  overflow: hidden;\n  transform: perspective(1000px) rotateX(0deg);\n  transition: all 0.5s var(--ease-spring);\n}\n.phrase-card[_ngcontent-%COMP%]:hover {\n  transform: perspective(1000px) rotateX(2deg) translateY(-4px);\n  box-shadow: var(--shadow-xl);\n}\n.phrase-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 163, 115, 0.03) 0%,\n      rgba(124, 184, 146, 0.02) 50%,\n      rgba(232, 184, 109, 0.02) 100%);\n  pointer-events: none;\n}\n.phrase-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse at 30% 40%,\n      rgba(212, 163, 115, 0.04) 0%,\n      transparent 60%);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_cardGlowPulse 6s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_cardGlowPulse {\n  0% {\n    transform: translate(-10%, -10%) scale(1);\n  }\n  100% {\n    transform: translate(10%, 10%) scale(1.2);\n  }\n}\n.pc-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #8a7a6a;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.pc-label-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  animation: _ngcontent-%COMP%_labelPulse 2s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_labelPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2) rotate(10deg);\n  }\n}\n.pc-phrase[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 2px 20px rgba(212, 163, 115, 0.1);\n}\n.pc-hint[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: #8a7a6a;\n  font-weight: 500;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_hintFloat 2.5s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_hintFloat {\n  0%, 100% {\n    opacity: 0.6;\n    transform: translateY(0);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-2px);\n  }\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin: 1.75rem 0;\n}\n.opt[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #e8e0d6;\n  border-radius: 1.5rem;\n  padding: 1.1rem 1.5rem;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--primary);\n  cursor: pointer;\n  transition: all 0.4s var(--ease-spring);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-xs);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_optSlideIn 0.6s var(--ease-spring) forwards;\n  transform-origin: center;\n}\n@keyframes _ngcontent-%COMP%_optSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95) rotateX(-5deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1) rotateX(0deg);\n  }\n}\n.opt[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),\n      rgba(212, 163, 115, 0.06) 0%,\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n}\n.opt[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.opt[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 163, 115, 0.04),\n      transparent);\n  transition: left 0.6s ease;\n}\n.opt[_ngcontent-%COMP%]:hover:not(:disabled)::after {\n  left: 100%;\n}\n.opt[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--accent);\n  background:\n    linear-gradient(\n      135deg,\n      #fffbf5 0%,\n      #faf3ea 100%);\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 12px 40px var(--accent-glow);\n}\n.opt[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.96) translateY(0);\n  transition-duration: 0.1s;\n}\n.opt[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n  transform: scale(0.98);\n}\n.opt-letter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #f0e8de;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #6b5a4a;\n  flex-shrink: 0;\n  transition: all 0.4s var(--ease-spring);\n}\n.opt[_ngcontent-%COMP%]:hover:not(:disabled)   .opt-letter[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px var(--accent-glow);\n}\n.opt-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.opt-correct[_ngcontent-%COMP%] {\n  border-color: var(--success) !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg) 0%,\n      #d4f0e0 100%) !important;\n  color: #3d7a5a !important;\n  animation: _ngcontent-%COMP%_popCorrect 0.6s var(--ease-spring);\n  box-shadow: 0 4px 32px var(--success-glow) !important;\n}\n.opt-correct[_ngcontent-%COMP%]   .opt-letter[_ngcontent-%COMP%] {\n  background: var(--success) !important;\n  color: white !important;\n  transform: scale(1.15);\n  box-shadow: 0 4px 16px var(--success-glow);\n}\n@keyframes _ngcontent-%COMP%_popCorrect {\n  0% {\n    transform: scale(0.9);\n  }\n  30% {\n    transform: scale(1.08);\n  }\n  60% {\n    transform: scale(0.98);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.opt-wrong[_ngcontent-%COMP%] {\n  border-color: var(--danger) !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg) 0%,\n      #f5e0d8 100%) !important;\n  color: #8a5a4a !important;\n  animation: _ngcontent-%COMP%_shakeWrong 0.7s var(--ease-spring);\n  box-shadow: 0 4px 32px var(--danger-glow) !important;\n}\n.opt-wrong[_ngcontent-%COMP%]   .opt-letter[_ngcontent-%COMP%] {\n  background: var(--danger) !important;\n  color: white !important;\n  transform: scale(0.9);\n  box-shadow: 0 4px 16px var(--danger-glow);\n}\n@keyframes _ngcontent-%COMP%_shakeWrong {\n  0%, 100% {\n    transform: translateX(0) rotate(0deg);\n  }\n  10% {\n    transform: translateX(-12px) rotate(-3deg);\n  }\n  20% {\n    transform: translateX(10px) rotate(3deg);\n  }\n  30% {\n    transform: translateX(-8px) rotate(-2deg);\n  }\n  40% {\n    transform: translateX(6px) rotate(2deg);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-2px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n}\n.opt-revealed[_ngcontent-%COMP%] {\n  border-color: var(--gold) !important;\n  background:\n    linear-gradient(\n      135deg,\n      #fcf6ea 0%,\n      #f5ede0 100%) !important;\n  box-shadow: 0 4px 32px var(--gold-glow) !important;\n  animation: _ngcontent-%COMP%_revealPulse 1s var(--ease-in-out) infinite;\n}\n.opt-revealed[_ngcontent-%COMP%]   .opt-letter[_ngcontent-%COMP%] {\n  background: var(--gold) !important;\n  color: white !important;\n  transform: scale(1.1);\n  box-shadow: 0 4px 16px var(--gold-glow);\n}\n@keyframes _ngcontent-%COMP%_revealPulse {\n  0%, 100% {\n    box-shadow: 0 4px 32px var(--gold-glow);\n  }\n  50% {\n    box-shadow: 0 4px 48px rgba(232, 184, 109, 0.4);\n  }\n}\n.feedback-box[_ngcontent-%COMP%] {\n  border-radius: 1.75rem;\n  padding: 1.75rem 2.25rem;\n  margin: 1.5rem 0 1.75rem;\n  animation: _ngcontent-%COMP%_feedbackSlide 0.6s var(--ease-spring);\n  border: 1px solid transparent;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s var(--ease-spring);\n}\n@keyframes _ngcontent-%COMP%_feedbackSlide {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.fb-correct[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg) 0%,\n      #d4f0e0 100%);\n  border-color: #b5d8c8;\n  box-shadow: 0 4px 32px rgba(124, 184, 146, 0.08);\n}\n.fb-correct[_ngcontent-%COMP%]::before {\n  content: "\\1f389";\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 3.5rem;\n  opacity: 0.12;\n  animation: _ngcontent-%COMP%_confettiFloat 3s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_confettiFloat {\n  0%, 100% {\n    transform: translateY(-50%) scale(1) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-50%) scale(1.1) rotate(10deg);\n  }\n}\n.fb-wrong[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg) 0%,\n      #f5e0d8 100%);\n  border-color: #e5c8bc;\n  box-shadow: 0 4px 32px rgba(212, 138, 122, 0.06);\n}\n.fb-wrong[_ngcontent-%COMP%]::before {\n  content: "\\1f4aa";\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 3.5rem;\n  opacity: 0.12;\n  animation: _ngcontent-%COMP%_musclePump 2s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_musclePump {\n  0%, 100% {\n    transform: translateY(-50%) scale(1);\n  }\n  50% {\n    transform: translateY(-50%) scale(1.15);\n  }\n}\n.fb-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.fb-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  animation: _ngcontent-%COMP%_iconBounce 1.5s var(--ease-bounce) infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.fb-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n}\n.fb-correct[_ngcontent-%COMP%]   .fb-title[_ngcontent-%COMP%] {\n  color: #3d7a5a;\n}\n.fb-wrong[_ngcontent-%COMP%]   .fb-title[_ngcontent-%COMP%] {\n  color: #8a5a4a;\n}\n.fb-answer-reveal[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  padding: 0.75rem 1.25rem;\n  background: rgba(255, 251, 245, 0.7);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 1rem;\n  border-left: 4px solid var(--accent);\n  animation: _ngcontent-%COMP%_revealSlide 0.5s var(--ease-spring);\n}\n@keyframes _ngcontent-%COMP%_revealSlide {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.fb-answer-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.fb-answer-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.fb-answer-value[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--accent-dark);\n  font-size: 1.1rem;\n  padding: 0.2rem 1rem;\n  background: rgba(212, 163, 115, 0.1);\n  border-radius: 60px;\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  animation: _ngcontent-%COMP%_answerPulse 1.5s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_answerPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n.fb-message[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--primary);\n  line-height: 1.6;\n  margin: 0.5rem 0;\n}\n.btn-reveal[_ngcontent-%COMP%], \n.btn-explain[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  border: none;\n  border-radius: 60px;\n  padding: 0.55rem 1.8rem;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s var(--ease-spring);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.btn-reveal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent-light));\n  color: white;\n  box-shadow: 0 4px 24px var(--accent-glow);\n}\n.btn-reveal[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 200%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  transition: left 0.6s ease;\n}\n.btn-reveal[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn-reveal[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 40px var(--accent-glow);\n}\n.btn-reveal[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-explain[_ngcontent-%COMP%] {\n  background: rgba(255, 251, 245, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  color: var(--primary);\n  border: 1.5px solid #d8d0c6;\n}\n.btn-explain[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  background: rgba(255, 251, 245, 0.95);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.btn-explain[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-reveal-icon[_ngcontent-%COMP%], \n.btn-explain-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s var(--ease-spring);\n}\n.btn-reveal[_ngcontent-%COMP%]:hover   .btn-reveal-icon[_ngcontent-%COMP%], \n.btn-explain[_ngcontent-%COMP%]:hover   .btn-explain-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.explain-box[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 1.25rem 1.75rem;\n  background: rgba(255, 251, 245, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 1.25rem;\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  box-shadow: var(--shadow-sm);\n  animation: _ngcontent-%COMP%_explainExpand 0.5s var(--ease-spring);\n  transform-origin: top center;\n}\n@keyframes _ngcontent-%COMP%_explainExpand {\n  0% {\n    opacity: 0;\n    transform: scaleY(0.8) translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleY(1) translateY(0);\n  }\n}\n.explain-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.explain-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid rgba(61, 46, 30, 0.04);\n}\n.explain-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.explain-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #8a7a6a;\n  min-width: 80px;\n  font-size: 0.85rem;\n}\n.explain-value[_ngcontent-%COMP%] {\n  color: var(--primary);\n  flex: 1;\n  font-weight: 500;\n}\n.explain-note[_ngcontent-%COMP%]   .explain-value[_ngcontent-%COMP%] {\n  color: #6b5a4a;\n  font-style: italic;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 80px;\n  padding: 1rem 3rem;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.5s var(--ease-spring);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  color: white;\n  box-shadow: 0 6px 32px rgba(212, 163, 115, 0.3);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 300%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.06),\n      transparent,\n      rgba(255, 255, 255, 0.06),\n      transparent);\n  animation: _ngcontent-%COMP%_waveSlide 4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_waveSlide {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(33.33%);\n  }\n}\n.btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      transparent,\n      rgba(255, 255, 255, 0.03));\n  pointer-events: none;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 12px 48px rgba(212, 163, 115, 0.4);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96) translateY(0);\n  transition-duration: 0.1s;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.4s var(--ease-spring);\n  font-size: 1.1rem;\n}\n.btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: translateX(6px) scale(1.1);\n}\n.final-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3.5rem 2rem 3rem;\n  animation: _ngcontent-%COMP%_finalCinematic 0.9s var(--ease-spring);\n  position: relative;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_finalCinematic {\n  0% {\n    opacity: 0;\n    transform: scale(0.8) translateY(50px) rotateX(10deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0) rotateX(0deg);\n  }\n}\n.final-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.final-sparkle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: var(--gold);\n  border-radius: 50%;\n  box-shadow: 0 0 20px var(--gold-glow);\n  animation: _ngcontent-%COMP%_sparkleFloat 4s var(--ease-in-out) infinite;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(2) {\n  top: 15%;\n  right: 12%;\n  animation-delay: 0.6s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 20%;\n  left: 15%;\n  animation-delay: 1.2s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: 25%;\n  right: 18%;\n  animation-delay: 1.8s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(5) {\n  top: 45%;\n  left: 5%;\n  animation-delay: 0.3s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(6) {\n  top: 40%;\n  right: 8%;\n  animation-delay: 0.9s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(7) {\n  top: 70%;\n  left: 25%;\n  animation-delay: 1.5s;\n}\n.final-sparkle[_ngcontent-%COMP%]:nth-child(8) {\n  top: 65%;\n  right: 22%;\n  animation-delay: 2.1s;\n}\n@keyframes _ngcontent-%COMP%_sparkleFloat {\n  0%, 100% {\n    opacity: 0;\n    transform: translate(0, 0) scale(0) rotate(0deg);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(-15px, -25px) scale(1) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: translate(15px, 15px) scale(0.8) rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-5px, 35px) scale(0) rotate(360deg);\n  }\n}\n.final-icon[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  line-height: 1;\n  animation: _ngcontent-%COMP%_trophyBounce 2.5s var(--ease-bounce) infinite;\n  display: inline-block;\n  filter: drop-shadow(0 4px 20px rgba(232, 184, 109, 0.3));\n}\n@keyframes _ngcontent-%COMP%_trophyBounce {\n  0%, 100% {\n    transform: translateY(0) scale(1) rotate(-2deg);\n  }\n  25% {\n    transform: translateY(-10px) scale(1.05) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0) scale(1) rotate(2deg);\n  }\n  75% {\n    transform: translateY(-5px) scale(1.02) rotate(0deg);\n  }\n}\n.final-score[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 50%,\n      var(--gold) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0.5rem 0 0.1rem;\n  letter-spacing: -0.04em;\n  animation: _ngcontent-%COMP%_scoreGlow 3s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_scoreGlow {\n  0%, 100% {\n    filter: drop-shadow(0 0 0px transparent);\n  }\n  50% {\n    filter: drop-shadow(0 0 30px rgba(212, 163, 115, 0.15));\n  }\n}\n.final-pct[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #8a7a6a;\n  font-weight: 600;\n}\n.final-stars[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  margin: 0.5rem 0 0.5rem;\n  letter-spacing: 0.4rem;\n  animation: _ngcontent-%COMP%_starsGlow 2.5s var(--ease-in-out) infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_starsGlow {\n  0% {\n    filter: drop-shadow(0 0 0px rgba(232, 184, 109, 0));\n    transform: scale(0.95);\n  }\n  100% {\n    filter: drop-shadow(0 0 40px rgba(232, 184, 109, 0.3));\n    transform: scale(1.05);\n  }\n}\n.final-level[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.2rem;\n  font-weight: 800;\n  padding: 0.5rem 3rem;\n  border-radius: 80px;\n  margin: 0.5rem 0 1.5rem;\n  animation: _ngcontent-%COMP%_levelPulse 2s var(--ease-in-out) infinite;\n  letter-spacing: 0.02em;\n}\n@keyframes _ngcontent-%COMP%_levelPulse {\n  0%, 100% {\n    transform: scale(1) translateY(0);\n  }\n  50% {\n    transform: scale(1.03) translateY(-2px);\n  }\n}\n.level-a[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg),\n      #d4f0e0);\n  color: #3d7a5a;\n  box-shadow: 0 4px 32px rgba(124, 184, 146, 0.15);\n}\n.level-b[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #faf3ea,\n      #f0e8de);\n  color: #6b4f3a;\n  box-shadow: 0 4px 32px rgba(212, 163, 115, 0.15);\n}\n.level-c[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fcf6ea,\n      #f5ede0);\n  color: #8a7a4a;\n  box-shadow: 0 4px 32px rgba(232, 184, 109, 0.12);\n}\n.level-d[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg),\n      #f5e0d8);\n  color: #8a5a4a;\n  box-shadow: 0 4px 32px rgba(212, 138, 122, 0.1);\n}\n.result-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 2rem 0 2rem;\n  flex-wrap: wrap;\n}\n.rs[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1.5rem;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 1.5rem;\n  border: 1px solid var(--glass-border);\n  min-width: 90px;\n  transition: all 0.4s var(--ease-spring);\n  cursor: default;\n  box-shadow: var(--shadow-xs);\n}\n.rs[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: var(--shadow-lg);\n}\n.rs-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-bottom: 0.2rem;\n  display: block;\n  transition: transform 0.4s var(--ease-spring);\n}\n.rs[_ngcontent-%COMP%]:hover   .rs-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.rs-num[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  display: block;\n}\n.rs-num.green[_ngcontent-%COMP%] {\n  color: var(--success-dark);\n  text-shadow: 0 0 20px var(--success-glow);\n}\n.rs-num.red[_ngcontent-%COMP%] {\n  color: var(--danger-dark);\n  text-shadow: 0 0 20px var(--danger-glow);\n}\n.rs-num.blue[_ngcontent-%COMP%] {\n  color: var(--accent-dark);\n  text-shadow: 0 0 20px var(--accent-glow);\n}\n.rs-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #8a7a6a;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: block;\n  margin-top: 0.1rem;\n}\n.final-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--primary);\n  margin: 0 0 2rem;\n  padding: 0.6rem 1.5rem;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 80px;\n  display: inline-block;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--shadow-sm);\n  animation: _ngcontent-%COMP%_messageFloat 3s var(--ease-in-out) infinite;\n}\n@keyframes _ngcontent-%COMP%_messageFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n.btn-restart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent-light)) !important;\n  box-shadow: 0 6px 32px var(--accent-glow) !important;\n}\n.btn-restart[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 48px var(--accent-glow) !important;\n}\n.btn-restart[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_restartSpin 4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_restartSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\napp-progress-bar[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.5rem 0 0.25rem;\n}\n  .progress-bar {\n  height: 8px !important;\n  border-radius: 20px !important;\n  background: #e8e0d6 !important;\n  overflow: hidden;\n  box-shadow: inset 0 2px 4px rgba(61, 46, 30, 0.04);\n}\n  .progress-bar .progress-fill {\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--accent-light),\n      var(--gold)) !important;\n  border-radius: 20px !important;\n  transition: width 0.8s var(--ease-spring);\n  position: relative;\n  overflow: hidden;\n  background-size: 200% 100% !important;\n  animation: _ngcontent-%COMP%_gradientProgress 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_gradientProgress {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n  .progress-bar .progress-fill::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 300%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmerProgress 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmerProgress {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(33.33%);\n  }\n}\n  .progress-bar .progress-label {\n  font-weight: 600 !important;\n  color: var(--primary) !important;\n  font-size: 0.8rem !important;\n}\n@media (max-width: 1024px) {\n  .quiz-wrap[_ngcontent-%COMP%] {\n    padding: 2.5rem 2.5rem;\n    margin: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .quiz-wrap[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.5rem;\n    margin: 1.5rem 1rem;\n    border-radius: 2.5rem;\n  }\n  .mod-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .title-badge[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 0.15rem 0.9rem;\n  }\n  .q-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    border-radius: 60px;\n    padding: 0.6rem 1.2rem;\n  }\n  .q-meta-left[_ngcontent-%COMP%], \n   .q-meta-right[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .q-num[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.2rem 1rem;\n  }\n  .stat[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.15rem 0.6rem;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .pc-phrase[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .phrase-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem 1.5rem;\n    border-radius: 2rem;\n  }\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.8rem;\n  }\n  .opt[_ngcontent-%COMP%] {\n    padding: 0.9rem 1.2rem;\n    font-size: 0.95rem;\n    border-radius: 1.25rem;\n  }\n  .opt-letter[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n    font-size: 0.7rem;\n  }\n  .feedback-box[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n    border-radius: 1.5rem;\n  }\n  .fb-correct[_ngcontent-%COMP%]::before, \n   .fb-wrong[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .fb-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .fb-answer-value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn-reveal[_ngcontent-%COMP%], \n   .btn-explain[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.45rem 1.2rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.8rem 2rem;\n    font-size: 0.9rem;\n    width: 100%;\n    justify-content: center;\n  }\n  .btn-row[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .result-stats[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .rs[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    min-width: 70px;\n  }\n  .rs-num[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .final-score[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n  .final-stars[_ngcontent-%COMP%] {\n    font-size: 2.6rem;\n  }\n  .final-level[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.35rem 2rem;\n  }\n  .final-message[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    padding: 0.4rem 1.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .quiz-wrap[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n    margin: 0.75rem 0.5rem;\n    border-radius: 1.75rem;\n  }\n  .mod-title[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    gap: 0.4rem;\n  }\n  .title-icon[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .title-badge[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n    padding: 0.1rem 0.6rem;\n  }\n  .q-meta[_ngcontent-%COMP%] {\n    border-radius: 40px;\n    padding: 0.4rem 0.75rem;\n  }\n  .q-num[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.15rem 0.8rem;\n  }\n  .stat[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.1rem 0.4rem;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .pc-phrase[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .phrase-card[_ngcontent-%COMP%] {\n    padding: 1.25rem 0.75rem 1rem;\n    margin: 1rem 0 1.25rem;\n    border-radius: 1.5rem;\n  }\n  .pc-label[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .opt[_ngcontent-%COMP%] {\n    padding: 0.65rem 0.85rem;\n    font-size: 0.82rem;\n    border-radius: 1rem;\n    gap: 0.5rem;\n  }\n  .opt-letter[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n    font-size: 0.6rem;\n  }\n  .feedback-box[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem;\n    border-radius: 1.25rem;\n  }\n  .fb-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .fb-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .fb-answer-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 0.15rem 0.75rem;\n  }\n  .btn-reveal[_ngcontent-%COMP%], \n   .btn-explain[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.3rem 0.9rem;\n  }\n  .explain-box[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .explain-row[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    gap: 0.4rem;\n  }\n  .explain-label[_ngcontent-%COMP%] {\n    min-width: 60px;\n    font-size: 0.75rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.8rem;\n  }\n  .final-card[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.5rem;\n  }\n  .final-icon[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .final-score[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .final-pct[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .final-stars[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    letter-spacing: 0.2rem;\n  }\n  .final-level[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 0.25rem 1.5rem;\n  }\n  .result-stats[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n  }\n  .rs[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.5rem;\n    min-width: 50px;\n    border-radius: 1rem;\n  }\n  .rs-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .rs-num[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .rs-lbl[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .final-message[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.3rem 0.75rem;\n  }\n}\n.quiz-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.quiz-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f0e8de;\n  border-radius: 10px;\n}\n.quiz-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent),\n      var(--accent-light));\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.quiz-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-dark),\n      var(--accent));\n}\n[_ngcontent-%COMP%]::selection {\n  background: var(--accent);\n  color: white;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: var(--accent);\n  color: white;\n}\n/*# sourceMappingURL=quiz.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Quiz, [{
    type: Component,
    args: [{ selector: "app-quiz", standalone: false, template: `<div class="quiz-wrap">

  <!-- QUIZ ACTIVO -->
  <ng-container *ngIf="!finished">

    <!-- \u{1F525} T\xCDTULO CON EFECTO NEON -->
    <h2 class="mod-title">
      <span class="title-icon">\u26A1</span>
      <span class="title-text">Quiz Interactivo</span>
      <span class="title-badge" *ngIf="streak >= 3">\u{1F525} Racha x{{ streak }}</span>
    </h2>

    <!-- PROGRESS BAR -->
    <app-progress-bar [value]="progress" label="Avance"></app-progress-bar>

    <!-- CONTADOR PREMIUM -->
    <div class="q-meta">
      <div class="q-meta-left">
        <span class="q-num">
          <span class="q-num-icon">\u{1F4DD}</span>
          {{ currentIndex + 1 }} / {{ questions.length }}
        </span>
      </div>
      <div class="q-meta-right">
        <span class="stat stat-correct">
          <span class="stat-icon">\u2705</span>
          <span class="stat-value">{{ correct }}</span>
        </span>
        <span class="stat stat-wrong">
          <span class="stat-icon">\u274C</span>
          <span class="stat-value">{{ wrong }}</span>
        </span>
        <span class="stat stat-score">
          <span class="stat-icon">\u{1F3C5}</span>
          <span class="stat-value">{{ score }}</span>
        </span>
      </div>
    </div>

    <!-- FRASE CON EFECTO GLASS -->
    <div class="phrase-card">
      <div class="pc-label">
        <span class="pc-label-icon">\u{1F30D}</span>
        \xBFQu\xE9 significa en espa\xF1ol?
      </div>
      <div class="pc-phrase">{{ current.phrase.en }}</div>
      <div class="pc-hint" *ngIf="current.answered && !current.correct">
        \u{1F4A1} Pista: piensa en el contexto...
      </div>
    </div>

    <!-- OPCIONES CON ANIMACI\xD3N STAGGER -->
    <div class="options-grid">
      <button
        *ngFor="let opt of current.options; let i = index"
        class="opt"
        [style.animation-delay]="i * 0.06 + 's'"
        [class.opt-correct]="current.answered && current.correct && opt === current.phrase.es"
        [class.opt-wrong]="current.answered && !current.correct && opt === current.chosen"
        [class.opt-revealed]="current.revealed && opt === current.phrase.es"
        [disabled]="current.answered"
        (click)="answer(opt)">
        <span class="opt-letter">{{ ['A', 'B', 'C', 'D'][i] }}</span>
        <span class="opt-text">{{ opt }}</span>
      </button>
    </div>

    <!-- FEEDBACK - SIN MOSTRAR LA RESPUESTA CORRECTA -->
    <div class="feedback-box" *ngIf="current.answered" 
         [class.fb-correct]="current.correct" 
         [class.fb-wrong]="!current.correct">
      
      <div class="fb-header">
        <span class="fb-icon">{{ current.correct ? '\u{1F389}' : '\u{1F605}' }}</span>
        <span class="fb-title">{{ current.correct ? '\xA1Correcto!' : '\xA1Incorrecto!' }}</span>
      </div>

      <!-- \u{1F525} SOLO MOSTRAMOS LA RESPUESTA SI EL USUARIO LA REVELA -->
      <div *ngIf="current.revealed && !current.correct" class="fb-answer-reveal">
        <div class="fb-answer-box">
          <span class="fb-answer-label">Respuesta correcta:</span>
          <span class="fb-answer-value">{{ current.phrase.es }}</span>
        </div>
      </div>

      <!-- MENSAJE DE \xC1NIMO -->
      <div class="fb-message">
        <span *ngIf="current.correct">{{ current.phrase.note }}</span>
        <span *ngIf="!current.correct && !current.revealed">
          No te rindas, \xA1sigue intent\xE1ndolo! \u{1F4AA}
        </span>
        <span *ngIf="!current.correct && current.revealed">
          Ahora ya sabes la respuesta correcta. \xA1La pr\xF3xima ser\xE1!
        </span>
      </div>

      <!-- \u{1F525} BOT\xD3N PARA REVELAR LA RESPUESTA (SOLO SI FALL\xD3 Y NO LA HA REVELADO) -->
      <button *ngIf="!current.correct && !current.revealed" 
              class="btn-reveal" 
              (click)="revealAnswer()">
        <span class="btn-reveal-icon">\u{1F441}\uFE0F</span>
        Ver respuesta correcta
      </button>

      <!-- BOT\xD3N EXPL\xCDCAME (SI YA REVEL\xD3 O SI ES CORRECTO) -->
      <button *ngIf="(!current.correct && current.revealed) || current.correct" 
              class="btn-explain" 
              (click)="toggleExplain()">
        <span class="btn-explain-icon">{{ current.showExplain ? '\u{1F53C}' : '\u{1F4A1}' }}</span>
        {{ current.showExplain ? 'Ocultar explicaci\xF3n' : 'Expl\xEDcame m\xE1s' }}
      </button>

      <!-- EXPLICACI\xD3N DETALLADA -->
      <div class="explain-box" *ngIf="current.showExplain">
        <div class="explain-content">
          <div class="explain-row">
            <span class="explain-label">\u{1F4D6} Ingl\xE9s:</span>
            <span class="explain-value">{{ current.phrase.en }}</span>
          </div>
          <div class="explain-row">
            <span class="explain-label">\u{1F1EA}\u{1F1F8} Espa\xF1ol:</span>
            <span class="explain-value">{{ current.phrase.es }}</span>
          </div>
          <div class="explain-row explain-note">
            <span class="explain-label">\u{1F4DD} Nota:</span>
            <span class="explain-value">{{ current.phrase.note }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- BOT\xD3N SIGUIENTE CON EFECTO -->
    <div class="btn-row" *ngIf="current.answered">
      <button class="btn btn-primary" (click)="next()">
        <span class="btn-text">
          {{ currentIndex < questions.length - 1 ? 'Siguiente' : 'Ver resultados' }}
        </span>
        <span class="btn-icon">\u2192</span>
      </button>
    </div>

  </ng-container>

  <!-- RESULTADO FINAL - WOW EFFECT -->
  <div class="final-card" *ngIf="finished">
    <div class="final-decoration">
      <div class="final-sparkle" *ngFor="let i of [1,2,3,4,5,6]"></div>
    </div>
    
    <div class="final-icon">{{ pct >= 70 ? '\u{1F3C6}' : '\u{1F4DA}' }}</div>
    <div class="final-score">{{ correct }}/{{ questions.length }}</div>
    <div class="final-pct">{{ pct }}%</div>
    <div class="final-stars">{{ stars }}</div>
    <div class="final-level" [ngClass]="levelClass">{{ levelText }}</div>

    <div class="result-stats">
      <div class="rs rs-correct">
        <div class="rs-icon">\u2705</div>
        <div class="rs-num green">{{ correct }}</div>
        <div class="rs-lbl">Correctas</div>
      </div>
      <div class="rs rs-wrong">
        <div class="rs-icon">\u274C</div>
        <div class="rs-num red">{{ wrong }}</div>
        <div class="rs-lbl">Incorrectas</div>
      </div>
      <div class="rs rs-score">
        <div class="rs-icon">\u{1F3C5}</div>
        <div class="rs-num blue">{{ score }}</div>
        <div class="rs-lbl">Puntos</div>
      </div>
    </div>

    <div class="final-message" *ngIf="pct >= 90">
      \u{1F31F} \xA1Impresionante! Eres un verdadero experto.
    </div>
    <div class="final-message" *ngIf="pct >= 70 && pct < 90">
      \u{1F44F} \xA1Muy bien! Sigue as\xED para mejorar.
    </div>
    <div class="final-message" *ngIf="pct >= 50 && pct < 70">
      \u{1F4D6} \xA1Buen intento! Practica un poco m\xE1s.
    </div>
    <div class="final-message" *ngIf="pct < 50">
      \u{1F4AA} \xA1No te rindas! La pr\xE1ctica hace al maestro.
    </div>

    <button class="btn btn-primary btn-restart" (click)="init()">
      <span class="btn-icon">\u{1F504}</span>
      <span class="btn-text">Repetir quiz</span>
    </button>
  </div>

</div>`, styles: ['/* src/app/modules/quiz/quiz/quiz.css */\n:host {\n  --primary: #3d2e1e;\n  --primary-light: #6b4f3a;\n  --primary-dark: #2a1f14;\n  --accent: #d4a373;\n  --accent-light: #e8c9a0;\n  --accent-dark: #b8895c;\n  --accent-glow: rgba(212, 163, 115, 0.35);\n  --bg-cream: #fdf8f0;\n  --bg-warm: #f5ede4;\n  --bg-card: #fffbf5;\n  --success: #7cb892;\n  --success-dark: #5d9b75;\n  --success-glow: rgba(124, 184, 146, 0.3);\n  --success-bg: #ebf7f0;\n  --danger: #d48a7a;\n  --danger-dark: #c07363;\n  --danger-glow: rgba(212, 138, 122, 0.25);\n  --danger-bg: #fdf0eb;\n  --gold: #e8b86d;\n  --gold-glow: rgba(232, 184, 109, 0.35);\n  --glass-bg: rgba(255, 251, 245, 0.75);\n  --glass-border: rgba(212, 163, 115, 0.2);\n  --glass-shadow: 0 8px 32px rgba(61, 46, 30, 0.06);\n  --shadow-xs: 0 2px 8px rgba(61, 46, 30, 0.04);\n  --shadow-sm: 0 4px 16px rgba(61, 46, 30, 0.06);\n  --shadow-md: 0 8px 32px rgba(61, 46, 30, 0.08);\n  --shadow-lg: 0 16px 48px rgba(61, 46, 30, 0.1);\n  --shadow-xl: 0 24px 64px rgba(61, 46, 30, 0.12);\n  --shadow-2xl: 0 32px 80px rgba(61, 46, 30, 0.14);\n  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);\n  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  background: #f5ede4;\n}\n.quiz-wrap {\n  max-width: 960px;\n  margin: 3rem auto;\n  padding: 3rem 3.5rem;\n  background:\n    linear-gradient(\n      160deg,\n      #fffbf5 0%,\n      #f8f0e7 100%);\n  border-radius: 3.5rem;\n  box-shadow: var(--shadow-2xl), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s var(--ease-spring);\n  animation: containerEntrance 0.8s var(--ease-spring);\n}\n@keyframes containerEntrance {\n  0% {\n    opacity: 0;\n    transform: scale(0.95) translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.quiz-wrap::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 20%,\n      rgba(212, 163, 115, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 80% 80%,\n      rgba(124, 184, 146, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(232, 184, 109, 0.02) 0%,\n      transparent 70%);\n  pointer-events: none;\n  animation: gradientShift 20s ease-in-out infinite alternate;\n}\n@keyframes gradientShift {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  33% {\n    transform: scale(1.1) rotate(2deg);\n  }\n  66% {\n    transform: scale(0.9) rotate(-1deg);\n  }\n  100% {\n    transform: scale(1.05) rotate(1deg);\n  }\n}\n.quiz-wrap::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background-image:\n    radial-gradient(\n      2px 2px at 20% 30%,\n      rgba(212, 163, 115, 0.12),\n      transparent),\n    radial-gradient(\n      2px 2px at 40% 70%,\n      rgba(124, 184, 146, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 60% 20%,\n      rgba(232, 184, 109, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 80% 80%,\n      rgba(212, 163, 115, 0.1),\n      transparent),\n    radial-gradient(\n      2px 2px at 10% 90%,\n      rgba(124, 184, 146, 0.08),\n      transparent),\n    radial-gradient(\n      2px 2px at 90% 10%,\n      rgba(232, 184, 109, 0.06),\n      transparent);\n  background-size: 200px 200px;\n  pointer-events: none;\n  animation: particlesFloat 30s linear infinite;\n}\n@keyframes particlesFloat {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-50px, -50px);\n  }\n}\n.mod-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0 0 0.75rem 0;\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  position: relative;\n  flex-wrap: wrap;\n}\n.title-icon {\n  font-size: 2.2rem;\n  animation: iconDance 3s var(--ease-in-out) infinite;\n  display: inline-block;\n}\n@keyframes iconDance {\n  0%, 100% {\n    transform: scale(1) rotate(0deg);\n  }\n  25% {\n    transform: scale(1.1) rotate(-5deg);\n  }\n  75% {\n    transform: scale(1.05) rotate(5deg);\n  }\n}\n.title-text {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n}\n.title-text::before {\n  content: "Quiz Interactivo";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      var(--primary) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 0;\n  animation: glitchText 4s infinite;\n}\n@keyframes glitchText {\n  0%, 90%, 100% {\n    opacity: 0;\n    transform: translate(0);\n  }\n  92% {\n    opacity: 1;\n    transform: translate(-2px, -2px);\n  }\n  94% {\n    opacity: 1;\n    transform: translate(2px, 2px);\n  }\n  96% {\n    opacity: 1;\n    transform: translate(-1px, 1px);\n  }\n}\n.title-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #e8b86d,\n      #d4a373);\n  color: white;\n  padding: 0.2rem 1.2rem;\n  border-radius: 60px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  -webkit-text-fill-color: white;\n  animation: badgeGlow 2s var(--ease-in-out) infinite;\n  box-shadow: 0 4px 20px rgba(232, 184, 109, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.title-badge::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  animation: badgeShine 3s linear infinite;\n}\n@keyframes badgeShine {\n  0% {\n    transform: translateX(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(45deg);\n  }\n}\n@keyframes badgeGlow {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 4px 20px rgba(232, 184, 109, 0.3);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 4px 40px rgba(232, 184, 109, 0.5);\n  }\n}\n.q-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.6rem 1.5rem;\n  background: var(--glass-bg);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-radius: 80px;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--glass-shadow);\n  margin: 0.5rem 0 0.25rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.q-meta::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 163, 115, 0.06),\n      transparent);\n  animation: shimmerMeta 4s ease-in-out infinite;\n}\n@keyframes shimmerMeta {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.q-meta-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.q-num {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 700;\n  color: var(--primary);\n  font-size: 0.9rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  color: white;\n  padding: 0.3rem 1.2rem;\n  border-radius: 60px;\n  box-shadow: 0 4px 12px rgba(212, 163, 115, 0.25);\n  transition: all 0.3s var(--ease-spring);\n}\n.q-num:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 20px rgba(212, 163, 115, 0.35);\n}\n.q-num-icon {\n  font-size: 0.9rem;\n}\n.q-meta-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.stat {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-weight: 700;\n  font-size: 0.85rem;\n  padding: 0.2rem 0.8rem;\n  border-radius: 60px;\n  transition: all 0.3s var(--ease-spring);\n  cursor: default;\n}\n.stat:hover {\n  transform: translateY(-2px);\n}\n.stat-correct {\n  color: var(--success-dark);\n  background: rgba(124, 184, 146, 0.1);\n  border: 1px solid rgba(124, 184, 146, 0.15);\n}\n.stat-wrong {\n  color: var(--danger-dark);\n  background: rgba(212, 138, 122, 0.1);\n  border: 1px solid rgba(212, 138, 122, 0.15);\n}\n.stat-score {\n  color: var(--accent-dark);\n  background: rgba(212, 163, 115, 0.1);\n  border: 1px solid rgba(212, 163, 115, 0.15);\n}\n.stat-icon {\n  font-size: 0.85rem;\n  transition: transform 0.3s var(--ease-spring);\n}\n.stat:hover .stat-icon {\n  transform: scale(1.2) rotate(10deg);\n}\n.stat-value {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n.phrase-card {\n  background:\n    linear-gradient(\n      145deg,\n      #faf3ea 0%,\n      #f5ede4 100%);\n  border-radius: 2.5rem;\n  padding: 2.8rem 3rem 2.2rem;\n  margin: 1.75rem 0 2rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: var(--shadow-lg), inset 0 2px 0 rgba(255, 255, 255, 0.8);\n  position: relative;\n  overflow: hidden;\n  transform: perspective(1000px) rotateX(0deg);\n  transition: all 0.5s var(--ease-spring);\n}\n.phrase-card:hover {\n  transform: perspective(1000px) rotateX(2deg) translateY(-4px);\n  box-shadow: var(--shadow-xl);\n}\n.phrase-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 163, 115, 0.03) 0%,\n      rgba(124, 184, 146, 0.02) 50%,\n      rgba(232, 184, 109, 0.02) 100%);\n  pointer-events: none;\n}\n.phrase-card::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      ellipse at 30% 40%,\n      rgba(212, 163, 115, 0.04) 0%,\n      transparent 60%);\n  pointer-events: none;\n  animation: cardGlowPulse 6s ease-in-out infinite alternate;\n}\n@keyframes cardGlowPulse {\n  0% {\n    transform: translate(-10%, -10%) scale(1);\n  }\n  100% {\n    transform: translate(10%, 10%) scale(1.2);\n  }\n}\n.pc-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #8a7a6a;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.pc-label-icon {\n  font-size: 1rem;\n  animation: labelPulse 2s var(--ease-in-out) infinite;\n}\n@keyframes labelPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2) rotate(10deg);\n  }\n}\n.pc-phrase {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 2px 20px rgba(212, 163, 115, 0.1);\n}\n.pc-hint {\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n  color: #8a7a6a;\n  font-weight: 500;\n  position: relative;\n  z-index: 1;\n  animation: hintFloat 2.5s var(--ease-in-out) infinite;\n}\n@keyframes hintFloat {\n  0%, 100% {\n    opacity: 0.6;\n    transform: translateY(0);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-2px);\n  }\n}\n.options-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin: 1.75rem 0;\n}\n.opt {\n  background: #ffffff;\n  border: 2px solid #e8e0d6;\n  border-radius: 1.5rem;\n  padding: 1.1rem 1.5rem;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--primary);\n  cursor: pointer;\n  transition: all 0.4s var(--ease-spring);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-xs);\n  opacity: 0;\n  animation: optSlideIn 0.6s var(--ease-spring) forwards;\n  transform-origin: center;\n}\n@keyframes optSlideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95) rotateX(-5deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1) rotateX(0deg);\n  }\n}\n.opt::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),\n      rgba(212, 163, 115, 0.06) 0%,\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n}\n.opt:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.opt::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 163, 115, 0.04),\n      transparent);\n  transition: left 0.6s ease;\n}\n.opt:hover:not(:disabled)::after {\n  left: 100%;\n}\n.opt:hover:not(:disabled) {\n  border-color: var(--accent);\n  background:\n    linear-gradient(\n      135deg,\n      #fffbf5 0%,\n      #faf3ea 100%);\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 12px 40px var(--accent-glow);\n}\n.opt:active:not(:disabled) {\n  transform: scale(0.96) translateY(0);\n  transition-duration: 0.1s;\n}\n.opt:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n  transform: scale(0.98);\n}\n.opt-letter {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #f0e8de;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #6b5a4a;\n  flex-shrink: 0;\n  transition: all 0.4s var(--ease-spring);\n}\n.opt:hover:not(:disabled) .opt-letter {\n  background: var(--accent);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px var(--accent-glow);\n}\n.opt-text {\n  flex: 1;\n}\n.opt-correct {\n  border-color: var(--success) !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg) 0%,\n      #d4f0e0 100%) !important;\n  color: #3d7a5a !important;\n  animation: popCorrect 0.6s var(--ease-spring);\n  box-shadow: 0 4px 32px var(--success-glow) !important;\n}\n.opt-correct .opt-letter {\n  background: var(--success) !important;\n  color: white !important;\n  transform: scale(1.15);\n  box-shadow: 0 4px 16px var(--success-glow);\n}\n@keyframes popCorrect {\n  0% {\n    transform: scale(0.9);\n  }\n  30% {\n    transform: scale(1.08);\n  }\n  60% {\n    transform: scale(0.98);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.opt-wrong {\n  border-color: var(--danger) !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg) 0%,\n      #f5e0d8 100%) !important;\n  color: #8a5a4a !important;\n  animation: shakeWrong 0.7s var(--ease-spring);\n  box-shadow: 0 4px 32px var(--danger-glow) !important;\n}\n.opt-wrong .opt-letter {\n  background: var(--danger) !important;\n  color: white !important;\n  transform: scale(0.9);\n  box-shadow: 0 4px 16px var(--danger-glow);\n}\n@keyframes shakeWrong {\n  0%, 100% {\n    transform: translateX(0) rotate(0deg);\n  }\n  10% {\n    transform: translateX(-12px) rotate(-3deg);\n  }\n  20% {\n    transform: translateX(10px) rotate(3deg);\n  }\n  30% {\n    transform: translateX(-8px) rotate(-2deg);\n  }\n  40% {\n    transform: translateX(6px) rotate(2deg);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  70% {\n    transform: translateX(-2px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n}\n.opt-revealed {\n  border-color: var(--gold) !important;\n  background:\n    linear-gradient(\n      135deg,\n      #fcf6ea 0%,\n      #f5ede0 100%) !important;\n  box-shadow: 0 4px 32px var(--gold-glow) !important;\n  animation: revealPulse 1s var(--ease-in-out) infinite;\n}\n.opt-revealed .opt-letter {\n  background: var(--gold) !important;\n  color: white !important;\n  transform: scale(1.1);\n  box-shadow: 0 4px 16px var(--gold-glow);\n}\n@keyframes revealPulse {\n  0%, 100% {\n    box-shadow: 0 4px 32px var(--gold-glow);\n  }\n  50% {\n    box-shadow: 0 4px 48px rgba(232, 184, 109, 0.4);\n  }\n}\n.feedback-box {\n  border-radius: 1.75rem;\n  padding: 1.75rem 2.25rem;\n  margin: 1.5rem 0 1.75rem;\n  animation: feedbackSlide 0.6s var(--ease-spring);\n  border: 1px solid transparent;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s var(--ease-spring);\n}\n@keyframes feedbackSlide {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.fb-correct {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg) 0%,\n      #d4f0e0 100%);\n  border-color: #b5d8c8;\n  box-shadow: 0 4px 32px rgba(124, 184, 146, 0.08);\n}\n.fb-correct::before {\n  content: "\\1f389";\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 3.5rem;\n  opacity: 0.12;\n  animation: confettiFloat 3s var(--ease-in-out) infinite;\n}\n@keyframes confettiFloat {\n  0%, 100% {\n    transform: translateY(-50%) scale(1) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-50%) scale(1.1) rotate(10deg);\n  }\n}\n.fb-wrong {\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg) 0%,\n      #f5e0d8 100%);\n  border-color: #e5c8bc;\n  box-shadow: 0 4px 32px rgba(212, 138, 122, 0.06);\n}\n.fb-wrong::before {\n  content: "\\1f4aa";\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 3.5rem;\n  opacity: 0.12;\n  animation: musclePump 2s var(--ease-in-out) infinite;\n}\n@keyframes musclePump {\n  0%, 100% {\n    transform: translateY(-50%) scale(1);\n  }\n  50% {\n    transform: translateY(-50%) scale(1.15);\n  }\n}\n.fb-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.fb-icon {\n  font-size: 1.8rem;\n  animation: iconBounce 1.5s var(--ease-bounce) infinite;\n}\n@keyframes iconBounce {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.fb-title {\n  font-size: 1.3rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n}\n.fb-correct .fb-title {\n  color: #3d7a5a;\n}\n.fb-wrong .fb-title {\n  color: #8a5a4a;\n}\n.fb-answer-reveal {\n  margin: 0.75rem 0;\n  padding: 0.75rem 1.25rem;\n  background: rgba(255, 251, 245, 0.7);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 1rem;\n  border-left: 4px solid var(--accent);\n  animation: revealSlide 0.5s var(--ease-spring);\n}\n@keyframes revealSlide {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.fb-answer-box {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.fb-answer-label {\n  font-weight: 600;\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.fb-answer-value {\n  font-weight: 800;\n  color: var(--accent-dark);\n  font-size: 1.1rem;\n  padding: 0.2rem 1rem;\n  background: rgba(212, 163, 115, 0.1);\n  border-radius: 60px;\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  animation: answerPulse 1.5s var(--ease-in-out) infinite;\n}\n@keyframes answerPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n.fb-message {\n  font-size: 0.95rem;\n  color: var(--primary);\n  line-height: 1.6;\n  margin: 0.5rem 0;\n}\n.btn-reveal,\n.btn-explain {\n  margin-top: 0.5rem;\n  border: none;\n  border-radius: 60px;\n  padding: 0.55rem 1.8rem;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s var(--ease-spring);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.btn-reveal {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent-light));\n  color: white;\n  box-shadow: 0 4px 24px var(--accent-glow);\n}\n.btn-reveal::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 200%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  transition: left 0.6s ease;\n}\n.btn-reveal:hover::before {\n  left: 100%;\n}\n.btn-reveal:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 40px var(--accent-glow);\n}\n.btn-reveal:active {\n  transform: scale(0.95);\n}\n.btn-explain {\n  background: rgba(255, 251, 245, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  color: var(--primary);\n  border: 1.5px solid #d8d0c6;\n}\n.btn-explain:hover {\n  border-color: var(--accent);\n  background: rgba(255, 251, 245, 0.95);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.btn-explain:active {\n  transform: scale(0.95);\n}\n.btn-reveal-icon,\n.btn-explain-icon {\n  transition: transform 0.3s var(--ease-spring);\n}\n.btn-reveal:hover .btn-reveal-icon,\n.btn-explain:hover .btn-explain-icon {\n  transform: scale(1.2) rotate(10deg);\n}\n.explain-box {\n  margin-top: 0.75rem;\n  padding: 1.25rem 1.75rem;\n  background: rgba(255, 251, 245, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 1.25rem;\n  border: 1px solid rgba(212, 163, 115, 0.15);\n  box-shadow: var(--shadow-sm);\n  animation: explainExpand 0.5s var(--ease-spring);\n  transform-origin: top center;\n}\n@keyframes explainExpand {\n  0% {\n    opacity: 0;\n    transform: scaleY(0.8) translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleY(1) translateY(0);\n  }\n}\n.explain-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.explain-row {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid rgba(61, 46, 30, 0.04);\n}\n.explain-row:last-child {\n  border-bottom: none;\n}\n.explain-label {\n  font-weight: 700;\n  color: #8a7a6a;\n  min-width: 80px;\n  font-size: 0.85rem;\n}\n.explain-value {\n  color: var(--primary);\n  flex: 1;\n  font-weight: 500;\n}\n.explain-note .explain-value {\n  color: #6b5a4a;\n  font-style: italic;\n}\n.btn-row {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.btn {\n  border: none;\n  border-radius: 80px;\n  padding: 1rem 3rem;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.5s var(--ease-spring);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  color: white;\n  box-shadow: 0 6px 32px rgba(212, 163, 115, 0.3);\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 300%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.06),\n      transparent,\n      rgba(255, 255, 255, 0.06),\n      transparent);\n  animation: waveSlide 4s linear infinite;\n}\n@keyframes waveSlide {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(33.33%);\n  }\n}\n.btn::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      transparent,\n      rgba(255, 255, 255, 0.03));\n  pointer-events: none;\n}\n.btn:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 12px 48px rgba(212, 163, 115, 0.4);\n}\n.btn:active {\n  transform: scale(0.96) translateY(0);\n  transition-duration: 0.1s;\n}\n.btn-icon {\n  display: inline-block;\n  transition: transform 0.4s var(--ease-spring);\n  font-size: 1.1rem;\n}\n.btn:hover .btn-icon {\n  transform: translateX(6px) scale(1.1);\n}\n.final-card {\n  text-align: center;\n  padding: 3.5rem 2rem 3rem;\n  animation: finalCinematic 0.9s var(--ease-spring);\n  position: relative;\n  overflow: hidden;\n}\n@keyframes finalCinematic {\n  0% {\n    opacity: 0;\n    transform: scale(0.8) translateY(50px) rotateX(10deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0) rotateX(0deg);\n  }\n}\n.final-decoration {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.final-sparkle {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: var(--gold);\n  border-radius: 50%;\n  box-shadow: 0 0 20px var(--gold-glow);\n  animation: sparkleFloat 4s var(--ease-in-out) infinite;\n}\n.final-sparkle:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.final-sparkle:nth-child(2) {\n  top: 15%;\n  right: 12%;\n  animation-delay: 0.6s;\n}\n.final-sparkle:nth-child(3) {\n  bottom: 20%;\n  left: 15%;\n  animation-delay: 1.2s;\n}\n.final-sparkle:nth-child(4) {\n  bottom: 25%;\n  right: 18%;\n  animation-delay: 1.8s;\n}\n.final-sparkle:nth-child(5) {\n  top: 45%;\n  left: 5%;\n  animation-delay: 0.3s;\n}\n.final-sparkle:nth-child(6) {\n  top: 40%;\n  right: 8%;\n  animation-delay: 0.9s;\n}\n.final-sparkle:nth-child(7) {\n  top: 70%;\n  left: 25%;\n  animation-delay: 1.5s;\n}\n.final-sparkle:nth-child(8) {\n  top: 65%;\n  right: 22%;\n  animation-delay: 2.1s;\n}\n@keyframes sparkleFloat {\n  0%, 100% {\n    opacity: 0;\n    transform: translate(0, 0) scale(0) rotate(0deg);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(-15px, -25px) scale(1) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: translate(15px, 15px) scale(0.8) rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-5px, 35px) scale(0) rotate(360deg);\n  }\n}\n.final-icon {\n  font-size: 6rem;\n  line-height: 1;\n  animation: trophyBounce 2.5s var(--ease-bounce) infinite;\n  display: inline-block;\n  filter: drop-shadow(0 4px 20px rgba(232, 184, 109, 0.3));\n}\n@keyframes trophyBounce {\n  0%, 100% {\n    transform: translateY(0) scale(1) rotate(-2deg);\n  }\n  25% {\n    transform: translateY(-10px) scale(1.05) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0) scale(1) rotate(2deg);\n  }\n  75% {\n    transform: translateY(-5px) scale(1.02) rotate(0deg);\n  }\n}\n.final-score {\n  font-size: 4.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 50%,\n      var(--gold) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0.5rem 0 0.1rem;\n  letter-spacing: -0.04em;\n  animation: scoreGlow 3s var(--ease-in-out) infinite;\n}\n@keyframes scoreGlow {\n  0%, 100% {\n    filter: drop-shadow(0 0 0px transparent);\n  }\n  50% {\n    filter: drop-shadow(0 0 30px rgba(212, 163, 115, 0.15));\n  }\n}\n.final-pct {\n  font-size: 1.3rem;\n  color: #8a7a6a;\n  font-weight: 600;\n}\n.final-stars {\n  font-size: 3.2rem;\n  margin: 0.5rem 0 0.5rem;\n  letter-spacing: 0.4rem;\n  animation: starsGlow 2.5s var(--ease-in-out) infinite alternate;\n}\n@keyframes starsGlow {\n  0% {\n    filter: drop-shadow(0 0 0px rgba(232, 184, 109, 0));\n    transform: scale(0.95);\n  }\n  100% {\n    filter: drop-shadow(0 0 40px rgba(232, 184, 109, 0.3));\n    transform: scale(1.05);\n  }\n}\n.final-level {\n  display: inline-block;\n  font-size: 1.2rem;\n  font-weight: 800;\n  padding: 0.5rem 3rem;\n  border-radius: 80px;\n  margin: 0.5rem 0 1.5rem;\n  animation: levelPulse 2s var(--ease-in-out) infinite;\n  letter-spacing: 0.02em;\n}\n@keyframes levelPulse {\n  0%, 100% {\n    transform: scale(1) translateY(0);\n  }\n  50% {\n    transform: scale(1.03) translateY(-2px);\n  }\n}\n.level-a {\n  background:\n    linear-gradient(\n      135deg,\n      var(--success-bg),\n      #d4f0e0);\n  color: #3d7a5a;\n  box-shadow: 0 4px 32px rgba(124, 184, 146, 0.15);\n}\n.level-b {\n  background:\n    linear-gradient(\n      135deg,\n      #faf3ea,\n      #f0e8de);\n  color: #6b4f3a;\n  box-shadow: 0 4px 32px rgba(212, 163, 115, 0.15);\n}\n.level-c {\n  background:\n    linear-gradient(\n      135deg,\n      #fcf6ea,\n      #f5ede0);\n  color: #8a7a4a;\n  box-shadow: 0 4px 32px rgba(232, 184, 109, 0.12);\n}\n.level-d {\n  background:\n    linear-gradient(\n      135deg,\n      var(--danger-bg),\n      #f5e0d8);\n  color: #8a5a4a;\n  box-shadow: 0 4px 32px rgba(212, 138, 122, 0.1);\n}\n.result-stats {\n  display: flex;\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 2rem 0 2rem;\n  flex-wrap: wrap;\n}\n.rs {\n  text-align: center;\n  padding: 0.75rem 1.5rem;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 1.5rem;\n  border: 1px solid var(--glass-border);\n  min-width: 90px;\n  transition: all 0.4s var(--ease-spring);\n  cursor: default;\n  box-shadow: var(--shadow-xs);\n}\n.rs:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: var(--shadow-lg);\n}\n.rs-icon {\n  font-size: 1.8rem;\n  margin-bottom: 0.2rem;\n  display: block;\n  transition: transform 0.4s var(--ease-spring);\n}\n.rs:hover .rs-icon {\n  transform: scale(1.2) rotate(10deg);\n}\n.rs-num {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  display: block;\n}\n.rs-num.green {\n  color: var(--success-dark);\n  text-shadow: 0 0 20px var(--success-glow);\n}\n.rs-num.red {\n  color: var(--danger-dark);\n  text-shadow: 0 0 20px var(--danger-glow);\n}\n.rs-num.blue {\n  color: var(--accent-dark);\n  text-shadow: 0 0 20px var(--accent-glow);\n}\n.rs-lbl {\n  font-size: 0.7rem;\n  color: #8a7a6a;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  display: block;\n  margin-top: 0.1rem;\n}\n.final-message {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--primary);\n  margin: 0 0 2rem;\n  padding: 0.6rem 1.5rem;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 80px;\n  display: inline-block;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--shadow-sm);\n  animation: messageFloat 3s var(--ease-in-out) infinite;\n}\n@keyframes messageFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n.btn-restart {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent-light)) !important;\n  box-shadow: 0 6px 32px var(--accent-glow) !important;\n}\n.btn-restart:hover {\n  box-shadow: 0 12px 48px var(--accent-glow) !important;\n}\n.btn-restart .btn-icon {\n  animation: restartSpin 4s linear infinite;\n}\n@keyframes restartSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\napp-progress-bar {\n  display: block;\n  margin: 0.5rem 0 0.25rem;\n}\n::ng-deep .progress-bar {\n  height: 8px !important;\n  border-radius: 20px !important;\n  background: #e8e0d6 !important;\n  overflow: hidden;\n  box-shadow: inset 0 2px 4px rgba(61, 46, 30, 0.04);\n}\n::ng-deep .progress-bar .progress-fill {\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--accent-light),\n      var(--gold)) !important;\n  border-radius: 20px !important;\n  transition: width 0.8s var(--ease-spring);\n  position: relative;\n  overflow: hidden;\n  background-size: 200% 100% !important;\n  animation: gradientProgress 3s ease-in-out infinite;\n}\n@keyframes gradientProgress {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n::ng-deep .progress-bar .progress-fill::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 300%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  animation: shimmerProgress 2s ease-in-out infinite;\n}\n@keyframes shimmerProgress {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(33.33%);\n  }\n}\n::ng-deep .progress-bar .progress-label {\n  font-weight: 600 !important;\n  color: var(--primary) !important;\n  font-size: 0.8rem !important;\n}\n@media (max-width: 1024px) {\n  .quiz-wrap {\n    padding: 2.5rem 2.5rem;\n    margin: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .quiz-wrap {\n    padding: 1.75rem 1.5rem;\n    margin: 1.5rem 1rem;\n    border-radius: 2.5rem;\n  }\n  .mod-title {\n    font-size: 1.5rem;\n  }\n  .title-badge {\n    font-size: 0.65rem;\n    padding: 0.15rem 0.9rem;\n  }\n  .q-meta {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    border-radius: 60px;\n    padding: 0.6rem 1.2rem;\n  }\n  .q-meta-left,\n  .q-meta-right {\n    justify-content: center;\n  }\n  .q-num {\n    font-size: 0.8rem;\n    padding: 0.2rem 1rem;\n  }\n  .stat {\n    font-size: 0.8rem;\n    padding: 0.15rem 0.6rem;\n  }\n  .stat-value {\n    font-size: 0.85rem;\n  }\n  .pc-phrase {\n    font-size: 1.8rem;\n  }\n  .phrase-card {\n    padding: 2rem 1.5rem 1.5rem;\n    border-radius: 2rem;\n  }\n  .options-grid {\n    grid-template-columns: 1fr;\n    gap: 0.8rem;\n  }\n  .opt {\n    padding: 0.9rem 1.2rem;\n    font-size: 0.95rem;\n    border-radius: 1.25rem;\n  }\n  .opt-letter {\n    width: 26px;\n    height: 26px;\n    font-size: 0.7rem;\n  }\n  .feedback-box {\n    padding: 1.25rem 1.5rem;\n    border-radius: 1.5rem;\n  }\n  .fb-correct::before,\n  .fb-wrong::before {\n    display: none;\n  }\n  .fb-title {\n    font-size: 1.1rem;\n  }\n  .fb-answer-value {\n    font-size: 1rem;\n  }\n  .btn-reveal,\n  .btn-explain {\n    font-size: 0.8rem;\n    padding: 0.45rem 1.2rem;\n  }\n  .btn {\n    padding: 0.8rem 2rem;\n    font-size: 0.9rem;\n    width: 100%;\n    justify-content: center;\n  }\n  .btn-row {\n    justify-content: stretch;\n  }\n  .result-stats {\n    gap: 1rem;\n  }\n  .rs {\n    padding: 0.5rem 0.75rem;\n    min-width: 70px;\n  }\n  .rs-num {\n    font-size: 1.6rem;\n  }\n  .final-score {\n    font-size: 3.5rem;\n  }\n  .final-stars {\n    font-size: 2.6rem;\n  }\n  .final-level {\n    font-size: 1rem;\n    padding: 0.35rem 2rem;\n  }\n  .final-message {\n    font-size: 0.95rem;\n    padding: 0.4rem 1.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .quiz-wrap {\n    padding: 1rem 0.75rem;\n    margin: 0.75rem 0.5rem;\n    border-radius: 1.75rem;\n  }\n  .mod-title {\n    font-size: 1.15rem;\n    gap: 0.4rem;\n  }\n  .title-icon {\n    font-size: 1.4rem;\n  }\n  .title-badge {\n    font-size: 0.55rem;\n    padding: 0.1rem 0.6rem;\n  }\n  .q-meta {\n    border-radius: 40px;\n    padding: 0.4rem 0.75rem;\n  }\n  .q-num {\n    font-size: 0.7rem;\n    padding: 0.15rem 0.8rem;\n  }\n  .stat {\n    font-size: 0.7rem;\n    padding: 0.1rem 0.4rem;\n  }\n  .stat-value {\n    font-size: 0.75rem;\n  }\n  .pc-phrase {\n    font-size: 1.3rem;\n  }\n  .phrase-card {\n    padding: 1.25rem 0.75rem 1rem;\n    margin: 1rem 0 1.25rem;\n    border-radius: 1.5rem;\n  }\n  .pc-label {\n    font-size: 0.6rem;\n  }\n  .opt {\n    padding: 0.65rem 0.85rem;\n    font-size: 0.82rem;\n    border-radius: 1rem;\n    gap: 0.5rem;\n  }\n  .opt-letter {\n    width: 22px;\n    height: 22px;\n    font-size: 0.6rem;\n  }\n  .feedback-box {\n    padding: 0.75rem 0.75rem;\n    border-radius: 1.25rem;\n  }\n  .fb-title {\n    font-size: 0.95rem;\n  }\n  .fb-icon {\n    font-size: 1.3rem;\n  }\n  .fb-answer-value {\n    font-size: 0.85rem;\n    padding: 0.15rem 0.75rem;\n  }\n  .btn-reveal,\n  .btn-explain {\n    font-size: 0.7rem;\n    padding: 0.3rem 0.9rem;\n  }\n  .explain-box {\n    padding: 0.75rem 1rem;\n  }\n  .explain-row {\n    font-size: 0.8rem;\n    gap: 0.4rem;\n  }\n  .explain-label {\n    min-width: 60px;\n    font-size: 0.75rem;\n  }\n  .btn {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.8rem;\n  }\n  .final-card {\n    padding: 1.5rem 0.5rem;\n  }\n  .final-icon {\n    font-size: 4rem;\n  }\n  .final-score {\n    font-size: 2.5rem;\n  }\n  .final-pct {\n    font-size: 1rem;\n  }\n  .final-stars {\n    font-size: 1.8rem;\n    letter-spacing: 0.2rem;\n  }\n  .final-level {\n    font-size: 0.85rem;\n    padding: 0.25rem 1.5rem;\n  }\n  .result-stats {\n    gap: 0.4rem;\n  }\n  .rs {\n    padding: 0.3rem 0.5rem;\n    min-width: 50px;\n    border-radius: 1rem;\n  }\n  .rs-icon {\n    font-size: 1.2rem;\n  }\n  .rs-num {\n    font-size: 1.1rem;\n  }\n  .rs-lbl {\n    font-size: 0.55rem;\n  }\n  .final-message {\n    font-size: 0.8rem;\n    padding: 0.3rem 0.75rem;\n  }\n}\n.quiz-wrap::-webkit-scrollbar {\n  width: 6px;\n}\n.quiz-wrap::-webkit-scrollbar-track {\n  background: #f0e8de;\n  border-radius: 10px;\n}\n.quiz-wrap::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent),\n      var(--accent-light));\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.quiz-wrap::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-dark),\n      var(--accent));\n}\n::selection {\n  background: var(--accent);\n  color: white;\n}\n::-moz-selection {\n  background: var(--accent);\n  color: white;\n}\n/*# sourceMappingURL=quiz.css.map */\n'] }]
  }], () => [{ type: PhrasesService }, { type: ScoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Quiz, { className: "Quiz", filePath: "src/app/modules/quiz/quiz/quiz.ts", lineNumber: 21 });
})();

// src/app/modules/quiz/quiz-routing-module.ts
var quizRoutes = [
  { path: "", component: Quiz }
];

// src/app/modules/quiz/quiz-module.ts
var QuizModule = class _QuizModule {
  static \u0275fac = function QuizModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _QuizModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(quizRoutes),
    SharedModule
    // ← Usar SharedModule en lugar de imports individuales
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizModule, [{
    type: NgModule,
    args: [{
      declarations: [Quiz],
      imports: [
        CommonModule,
        RouterModule.forChild(quizRoutes),
        SharedModule
        // ← Usar SharedModule en lugar de imports individuales
      ],
      exports: [Quiz]
    }]
  }], null, null);
})();
export {
  QuizModule
};
//# sourceMappingURL=chunk-XYBZZ65W.js.map
