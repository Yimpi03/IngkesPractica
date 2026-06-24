import {
  Header,
  SharedModule
} from "./chunk-HZT7I3MG.js";
import {
  BrowserModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  RouterOutlet,
  platformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PGTZPRSX.js";

// src/app/home/home.ts
function Home_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 49)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.desc);
  }
}
function Home_div_45_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.getProgress(m_r3.route), "%");
  }
}
function Home_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function Home_div_45_Template_div_click_0_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goTo(m_r3.route));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "div", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 56)(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 58);
    \u0275\u0275text(17, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, Home_div_45_div_18_Template, 2, 2, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.07 + "s");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("0", i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", m_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.desc);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.tag);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.getProgress(m_r3.route) > 0);
  }
}
var Home = class _Home {
  router;
  constructor(router) {
    this.router = router;
  }
  goTo(route) {
    this.router.navigate(["/" + route]);
  }
  scrollToModules() {
    document.getElementById("modules")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  getProgress(route) {
    const progressMap = {
      "flashcards": 75,
      "memory": 45,
      "dragdrop": 30,
      "quiz": 60,
      "exam": 20
    };
    return progressMap[route] || 0;
  }
  featured = [
    { icon: "\u{1F4DA}", title: "25+ Expresiones", desc: "Vocabulario esencial", color: "#E8F4FD" },
    { icon: "\u{1F3AE}", title: "5 Modos", desc: "Diferentes estilos", color: "#FDE8F0" },
    { icon: "\u2B50", title: "100% Gratis", desc: "Sin costo alguno", color: "#E8FDE8" }
  ];
  modules = [
    {
      icon: "\u{1F4DA}",
      title: "Tarjetas Flash",
      desc: "Estudia cada expresi\xF3n con flashcards interactivas",
      route: "flashcards",
      tag: "Aprender",
      color: "linear-gradient(135deg, #E8F4FD, #D4E8F5)"
    },
    {
      icon: "\u{1F9E0}",
      title: "Juego de Memoria",
      desc: "Encuentra las parejas ingl\xE9s-espa\xF1ol",
      route: "memory",
      tag: "Memorizar",
      color: "linear-gradient(135deg, #FDE8F0, #F5D4E8)"
    },
    {
      icon: "\u{1F3AF}",
      title: "Arrastrar y Soltar",
      desc: "Conecta frases con su traducci\xF3n",
      route: "dragdrop",
      tag: "Practicar",
      color: "linear-gradient(135deg, #E8FDE8, #D4F5D4)"
    },
    {
      icon: "\u2753",
      title: "Quiz Interactivo",
      desc: "25 preguntas de opci\xF3n m\xFAltiple",
      route: "quiz",
      tag: "Evaluar",
      color: "linear-gradient(135deg, #FDF0E8, #F5E0D4)"
    },
    {
      icon: "\u{1F3C6}",
      title: "Examen Final",
      desc: "Pon a prueba todo lo aprendido",
      route: "exam",
      tag: "Certificar",
      color: "linear-gradient(135deg, #FDE8E8, #F5D4D4)"
    }
  ];
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], standalone: false, decls: 97, vars: 2, consts: [[1, "home-container"], [1, "hero-fresh"], [1, "hero-background"], [1, "bg-gradient-1"], [1, "bg-gradient-2"], [1, "bg-gradient-3"], [1, "bg-blur"], [1, "hero-wrapper"], [1, "hero-content"], [1, "hero-badge"], [1, "badge-dot"], [1, "hero-title"], [1, "title-light"], [1, "title-fresh"], [1, "hero-text"], [1, "hero-buttons"], [1, "btn-fresh-primary", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M5 12H19M19 12L12 5M19 12L12 19", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "btn-fresh-secondary", 3, "click"], [1, "hero-wave"], ["viewBox", "0 0 1440 120", "fill", "none"], ["d", "M0 60L60 50C120 40 240 20 360 25C480 30 600 60 720 65C840 70 960 50 1080 40C1200 30 1320 35 1380 37.5L1440 40V120H0V60Z", "fill", "#F8F7FF"], [1, "featured-cards"], [1, "featured-grid"], ["class", "featured-card", 4, "ngFor", "ngForOf"], ["id", "modules", 1, "modules-fresh"], [1, "modules-header-fresh"], [1, "section-badge"], [1, "highlight-fresh"], [1, "modules-grid-fresh"], ["class", "module-card-fresh", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "features-fresh"], [1, "features-background"], [1, "features-bg-blob-1"], [1, "features-bg-blob-2"], [1, "features-wrapper"], [1, "features-header-fresh"], [1, "features-grid-fresh"], [1, "feature-card-fresh"], [1, "feature-number"], [1, "feature-icon-fresh"], [1, "cta-fresh"], [1, "cta-fresh-container"], [1, "cta-fresh-content"], [1, "cta-fresh-emoji"], [1, "cta-fresh-btn", 3, "click"], [1, "featured-card"], [1, "featured-icon"], [1, "featured-info"], [1, "module-card-fresh", 3, "click"], [1, "module-card-inner"], [1, "module-left"], [1, "module-number"], [1, "module-icon-fresh"], [1, "module-info"], [1, "module-right"], [1, "module-tag-fresh"], [1, "module-arrow-fresh"], ["class", "module-progress-fresh", 4, "ngIf"], [1, "module-progress-fresh"], [1, "module-progress-bar"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275element(10, "span", 10);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "English Express 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "h1", 11)(14, "span", 12);
      \u0275\u0275text(15, "Aprende ingl\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17, "jugando");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p", 14);
      \u0275\u0275text(19, " 25 expresiones esenciales \xB7 5 modos de pr\xE1ctica \xB7 \xA1Gratis! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
      \u0275\u0275listener("click", function Home_Template_button_click_21_listener() {
        return ctx.goTo("flashcards");
      });
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Empezar ahora");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 17);
      \u0275\u0275element(25, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "button", 19);
      \u0275\u0275listener("click", function Home_Template_button_click_26_listener() {
        return ctx.scrollToModules();
      });
      \u0275\u0275text(27, " Explorar m\xF3dulos ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 21);
      \u0275\u0275element(30, "path", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "section", 23)(32, "div", 24);
      \u0275\u0275template(33, Home_div_33_Template, 9, 5, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "section", 26)(35, "div", 27)(36, "span", 28);
      \u0275\u0275text(37, "\u{1F4DA} M\xF3dulos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h2");
      \u0275\u0275text(39, "Elige tu ");
      \u0275\u0275elementStart(40, "span", 29);
      \u0275\u0275text(41, "camino");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Cada m\xF3dulo est\xE1 dise\xF1ado para un estilo de aprendizaje \xFAnico");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 30);
      \u0275\u0275template(45, Home_div_45_Template, 19, 10, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "section", 32)(47, "div", 33);
      \u0275\u0275element(48, "div", 34)(49, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 36)(51, "div", 37)(52, "span", 28);
      \u0275\u0275text(53, "\u2728 Caracter\xEDsticas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2");
      \u0275\u0275text(55, "Dise\xF1ado para ");
      \u0275\u0275elementStart(56, "span", 29);
      \u0275\u0275text(57, "aprender");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 38)(59, "div", 39)(60, "div", 40);
      \u0275\u0275text(61, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 41);
      \u0275\u0275text(63, "\u{1F3AE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h4");
      \u0275\u0275text(65, "Gamificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "Sistemas de puntos y rachas para mantenerte motivado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 39)(69, "div", 40);
      \u0275\u0275text(70, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 41);
      \u0275\u0275text(72, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h4");
      \u0275\u0275text(74, "Memorizaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, "T\xE9cnicas efectivas para retener vocabulario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 39)(78, "div", 40);
      \u0275\u0275text(79, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 41);
      \u0275\u0275text(81, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h4");
      \u0275\u0275text(83, "Progreso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, "Mide tu avance con estad\xEDsticas detalladas");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "section", 42)(87, "div", 43)(88, "div", 44)(89, "span", 45);
      \u0275\u0275text(90, "\u{1F31F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "h3");
      \u0275\u0275text(92, "Comienza tu viaje hoy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "\xDAnete a miles que ya est\xE1n aprendiendo ingl\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "button", 46);
      \u0275\u0275listener("click", function Home_Template_button_click_95_listener() {
        return ctx.goTo("flashcards");
      });
      \u0275\u0275text(96, " \xA1Empezar ahora! ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(33);
      \u0275\u0275property("ngForOf", ctx.featured);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.modules);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.home-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #F8F7FF;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.hero-fresh[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 480px;\n  padding: 70px 24px 100px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.bg-gradient-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -200px;\n  right: -200px;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      #6C47FF 0%,\n      transparent 70%);\n  opacity: 0.15;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float-bg 15s ease-in-out infinite;\n}\n.bg-gradient-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -150px;\n  left: -150px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      #8B6BFF 0%,\n      transparent 70%);\n  opacity: 0.10;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float-bg 20s ease-in-out infinite reverse;\n}\n.bg-gradient-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 700px;\n  height: 700px;\n  background:\n    radial-gradient(\n      circle,\n      #A78BFA 0%,\n      transparent 70%);\n  opacity: 0.05;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float-bg 25s ease-in-out infinite 2s;\n}\n.bg-blur[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 50%,\n      rgba(108, 71, 255, 0.03) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse at 80% 50%,\n      rgba(139, 107, 255, 0.03) 0%,\n      transparent 60%);\n}\n@keyframes _ngcontent-%COMP%_float-bg {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(40px, -30px) scale(1.1);\n  }\n  66% {\n    transform: translate(-30px, 40px) scale(0.9);\n  }\n}\n.hero-wrapper[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n  text-align: center;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 18px;\n  background: rgba(108, 71, 255, 0.06);\n  border: 1px solid rgba(108, 71, 255, 0.08);\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C47FF;\n  margin-bottom: 24px;\n}\n.badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: #6C47FF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse-dot 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.3;\n    transform: scale(0.7);\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 900;\n  color: #1A0F3A;\n  line-height: 1.1;\n  margin-bottom: 16px;\n}\n.title-light[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n}\n.title-fresh[_ngcontent-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 56px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6B5F8A;\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-fresh-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  color: white;\n  border: none;\n  border-radius: 60px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.25);\n}\n.btn-fresh-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 16px 48px rgba(108, 71, 255, 0.35);\n}\n.btn-fresh-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.btn-fresh-primary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.btn-fresh-secondary[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  background: transparent;\n  color: #1A0F3A;\n  border: 2px solid #E8E5F5;\n  border-radius: 60px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-fresh-secondary[_ngcontent-%COMP%]:hover {\n  border-color: #6C47FF;\n  color: #6C47FF;\n  transform: translateY(-4px);\n  background: rgba(108, 71, 255, 0.02);\n}\n.hero-wave[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.hero-wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.featured-cards[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin-top: -40px;\n  padding: 0 24px;\n}\n.featured-grid[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.featured-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px 24px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 20px rgba(108, 71, 255, 0.06);\n  border: 1px solid rgba(108, 71, 255, 0.04);\n  transition: all 0.3s ease;\n}\n.featured-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.08);\n}\n.featured-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.featured-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 2px;\n}\n.featured-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B5F8A;\n}\n.modules-fresh[_ngcontent-%COMP%] {\n  padding: 60px 24px 50px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.modules-header-fresh[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.section-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C47FF;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  display: block;\n  margin-bottom: 4px;\n}\n.modules-header-fresh[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 900;\n  color: #1A0F3A;\n}\n.highlight-fresh[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.modules-header-fresh[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6B5F8A;\n  font-size: 16px;\n  margin-top: 4px;\n}\n.modules-grid-fresh[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.module-card-fresh[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 12px rgba(108, 71, 255, 0.04);\n  border: 1px solid rgba(108, 71, 255, 0.04);\n  animation: _ngcontent-%COMP%_fade-up 0.6s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.module-card-fresh[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.08);\n  border-color: rgba(108, 71, 255, 0.08);\n}\n.module-card-inner[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.module-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.module-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #C8C0E0;\n  letter-spacing: 1px;\n  min-width: 28px;\n}\n.module-icon-fresh[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.module-card-fresh[_ngcontent-%COMP%]:hover   .module-icon-fresh[_ngcontent-%COMP%] {\n  transform: scale(1.05) rotate(-5deg);\n}\n.module-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.module-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 2px;\n}\n.module-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B5F8A;\n}\n.module-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.module-tag-fresh[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C47FF;\n  background: rgba(108, 71, 255, 0.06);\n  padding: 3px 14px;\n  border-radius: 50px;\n}\n.module-arrow-fresh[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6C47FF;\n  opacity: 0.2;\n  transition: all 0.3s ease;\n}\n.module-card-fresh[_ngcontent-%COMP%]:hover   .module-arrow-fresh[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.module-progress-fresh[_ngcontent-%COMP%] {\n  height: 3px;\n  background: #F0EEFF;\n}\n.module-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  transition: width 1s ease;\n  border-radius: 0 2px 2px 0;\n}\n.features-fresh[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 24px;\n  overflow: hidden;\n  background: white;\n}\n.features-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.features-bg-blob-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -200px;\n  right: -200px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(108, 71, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.features-bg-blob-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -200px;\n  left: -200px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 107, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.features-wrapper[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.features-header-fresh[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.features-header-fresh[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  color: #1A0F3A;\n}\n.features-grid-fresh[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.feature-card-fresh[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #F8F7FF;\n  border-radius: 16px;\n  position: relative;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.feature-card-fresh[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: rgba(108, 71, 255, 0.06);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.04);\n  transform: translateY(-4px);\n}\n.feature-number[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #C8C0E0;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.feature-icon-fresh[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n}\n.feature-card-fresh[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 4px;\n}\n.feature-card-fresh[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B5F8A;\n  line-height: 1.5;\n}\n.cta-fresh[_ngcontent-%COMP%] {\n  padding: 60px 24px 80px;\n}\n.cta-fresh-container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  border-radius: 24px;\n  padding: 48px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-fresh-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -20%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float-bg 20s ease-in-out infinite;\n}\n.cta-fresh-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -40%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float-bg 25s ease-in-out infinite reverse;\n}\n.cta-fresh-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.cta-fresh-emoji[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.cta-fresh-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: white;\n  margin-bottom: 8px;\n}\n.cta-fresh-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 24px;\n}\n.cta-fresh-btn[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  background: white;\n  border: none;\n  border-radius: 60px;\n  font-size: 18px;\n  font-weight: 800;\n  color: #6C47FF;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.cta-fresh-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.04);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);\n}\n@media (max-width: 768px) {\n  .hero-fresh[_ngcontent-%COMP%] {\n    min-height: 400px;\n    padding: 50px 20px 80px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .title-fresh[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .featured-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modules-header-fresh[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .module-card-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px 18px;\n  }\n  .module-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .module-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .features-grid-fresh[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-fresh-container[_ngcontent-%COMP%] {\n    padding: 32px 20px;\n  }\n  .cta-fresh-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn-fresh-primary[_ngcontent-%COMP%], \n   .btn-fresh-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .title-fresh[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .featured-card[_ngcontent-%COMP%] {\n    padding: 14px 18px;\n  }\n  .module-card-inner[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .module-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .module-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .module-number[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cta-fresh-btn[_ngcontent-%COMP%] {\n    padding: 14px 32px;\n    font-size: 16px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: `<!-- home.html - Dise\xF1o Fresco y Elegante -->
<div class="home-container">

  <!-- HERO CON FONDO DIFUMINADO -->
  <section class="hero-fresh">
    <div class="hero-background">
      <div class="bg-gradient-1"></div>
      <div class="bg-gradient-2"></div>
      <div class="bg-gradient-3"></div>
      <div class="bg-blur"></div>
    </div>
    
    <div class="hero-wrapper">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>English Express 2026</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-light">Aprende ingl\xE9s</span>
          <span class="title-fresh">jugando</span>
        </h1>
        
        <p class="hero-text">
          25 expresiones esenciales \xB7 5 modos de pr\xE1ctica \xB7 \xA1Gratis!
        </p>
        
        <div class="hero-buttons">
          <button class="btn-fresh-primary" (click)="goTo('flashcards')">
            <span>Empezar ahora</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="btn-fresh-secondary" (click)="scrollToModules()">
            Explorar m\xF3dulos
          </button>
        </div>
      </div>
    </div>
    
    <!-- Onda decorativa -->
    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" fill="none">
        <path d="M0 60L60 50C120 40 240 20 360 25C480 30 600 60 720 65C840 70 960 50 1080 40C1200 30 1320 35 1380 37.5L1440 40V120H0V60Z" fill="#F8F7FF"/>
      </svg>
    </div>
  </section>

  <!-- CARDS DESTACADAS -->
  <section class="featured-cards">
    <div class="featured-grid">
      <div class="featured-card" *ngFor="let f of featured">
        <div class="featured-icon" [style.background]="f.color">
          <span>{{ f.icon }}</span>
        </div>
        <div class="featured-info">
          <h4>{{ f.title }}</h4>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- M\xD3DULOS - ESTILO ACORDE\xD3N -->
  <section class="modules-fresh" id="modules">
    <div class="modules-header-fresh">
      <span class="section-badge">\u{1F4DA} M\xF3dulos</span>
      <h2>Elige tu <span class="highlight-fresh">camino</span></h2>
      <p>Cada m\xF3dulo est\xE1 dise\xF1ado para un estilo de aprendizaje \xFAnico</p>
    </div>

    <div class="modules-grid-fresh">
      <div
        *ngFor="let m of modules; let i = index"
        class="module-card-fresh"
        [style.animation-delay]="i * 0.07 + 's'"
        (click)="goTo(m.route)">
        
        <div class="module-card-inner">
          <div class="module-left">
            <div class="module-number">0{{ i + 1 }}</div>
            <div class="module-icon-fresh" [style.background]="m.color">
              <span>{{ m.icon }}</span>
            </div>
            <div class="module-info">
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
            </div>
          </div>
          <div class="module-right">
            <span class="module-tag-fresh">{{ m.tag }}</span>
            <span class="module-arrow-fresh">\u2192</span>
          </div>
        </div>
        
        <div class="module-progress-fresh" *ngIf="getProgress(m.route) > 0">
          <div class="module-progress-bar" [style.width.%]="getProgress(m.route)"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES CON FONDO -->
  <section class="features-fresh">
    <div class="features-background">
      <div class="features-bg-blob-1"></div>
      <div class="features-bg-blob-2"></div>
    </div>
    
    <div class="features-wrapper">
      <div class="features-header-fresh">
        <span class="section-badge">\u2728 Caracter\xEDsticas</span>
        <h2>Dise\xF1ado para <span class="highlight-fresh">aprender</span></h2>
      </div>
      
      <div class="features-grid-fresh">
        <div class="feature-card-fresh">
          <div class="feature-number">01</div>
          <div class="feature-icon-fresh">\u{1F3AE}</div>
          <h4>Gamificaci\xF3n</h4>
          <p>Sistemas de puntos y rachas para mantenerte motivado</p>
        </div>
        <div class="feature-card-fresh">
          <div class="feature-number">02</div>
          <div class="feature-icon-fresh">\u{1F9E0}</div>
          <h4>Memorizaci\xF3n</h4>
          <p>T\xE9cnicas efectivas para retener vocabulario</p>
        </div>
        <div class="feature-card-fresh">
          <div class="feature-number">03</div>
          <div class="feature-icon-fresh">\u{1F4CA}</div>
          <h4>Progreso</h4>
          <p>Mide tu avance con estad\xEDsticas detalladas</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="cta-fresh">
    <div class="cta-fresh-container">
      <div class="cta-fresh-content">
        <span class="cta-fresh-emoji">\u{1F31F}</span>
        <h3>Comienza tu viaje hoy</h3>
        <p>\xDAnete a miles que ya est\xE1n aprendiendo ingl\xE9s</p>
        <button class="cta-fresh-btn" (click)="goTo('flashcards')">
          \xA1Empezar ahora!
        </button>
      </div>
    </div>
  </section>

</div>`, styles: ['/* src/app/home/home.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.home-container {\n  min-height: 100vh;\n  background: #F8F7FF;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.hero-fresh {\n  position: relative;\n  min-height: 480px;\n  padding: 70px 24px 100px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.hero-background {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.bg-gradient-1 {\n  position: absolute;\n  top: -200px;\n  right: -200px;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      #6C47FF 0%,\n      transparent 70%);\n  opacity: 0.15;\n  border-radius: 50%;\n  animation: float-bg 15s ease-in-out infinite;\n}\n.bg-gradient-2 {\n  position: absolute;\n  bottom: -150px;\n  left: -150px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      #8B6BFF 0%,\n      transparent 70%);\n  opacity: 0.10;\n  border-radius: 50%;\n  animation: float-bg 20s ease-in-out infinite reverse;\n}\n.bg-gradient-3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 700px;\n  height: 700px;\n  background:\n    radial-gradient(\n      circle,\n      #A78BFA 0%,\n      transparent 70%);\n  opacity: 0.05;\n  border-radius: 50%;\n  animation: float-bg 25s ease-in-out infinite 2s;\n}\n.bg-blur {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 50%,\n      rgba(108, 71, 255, 0.03) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse at 80% 50%,\n      rgba(139, 107, 255, 0.03) 0%,\n      transparent 60%);\n}\n@keyframes float-bg {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(40px, -30px) scale(1.1);\n  }\n  66% {\n    transform: translate(-30px, 40px) scale(0.9);\n  }\n}\n.hero-wrapper {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n  text-align: center;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 18px;\n  background: rgba(108, 71, 255, 0.06);\n  border: 1px solid rgba(108, 71, 255, 0.08);\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C47FF;\n  margin-bottom: 24px;\n}\n.badge-dot {\n  width: 6px;\n  height: 6px;\n  background: #6C47FF;\n  border-radius: 50%;\n  animation: pulse-dot 2s ease-in-out infinite;\n}\n@keyframes pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.3;\n    transform: scale(0.7);\n  }\n}\n.hero-title {\n  font-size: 52px;\n  font-weight: 900;\n  color: #1A0F3A;\n  line-height: 1.1;\n  margin-bottom: 16px;\n}\n.title-light {\n  display: block;\n  font-weight: 700;\n}\n.title-fresh {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 56px;\n}\n.hero-text {\n  font-size: 18px;\n  color: #6B5F8A;\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.hero-buttons {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-fresh-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  color: white;\n  border: none;\n  border-radius: 60px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.25);\n}\n.btn-fresh-primary:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 16px 48px rgba(108, 71, 255, 0.35);\n}\n.btn-fresh-primary svg {\n  transition: transform 0.3s ease;\n}\n.btn-fresh-primary:hover svg {\n  transform: translateX(4px);\n}\n.btn-fresh-secondary {\n  padding: 16px 32px;\n  background: transparent;\n  color: #1A0F3A;\n  border: 2px solid #E8E5F5;\n  border-radius: 60px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-fresh-secondary:hover {\n  border-color: #6C47FF;\n  color: #6C47FF;\n  transform: translateY(-4px);\n  background: rgba(108, 71, 255, 0.02);\n}\n.hero-wave {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.hero-wave svg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.featured-cards {\n  position: relative;\n  z-index: 2;\n  margin-top: -40px;\n  padding: 0 24px;\n}\n.featured-grid {\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.featured-card {\n  background: white;\n  padding: 20px 24px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 20px rgba(108, 71, 255, 0.06);\n  border: 1px solid rgba(108, 71, 255, 0.04);\n  transition: all 0.3s ease;\n}\n.featured-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.08);\n}\n.featured-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.featured-info h4 {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 2px;\n}\n.featured-info p {\n  font-size: 12px;\n  color: #6B5F8A;\n}\n.modules-fresh {\n  padding: 60px 24px 50px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.modules-header-fresh {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.section-badge {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C47FF;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  display: block;\n  margin-bottom: 4px;\n}\n.modules-header-fresh h2 {\n  font-size: 36px;\n  font-weight: 900;\n  color: #1A0F3A;\n}\n.highlight-fresh {\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.modules-header-fresh p {\n  color: #6B5F8A;\n  font-size: 16px;\n  margin-top: 4px;\n}\n.modules-grid-fresh {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.module-card-fresh {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 12px rgba(108, 71, 255, 0.04);\n  border: 1px solid rgba(108, 71, 255, 0.04);\n  animation: fade-up 0.6s ease-out both;\n}\n@keyframes fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.module-card-fresh:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.08);\n  border-color: rgba(108, 71, 255, 0.08);\n}\n.module-card-inner {\n  padding: 18px 22px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.module-left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.module-number {\n  font-size: 12px;\n  font-weight: 700;\n  color: #C8C0E0;\n  letter-spacing: 1px;\n  min-width: 28px;\n}\n.module-icon-fresh {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.module-card-fresh:hover .module-icon-fresh {\n  transform: scale(1.05) rotate(-5deg);\n}\n.module-info {\n  flex: 1;\n}\n.module-info h3 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 2px;\n}\n.module-info p {\n  font-size: 13px;\n  color: #6B5F8A;\n}\n.module-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.module-tag-fresh {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C47FF;\n  background: rgba(108, 71, 255, 0.06);\n  padding: 3px 14px;\n  border-radius: 50px;\n}\n.module-arrow-fresh {\n  font-size: 16px;\n  color: #6C47FF;\n  opacity: 0.2;\n  transition: all 0.3s ease;\n}\n.module-card-fresh:hover .module-arrow-fresh {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.module-progress-fresh {\n  height: 3px;\n  background: #F0EEFF;\n}\n.module-progress-bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  transition: width 1s ease;\n  border-radius: 0 2px 2px 0;\n}\n.features-fresh {\n  position: relative;\n  padding: 60px 24px;\n  overflow: hidden;\n  background: white;\n}\n.features-background {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.features-bg-blob-1 {\n  position: absolute;\n  top: -200px;\n  right: -200px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(108, 71, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.features-bg-blob-2 {\n  position: absolute;\n  bottom: -200px;\n  left: -200px;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 107, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.features-wrapper {\n  max-width: 900px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.features-header-fresh {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.features-header-fresh h2 {\n  font-size: 32px;\n  font-weight: 900;\n  color: #1A0F3A;\n}\n.features-grid-fresh {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.feature-card-fresh {\n  padding: 28px 24px;\n  background: #F8F7FF;\n  border-radius: 16px;\n  position: relative;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.feature-card-fresh:hover {\n  background: white;\n  border-color: rgba(108, 71, 255, 0.06);\n  box-shadow: 0 8px 30px rgba(108, 71, 255, 0.04);\n  transform: translateY(-4px);\n}\n.feature-number {\n  font-size: 11px;\n  font-weight: 700;\n  color: #C8C0E0;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.feature-icon-fresh {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n}\n.feature-card-fresh h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1A0F3A;\n  margin-bottom: 4px;\n}\n.feature-card-fresh p {\n  font-size: 13px;\n  color: #6B5F8A;\n  line-height: 1.5;\n}\n.cta-fresh {\n  padding: 60px 24px 80px;\n}\n.cta-fresh-container {\n  max-width: 700px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #6C47FF,\n      #8B6BFF);\n  border-radius: 24px;\n  padding: 48px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-fresh-container::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -20%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  animation: float-bg 20s ease-in-out infinite;\n}\n.cta-fresh-container::after {\n  content: "";\n  position: absolute;\n  bottom: -40%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.03) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  animation: float-bg 25s ease-in-out infinite reverse;\n}\n.cta-fresh-content {\n  position: relative;\n  z-index: 2;\n}\n.cta-fresh-emoji {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.cta-fresh-content h3 {\n  font-size: 28px;\n  font-weight: 900;\n  color: white;\n  margin-bottom: 8px;\n}\n.cta-fresh-content p {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 24px;\n}\n.cta-fresh-btn {\n  padding: 16px 48px;\n  background: white;\n  border: none;\n  border-radius: 60px;\n  font-size: 18px;\n  font-weight: 800;\n  color: #6C47FF;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.cta-fresh-btn:hover {\n  transform: translateY(-4px) scale(1.04);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);\n}\n@media (max-width: 768px) {\n  .hero-fresh {\n    min-height: 400px;\n    padding: 50px 20px 80px;\n  }\n  .hero-title {\n    font-size: 36px;\n  }\n  .title-fresh {\n    font-size: 40px;\n  }\n  .hero-text {\n    font-size: 16px;\n  }\n  .featured-grid {\n    grid-template-columns: 1fr;\n  }\n  .modules-header-fresh h2 {\n    font-size: 28px;\n  }\n  .module-card-inner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px 18px;\n  }\n  .module-right {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .module-left {\n    width: 100%;\n  }\n  .features-grid-fresh {\n    grid-template-columns: 1fr;\n  }\n  .cta-fresh-container {\n    padding: 32px 20px;\n  }\n  .cta-fresh-content h3 {\n    font-size: 22px;\n  }\n  .hero-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn-fresh-primary,\n  .btn-fresh-secondary {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title {\n    font-size: 28px;\n  }\n  .title-fresh {\n    font-size: 32px;\n  }\n  .hero-text {\n    font-size: 14px;\n  }\n  .featured-card {\n    padding: 14px 18px;\n  }\n  .module-card-inner {\n    padding: 14px 16px;\n  }\n  .module-info h3 {\n    font-size: 14px;\n  }\n  .module-info p {\n    font-size: 12px;\n  }\n  .module-number {\n    display: none;\n  }\n  .cta-fresh-btn {\n    padding: 14px 32px;\n    font-size: 16px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/home/home.ts", lineNumber: 11 });
})();

// src/app/app-routing-module.ts
var routes = [
  { path: "", component: Home },
  {
    path: "flashcards",
    loadChildren: () => import("./chunk-6OZZPGFK.js").then((m) => m.FlashcardsModule)
  },
  {
    path: "memory",
    loadChildren: () => import("./chunk-MGBYBYBD.js").then((m) => m.MemoryModule)
  },
  {
    path: "dragdrop",
    loadChildren: () => import("./chunk-GSIJ7RPC.js").then((m) => m.DragdropModule)
  },
  {
    path: "quiz",
    loadChildren: () => import("./chunk-XYBZZ65W.js").then((m) => m.QuizModule)
  },
  {
    path: "exam",
    loadChildren: () => import("./chunk-RTOHBKOC.js").then((m) => m.ExamModule)
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.ts
var App = class _App {
  title = "english-express";
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 3, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, Header], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 9 });
})();

// src/app/app-module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [App] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    // ← Añadir SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [
        App,
        Home
        // Header QUITADO de aquí (ahora está en SharedModule)
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
        // ← Añadir SharedModule
      ],
      providers: [],
      bootstrap: [App]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
