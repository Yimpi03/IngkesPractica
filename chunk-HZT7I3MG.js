import {
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PGTZPRSX.js";

// src/app/shared/components/progress-bar/progress-bar.ts
function ProgressBar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.label, " \xB7 ", ctx_r0.value, "%");
  }
}
var ProgressBar = class _ProgressBar {
  value = 0;
  // 0-100
  label = "";
  color = "var(--primary)";
  static \u0275fac = function ProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressBar, selectors: [["app-progress-bar"]], inputs: { value: "value", label: "label", color: "color" }, standalone: false, decls: 4, vars: 5, consts: [[1, "pb-wrap"], [1, "pb-track"], [1, "pb-fill"], ["class", "pb-label", 4, "ngIf"], [1, "pb-label"]], template: function ProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ProgressBar_div_3_Template, 2, 2, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.value, "%")("background", ctx.color);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
    }
  }, dependencies: [NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{ selector: "app-progress-bar", standalone: false, template: '<div class="pb-wrap">\n  <div class="pb-track">\n    <div\n      class="pb-fill"\n      [style.width.%]="value"\n      [style.background]="color">\n    </div>\n  </div>\n  <div class="pb-label" *ngIf="label">{{ label }} \xB7 {{ value }}%</div>\n</div>' }]
  }], null, { value: [{
    type: Input
  }], label: [{
    type: Input
  }], color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressBar, { className: "ProgressBar", filePath: "src/app/shared/components/progress-bar/progress-bar.ts", lineNumber: 9 });
})();

// src/app/shared/services/score.service.ts
var ScoreService = class _ScoreService {
  // ── Estado interno con BehaviorSubject (reactivo) ──────────────────────────
  _stats = new BehaviorSubject({
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalRight: 0,
    totalWrong: 0
  });
  // Observable público — los componentes se suscriben a este
  stats$ = this._stats.asObservable();
  // ── Getters de acceso rápido ───────────────────────────────────────────────
  get score() {
    return this._stats.value.score;
  }
  get streak() {
    return this._stats.value.streak;
  }
  get bestStreak() {
    return this._stats.value.bestStreak;
  }
  get totalRight() {
    return this._stats.value.totalRight;
  }
  get totalWrong() {
    return this._stats.value.totalWrong;
  }
  get accuracy() {
    const total = this.totalRight + this.totalWrong;
    return total === 0 ? 0 : Math.round(this.totalRight / total * 100);
  }
  // ── Sumar puntos ───────────────────────────────────────────────────────────
  add(pts) {
    const s = this._stats.value;
    this._emit(__spreadProps(__spreadValues({}, s), { score: s.score + pts }));
  }
  // ── Incrementar racha ──────────────────────────────────────────────────────
  addStreak() {
    const s = this._stats.value;
    const newStreak = s.streak + 1;
    this._emit(__spreadProps(__spreadValues({}, s), {
      streak: newStreak,
      bestStreak: Math.max(newStreak, s.bestStreak),
      totalRight: s.totalRight + 1
    }));
  }
  // ── Resetear racha (error) ─────────────────────────────────────────────────
  resetStreak() {
    const s = this._stats.value;
    this._emit(__spreadProps(__spreadValues({}, s), {
      streak: 0,
      totalWrong: s.totalWrong + 1
    }));
  }
  // ── Registrar respuesta correcta con puntos ────────────────────────────────
  correct(pts = 5) {
    const s = this._stats.value;
    const newStreak = s.streak + 1;
    const bonus = newStreak % 3 === 0 ? 2 : 0;
    this._emit(__spreadProps(__spreadValues({}, s), {
      score: s.score + pts + bonus,
      streak: newStreak,
      bestStreak: Math.max(newStreak, s.bestStreak),
      totalRight: s.totalRight + 1
    }));
  }
  // ── Registrar respuesta incorrecta ─────────────────────────────────────────
  wrong() {
    const s = this._stats.value;
    this._emit(__spreadProps(__spreadValues({}, s), {
      streak: 0,
      totalWrong: s.totalWrong + 1
    }));
  }
  // ── Resetear todo (nuevo juego) ────────────────────────────────────────────
  reset() {
    this._emit({
      score: 0,
      streak: 0,
      bestStreak: 0,
      totalRight: 0,
      totalWrong: 0
    });
  }
  // ── Guardar en localStorage ────────────────────────────────────────────────
  save() {
    try {
      localStorage.setItem("english-express-stats", JSON.stringify(this._stats.value));
    } catch {
    }
  }
  // ── Cargar desde localStorage ──────────────────────────────────────────────
  load() {
    try {
      const raw = localStorage.getItem("english-express-stats");
      if (raw) {
        this._emit(JSON.parse(raw));
      }
    } catch {
    }
  }
  // ── Helper interno ─────────────────────────────────────────────────────────
  _emit(stats) {
    this._stats.next(stats);
  }
  static \u0275fac = function ScoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScoreService, factory: _ScoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScoreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/score-pill/score-pill.ts
function ScorePill_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F525} ", ctx_r0.stats.streak);
  }
}
var ScorePill = class _ScorePill {
  scoreService;
  stats = { score: 0, streak: 0, bestStreak: 0, totalRight: 0, totalWrong: 0 };
  constructor(scoreService) {
    this.scoreService = scoreService;
  }
  ngOnInit() {
    this.scoreService.stats$.subscribe((s) => this.stats = s);
  }
  static \u0275fac = function ScorePill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScorePill)(\u0275\u0275directiveInject(ScoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScorePill, selectors: [["app-score-pill"]], standalone: false, decls: 4, vars: 2, consts: [[1, "sp-wrap"], [1, "sp-pill"], ["class", "sp-pill fire", 4, "ngIf"], [1, "sp-pill", "fire"]], template: function ScorePill_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ScorePill_div_3_Template, 2, 1, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2B50 ", ctx.stats.score, " pts");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats.streak > 0);
    }
  }, dependencies: [NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScorePill, [{
    type: Component,
    args: [{ selector: "app-score-pill", standalone: false, template: '<div class="sp-wrap">\n  <div class="sp-pill">\u2B50 {{ stats.score }} pts</div>\n  <div class="sp-pill fire" *ngIf="stats.streak > 0">\u{1F525} {{ stats.streak }}</div>\n</div>' }]
  }], () => [{ type: ScoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScorePill, { className: "ScorePill", filePath: "src/app/shared/components/score-pill/score-pill.ts", lineNumber: 10 });
})();

// src/app/shared/components/header/header.ts
function Header_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function Header_button_10_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(item_r2.route));
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function Header_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F525} ", ctx_r2.stats.streak, " ");
  }
}
var Header = class _Header {
  scoreService;
  router;
  stats = { score: 0, streak: 0, bestStreak: 0, totalRight: 0, totalWrong: 0 };
  navItems = [
    { label: "Inicio", route: "/", icon: "\u{1F3E0}", tooltip: "P\xE1gina principal" },
    { label: "Tarjetas", route: "/flashcards", icon: "\u{1F4DA}", tooltip: "Estudia con flashcards" },
    { label: "Memoria", route: "/memory", icon: "\u{1F9E0}", tooltip: "Juego de memoria" },
    { label: "Arrastrar", route: "/dragdrop", icon: "\u{1F3AF}", tooltip: "Arrastra y suelta" },
    { label: "Quiz", route: "/quiz", icon: "\u2753", tooltip: "Preguntas r\xE1pidas" },
    { label: "Examen", route: "/exam", icon: "\u{1F3C6}", tooltip: "Examen final" }
  ];
  constructor(scoreService, router) {
    this.scoreService = scoreService;
    this.router = router;
  }
  ngOnInit() {
    this.scoreService.stats$.subscribe((s) => this.stats = s);
    this.scoreService.load();
  }
  goTo(route) {
    this.router.navigate([route]);
  }
  isActive(route) {
    return this.router.url === route;
  }
  getLevel() {
    return Math.floor(this.stats.score / 100) + 1;
  }
  getProgress() {
    return Math.min(this.stats.score % 100, 100);
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)(\u0275\u0275directiveInject(ScoreService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], standalone: false, decls: 15, vars: 3, consts: [[1, "app-header"], [1, "header-inner"], [1, "logo", 3, "click"], [1, "logo-icon"], [1, "logo-text"], [1, "logo-highlight"], [1, "nav-links"], ["class", "nav-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "header-stats"], [1, "stat-pill"], ["class", "stat-pill streak", 4, "ngIf"], [1, "nav-btn", 3, "click"], [1, "nav-icon"], [1, "nav-label"], [1, "stat-pill", "streak"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275listener("click", function Header_Template_div_click_2_listener() {
        return ctx.goTo("/");
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "English ");
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "Express");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "nav", 6);
      \u0275\u0275template(10, Header_button_10_Template, 5, 4, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, Header_div_14_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" \u2B50 ", ctx.stats.score, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats.streak > 0);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.app-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  padding: 10px 24px;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 20px rgba(108, 71, 255, 0.2);\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.logo-highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FFD700,\n      #FFA500);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 800;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 40px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px 14px;\n  border-radius: 30px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.75);\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n  transform: translateY(-1px);\n}\n.nav-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #6C47FF;\n  box-shadow: 0 2px 12px rgba(108, 71, 255, 0.25);\n  font-weight: 700;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.header-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  border-radius: 30px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: white;\n  font-weight: 700;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.3s ease;\n}\n.stat-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.stat-pill.streak[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 107, 0.25);\n  border-color: rgba(255, 107, 107, 0.2);\n}\n@media (max-width: 1024px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 11px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .logo-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .header-inner[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    border-radius: 30px;\n    padding: 4px 8px;\n    gap: 2px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 10px;\n  }\n  .nav-icon[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .nav-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .logo-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 3px 10px;\n  }\n  .header-stats[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n}\n@media (max-width: 480px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .logo-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    padding: 3px 6px;\n    font-size: 9px;\n  }\n  .nav-icon[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .nav-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", standalone: false, template: `<!-- header.html - Versi\xF3n Compacta -->
<header class="app-header">
  <div class="header-inner">

    <!-- LOGO -->
    <div class="logo" (click)="goTo('/')">
      <span class="logo-icon">\u{1F680}</span>
      <span class="logo-text">English <span class="logo-highlight">Express</span></span>
    </div>

    <!-- NAV -->
    <nav class="nav-links">
      <button
        *ngFor="let item of navItems"
        class="nav-btn"
        [class.active]="isActive(item.route)"
        (click)="goTo(item.route)">
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </nav>

    <!-- SCORE -->
    <div class="header-stats">
      <div class="stat-pill">
        \u2B50 {{ stats.score }}
      </div>
      <div class="stat-pill streak" *ngIf="stats.streak > 0">
        \u{1F525} {{ stats.streak }}
      </div>
    </div>

  </div>
</header>`, styles: ["/* src/app/shared/components/header/header.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.app-header {\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  padding: 10px 24px;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 20px rgba(108, 71, 255, 0.2);\n}\n.header-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  flex-shrink: 0;\n}\n.logo:hover {\n  transform: scale(1.02);\n}\n.logo-icon {\n  font-size: 26px;\n}\n.logo-text {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.logo-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #FFD700,\n      #FFA500);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 800;\n}\n.nav-links {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 40px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.nav-btn {\n  border: none;\n  padding: 6px 14px;\n  border-radius: 30px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.75);\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.nav-btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n  transform: translateY(-1px);\n}\n.nav-btn.active {\n  background: white;\n  color: #6C47FF;\n  box-shadow: 0 2px 12px rgba(108, 71, 255, 0.25);\n  font-weight: 700;\n}\n.nav-icon {\n  font-size: 14px;\n}\n.nav-label {\n  font-size: 12px;\n}\n.header-stats {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.stat-pill {\n  padding: 4px 14px;\n  border-radius: 30px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: white;\n  font-weight: 700;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.3s ease;\n}\n.stat-pill:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.stat-pill.streak {\n  background: rgba(255, 107, 107, 0.25);\n  border-color: rgba(255, 107, 107, 0.2);\n}\n@media (max-width: 1024px) {\n  .app-header {\n    padding: 8px 16px;\n  }\n  .nav-btn {\n    padding: 5px 10px;\n    font-size: 11px;\n  }\n  .logo-text {\n    font-size: 18px;\n  }\n  .logo-icon {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .header-inner {\n    gap: 10px;\n  }\n  .nav-links {\n    width: 100%;\n    justify-content: center;\n    border-radius: 30px;\n    padding: 4px 8px;\n    gap: 2px;\n  }\n  .nav-btn {\n    padding: 4px 8px;\n    font-size: 10px;\n  }\n  .nav-icon {\n    font-size: 12px;\n  }\n  .nav-label {\n    font-size: 10px;\n  }\n  .logo-text {\n    font-size: 16px;\n  }\n  .logo-icon {\n    font-size: 20px;\n  }\n  .stat-pill {\n    font-size: 11px;\n    padding: 3px 10px;\n  }\n  .header-stats {\n    gap: 4px;\n  }\n}\n@media (max-width: 480px) {\n  .app-header {\n    padding: 6px 12px;\n  }\n  .logo-text {\n    font-size: 14px;\n  }\n  .logo-icon {\n    font-size: 18px;\n  }\n  .nav-btn {\n    padding: 3px 6px;\n    font-size: 9px;\n  }\n  .nav-icon {\n    font-size: 10px;\n  }\n  .nav-label {\n    display: none;\n  }\n  .stat-pill {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], () => [{ type: ScoreService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/components/header/header.ts", lineNumber: 12 });
})();

// src/app/shared/shared-module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule
    // ← Necesario para routerLink
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ProgressBar,
        ScorePill,
        Header
        // ← Header declarado AQUÍ
      ],
      imports: [
        CommonModule,
        RouterModule
        // ← Necesario para routerLink
      ],
      exports: [
        ProgressBar,
        ScorePill,
        Header
        // ← Exportado para que otros módulos lo usen
      ]
    }]
  }], null, null);
})();

export {
  ScoreService,
  ProgressBar,
  Header,
  SharedModule
};
//# sourceMappingURL=chunk-HZT7I3MG.js.map
