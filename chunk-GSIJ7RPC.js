import {
  PhrasesService
} from "./chunk-4HUSV4D4.js";
import {
  ScoreService,
  SharedModule
} from "./chunk-HZT7I3MG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  SlicePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PGTZPRSX.js";

// src/app/modules/dragdrop/dragdrop/dragdrop.ts
function Dragdrop_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("dragstart", function Dragdrop_div_19_Template_div_dragstart_0_listener() {
      const es_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart(es_r2));
    });
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const es_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("dragging", ctx_r2.dragValue === es_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", i_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", es_r2, " ");
  }
}
function Dragdrop_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " \u2705 \xA1Todas las traducciones est\xE1n colocadas! ");
    \u0275\u0275elementEnd();
  }
}
function Dragdrop_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function Dragdrop_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function Dragdrop_div_22_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4A1} Pista: ", \u0275\u0275pipeBind3(2, 1, item_r6.phrase.es, 0, 3), "... ");
  }
}
function Dragdrop_div_22_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, " \u{1F4E5} Suelta la traducci\xF3n aqu\xED ");
    \u0275\u0275elementEnd();
  }
}
function Dragdrop_div_22_span_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function Dragdrop_div_22_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "span", 39);
    \u0275\u0275text(2, "\u{1F4CC}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, Dragdrop_div_22_span_15_span_4_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.filled, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.checked && item_r6.status !== "correct");
  }
}
function Dragdrop_div_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 46);
    \u0275\u0275text(8, "\u{1F4A1} Intenta con otra palabra");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1('"', item_r6.filled, '" no es correcto para esta frase');
  }
}
function Dragdrop_div_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 47)(2, "span", 44);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\xA1Correcto! ");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1('"', item_r6.filled, '" es la traducci\xF3n correcta');
  }
}
function Dragdrop_div_22_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4, "La respuesta correcta es: ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', item_r6.filled, '" es incorrecto');
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', item_r6.phrase.es, '"');
  }
}
function Dragdrop_div_22_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 45);
    \u0275\u0275text(2, "Sin respuesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4, "La respuesta correcta es: ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1('"', item_r6.phrase.es, '"');
  }
}
function Dragdrop_div_22_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, Dragdrop_div_22_div_18_span_4_Template, 7, 2, "span", 48)(5, Dragdrop_div_22_div_18_span_5_Template, 7, 1, "span", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", item_r6.filled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r6.filled);
  }
}
function Dragdrop_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, Dragdrop_div_22_span_4_Template, 2, 0, "span", 25)(5, Dragdrop_div_22_span_5_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26)(7, "div", 27)(8, "span", 28);
    \u0275\u0275text(9, "\u{1F524}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Dragdrop_div_22_span_12_Template, 3, 5, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 31);
    \u0275\u0275listener("dragover", function Dragdrop_div_22_Template_div_dragover_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("dragleave", function Dragdrop_div_22_Template_div_dragleave_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragLeave($event));
    })("drop", function Dragdrop_div_22_Template_div_drop_13_listener($event) {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop(item_r6, $event));
    })("click", function Dragdrop_div_22_Template_div_click_13_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFromZone(item_r6));
    });
    \u0275\u0275template(14, Dragdrop_div_22_span_14_Template, 2, 0, "span", 32)(15, Dragdrop_div_22_span_15_Template, 5, 2, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, Dragdrop_div_22_div_16_Template, 9, 1, "div", 34)(17, Dragdrop_div_22_div_17_Template, 8, 1, "div", 34)(18, Dragdrop_div_22_div_18_Template, 6, 2, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("correct-block", item_r6.status === "correct")("incorrect-block", item_r6.status === "incorrect")("error-shake", item_r6.showError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4DD} FRASE ", i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.status === "correct");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.status === "incorrect");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r6.phrase.en);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.showHint);
    \u0275\u0275advance();
    \u0275\u0275classProp("filled", item_r6.status === "filled")("correct", item_r6.status === "correct")("incorrect", item_r6.status === "incorrect")("drag-over", ctx_r2.dragOverItem === item_r6)("error", item_r6.showError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r6.filled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.filled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.showError && !ctx_r2.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.status === "correct" && ctx_r2.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.checked && item_r6.status === "incorrect");
  }
}
function Dragdrop_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("perfect", ctx_r2.isPerfect)("good", !ctx_r2.isPerfect && ctx_r2.correctCount / ctx_r2.items.length >= 0.7)("keep-going", !ctx_r2.isPerfect && ctx_r2.correctCount / ctx_r2.items.length < 0.7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isPerfect ? "\u{1F389}" : ctx_r2.correctCount / ctx_r2.items.length >= 0.7 ? "\u{1F44F}" : "\u{1F4AA}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.correctCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r2.items.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.resultMessage, " ");
  }
}
function Dragdrop_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function Dragdrop_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.check());
    });
    \u0275\u0275text(1, " \u{1F680} Completar ");
    \u0275\u0275elementEnd();
  }
}
var Dragdrop = class _Dragdrop {
  phrasesService;
  scoreService;
  items = [];
  bank = [];
  dragValue = "";
  dragOverItem = null;
  checked = false;
  correctCount = 0;
  progress = 0;
  constructor(phrasesService, scoreService) {
    this.phrasesService = phrasesService;
    this.scoreService = scoreService;
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.checked = false;
    this.correctCount = 0;
    this.progress = 0;
    this.dragValue = "";
    this.dragOverItem = null;
    const subset = this.phrasesService.getRandom(8);
    this.items = subset.map((p) => ({
      phrase: p,
      filled: "",
      status: "empty",
      showError: false,
      showHint: false
    }));
    this.bank = this.shuffle(subset.map((p) => p.es));
  }
  onDragStart(value) {
    this.dragValue = value;
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragLeave(event) {
    this.dragOverItem = null;
  }
  onDrop(item, event) {
    event.preventDefault();
    this.dragOverItem = null;
    if (!this.dragValue || this.checked)
      return;
    if (item.status === "correct")
      return;
    if (item.showError) {
      item.showError = false;
      item.showHint = false;
    }
    const isCorrect = this.dragValue === item.phrase.es;
    if (isCorrect) {
      if (item.filled) {
        this.bank.push(item.filled);
      }
      const idx = this.bank.indexOf(this.dragValue);
      if (idx > -1) {
        this.bank.splice(idx, 1);
      }
      item.filled = this.dragValue;
      item.status = "correct";
      item.showError = false;
      item.showHint = false;
      this.dragValue = "";
      this.updateProgress();
    } else {
      item.showError = true;
      item.showHint = true;
      if (!item.filled) {
        item.filled = this.dragValue;
        item.status = "filled";
      }
      if (!this.bank.includes(this.dragValue)) {
        this.bank.push(this.dragValue);
      }
      this.dragValue = "";
      setTimeout(() => {
        if (item.showError && !this.checked) {
          if (item.filled && !this.bank.includes(item.filled)) {
            this.bank.push(item.filled);
          }
          item.filled = "";
          item.status = "empty";
          item.showError = false;
          item.showHint = false;
        }
      }, 2e3);
    }
  }
  removeFromZone(item) {
    if (this.checked || !item.filled || item.status === "correct")
      return;
    if (!this.bank.includes(item.filled)) {
      this.bank.push(item.filled);
    }
    item.filled = "";
    item.status = "empty";
    item.showError = false;
    item.showHint = false;
    this.updateProgress();
  }
  check() {
    this.checked = true;
    this.correctCount = 0;
    this.items.forEach((item) => {
      item.showError = false;
      item.showHint = false;
      if (!item.filled) {
        item.status = "incorrect";
      } else if (item.filled === item.phrase.es) {
        item.status = "correct";
        this.correctCount++;
      } else {
        item.status = "incorrect";
      }
    });
    const baseScore = this.correctCount * 5;
    this.scoreService.add(baseScore);
    if (this.correctCount === this.items.length) {
      this.scoreService.addStreak();
    } else {
      this.scoreService.resetStreak();
    }
  }
  get resultMessage() {
    const pct = Math.round(this.correctCount / this.items.length * 100);
    if (pct === 100)
      return "\u{1F389} \xA1Perfecto! Has acertado todas las traducciones.";
    if (pct >= 70)
      return `\u{1F44F} Excelente trabajo. Has acertado ${this.correctCount} de ${this.items.length} (${pct}%).`;
    return `\u{1F4AA} Buen intento. Has acertado ${this.correctCount} de ${this.items.length} (${pct}%). \xA1Sigue practicando!`;
  }
  get isPerfect() {
    return this.correctCount === this.items.length && this.items.length > 0;
  }
  get allFilled() {
    return this.items.every((i) => i.filled !== "");
  }
  updateProgress() {
    const correct = this.items.filter((i) => i.status === "correct").length;
    this.progress = Math.round(correct / this.items.length * 100);
  }
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  static \u0275fac = function Dragdrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dragdrop)(\u0275\u0275directiveInject(PhrasesService), \u0275\u0275directiveInject(ScoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dragdrop, selectors: [["app-dragdrop"]], standalone: false, decls: 30, vars: 10, consts: [[1, "dnd-wrap"], [1, "mod-title"], [1, "emoji"], [1, "mod-sub"], [1, "progress-wrap"], [1, "progress-fill"], [1, "progress-label"], [1, "bank-label"], [1, "badge"], [1, "bank"], ["class", "chip", "draggable", "true", 3, "dragging", "dragstart", 4, "ngFor", "ngForOf"], ["class", "bank-empty", 4, "ngIf"], [1, "phrases-list"], ["class", "phrase-block", 3, "correct-block", "incorrect-block", "error-shake", 4, "ngFor", "ngForOf"], ["class", "result-banner", 3, "perfect", "good", "keep-going", 4, "ngIf"], [1, "btn-row"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-danger", 3, "click"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["draggable", "true", 1, "chip", 3, "dragstart"], [1, "chip-number"], [1, "bank-empty"], [1, "phrase-block"], [1, "phrase-header"], [1, "phrase-number"], ["class", "phrase-status", 4, "ngIf"], [1, "phrase-row"], [1, "phrase-en"], [1, "icon"], [1, "phrase-text"], ["class", "hint-badge", 4, "ngIf"], [1, "drop-zone", 3, "dragover", "dragleave", "drop", "click"], ["class", "zone-placeholder", 4, "ngIf"], ["class", "zone-value", 4, "ngIf"], ["class", "row-feedback", 4, "ngIf"], [1, "phrase-status"], [1, "hint-badge"], [1, "zone-placeholder"], [1, "zone-value"], [1, "zone-emoji"], ["class", "zone-remove", "title", "Quitar", 4, "ngIf"], ["title", "Quitar", 1, "zone-remove"], [1, "row-feedback"], [1, "fb-err"], [1, "fb-icon"], [1, "fb-detail"], [1, "fb-hint"], [1, "fb-ok"], [4, "ngIf"], [1, "result-banner"], [1, "result-icon"], [1, "result-text"], [1, "highlight"], [1, "result-details"], [1, "btn", "btn-success", 3, "click"]], template: function Dragdrop_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " English Express ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Arrastra cada traducci\xF3n al recuadro correcto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275element(8, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "span");
      \u0275\u0275text(11, "Completado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275text(15, " \u{1F5C3}\uFE0F Traducciones disponibles ");
      \u0275\u0275elementStart(16, "span", 8);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275template(19, Dragdrop_div_19_Template, 4, 4, "div", 10)(20, Dragdrop_div_20_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275template(22, Dragdrop_div_22_Template, 19, 26, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, Dragdrop_div_23_Template, 9, 10, "div", 14);
      \u0275\u0275elementStart(24, "div", 15)(25, "button", 16);
      \u0275\u0275listener("click", function Dragdrop_Template_button_click_25_listener() {
        return ctx.check();
      });
      \u0275\u0275text(26, " \u2705 Verificar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 17);
      \u0275\u0275listener("click", function Dragdrop_Template_button_click_27_listener() {
        return ctx.init();
      });
      \u0275\u0275text(28, " \u{1F504} Nueva Ronda ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, Dragdrop_button_29_Template, 2, 0, "button", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("width", ctx.progress, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.progress, "%");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.bank.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.bank);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.bank.length === 0 && !ctx.checked);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.checked);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.checked);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.checked && ctx.allFilled);
    }
  }, dependencies: [NgForOf, NgIf, SlicePipe], styles: ['\n[_ngcontent-%COMP%]:root {\n  --bg-cream: #FFF8F0;\n  --text-dark: #2C1A0E;\n}\n[_nghost-%COMP%] {\n  display: block;\n  background: #FFF8F0 !important;\n  min-height: 100vh;\n}\n.dnd-wrap[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  background: #FFF8F0 !important;\n  min-height: 100vh;\n  color: #2C1A0E !important;\n}\n.mod-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 900;\n  margin-bottom: 4px;\n  color: #2C1A0E !important;\n}\n.mod-title[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  color: #2C1A0E !important;\n}\n.mod-sub[_ngcontent-%COMP%] {\n  color: #4A3728 !important;\n  margin-bottom: 24px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background: #E8DDD2;\n  border-radius: 50px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  transition: width 0.6s ease;\n  border-radius: 50px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4A3728 !important;\n  font-weight: 700;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.progress-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  background: #4A6CF7;\n  color: #FFFFFF !important;\n  padding: 2px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n}\n.bank-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #2C1A0E !important;\n  margin-bottom: 12px;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bank-label[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #4A6CF7;\n  color: #FFFFFF !important;\n  font-size: 12px;\n  padding: 2px 12px;\n  border-radius: 50px;\n}\n.bank[_ngcontent-%COMP%] {\n  background: #FFFFFF !important;\n  padding: 20px;\n  border-radius: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  border: 2px solid #E8D5C4;\n  min-height: 80px;\n  align-items: center;\n}\n.bank-empty[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  color: #27AE60 !important;\n  font-size: 16px;\n  padding: 8px 0;\n}\n.bank-empty[_ngcontent-%COMP%]::before {\n  content: "\\2728  ";\n}\n.chip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  color: #FFFFFF !important;\n  padding: 12px 20px 12px 16px;\n  border-radius: 50px;\n  cursor: grab;\n  font-weight: 800;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(74, 108, 247, 0.3);\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.chip[_ngcontent-%COMP%]   .chip-number[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #FFFFFF !important;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.04);\n  box-shadow: 0 8px 25px rgba(74, 108, 247, 0.4);\n}\n.chip[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n  transform: scale(0.95);\n}\n.phrases-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.phrase-block[_ngcontent-%COMP%] {\n  background: #FFFFFF !important;\n  padding: 20px 24px;\n  border-radius: 20px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  transition: all 0.3s ease;\n  border-left: 4px solid #7B93FA;\n}\n.phrase-block[_ngcontent-%COMP%]:hover {\n  background: #FFF5EA !important;\n  box-shadow: 0 12px 40px rgba(62, 45, 30, 0.14);\n  transform: translateX(4px);\n}\n.phrase-block.correct-block[_ngcontent-%COMP%] {\n  border-left-color: #27AE60;\n  background: #E8F5EE !important;\n}\n.phrase-block.incorrect-block[_ngcontent-%COMP%] {\n  border-left-color: #E74C3C;\n  background: #F5E8E8 !important;\n}\n.phrase-block.error-shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_errorShake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_errorShake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-10px);\n  }\n  40% {\n    transform: translateX(10px);\n  }\n  60% {\n    transform: translateX(-8px);\n  }\n  80% {\n    transform: translateX(8px);\n  }\n}\n.phrase-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px dashed #D4C0AD;\n}\n.phrase-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #5A4A3A !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.phrase-status[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.phrase-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.phrase-en[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 18px;\n  color: #2C1A0E !important;\n  flex: 1;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.phrase-en[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.phrase-en[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%] {\n  background: #F5EDE5;\n  padding: 4px 14px;\n  border-radius: 8px;\n  border: 1px solid #E8D5C4;\n  color: #2C1A0E !important;\n  font-weight: 800;\n}\n.hint-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #FFF3E0;\n  color: #E67E22 !important;\n  padding: 2px 12px;\n  border-radius: 50px;\n  border: 1px solid #F39C12;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_fadeInHint 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeInHint {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.drop-zone[_ngcontent-%COMP%] {\n  min-width: 180px;\n  min-height: 50px;\n  padding: 12px 18px;\n  border: 3px dashed #D4C0AD;\n  border-radius: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFDF7 !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  flex: 0 1 auto;\n}\n.drop-zone[_ngcontent-%COMP%]:hover {\n  background: #FFF5EA !important;\n  border-color: #7B93FA;\n  transform: scale(1.02);\n}\n.drop-zone.drag-over[_ngcontent-%COMP%] {\n  background: #F5EDE5 !important;\n  border-color: #4A6CF7;\n  transform: scale(1.05);\n  box-shadow: 0 0 0 6px rgba(74, 108, 247, 0.15);\n}\n.drop-zone.filled[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #7B93FA;\n  background: #F5EDE5 !important;\n}\n.drop-zone.correct[_ngcontent-%COMP%] {\n  border-color: #27AE60;\n  background: #E8F5EE !important;\n  box-shadow: 0 0 0 4px rgba(39, 174, 96, 0.15);\n}\n.drop-zone.correct[_ngcontent-%COMP%]   .zone-value[_ngcontent-%COMP%] {\n  color: #27AE60 !important;\n}\n.drop-zone.incorrect[_ngcontent-%COMP%] {\n  border-color: #E74C3C;\n  background: #F5E8E8 !important;\n  box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.12);\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.drop-zone.error[_ngcontent-%COMP%] {\n  border-color: #E74C3C !important;\n  background: #F5E8E8 !important;\n  box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.2) !important;\n  animation: _ngcontent-%COMP%_errorPulse 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_errorPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-8px);\n  }\n  75% {\n    transform: translateX(8px);\n  }\n}\n.zone-placeholder[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #5A4A3A !important;\n  opacity: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.zone-value[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #2C1A0E !important;\n}\n.zone-value[_ngcontent-%COMP%]   .zone-emoji[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.zone-remove[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: rgba(0, 0, 0, 0.05);\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2C1A0E !important;\n}\n.zone-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(231, 76, 60, 0.15);\n  color: #E74C3C !important;\n  transform: scale(1.2);\n}\n.row-feedback[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 10px 16px;\n  border-radius: 10px;\n  animation: _ngcontent-%COMP%_slideDown 0.4s ease;\n  background: rgba(0, 0, 0, 0.03);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fb-ok[_ngcontent-%COMP%] {\n  color: #27AE60 !important;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.fb-err[_ngcontent-%COMP%] {\n  color: #E74C3C !important;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fb-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.fb-detail[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2C1A0E !important;\n}\n.fb-detail[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #E74C3C !important;\n  background: rgba(231, 76, 60, 0.08);\n  padding: 2px 10px;\n  border-radius: 6px;\n}\n.fb-ok[_ngcontent-%COMP%]   .fb-detail[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #27AE60 !important;\n  background: rgba(39, 174, 96, 0.08);\n}\n.fb-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #E67E22 !important;\n  font-weight: 600;\n  font-size: 13px;\n}\n.result-banner[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #FFFFFF !important;\n  padding: 28px;\n  border-radius: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  border: 2px solid #E8D5C4;\n  animation: _ngcontent-%COMP%_popIn 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.result-banner.perfect[_ngcontent-%COMP%] {\n  border-color: #27AE60;\n  background: #E8F5EE !important;\n}\n.result-banner.good[_ngcontent-%COMP%] {\n  border-color: #F39C12;\n  background: #F7F2ED !important;\n}\n.result-banner.keep-going[_ngcontent-%COMP%] {\n  border-color: #7B93FA;\n  background: #F0EDF7 !important;\n}\n.result-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 8px;\n  display: block;\n}\n.result-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2C1A0E !important;\n}\n.result-text[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #4A6CF7;\n}\n.result-details[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 14px;\n  color: #5A4A3A !important;\n  font-weight: 600;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 800;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(74, 108, 247, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(74, 108, 247, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E74C3C,\n      #F1948A);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(231, 76, 60, 0.35);\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(231, 76, 60, 0.45);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27AE60,\n      #2ECC71);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(39, 174, 96, 0.35);\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(39, 174, 96, 0.45);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .dnd-wrap[_ngcontent-%COMP%] {\n    padding: 20px 12px 40px;\n  }\n  .mod-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .phrase-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .drop-zone[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n  }\n  .phrase-en[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .chip[_ngcontent-%COMP%] {\n    padding: 10px 16px 10px 14px;\n    font-size: 14px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 12px 24px;\n    font-size: 14px;\n    width: 100%;\n    justify-content: center;\n  }\n  .btn-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .result-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .bank[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=dragdrop.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dragdrop, [{
    type: Component,
    args: [{ selector: "app-dragdrop", standalone: false, template: `<div class="dnd-wrap">

  <h2 class="mod-title">
    <span class="emoji">\u{1F3AF}</span> English Express
  </h2>
  <p class="mod-sub">Arrastra cada traducci\xF3n al recuadro correcto</p>

  <!-- PROGRESS -->
  <div class="progress-wrap">
    <div class="progress-fill" [style.width.%]="progress"></div>
  </div>
  <div class="progress-label">
    <span>Completado</span>
    <span>{{ progress }}%</span>
  </div>

  <!-- BANCO DE TRADUCCIONES -->
  <div class="bank-label">
    \u{1F5C3}\uFE0F Traducciones disponibles
    <span class="badge">{{ bank.length }}</span>
  </div>

  <div class="bank">
    <!-- MOSTRAR TODAS LAS TRADUCCIONES DEL BANCO -->
    <div
      *ngFor="let es of bank; let i = index"
      class="chip"
      draggable="true"
      (dragstart)="onDragStart(es)"
      [class.dragging]="dragValue === es">
      <span class="chip-number">#{{ i + 1 }}</span>
      {{ es }}
    </div>

    <!-- MENSAJE CUANDO EL BANCO EST\xC1 VAC\xCDO -->
    <div *ngIf="bank.length === 0 && !checked" class="bank-empty">
      \u2705 \xA1Todas las traducciones est\xE1n colocadas!
    </div>
  </div>

  <!-- LISTA DE FRASES -->
  <div class="phrases-list">
    <div
      *ngFor="let item of items; let i = index"
      class="phrase-block"
      [class.correct-block]="item.status === 'correct'"
      [class.incorrect-block]="item.status === 'incorrect'"
      [class.error-shake]="item.showError">

      <div class="phrase-header">
        <span class="phrase-number">\u{1F4DD} FRASE {{ i + 1 }}</span>
        <span class="phrase-status" *ngIf="item.status === 'correct'">\u2705</span>
        <span class="phrase-status" *ngIf="item.status === 'incorrect'">\u274C</span>
      </div>

      <div class="phrase-row">
        <div class="phrase-en">
          <span class="icon">\u{1F524}</span>
          <span class="phrase-text">{{ item.phrase.en }}</span>
          <!-- PISTA -->
          <span *ngIf="item.showHint" class="hint-badge">
            \u{1F4A1} Pista: {{ item.phrase.es | slice:0:3 }}...
          </span>
        </div>

        <!-- ZONA DROP -->
        <div
          class="drop-zone"
          [class.filled]="item.status === 'filled'"
          [class.correct]="item.status === 'correct'"
          [class.incorrect]="item.status === 'incorrect'"
          [class.drag-over]="dragOverItem === item"
          [class.error]="item.showError"
          (dragover)="onDragOver($event)"
          (dragleave)="onDragLeave($event)"
          (drop)="onDrop(item, $event)"
          (click)="removeFromZone(item)">

          <!-- VAC\xCDO -->
          <span *ngIf="!item.filled" class="zone-placeholder">
            \u{1F4E5} Suelta la traducci\xF3n aqu\xED
          </span>

          <!-- LLENO -->
          <span *ngIf="item.filled" class="zone-value">
            <span class="zone-emoji">\u{1F4CC}</span>
            {{ item.filled }}
            <span *ngIf="!checked && item.status !== 'correct'" class="zone-remove" title="Quitar">\u2715</span>
          </span>
        </div>
      </div>

      <!-- FEEDBACK DE ERROR -->
      <div class="row-feedback" *ngIf="item.showError && !checked">
        <div class="fb-err">
          <span class="fb-icon">\u274C</span>
          <span>
            <span class="fb-detail">"{{ item.filled }}" no es correcto para esta frase</span>
            <span class="fb-hint">\u{1F4A1} Intenta con otra palabra</span>
          </span>
        </div>
      </div>

      <!-- FEEDBACK CUANDO EST\xC1 CORRECTO -->
      <div class="row-feedback" *ngIf="item.status === 'correct' && checked">
        <div class="fb-ok">
          <span class="fb-icon">\u2705</span>
          <span>\xA1Correcto! <span class="fb-detail">"{{ item.filled }}" es la traducci\xF3n correcta</span></span>
        </div>
      </div>

      <!-- FEEDBACK DE VERIFICACI\xD3N -->
      <div class="row-feedback" *ngIf="checked && item.status === 'incorrect'">
        <div class="fb-err">
          <span class="fb-icon">\u274C</span>
          <span *ngIf="item.filled">
            <span class="fb-detail">"{{ item.filled }}" es incorrecto</span>
            <span class="fb-detail">La respuesta correcta es: <b>"{{ item.phrase.es }}"</b></span>
          </span>
          <span *ngIf="!item.filled">
            <span class="fb-detail">Sin respuesta</span>
            <span class="fb-detail">La respuesta correcta es: <b>"{{ item.phrase.es }}"</b></span>
          </span>
        </div>
      </div>

    </div>
  </div>

  <!-- RESULTADO -->
  <div
    class="result-banner"
    *ngIf="checked"
    [class.perfect]="isPerfect"
    [class.good]="!isPerfect && correctCount / items.length >= 0.7"
    [class.keep-going]="!isPerfect && correctCount / items.length < 0.7">

    <span class="result-icon">
      {{ isPerfect ? '\u{1F389}' : correctCount / items.length >= 0.7 ? '\u{1F44F}' : '\u{1F4AA}' }}
    </span>

    <div class="result-text">
      <span class="highlight">{{ correctCount }}</span> / {{ items.length }}
    </div>

    <div class="result-details">
      {{ resultMessage }}
    </div>
  </div>

  <!-- BOTONES -->
  <div class="btn-row">
    <button
      class="btn btn-primary"
      (click)="check()"
      [disabled]="checked">
      \u2705 Verificar
    </button>

    <button
      class="btn btn-danger"
      (click)="init()">
      \u{1F504} Nueva Ronda
    </button>

    <button
      class="btn btn-success"
      (click)="check()"
      *ngIf="!checked && allFilled">
      \u{1F680} Completar
    </button>
  </div>

</div>`, styles: ['/* src/app/modules/dragdrop/dragdrop/dragdrop.css */\n:root {\n  --bg-cream: #FFF8F0;\n  --text-dark: #2C1A0E;\n}\n:host {\n  display: block;\n  background: #FFF8F0 !important;\n  min-height: 100vh;\n}\n.dnd-wrap {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 30px 20px 60px;\n  background: #FFF8F0 !important;\n  min-height: 100vh;\n  color: #2C1A0E !important;\n}\n.mod-title {\n  font-size: 36px;\n  font-weight: 900;\n  margin-bottom: 4px;\n  color: #2C1A0E !important;\n}\n.mod-title .emoji {\n  color: #2C1A0E !important;\n}\n.mod-sub {\n  color: #4A3728 !important;\n  margin-bottom: 24px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.progress-wrap {\n  width: 100%;\n  height: 12px;\n  background: #E8DDD2;\n  border-radius: 50px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  transition: width 0.6s ease;\n  border-radius: 50px;\n}\n.progress-label {\n  font-size: 14px;\n  color: #4A3728 !important;\n  font-weight: 700;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.progress-label span:last-child {\n  background: #4A6CF7;\n  color: #FFFFFF !important;\n  padding: 2px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n}\n.bank-label {\n  font-weight: 800;\n  color: #2C1A0E !important;\n  margin-bottom: 12px;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bank-label .badge {\n  background: #4A6CF7;\n  color: #FFFFFF !important;\n  font-size: 12px;\n  padding: 2px 12px;\n  border-radius: 50px;\n}\n.bank {\n  background: #FFFFFF !important;\n  padding: 20px;\n  border-radius: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  border: 2px solid #E8D5C4;\n  min-height: 80px;\n  align-items: center;\n}\n.bank-empty {\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  color: #27AE60 !important;\n  font-size: 16px;\n  padding: 8px 0;\n}\n.bank-empty::before {\n  content: "\\2728  ";\n}\n.chip {\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  color: #FFFFFF !important;\n  padding: 12px 20px 12px 16px;\n  border-radius: 50px;\n  cursor: grab;\n  font-weight: 800;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(74, 108, 247, 0.3);\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.chip .chip-number {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #FFFFFF !important;\n}\n.chip:hover {\n  transform: translateY(-3px) scale(1.04);\n  box-shadow: 0 8px 25px rgba(74, 108, 247, 0.4);\n}\n.chip:active {\n  cursor: grabbing;\n  transform: scale(0.95);\n}\n.phrases-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.phrase-block {\n  background: #FFFFFF !important;\n  padding: 20px 24px;\n  border-radius: 20px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  transition: all 0.3s ease;\n  border-left: 4px solid #7B93FA;\n}\n.phrase-block:hover {\n  background: #FFF5EA !important;\n  box-shadow: 0 12px 40px rgba(62, 45, 30, 0.14);\n  transform: translateX(4px);\n}\n.phrase-block.correct-block {\n  border-left-color: #27AE60;\n  background: #E8F5EE !important;\n}\n.phrase-block.incorrect-block {\n  border-left-color: #E74C3C;\n  background: #F5E8E8 !important;\n}\n.phrase-block.error-shake {\n  animation: errorShake 0.5s ease;\n}\n@keyframes errorShake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-10px);\n  }\n  40% {\n    transform: translateX(10px);\n  }\n  60% {\n    transform: translateX(-8px);\n  }\n  80% {\n    transform: translateX(8px);\n  }\n}\n.phrase-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px dashed #D4C0AD;\n}\n.phrase-number {\n  font-size: 12px;\n  font-weight: 700;\n  color: #5A4A3A !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.phrase-status {\n  font-size: 20px;\n}\n.phrase-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.phrase-en {\n  font-weight: 800;\n  font-size: 18px;\n  color: #2C1A0E !important;\n  flex: 1;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.phrase-en .icon {\n  font-size: 20px;\n}\n.phrase-en .phrase-text {\n  background: #F5EDE5;\n  padding: 4px 14px;\n  border-radius: 8px;\n  border: 1px solid #E8D5C4;\n  color: #2C1A0E !important;\n  font-weight: 800;\n}\n.hint-badge {\n  font-size: 12px;\n  background: #FFF3E0;\n  color: #E67E22 !important;\n  padding: 2px 12px;\n  border-radius: 50px;\n  border: 1px solid #F39C12;\n  font-weight: 700;\n  animation: fadeInHint 0.3s ease;\n}\n@keyframes fadeInHint {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.drop-zone {\n  min-width: 180px;\n  min-height: 50px;\n  padding: 12px 18px;\n  border: 3px dashed #D4C0AD;\n  border-radius: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FFFDF7 !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  flex: 0 1 auto;\n}\n.drop-zone:hover {\n  background: #FFF5EA !important;\n  border-color: #7B93FA;\n  transform: scale(1.02);\n}\n.drop-zone.drag-over {\n  background: #F5EDE5 !important;\n  border-color: #4A6CF7;\n  transform: scale(1.05);\n  box-shadow: 0 0 0 6px rgba(74, 108, 247, 0.15);\n}\n.drop-zone.filled {\n  border-style: solid;\n  border-color: #7B93FA;\n  background: #F5EDE5 !important;\n}\n.drop-zone.correct {\n  border-color: #27AE60;\n  background: #E8F5EE !important;\n  box-shadow: 0 0 0 4px rgba(39, 174, 96, 0.15);\n}\n.drop-zone.correct .zone-value {\n  color: #27AE60 !important;\n}\n.drop-zone.incorrect {\n  border-color: #E74C3C;\n  background: #F5E8E8 !important;\n  box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.12);\n  animation: shake 0.5s ease;\n}\n.drop-zone.error {\n  border-color: #E74C3C !important;\n  background: #F5E8E8 !important;\n  box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.2) !important;\n  animation: errorPulse 0.5s ease;\n}\n@keyframes errorPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-8px);\n  }\n  75% {\n    transform: translateX(8px);\n  }\n}\n.zone-placeholder {\n  font-size: 14px;\n  font-weight: 700;\n  color: #5A4A3A !important;\n  opacity: 0.8;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.zone-value {\n  font-weight: 800;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #2C1A0E !important;\n}\n.zone-value .zone-emoji {\n  font-size: 18px;\n}\n.zone-remove {\n  opacity: 0.4;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: rgba(0, 0, 0, 0.05);\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2C1A0E !important;\n}\n.zone-remove:hover {\n  opacity: 1;\n  background: rgba(231, 76, 60, 0.15);\n  color: #E74C3C !important;\n  transform: scale(1.2);\n}\n.row-feedback {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 10px 16px;\n  border-radius: 10px;\n  animation: slideDown 0.4s ease;\n  background: rgba(0, 0, 0, 0.03);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fb-ok {\n  color: #27AE60 !important;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.fb-err {\n  color: #E74C3C !important;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fb-icon {\n  font-size: 18px;\n}\n.fb-detail {\n  font-weight: 600;\n  color: #2C1A0E !important;\n}\n.fb-detail b {\n  color: #E74C3C !important;\n  background: rgba(231, 76, 60, 0.08);\n  padding: 2px 10px;\n  border-radius: 6px;\n}\n.fb-ok .fb-detail b {\n  color: #27AE60 !important;\n  background: rgba(39, 174, 96, 0.08);\n}\n.fb-hint {\n  display: block;\n  margin-top: 4px;\n  color: #E67E22 !important;\n  font-weight: 600;\n  font-size: 13px;\n}\n.result-banner {\n  text-align: center;\n  background: #FFFFFF !important;\n  padding: 28px;\n  border-radius: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 8px 30px rgba(62, 45, 30, 0.08);\n  border: 2px solid #E8D5C4;\n  animation: popIn 0.5s ease;\n}\n@keyframes popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.result-banner.perfect {\n  border-color: #27AE60;\n  background: #E8F5EE !important;\n}\n.result-banner.good {\n  border-color: #F39C12;\n  background: #F7F2ED !important;\n}\n.result-banner.keep-going {\n  border-color: #7B93FA;\n  background: #F0EDF7 !important;\n}\n.result-icon {\n  font-size: 48px;\n  margin-bottom: 8px;\n  display: block;\n}\n.result-text {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2C1A0E !important;\n}\n.result-text .highlight {\n  color: #4A6CF7;\n}\n.result-details {\n  margin-top: 8px;\n  font-size: 14px;\n  color: #5A4A3A !important;\n  font-weight: 600;\n}\n.btn-row {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn {\n  padding: 14px 32px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 800;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  letter-spacing: 0.3px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:active {\n  transform: scale(0.95);\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #4A6CF7,\n      #7B93FA);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(74, 108, 247, 0.35);\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(74, 108, 247, 0.45);\n}\n.btn-primary:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #E74C3C,\n      #F1948A);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(231, 76, 60, 0.35);\n}\n.btn-danger:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(231, 76, 60, 0.45);\n}\n.btn-success {\n  background:\n    linear-gradient(\n      135deg,\n      #27AE60,\n      #2ECC71);\n  color: #FFFFFF !important;\n  box-shadow: 0 4px 20px rgba(39, 174, 96, 0.35);\n}\n.btn-success:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(39, 174, 96, 0.45);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .dnd-wrap {\n    padding: 20px 12px 40px;\n  }\n  .mod-title {\n    font-size: 28px;\n  }\n  .phrase-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .drop-zone {\n    width: 100%;\n    min-width: unset;\n  }\n  .phrase-en {\n    font-size: 16px;\n  }\n  .chip {\n    padding: 10px 16px 10px 14px;\n    font-size: 14px;\n  }\n  .btn {\n    padding: 12px 24px;\n    font-size: 14px;\n    width: 100%;\n    justify-content: center;\n  }\n  .btn-row {\n    flex-direction: column;\n  }\n  .result-text {\n    font-size: 18px;\n  }\n  .bank {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=dragdrop.css.map */\n'] }]
  }], () => [{ type: PhrasesService }, { type: ScoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dragdrop, { className: "Dragdrop", filePath: "src/app/modules/dragdrop/dragdrop/dragdrop.ts", lineNumber: 19 });
})();

// src/app/modules/dragdrop/dragdrop-routing-module.ts
var dragdropRoutes = [
  { path: "", component: Dragdrop }
];

// src/app/modules/dragdrop/dragdrop-module.ts
var DragdropModule = class _DragdropModule {
  static \u0275fac = function DragdropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragdropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DragdropModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(dragdropRoutes),
    SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragdropModule, [{
    type: NgModule,
    args: [{
      declarations: [Dragdrop],
      imports: [
        CommonModule,
        RouterModule.forChild(dragdropRoutes),
        SharedModule
      ],
      exports: [Dragdrop]
    }]
  }], null, null);
})();
export {
  DragdropModule
};
//# sourceMappingURL=chunk-GSIJ7RPC.js.map
