import {
  PhrasesService
} from "./chunk-4HUSV4D4.js";
import {
  ScoreService,
  SharedModule
} from "./chunk-HZT7I3MG.js";
import {
  ChangeDetectorRef,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-PGTZPRSX.js";

// src/app/modules/memory/memory/memory.ts
var _c0 = (a0, a1, a2) => ({ "flipped": a0, "matched": a1, "wrong": a2 });
function Memory_div_25_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u{1F3C6} \xA1NUEVO R\xC9CORD!");
    \u0275\u0275elementEnd();
  }
}
function Memory_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275template(5, Memory_div_25_span_5_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.medal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \xA1Completado en ", ctx_r0.moves, " movimientos \xB7 ", ctx_r0.timeStr, "! ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bestScore === ctx_r0.moves);
  }
}
function Memory_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function Memory_div_27_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.click(i_r3));
    })("keydown.enter", function Memory_div_27_Template_div_keydown_enter_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.click(i_r3));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4, "?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c0, card_r4.state === "revealed" || card_r4.state === "matched", card_r4.state === "matched", card_r4.state === "wrong"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(card_r4.text);
  }
}
function Memory_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function Memory_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.init());
    });
    \u0275\u0275text(1, "\u23ED\uFE0F Siguiente ronda");
    \u0275\u0275elementEnd();
  }
}
var Memory = class _Memory {
  phrasesService;
  scoreService;
  cdr;
  cards = [];
  flipped = [];
  matched = 0;
  moves = 0;
  time = 0;
  busy = false;
  numPairs = 6;
  won = false;
  bestScore = Infinity;
  timerRef;
  timeoutRef;
  constructor(phrasesService, scoreService, cdr) {
    this.phrasesService = phrasesService;
    this.scoreService = scoreService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadBestScore();
    this.init();
  }
  ngOnDestroy() {
    clearInterval(this.timerRef);
    clearTimeout(this.timeoutRef);
    this.removeConfetti();
  }
  trackById(index, card) {
    return card.id;
  }
  setDiff(n) {
    this.numPairs = n;
    this.init();
  }
  init() {
    clearInterval(this.timerRef);
    clearTimeout(this.timeoutRef);
    this.flipped = [];
    this.matched = 0;
    this.moves = 0;
    this.time = 0;
    this.busy = false;
    this.won = false;
    this.removeConfetti();
    const subset = this.phrasesService.getRandom(this.numPairs);
    const all = [
      ...subset.map((p, i) => ({
        id: i * 2,
        type: "en",
        text: p.en,
        pair: i,
        state: "hidden"
      })),
      ...subset.map((p, i) => ({
        id: i * 2 + 1,
        type: "es",
        text: p.es,
        pair: i,
        state: "hidden"
      }))
    ];
    this.cards = this.shuffle(all);
    this.cdr.detectChanges();
    this.timerRef = setInterval(() => {
      this.time++;
      this.cdr.detectChanges();
    }, 1e3);
  }
  click(idx) {
    console.log("\u{1F535} Click en carta:", idx);
    const card = this.cards[idx];
    if (this.busy || card.state === "matched" || card.state === "revealed") {
      console.log("\u26D4 Bloqueado");
      return;
    }
    if (this.flipped.length === 2) {
      console.log("\u26D4 Ya hay 2 cartas");
      return;
    }
    card.state = "revealed";
    this.flipped.push(idx);
    this.cdr.detectChanges();
    console.log("\u{1F504} Carta volteada:", idx, "Estado:", card.state);
    if (this.flipped.length === 2) {
      this.moves++;
      this.busy = true;
      this.cdr.detectChanges();
      const [a, b] = this.flipped;
      const ca = this.cards[a];
      const cb = this.cards[b];
      const isMatch = ca.pair === cb.pair && ca.type !== cb.type;
      console.log("\u{1F50D} \xBFSon pareja?", isMatch);
      if (isMatch) {
        console.log("\u2705 \xA1Pareja!");
        this.timeoutRef = setTimeout(() => {
          this.cards[a].state = "matched";
          this.cards[b].state = "matched";
          this.matched++;
          this.scoreService.correct(10);
          this.flipped = [];
          this.busy = false;
          this.cdr.detectChanges();
          if (this.matched === this.numPairs) {
            this.win();
          }
        }, 500);
      } else {
        console.log("\u274C No son pareja");
        this.scoreService.wrong();
        this.cards[a].state = "wrong";
        this.cards[b].state = "wrong";
        this.cdr.detectChanges();
        this.timeoutRef = setTimeout(() => {
          this.cards[a].state = "hidden";
          this.cards[b].state = "hidden";
          this.flipped = [];
          this.busy = false;
          this.cdr.detectChanges();
          console.log("\u{1F504} Cartas ocultadas");
        }, 1e3);
      }
    }
  }
  win() {
    clearInterval(this.timerRef);
    this.won = true;
    this.scoreService.add(50);
    this.cdr.detectChanges();
    if (this.moves < this.bestScore) {
      this.bestScore = this.moves;
      this.saveBestScore();
    }
    this.launchConfetti();
  }
  get medal() {
    const ratio = this.moves / this.numPairs;
    if (ratio <= 1.5)
      return "\u{1F947}";
    if (ratio <= 2.5)
      return "\u{1F948}";
    return "\u{1F949}";
  }
  get timeStr() {
    const m = Math.floor(this.time / 60);
    const s = this.time % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  get accuracy() {
    if (this.moves === 0)
      return 0;
    return Math.round(this.matched / this.moves * 100);
  }
  launchConfetti() {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#FF9FF3", "#6C5CE7"];
    const emojis = ["\u{1F389}", "\u2728", "\u2B50", "\u{1F31F}", "\u{1F4AB}", "\u{1F38A}", "\u{1F308}", "\u{1F386}"];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const el = document.createElement("div");
        const isEmoji = Math.random() > 0.5;
        const isCircle = !isEmoji && Math.random() > 0.5;
        if (isEmoji) {
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -20px;
            font-size: ${20 + Math.random() * 35}px;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 2.5}s ease-in forwards;
            opacity: ${0.7 + Math.random() * 0.3};
            transform: rotate(${Math.random() * 360}deg);
          `;
        } else {
          const size = 6 + Math.random() * 12;
          el.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -10px;
            width: ${size}px;
            height: ${isCircle ? size : size * 2.5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${isCircle ? "50%" : "2px"};
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 3}s ease-in forwards;
            opacity: ${0.6 + Math.random() * 0.4};
            transform: rotate(${Math.random() * 360}deg);
          `;
        }
        document.body.appendChild(el);
        setTimeout(() => {
          if (el.parentNode)
            el.remove();
        }, 5e3);
      }, i * 60);
    }
  }
  removeConfetti() {
    document.querySelectorAll('[style*="confettiFall"]').forEach((el) => {
      if (el.parentNode)
        el.remove();
    });
  }
  loadBestScore() {
    try {
      const saved = localStorage.getItem("memory_best_score");
      if (saved) {
        this.bestScore = parseInt(saved, 10);
      }
    } catch (e) {
    }
  }
  saveBestScore() {
    try {
      localStorage.setItem("memory_best_score", String(this.bestScore));
    } catch (e) {
    }
  }
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  static \u0275fac = function Memory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Memory)(\u0275\u0275directiveInject(PhrasesService), \u0275\u0275directiveInject(ScoreService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Memory, selectors: [["app-memory"]], standalone: false, decls: 32, vars: 16, consts: [[1, "mem-wrap"], [1, "mod-title"], [1, "mod-sub"], [1, "diff-row"], [1, "diff-btn", 3, "click"], [1, "stats-row"], [1, "stat-chip"], ["class", "win-banner", 4, "ngIf"], [1, "mem-grid"], ["class", "mem-card", "role", "button", "tabindex", "0", 3, "ngClass", "click", "keydown.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-row"], [1, "btn", "btn-primary", 3, "click"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "win-banner"], [1, "win-medal"], [1, "win-text"], ["style", "display:block;font-size:0.8rem;color:#B8860B;", 4, "ngIf"], [2, "display", "block", "font-size", "0.8rem", "color", "#B8860B"], ["role", "button", "tabindex", "0", 1, "mem-card", 3, "click", "keydown.enter", "ngClass"], [1, "mem-inner"], [1, "mem-front"], [1, "qmark"], [1, "mem-back"], [1, "mem-text"], [1, "btn", "btn-secondary", 3, "click"]], template: function Memory_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "\u{1F9E0} Juego de Memoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Encuentra todas las parejas ingl\xE9s\u2013espa\xF1ol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function Memory_Template_button_click_6_listener() {
        return ctx.setDiff(6);
      });
      \u0275\u0275text(7, "\u{1F331} F\xE1cil (6)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function Memory_Template_button_click_8_listener() {
        return ctx.setDiff(8);
      });
      \u0275\u0275text(9, "\u{1F680} Normal (8)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function Memory_Template_button_click_10_listener() {
        return ctx.setDiff(10);
      });
      \u0275\u0275text(11, "\u{1F525} Dif\xEDcil (10)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
      \u0275\u0275text(14, "\u{1F3B4} Movimientos: ");
      \u0275\u0275elementStart(15, "b");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275text(18, "\u23F1\uFE0F ");
      \u0275\u0275elementStart(19, "b");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6);
      \u0275\u0275text(22, "\u2705 Parejas: ");
      \u0275\u0275elementStart(23, "b");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, Memory_div_25_Template, 6, 4, "div", 7);
      \u0275\u0275elementStart(26, "div", 8);
      \u0275\u0275template(27, Memory_div_27_Template, 8, 6, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10)(29, "button", 11);
      \u0275\u0275listener("click", function Memory_Template_button_click_29_listener() {
        return ctx.init();
      });
      \u0275\u0275text(30, "\u{1F504} Nueva partida");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, Memory_button_31_Template, 2, 0, "button", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.numPairs === 6);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.numPairs === 8);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.numPairs === 10);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.moves);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.timeStr);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.matched, "/", ctx.numPairs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.won);
      \u0275\u0275advance();
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + (ctx.numPairs <= 6 ? 3 : 4) + ", 1fr)");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.cards)("ngForTrackBy", ctx.trackById);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.won);
    }
  }, dependencies: [NgClass, NgForOf, NgIf], styles: ['\n[_ngcontent-%COMP%]:root {\n  --primary: #B88A5E;\n  --primary-light: #D4B08C;\n  --primary-dark: #9C6E4A;\n  --secondary: #C9A87C;\n  --secondary-light: #E2CCA8;\n  --accent: #E8B88A;\n  --accent-light: #F2D4B8;\n  --warning: #F0D58C;\n  --danger: #D48C7A;\n  --info: #8FB8D4;\n  --btn-easy: #B5A07A;\n  --btn-easy-hover: #A08B68;\n  --btn-easy-shadow: rgba(181, 160, 122, 0.3);\n  --btn-normal: #B88A5E;\n  --btn-normal-hover: #A0774E;\n  --btn-normal-shadow: rgba(184, 138, 94, 0.3);\n  --btn-hard: #D49A7A;\n  --btn-hard-hover: #C08868;\n  --btn-hard-shadow: rgba(212, 154, 122, 0.3);\n  --btn-primary: #B88A5E;\n  --btn-primary-hover: #A0774E;\n  --bg-primary: #F9F5EE;\n  --bg-secondary: #FFFCF7;\n  --bg-gradient-start: #F5EDE0;\n  --bg-gradient-end: #EFE4D4;\n  --text-primary: #4A3728;\n  --text-secondary: #7A6A5A;\n  --text-white: #FFFCF7;\n  --shadow-sm: 0 2px 12px rgba(120, 90, 70, 0.10);\n  --shadow-md: 0 4px 24px rgba(120, 90, 70, 0.14);\n  --shadow-lg: 0 8px 40px rgba(120, 90, 70, 0.18);\n  --shadow-xl: 0 12px 56px rgba(120, 90, 70, 0.22);\n  --radius-sm: 8px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-full: 999px;\n  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n  --transition-spring: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.mem-wrap[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  background:\n    linear-gradient(\n      145deg,\n      var(--bg-gradient-start),\n      var(--bg-gradient-end));\n  min-height: 100vh;\n  padding: 30px 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-x: hidden;\n}\n.mem-wrap[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: -30%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(184, 138, 94, 0.08),\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_floatBg 20s ease-in-out infinite;\n}\n.mem-wrap[_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  bottom: -20%;\n  left: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 154, 122, 0.08),\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_floatBg 25s ease-in-out infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_floatBg {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(40px, -30px) scale(1.1);\n  }\n}\n.mod-title[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    "Georgia",\n    serif;\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.mod-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: clamp(0.85rem, 2vw, 1rem);\n  margin-bottom: 28px;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.diff-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: clamp(8px, 2vw, 16px);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 600px;\n}\n.diff-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: var(--radius-full);\n  padding: clamp(10px, 2vw, 16px) clamp(20px, 3vw, 36px);\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: clamp(0.75rem, 1.5vw, 0.95rem);\n  cursor: pointer;\n  transition: all var(--transition-bounce);\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-width: 100px;\n  max-width: 200px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-white);\n  border: 2px solid rgba(255, 252, 247, 0.25);\n}\n.diff-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 252, 247, 0.25),\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s;\n  transform: scale(0.5);\n}\n.diff-btn[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scale(1);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(1) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-easy-hover));\n  box-shadow: 0 4px 20px var(--btn-easy-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(1):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-easy-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(1).active {\n  background:\n    linear-gradient(\n      145deg,\n      #A08B68,\n      #8A7656);\n  box-shadow: 0 8px 32px var(--btn-easy-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(2) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-normal),\n      var(--btn-normal-hover));\n  box-shadow: 0 4px 20px var(--btn-normal-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(2):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-normal-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(2).active {\n  background:\n    linear-gradient(\n      145deg,\n      #A0774E,\n      #886640);\n  box-shadow: 0 8px 32px var(--btn-normal-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(3) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-hard),\n      var(--btn-hard-hover));\n  box-shadow: 0 4px 20px var(--btn-hard-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(3):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-hard-shadow);\n}\n.diff-btn[_ngcontent-%COMP%]:nth-child(3).active {\n  background:\n    linear-gradient(\n      145deg,\n      #C08868,\n      #A87054);\n  box-shadow: 0 8px 32px var(--btn-hard-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: clamp(8px, 2vw, 16px);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 650px;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-full);\n  padding: clamp(8px, 1.5vw, 14px) clamp(16px, 2.5vw, 28px);\n  font-size: clamp(0.75rem, 1.5vw, 0.9rem);\n  font-weight: 600;\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-md);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all var(--transition-smooth);\n  border: 2px solid transparent;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  flex: 1;\n  min-width: 120px;\n  justify-content: center;\n}\n.stat-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-lg);\n}\n.stat-chip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(1) {\n  border-color: var(--btn-easy);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(1)   b[_ngcontent-%COMP%] {\n  color: var(--btn-easy);\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(2) {\n  border-color: var(--btn-normal);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(2)   b[_ngcontent-%COMP%] {\n  color: var(--btn-normal);\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(3) {\n  border-color: var(--btn-hard);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip[_ngcontent-%COMP%]:nth-child(3)   b[_ngcontent-%COMP%] {\n  color: var(--btn-hard);\n}\n.win-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #E2CCA8,\n      #D4B08C);\n  border-radius: var(--radius-md);\n  padding: clamp(14px, 2vw, 24px) clamp(20px, 3vw, 36px);\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: clamp(12px, 2vw, 24px);\n  box-shadow: 0 8px 40px rgba(184, 138, 94, 0.3);\n  position: relative;\n  z-index: 1;\n  max-width: 550px;\n  width: 100%;\n  justify-content: center;\n  border: 2px solid rgba(255, 252, 247, 0.5);\n  animation: _ngcontent-%COMP%_winBannerIn 0.6s var(--transition-bounce);\n}\n.win-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-normal),\n      var(--btn-hard));\n  z-index: -1;\n  filter: blur(12px);\n  opacity: 0.4;\n}\n@keyframes _ngcontent-%COMP%_winBannerIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8) translateY(-30px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.win-medal[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 5vw, 3.5rem);\n  animation: _ngcontent-%COMP%_medalSpin 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_medalSpin {\n  0%, 100% {\n    transform: rotate(-5deg) scale(1);\n  }\n  50% {\n    transform: rotate(5deg) scale(1.1);\n  }\n}\n.win-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: clamp(0.85rem, 2vw, 1.1rem);\n  color: #5A4A3A;\n  text-align: center;\n}\n.mem-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: clamp(10px, 2vw, 18px);\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto 24px;\n  position: relative;\n  z-index: 1;\n  padding: 0 clamp(4px, 1vw, 12px);\n}\n.mem-card[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  perspective: 1200px;\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.3s ease;\n}\n.mem-card[_ngcontent-%COMP%]:hover:not(.matched) {\n  transform: translateY(-4px);\n}\n.mem-card.flipped[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n  z-index: 2;\n}\n.mem-card.matched[_ngcontent-%COMP%] {\n  transform: scale(0.92);\n  cursor: default;\n}\n.mem-card.wrong[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_wrongShake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_wrongShake {\n  0%, 100% {\n    transform: translateX(0) rotate(0deg);\n  }\n  15% {\n    transform: translateX(-8px) rotate(-2deg);\n  }\n  30% {\n    transform: translateX(8px) rotate(2deg);\n  }\n  45% {\n    transform: translateX(-5px) rotate(-1deg);\n  }\n  60% {\n    transform: translateX(5px) rotate(1deg);\n  }\n  80% {\n    transform: translateX(-3px);\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n  }\n}\n.mem-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-style: preserve-3d;\n}\n.mem-card.flipped[_ngcontent-%COMP%]   .mem-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.mem-front[_ngcontent-%COMP%], \n.mem-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(8px, 1.5vw, 16px);\n  text-align: center;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.mem-front[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #EFE4D4,\n      #EADCC8);\n  border: 3px solid rgba(184, 138, 94, 0.12);\n  box-shadow: var(--shadow-md);\n  transform: rotateY(0deg);\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.mem-front[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border-radius: var(--radius-sm);\n  border: 2px dashed rgba(184, 138, 94, 0.10);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_borderPulse 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_borderPulse {\n  0%, 100% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.mem-front[_ngcontent-%COMP%]   .qmark[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  color: #C9A87C;\n  font-weight: 300;\n  font-family: "Georgia", serif;\n  opacity: 0.5;\n  transition: all 0.3s ease;\n}\n.mem-card[_ngcontent-%COMP%]:hover:not(.matched):not(.flipped)   .mem-front[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 8px 32px rgba(184, 138, 94, 0.18);\n}\n.mem-card[_ngcontent-%COMP%]:hover:not(.matched):not(.flipped)   .mem-front[_ngcontent-%COMP%]   .qmark[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--primary);\n  transform: scale(1.15);\n}\n.mem-back[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 3px solid rgba(184, 138, 94, 0.08);\n  box-shadow: var(--shadow-md);\n  transform: rotateY(180deg);\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n.mem-text[_ngcontent-%COMP%] {\n  font-size: clamp(0.7rem, 1.8vw, 1.1rem);\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.3;\n  max-width: 90%;\n  font-family: "Inter", sans-serif;\n  transition: all 0.3s ease;\n}\n.mem-card.flipped[_ngcontent-%COMP%]   .mem-back[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n  box-shadow: 0 8px 32px rgba(184, 138, 94, 0.15);\n}\n.mem-card.matched[_ngcontent-%COMP%]   .mem-back[_ngcontent-%COMP%] {\n  border-color: var(--btn-easy);\n  background:\n    linear-gradient(\n      145deg,\n      #F5EDE0,\n      #EFE4D4);\n  box-shadow: 0 8px 32px rgba(181, 160, 122, 0.2);\n}\n.mem-card.matched[_ngcontent-%COMP%]   .mem-text[_ngcontent-%COMP%] {\n  color: var(--btn-easy);\n}\n.mem-card.matched[_ngcontent-%COMP%]   .mem-back[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  position: absolute;\n  top: 6px;\n  right: 10px;\n  font-size: 1.2rem;\n  color: var(--btn-easy);\n  opacity: 0.5;\n}\n.mem-card.wrong[_ngcontent-%COMP%]   .mem-back[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background:\n    linear-gradient(\n      145deg,\n      #F5EDE8,\n      #EFE4DC);\n  box-shadow: 0 8px 32px rgba(212, 140, 122, 0.2);\n}\n.mem-card.wrong[_ngcontent-%COMP%]   .mem-text[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.btn-row[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  gap: clamp(10px, 2vw, 16px);\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 500px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: var(--radius-full);\n  padding: clamp(14px, 2vw, 20px) clamp(28px, 4vw, 48px);\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: clamp(0.85rem, 1.5vw, 1rem);\n  cursor: pointer;\n  transition: all var(--transition-bounce);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-width: 160px;\n  max-width: 280px;\n  color: var(--text-white);\n  border: 2px solid rgba(255, 252, 247, 0.25);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 252, 247, 0.18),\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-normal),\n      var(--btn-normal-hover));\n  box-shadow: 0 4px 24px var(--btn-normal-shadow);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 8px 40px var(--btn-normal-shadow);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.96);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-easy-hover));\n  box-shadow: 0 4px 24px var(--btn-easy-shadow);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 8px 40px var(--btn-easy-shadow);\n}\n.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.96);\n}\n@media (max-width: 768px) {\n  .mem-wrap[_ngcontent-%COMP%] {\n    padding: 20px 16px 30px;\n  }\n  .diff-btn[_ngcontent-%COMP%] {\n    min-width: 80px;\n    padding: 10px 16px;\n    font-size: 0.75rem;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    min-width: 80px;\n    padding: 8px 14px;\n    font-size: 0.75rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    min-width: 130px;\n    padding: 12px 24px;\n    font-size: 0.8rem;\n  }\n  .mem-grid[_ngcontent-%COMP%] {\n    gap: 12px;\n    max-width: 480px;\n  }\n}\n@media (max-width: 480px) {\n  .mem-wrap[_ngcontent-%COMP%] {\n    padding: 16px 10px 24px;\n  }\n  .mod-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .mod-sub[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 20px;\n  }\n  .diff-row[_ngcontent-%COMP%] {\n    gap: 6px;\n    margin-bottom: 16px;\n  }\n  .diff-btn[_ngcontent-%COMP%] {\n    min-width: 65px;\n    padding: 8px 12px;\n    font-size: 0.65rem;\n    letter-spacing: 0;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    gap: 6px;\n    margin-bottom: 16px;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    min-width: 65px;\n    padding: 6px 10px;\n    font-size: 0.65rem;\n    gap: 4px;\n  }\n  .mem-grid[_ngcontent-%COMP%] {\n    gap: 8px;\n    max-width: 360px;\n    padding: 0 4px;\n  }\n  .mem-text[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .mem-front[_ngcontent-%COMP%]   .qmark[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    min-width: 100px;\n    padding: 10px 16px;\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n  .win-banner[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n  .win-medal[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .win-text[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 360px) {\n  .mod-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .diff-btn[_ngcontent-%COMP%] {\n    min-width: 55px;\n    padding: 6px 10px;\n    font-size: 0.55rem;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    min-width: 55px;\n    padding: 4px 8px;\n    font-size: 0.55rem;\n  }\n  .mem-grid[_ngcontent-%COMP%] {\n    gap: 6px;\n    max-width: 280px;\n  }\n  .mem-text[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .mem-front[_ngcontent-%COMP%]   .qmark[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    min-width: 80px;\n    padding: 8px 14px;\n    font-size: 0.6rem;\n  }\n}\n.mem-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardAppear 0.5s var(--transition-bounce) backwards;\n}\n@keyframes _ngcontent-%COMP%_cardAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.8) rotateY(20deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotateY(0deg);\n  }\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.03s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.06s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.09s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.12s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.15s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.18s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.21s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 0.24s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 0.27s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 0.30s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(11) {\n  animation-delay: 0.33s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(12) {\n  animation-delay: 0.36s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(13) {\n  animation-delay: 0.39s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(14) {\n  animation-delay: 0.42s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(15) {\n  animation-delay: 0.45s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(16) {\n  animation-delay: 0.48s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(17) {\n  animation-delay: 0.51s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(18) {\n  animation-delay: 0.54s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(19) {\n  animation-delay: 0.57s;\n}\n.mem-card[_ngcontent-%COMP%]:nth-child(20) {\n  animation-delay: 0.60s;\n}\n@keyframes _ngcontent-%COMP%_confettiFall {\n  0% {\n    transform: translateY(0) rotate(0deg) scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(100vh) rotate(720deg) scale(0.5);\n    opacity: 0;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-primary);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--accent));\n  border-radius: var(--radius-full);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary-dark),\n      var(--btn-hard-hover));\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/*# sourceMappingURL=memory.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Memory, [{
    type: Component,
    args: [{ selector: "app-memory", standalone: false, template: `<div class="mem-wrap">

  <h2 class="mod-title">\u{1F9E0} Juego de Memoria</h2>
  <p class="mod-sub">Encuentra todas las parejas ingl\xE9s\u2013espa\xF1ol</p>

  <div class="diff-row">
    <button class="diff-btn" [class.active]="numPairs===6" (click)="setDiff(6)">\u{1F331} F\xE1cil (6)</button>
    <button class="diff-btn" [class.active]="numPairs===8" (click)="setDiff(8)">\u{1F680} Normal (8)</button>
    <button class="diff-btn" [class.active]="numPairs===10" (click)="setDiff(10)">\u{1F525} Dif\xEDcil (10)</button>
  </div>

  <div class="stats-row">
    <div class="stat-chip">\u{1F3B4} Movimientos: <b>{{ moves }}</b></div>
    <div class="stat-chip">\u23F1\uFE0F <b>{{ timeStr }}</b></div>
    <div class="stat-chip">\u2705 Parejas: <b>{{ matched }}/{{ numPairs }}</b></div>
  </div>

  <div class="win-banner" *ngIf="won">
    <div class="win-medal">{{ medal }}</div>
    <div class="win-text">
      \xA1Completado en {{ moves }} movimientos \xB7 {{ timeStr }}!
      <span *ngIf="bestScore === moves" style="display:block;font-size:0.8rem;color:#B8860B;">\u{1F3C6} \xA1NUEVO R\xC9CORD!</span>
    </div>
  </div>

  <div class="mem-grid" [style.grid-template-columns]="'repeat(' + (numPairs <= 6 ? 3 : 4) + ', 1fr)'">

    <div
      *ngFor="let card of cards; let i = index; trackBy: trackById"
      class="mem-card"
      [ngClass]="{
        'flipped': card.state === 'revealed' || card.state === 'matched',
        'matched': card.state === 'matched',
        'wrong': card.state === 'wrong'
      }"
      (click)="click(i)"
      role="button"
      tabindex="0"
      (keydown.enter)="click(i)">

      <div class="mem-inner">
        <div class="mem-front">
          <span class="qmark">?</span>
        </div>
        <div class="mem-back">
          <span class="mem-text">{{ card.text }}</span>
        </div>
      </div>
    </div>

  </div>

  <div class="btn-row">
    <button class="btn btn-primary" (click)="init()">\u{1F504} Nueva partida</button>
    <button class="btn btn-secondary" *ngIf="won" (click)="init()">\u23ED\uFE0F Siguiente ronda</button>
  </div>

</div>`, styles: ['/* src/app/modules/memory/memory/memory.css */\n:root {\n  --primary: #B88A5E;\n  --primary-light: #D4B08C;\n  --primary-dark: #9C6E4A;\n  --secondary: #C9A87C;\n  --secondary-light: #E2CCA8;\n  --accent: #E8B88A;\n  --accent-light: #F2D4B8;\n  --warning: #F0D58C;\n  --danger: #D48C7A;\n  --info: #8FB8D4;\n  --btn-easy: #B5A07A;\n  --btn-easy-hover: #A08B68;\n  --btn-easy-shadow: rgba(181, 160, 122, 0.3);\n  --btn-normal: #B88A5E;\n  --btn-normal-hover: #A0774E;\n  --btn-normal-shadow: rgba(184, 138, 94, 0.3);\n  --btn-hard: #D49A7A;\n  --btn-hard-hover: #C08868;\n  --btn-hard-shadow: rgba(212, 154, 122, 0.3);\n  --btn-primary: #B88A5E;\n  --btn-primary-hover: #A0774E;\n  --bg-primary: #F9F5EE;\n  --bg-secondary: #FFFCF7;\n  --bg-gradient-start: #F5EDE0;\n  --bg-gradient-end: #EFE4D4;\n  --text-primary: #4A3728;\n  --text-secondary: #7A6A5A;\n  --text-white: #FFFCF7;\n  --shadow-sm: 0 2px 12px rgba(120, 90, 70, 0.10);\n  --shadow-md: 0 4px 24px rgba(120, 90, 70, 0.14);\n  --shadow-lg: 0 8px 40px rgba(120, 90, 70, 0.18);\n  --shadow-xl: 0 12px 56px rgba(120, 90, 70, 0.22);\n  --radius-sm: 8px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-full: 999px;\n  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n  --transition-spring: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.mem-wrap {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  background:\n    linear-gradient(\n      145deg,\n      var(--bg-gradient-start),\n      var(--bg-gradient-end));\n  min-height: 100vh;\n  padding: 30px 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow-x: hidden;\n}\n.mem-wrap::before {\n  content: "";\n  position: fixed;\n  top: -30%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(184, 138, 94, 0.08),\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  animation: floatBg 20s ease-in-out infinite;\n}\n.mem-wrap::after {\n  content: "";\n  position: fixed;\n  bottom: -20%;\n  left: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 154, 122, 0.08),\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n  animation: floatBg 25s ease-in-out infinite reverse;\n}\n@keyframes floatBg {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(40px, -30px) scale(1.1);\n  }\n}\n.mod-title {\n  font-family:\n    "Playfair Display",\n    "Georgia",\n    serif;\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.mod-sub {\n  color: var(--text-secondary);\n  font-size: clamp(0.85rem, 2vw, 1rem);\n  margin-bottom: 28px;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.diff-row {\n  display: flex;\n  gap: clamp(8px, 2vw, 16px);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 600px;\n}\n.diff-btn {\n  border: none;\n  border-radius: var(--radius-full);\n  padding: clamp(10px, 2vw, 16px) clamp(20px, 3vw, 36px);\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: clamp(0.75rem, 1.5vw, 0.95rem);\n  cursor: pointer;\n  transition: all var(--transition-bounce);\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-width: 100px;\n  max-width: 200px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--text-white);\n  border: 2px solid rgba(255, 252, 247, 0.25);\n}\n.diff-btn::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 252, 247, 0.25),\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s;\n  transform: scale(0.5);\n}\n.diff-btn:hover::before {\n  opacity: 1;\n  transform: scale(1);\n}\n.diff-btn:nth-child(1) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-easy-hover));\n  box-shadow: 0 4px 20px var(--btn-easy-shadow);\n}\n.diff-btn:nth-child(1):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-easy-shadow);\n}\n.diff-btn:nth-child(1).active {\n  background:\n    linear-gradient(\n      145deg,\n      #A08B68,\n      #8A7656);\n  box-shadow: 0 8px 32px var(--btn-easy-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.diff-btn:nth-child(2) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-normal),\n      var(--btn-normal-hover));\n  box-shadow: 0 4px 20px var(--btn-normal-shadow);\n}\n.diff-btn:nth-child(2):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-normal-shadow);\n}\n.diff-btn:nth-child(2).active {\n  background:\n    linear-gradient(\n      145deg,\n      #A0774E,\n      #886640);\n  box-shadow: 0 8px 32px var(--btn-normal-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.diff-btn:nth-child(3) {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-hard),\n      var(--btn-hard-hover));\n  box-shadow: 0 4px 20px var(--btn-hard-shadow);\n}\n.diff-btn:nth-child(3):hover {\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 8px 32px var(--btn-hard-shadow);\n}\n.diff-btn:nth-child(3).active {\n  background:\n    linear-gradient(\n      145deg,\n      #C08868,\n      #A87054);\n  box-shadow: 0 8px 32px var(--btn-hard-shadow);\n  transform: translateY(-4px) scale(1.05);\n  border-color: rgba(255, 252, 247, 0.5);\n}\n.stats-row {\n  display: flex;\n  gap: clamp(8px, 2vw, 16px);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 650px;\n}\n.stat-chip {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-full);\n  padding: clamp(8px, 1.5vw, 14px) clamp(16px, 2.5vw, 28px);\n  font-size: clamp(0.75rem, 1.5vw, 0.9rem);\n  font-weight: 600;\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-md);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all var(--transition-smooth);\n  border: 2px solid transparent;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  flex: 1;\n  min-width: 120px;\n  justify-content: center;\n}\n.stat-chip:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-lg);\n}\n.stat-chip b {\n  font-weight: 800;\n}\n.stat-chip:nth-child(1) {\n  border-color: var(--btn-easy);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip:nth-child(1) b {\n  color: var(--btn-easy);\n}\n.stat-chip:nth-child(2) {\n  border-color: var(--btn-normal);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip:nth-child(2) b {\n  color: var(--btn-normal);\n}\n.stat-chip:nth-child(3) {\n  border-color: var(--btn-hard);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n}\n.stat-chip:nth-child(3) b {\n  color: var(--btn-hard);\n}\n.win-banner {\n  background:\n    linear-gradient(\n      145deg,\n      #E2CCA8,\n      #D4B08C);\n  border-radius: var(--radius-md);\n  padding: clamp(14px, 2vw, 24px) clamp(20px, 3vw, 36px);\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: clamp(12px, 2vw, 24px);\n  box-shadow: 0 8px 40px rgba(184, 138, 94, 0.3);\n  position: relative;\n  z-index: 1;\n  max-width: 550px;\n  width: 100%;\n  justify-content: center;\n  border: 2px solid rgba(255, 252, 247, 0.5);\n  animation: winBannerIn 0.6s var(--transition-bounce);\n}\n.win-banner::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-normal),\n      var(--btn-hard));\n  z-index: -1;\n  filter: blur(12px);\n  opacity: 0.4;\n}\n@keyframes winBannerIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.8) translateY(-30px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.win-medal {\n  font-size: clamp(2.5rem, 5vw, 3.5rem);\n  animation: medalSpin 2s ease-in-out infinite;\n}\n@keyframes medalSpin {\n  0%, 100% {\n    transform: rotate(-5deg) scale(1);\n  }\n  50% {\n    transform: rotate(5deg) scale(1.1);\n  }\n}\n.win-text {\n  font-weight: 700;\n  font-size: clamp(0.85rem, 2vw, 1.1rem);\n  color: #5A4A3A;\n  text-align: center;\n}\n.mem-grid {\n  display: grid;\n  gap: clamp(10px, 2vw, 18px);\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto 24px;\n  position: relative;\n  z-index: 1;\n  padding: 0 clamp(4px, 1vw, 12px);\n}\n.mem-card {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  perspective: 1200px;\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.3s ease;\n}\n.mem-card:hover:not(.matched) {\n  transform: translateY(-4px);\n}\n.mem-card.flipped {\n  transform: scale(1.02);\n  z-index: 2;\n}\n.mem-card.matched {\n  transform: scale(0.92);\n  cursor: default;\n}\n.mem-card.wrong {\n  animation: wrongShake 0.5s ease;\n}\n@keyframes wrongShake {\n  0%, 100% {\n    transform: translateX(0) rotate(0deg);\n  }\n  15% {\n    transform: translateX(-8px) rotate(-2deg);\n  }\n  30% {\n    transform: translateX(8px) rotate(2deg);\n  }\n  45% {\n    transform: translateX(-5px) rotate(-1deg);\n  }\n  60% {\n    transform: translateX(5px) rotate(1deg);\n  }\n  80% {\n    transform: translateX(-3px);\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n  }\n}\n.mem-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-style: preserve-3d;\n}\n.mem-card.flipped .mem-inner {\n  transform: rotateY(180deg);\n}\n.mem-front,\n.mem-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(8px, 1.5vw, 16px);\n  text-align: center;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.mem-front {\n  background:\n    linear-gradient(\n      145deg,\n      #EFE4D4,\n      #EADCC8);\n  border: 3px solid rgba(184, 138, 94, 0.12);\n  box-shadow: var(--shadow-md);\n  transform: rotateY(0deg);\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.mem-front::before {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border-radius: var(--radius-sm);\n  border: 2px dashed rgba(184, 138, 94, 0.10);\n  pointer-events: none;\n  animation: borderPulse 3s ease-in-out infinite;\n}\n@keyframes borderPulse {\n  0%, 100% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.mem-front .qmark {\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  color: #C9A87C;\n  font-weight: 300;\n  font-family: "Georgia", serif;\n  opacity: 0.5;\n  transition: all 0.3s ease;\n}\n.mem-card:hover:not(.matched):not(.flipped) .mem-front {\n  border-color: var(--primary);\n  box-shadow: 0 8px 32px rgba(184, 138, 94, 0.18);\n}\n.mem-card:hover:not(.matched):not(.flipped) .mem-front .qmark {\n  opacity: 1;\n  color: var(--primary);\n  transform: scale(1.15);\n}\n.mem-back {\n  background: var(--bg-secondary);\n  border: 3px solid rgba(184, 138, 94, 0.08);\n  box-shadow: var(--shadow-md);\n  transform: rotateY(180deg);\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n.mem-text {\n  font-size: clamp(0.7rem, 1.8vw, 1.1rem);\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.3;\n  max-width: 90%;\n  font-family: "Inter", sans-serif;\n  transition: all 0.3s ease;\n}\n.mem-card.flipped .mem-back {\n  border-color: var(--primary);\n  background:\n    linear-gradient(\n      145deg,\n      #FFFCF7,\n      #F5EDE0);\n  box-shadow: 0 8px 32px rgba(184, 138, 94, 0.15);\n}\n.mem-card.matched .mem-back {\n  border-color: var(--btn-easy);\n  background:\n    linear-gradient(\n      145deg,\n      #F5EDE0,\n      #EFE4D4);\n  box-shadow: 0 8px 32px rgba(181, 160, 122, 0.2);\n}\n.mem-card.matched .mem-text {\n  color: var(--btn-easy);\n}\n.mem-card.matched .mem-back::after {\n  content: "\\2713";\n  position: absolute;\n  top: 6px;\n  right: 10px;\n  font-size: 1.2rem;\n  color: var(--btn-easy);\n  opacity: 0.5;\n}\n.mem-card.wrong .mem-back {\n  border-color: var(--danger);\n  background:\n    linear-gradient(\n      145deg,\n      #F5EDE8,\n      #EFE4DC);\n  box-shadow: 0 8px 32px rgba(212, 140, 122, 0.2);\n}\n.mem-card.wrong .mem-text {\n  color: var(--danger);\n}\n.btn-row {\n  margin-top: 12px;\n  display: flex;\n  gap: clamp(10px, 2vw, 16px);\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 500px;\n}\n.btn {\n  border: none;\n  border-radius: var(--radius-full);\n  padding: clamp(14px, 2vw, 20px) clamp(28px, 4vw, 48px);\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: clamp(0.85rem, 1.5vw, 1rem);\n  cursor: pointer;\n  transition: all var(--transition-bounce);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-width: 160px;\n  max-width: 280px;\n  color: var(--text-white);\n  border: 2px solid rgba(255, 252, 247, 0.25);\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 252, 247, 0.18),\n      transparent 60%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.btn:hover::before {\n  opacity: 1;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-normal),\n      var(--btn-normal-hover));\n  box-shadow: 0 4px 24px var(--btn-normal-shadow);\n}\n.btn-primary:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 8px 40px var(--btn-normal-shadow);\n}\n.btn-primary:active {\n  transform: translateY(0) scale(0.96);\n}\n.btn-secondary {\n  background:\n    linear-gradient(\n      145deg,\n      var(--btn-easy),\n      var(--btn-easy-hover));\n  box-shadow: 0 4px 24px var(--btn-easy-shadow);\n}\n.btn-secondary:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 8px 40px var(--btn-easy-shadow);\n}\n.btn-secondary:active {\n  transform: translateY(0) scale(0.96);\n}\n@media (max-width: 768px) {\n  .mem-wrap {\n    padding: 20px 16px 30px;\n  }\n  .diff-btn {\n    min-width: 80px;\n    padding: 10px 16px;\n    font-size: 0.75rem;\n  }\n  .stat-chip {\n    min-width: 80px;\n    padding: 8px 14px;\n    font-size: 0.75rem;\n  }\n  .btn {\n    min-width: 130px;\n    padding: 12px 24px;\n    font-size: 0.8rem;\n  }\n  .mem-grid {\n    gap: 12px;\n    max-width: 480px;\n  }\n}\n@media (max-width: 480px) {\n  .mem-wrap {\n    padding: 16px 10px 24px;\n  }\n  .mod-title {\n    font-size: 1.8rem;\n  }\n  .mod-sub {\n    font-size: 0.8rem;\n    margin-bottom: 20px;\n  }\n  .diff-row {\n    gap: 6px;\n    margin-bottom: 16px;\n  }\n  .diff-btn {\n    min-width: 65px;\n    padding: 8px 12px;\n    font-size: 0.65rem;\n    letter-spacing: 0;\n  }\n  .stats-row {\n    gap: 6px;\n    margin-bottom: 16px;\n  }\n  .stat-chip {\n    min-width: 65px;\n    padding: 6px 10px;\n    font-size: 0.65rem;\n    gap: 4px;\n  }\n  .mem-grid {\n    gap: 8px;\n    max-width: 360px;\n    padding: 0 4px;\n  }\n  .mem-text {\n    font-size: 0.6rem;\n  }\n  .mem-front .qmark {\n    font-size: 1.6rem;\n  }\n  .btn {\n    min-width: 100px;\n    padding: 10px 16px;\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n  .win-banner {\n    padding: 12px 16px;\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n  .win-medal {\n    font-size: 2rem;\n  }\n  .win-text {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 360px) {\n  .mod-title {\n    font-size: 1.4rem;\n  }\n  .diff-btn {\n    min-width: 55px;\n    padding: 6px 10px;\n    font-size: 0.55rem;\n  }\n  .stat-chip {\n    min-width: 55px;\n    padding: 4px 8px;\n    font-size: 0.55rem;\n  }\n  .mem-grid {\n    gap: 6px;\n    max-width: 280px;\n  }\n  .mem-text {\n    font-size: 0.5rem;\n  }\n  .mem-front .qmark {\n    font-size: 1.2rem;\n  }\n  .btn {\n    min-width: 80px;\n    padding: 8px 14px;\n    font-size: 0.6rem;\n  }\n}\n.mem-card {\n  animation: cardAppear 0.5s var(--transition-bounce) backwards;\n}\n@keyframes cardAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.8) rotateY(20deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotateY(0deg);\n  }\n}\n.mem-card:nth-child(1) {\n  animation-delay: 0.03s;\n}\n.mem-card:nth-child(2) {\n  animation-delay: 0.06s;\n}\n.mem-card:nth-child(3) {\n  animation-delay: 0.09s;\n}\n.mem-card:nth-child(4) {\n  animation-delay: 0.12s;\n}\n.mem-card:nth-child(5) {\n  animation-delay: 0.15s;\n}\n.mem-card:nth-child(6) {\n  animation-delay: 0.18s;\n}\n.mem-card:nth-child(7) {\n  animation-delay: 0.21s;\n}\n.mem-card:nth-child(8) {\n  animation-delay: 0.24s;\n}\n.mem-card:nth-child(9) {\n  animation-delay: 0.27s;\n}\n.mem-card:nth-child(10) {\n  animation-delay: 0.30s;\n}\n.mem-card:nth-child(11) {\n  animation-delay: 0.33s;\n}\n.mem-card:nth-child(12) {\n  animation-delay: 0.36s;\n}\n.mem-card:nth-child(13) {\n  animation-delay: 0.39s;\n}\n.mem-card:nth-child(14) {\n  animation-delay: 0.42s;\n}\n.mem-card:nth-child(15) {\n  animation-delay: 0.45s;\n}\n.mem-card:nth-child(16) {\n  animation-delay: 0.48s;\n}\n.mem-card:nth-child(17) {\n  animation-delay: 0.51s;\n}\n.mem-card:nth-child(18) {\n  animation-delay: 0.54s;\n}\n.mem-card:nth-child(19) {\n  animation-delay: 0.57s;\n}\n.mem-card:nth-child(20) {\n  animation-delay: 0.60s;\n}\n@keyframes confettiFall {\n  0% {\n    transform: translateY(0) rotate(0deg) scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(100vh) rotate(720deg) scale(0.5);\n    opacity: 0;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  background: var(--bg-primary);\n}\n::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary),\n      var(--accent));\n  border-radius: var(--radius-full);\n}\n::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      145deg,\n      var(--primary-dark),\n      var(--btn-hard-hover));\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/*# sourceMappingURL=memory.css.map */\n'] }]
  }], () => [{ type: PhrasesService }, { type: ScoreService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Memory, { className: "Memory", filePath: "src/app/modules/memory/memory/memory.ts", lineNumber: 19 });
})();

// src/app/modules/memory/memory-routing-module.ts
var memoryRoutes = [
  { path: "", component: Memory }
];

// src/app/modules/memory/memory-module.ts
var MemoryModule = class _MemoryModule {
  static \u0275fac = function MemoryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MemoryModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MemoryModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(memoryRoutes),
    SharedModule
    // ← Usar SharedModule (ya tiene ProgressBar y ScorePill)
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemoryModule, [{
    type: NgModule,
    args: [{
      declarations: [Memory],
      imports: [
        CommonModule,
        RouterModule.forChild(memoryRoutes),
        SharedModule
        // ← Usar SharedModule (ya tiene ProgressBar y ScorePill)
      ],
      exports: [Memory]
    }]
  }], null, null);
})();
export {
  MemoryModule
};
//# sourceMappingURL=chunk-MGBYBYBD.js.map
