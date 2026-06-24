import {
  CommonModule,
  Component,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PGTZPRSX.js";

// src/app/modules/flashcards/flashcards/flashcards.ts
function Flashcards_ng_container_29_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 46);
    \u0275\u0275listener("error", function Flashcards_ng_container_29_img_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.currentPhrase.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.currentPhrase.en);
  }
}
function Flashcards_ng_container_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementEnd();
  }
}
function Flashcards_ng_container_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4, "Sin imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function Flashcards_ng_container_29_div_3_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.refreshCurrentImage();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6, " \u21BB Buscar imagen ");
    \u0275\u0275elementEnd()();
  }
}
function Flashcards_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Flashcards_ng_container_29_img_1_Template, 1, 2, "img", 43)(2, Flashcards_ng_container_29_div_2_Template, 2, 0, "div", 44)(3, Flashcards_ng_container_29_div_3_Template, 7, 0, "div", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPhrase.imageUrl && !ctx_r1.currentPhrase.imageLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPhrase.imageLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentPhrase.imageUrl && !ctx_r1.currentPhrase.imageLoading);
  }
}
function Flashcards_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const voice_r4 = ctx.$implicit;
    \u0275\u0275property("value", voice_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", voice_r4.name, " (", voice_r4.lang, ") ");
  }
}
function Flashcards_div_72_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function Flashcards_div_72_div_9_Template_div_click_0_listener() {
      const fav_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToCard(fav_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const fav_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.getPhraseByIndex(fav_r6)) == null ? null : tmp_3_0.en, " ");
  }
}
function Flashcards_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5, "Favoritos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275template(9, Flashcards_div_72_div_9_Template, 2, 1, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.favorites.size);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getFavoritesList());
  }
}
var Flashcards = class _Flashcards {
  PEXELS_API_KEY = "EDLdaT5tA3O5HNM0w84JHbA5lfEb5sBIgnMwpidJiQYWTuM3b1dC1Od0";
  phrases = [
    { en: "Good to see you", es: "Me alegra verte", note: "Se usa cuando te alegra ver a alguien despu\xE9s de tiempo.", searchTerm: "friends greeting smiling" },
    { en: "Hurry up", es: "Date prisa", note: "Para pedir a alguien que se apure.", searchTerm: "person running fast" },
    { en: "Don't give up", es: "No te rindas", note: "Para animar a alguien a seguir adelante.", searchTerm: "person climbing mountain motivation" },
    { en: "How embarrassing", es: "Qu\xE9 verg\xFCenza", note: "Para expresar algo bochornoso.", searchTerm: "embarrassed person covering face" },
    { en: "It depends", es: "Depende", note: "Cuando la respuesta var\xEDa seg\xFAn la situaci\xF3n.", searchTerm: "person thinking decision" },
    { en: "It's about time", es: "Ya era hora", note: "Algo tard\xF3 m\xE1s de lo esperado.", searchTerm: "clock time waiting" },
    { en: "Don't mention it", es: "No hay de qu\xE9", note: "Respuesta cort\xE9s a un agradecimiento.", searchTerm: "thank you handshake" },
    { en: "How cute", es: "Qu\xE9 lindo", note: "Para expresar ternura.", searchTerm: "cute puppy kitten" },
    { en: "It's unnecessary", es: "Est\xE1 de m\xE1s", note: "Algo que no hace falta.", searchTerm: "minimal simple empty desk" },
    { en: "I'm so sorry", es: "Lo siento mucho", note: "Disculpa profunda.", searchTerm: "sad apologizing person" },
    { en: "Don't even think about it", es: "Ni se te ocurra", note: "Para prohibir algo con firmeza.", searchTerm: "stop hand warning" },
    { en: "Listen to me", es: "Hazme caso", note: "Para pedir atenci\xF3n.", searchTerm: "person listening carefully" },
    { en: "How boring", es: "Qu\xE9 aburrido", note: "Algo tedioso.", searchTerm: "bored tired person" },
    { en: "There's no rush", es: "No hay prisa", note: "No hay urgencia.", searchTerm: "relaxed calm coffee" },
    { en: "I give up", es: "Me rindo", note: "Ya no se puede continuar.", searchTerm: "tired frustrated person" },
    { en: "How bad", es: "Qu\xE9 atrevido", note: "Algo que va demasiado lejos.", searchTerm: "mischievous child" },
    { en: "It makes no sense", es: "No tiene sentido", note: "Algo il\xF3gico.", searchTerm: "confused person thinking" },
    { en: "Take it easy", es: "T\xF3matelo con calma", note: "Para pedir calma.", searchTerm: "relaxing beach sunset" },
    { en: "It's all the same to me", es: "Me da igual", note: "Expresa indiferencia.", searchTerm: "indifferent person shrugging" },
    { en: "How outrageous", es: "Qu\xE9 barbaridad", note: "Expresa indignaci\xF3n.", searchTerm: "shocked surprised person" },
    { en: "You'll see", es: "Ya lo ver\xE1s", note: "Con el tiempo se comprobar\xE1.", searchTerm: "future hope horizon" },
    { en: "Don't exaggerate", es: "No exageres", note: "Pedir objetividad.", searchTerm: "dramatic surprised person" },
    { en: "Those were the days", es: "Qu\xE9 tiempos aquellos", note: "Recuerdo con nostalgia.", searchTerm: "old photos nostalgia" },
    { en: "It's not worth it", es: "No vale la pena", note: "El esfuerzo no justifica el resultado.", searchTerm: "waste of time tired" },
    { en: "Just to be safe", es: "Por las dudas", note: "Tomar una precauci\xF3n.", searchTerm: "safety helmet careful" }
  ];
  currentIndex = 0;
  isFlipped = false;
  showNote = false;
  favorites = /* @__PURE__ */ new Set();
  score = 0;
  voices = [];
  selectedVoice = "";
  ngOnInit() {
    this.loadVoices();
    this.loadImageForPhrase(this.currentIndex);
  }
  get currentPhrase() {
    return this.phrases[this.currentIndex];
  }
  getProgress() {
    return (this.currentIndex + 1) / this.phrases.length * 100;
  }
  async loadImageForPhrase(index) {
    const phrase = this.phrases[index];
    if (!phrase)
      return;
    phrase.imageLoading = true;
    try {
      const query = encodeURIComponent(phrase.searchTerm || phrase.en);
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1&orientation=landscape`, {
        headers: {
          Authorization: this.PEXELS_API_KEY
        }
      });
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        phrase.imageUrl = data.photos[0].src.large;
      } else {
        phrase.imageUrl = void 0;
      }
    } catch (error) {
      console.error("Error buscando imagen:", error);
      phrase.imageUrl = void 0;
    }
    phrase.imageLoading = false;
  }
  async refreshCurrentImage() {
    if (!this.currentPhrase)
      return;
    const phrase = this.currentPhrase;
    phrase.imageLoading = true;
    try {
      const query = encodeURIComponent(phrase.searchTerm || phrase.en);
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${randomPage}&orientation=landscape`, {
        headers: {
          Authorization: this.PEXELS_API_KEY
        }
      });
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        phrase.imageUrl = data.photos[0].src.large;
      } else {
        phrase.imageUrl = void 0;
      }
    } catch (error) {
      console.error("Error refrescando imagen:", error);
      phrase.imageUrl = void 0;
    }
    phrase.imageLoading = false;
  }
  onImageError() {
    if (this.currentPhrase) {
      this.currentPhrase.imageUrl = void 0;
      this.currentPhrase.imageLoading = false;
    }
  }
  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
    this.isFlipped = false;
    this.showNote = false;
    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }
  prevCard() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.phrases.length - 1;
    this.isFlipped = false;
    this.showNote = false;
    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }
  flipCard() {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      this.score += 1;
    }
  }
  loadVoices() {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        this.setVoices(availableVoices);
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          this.setVoices(window.speechSynthesis.getVoices());
        };
      }
    }
  }
  setVoices(availableVoices) {
    this.voices = availableVoices.map((voice) => ({
      name: voice.name,
      lang: voice.lang,
      voice
    }));
    const englishVoice = this.voices.find((v) => v.lang.startsWith("en"));
    this.selectedVoice = englishVoice ? englishVoice.name : this.voices[0]?.name || "";
  }
  speakPhrase() {
    if (typeof window === "undefined" || !window.speechSynthesis)
      return;
    const text = this.currentPhrase?.en || "";
    if (!text)
      return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.pitch = 1;
    const selected = this.voices.find((v) => v.name === this.selectedVoice);
    if (selected) {
      utterance.voice = selected.voice;
    }
    window.speechSynthesis.speak(utterance);
  }
  onVoiceChange(event) {
    const select = event.target;
    this.selectedVoice = select.value;
  }
  toggleNote() {
    this.showNote = !this.showNote;
  }
  toggleFav() {
    if (this.favorites.has(this.currentIndex)) {
      this.favorites.delete(this.currentIndex);
    } else {
      this.favorites.add(this.currentIndex);
    }
  }
  isFavorite() {
    return this.favorites.has(this.currentIndex);
  }
  getFavoritesList() {
    return Array.from(this.favorites);
  }
  getPhraseByIndex(index) {
    return this.phrases[index];
  }
  goToCard(index) {
    this.currentIndex = index;
    this.isFlipped = false;
    this.showNote = false;
    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }
  static \u0275fac = function Flashcards_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Flashcards)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Flashcards, selectors: [["app-flashcards"]], standalone: false, decls: 76, vars: 19, consts: [[1, "flashcards-wrapper"], [1, "flash-header"], [1, "logo"], [1, "logo-icon"], [1, "header-actions"], [1, "score-pill"], [1, "score-icon"], [1, "wrap"], [1, "section-top"], [1, "section-title"], [1, "section-sub"], [1, "module-badge"], [1, "progress-wrap"], [1, "progress-fill"], [1, "counter"], [1, "flashcard-container"], [1, "flashcard", 3, "click"], [1, "flashcard-front"], [1, "card-image-wrapper"], [4, "ngIf"], [1, "card-badge"], [1, "card-phrase"], [1, "card-hint"], [1, "flashcard-back"], [1, "nav-controls"], [1, "btn", "btn-nav", "btn-prev", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-nav", "btn-next", 3, "click"], [1, "controls-secondary"], [1, "voice-control-group"], [1, "btn", "btn-voice", 3, "click"], [1, "voice-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-fav", 3, "click"], [1, "note-toggle-wrap"], [1, "btn", "btn-note", 3, "click"], [1, "note-box"], [1, "note-icon"], [1, "note-content"], [1, "note-label"], ["class", "favs-section", 4, "ngIf"], [1, "footer-divider"], [1, "footer-note"], ["class", "card-image", 3, "src", "alt", "error", 4, "ngIf"], ["class", "card-image-loading", 4, "ngIf"], ["class", "card-image-fallback", 4, "ngIf"], [1, "card-image", 3, "error", "src", "alt"], [1, "card-image-loading"], [1, "loading-spinner"], [1, "card-image-fallback"], [1, "fallback-icon"], [1, "fallback-text"], [1, "btn", "btn-refresh", 3, "click"], [3, "value"], [1, "favs-section"], [1, "favs-header"], [1, "favs-icon"], [1, "favs-title"], [1, "favs-count"], [1, "favs-list"], ["class", "fav-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "fav-chip", 3, "click"]], template: function Flashcards_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "LexiCards");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div")(15, "div", 9);
      \u0275\u0275text(16, "M\xF3dulo I");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275text(18, "Toque la tarjeta para descubrir la traducci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11);
      \u0275\u0275text(20, "25 expresiones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275element(22, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16);
      \u0275\u0275listener("click", function Flashcards_Template_div_click_26_listener() {
        return ctx.flipCard();
      });
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18);
      \u0275\u0275template(29, Flashcards_ng_container_29_Template, 4, 3, "ng-container", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275text(31, "EN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 21);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 22);
      \u0275\u0275text(35, "\u21BB tocar para girar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 20);
      \u0275\u0275text(38, "ES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 21);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22);
      \u0275\u0275text(42, "\u21BB tocar para girar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 24)(44, "button", 25);
      \u0275\u0275listener("click", function Flashcards_Template_button_click_44_listener() {
        return ctx.prevCard();
      });
      \u0275\u0275elementStart(45, "span", 26);
      \u0275\u0275text(46, "\u2190");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Anterior ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 27);
      \u0275\u0275listener("click", function Flashcards_Template_button_click_48_listener() {
        return ctx.nextCard();
      });
      \u0275\u0275text(49, " Siguiente ");
      \u0275\u0275elementStart(50, "span", 26);
      \u0275\u0275text(51, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 28)(53, "div", 29)(54, "button", 30);
      \u0275\u0275listener("click", function Flashcards_Template_button_click_54_listener() {
        return ctx.speakPhrase();
      });
      \u0275\u0275elementStart(55, "span", 26);
      \u0275\u0275text(56, "\u25C9");
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Escuchar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "select", 31);
      \u0275\u0275listener("change", function Flashcards_Template_select_change_58_listener($event) {
        return ctx.onVoiceChange($event);
      });
      \u0275\u0275template(59, Flashcards_option_59_Template, 2, 3, "option", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "button", 33);
      \u0275\u0275listener("click", function Flashcards_Template_button_click_60_listener() {
        return ctx.toggleFav();
      });
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 34)(63, "button", 35);
      \u0275\u0275listener("click", function Flashcards_Template_button_click_63_listener() {
        return ctx.toggleNote();
      });
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 36)(66, "div", 37);
      \u0275\u0275text(67, "\u24D8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 38)(69, "span", 39);
      \u0275\u0275text(70, "Nota");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(72, Flashcards_div_72_Template, 10, 2, "div", 40);
      \u0275\u0275element(73, "div", 41);
      \u0275\u0275elementStart(74, "div", 42);
      \u0275\u0275text(75, "\u2014 Colecci\xF3n de expresiones cotidianas \u2014");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.score, " pts ");
      \u0275\u0275advance(11);
      \u0275\u0275styleProp("width", ctx.getProgress(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.currentIndex + 1, " / ", ctx.phrases.length);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("flipped", ctx.isFlipped);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.currentPhrase);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentPhrase == null ? null : ctx.currentPhrase.en);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.currentPhrase == null ? null : ctx.currentPhrase.es);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.voices);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isFavorite());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isFavorite() ? "\u2605" : "\u2606", " Favorito ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.showNote ? "\u25BE Ocultar nota" : "\u25B8 Ver nota", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.showNote);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.currentPhrase == null ? null : ctx.currentPhrase.note, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.favorites.size > 0);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['\n[_ngcontent-%COMP%]:root {\n  --bg-cream: #f5efe6;\n  --bg-cream-light: #faf7f2;\n  --bg-cream-dark: #e8dfd3;\n  --bg-warm: #ede5d8;\n  --bg-elevated: #2c241a;\n  --bg-glass: rgba(44, 36, 26, 0.06);\n  --bg-glass-hover: rgba(44, 36, 26, 0.12);\n  --bg-glass-dark: rgba(44, 36, 26, 0.08);\n  --gold: #b8944a;\n  --gold-light: #d4b06a;\n  --gold-dark: #9a7a3e;\n  --gold-glow: rgba(184, 148, 74, 0.2);\n  --platinum: #7a7268;\n  --platinum-light: #9a9288;\n  --charcoal: #2c241a;\n  --ink: #1a1510;\n  --text-primary: #2c241a;\n  --text-secondary: #4a4238;\n  --text-tertiary: #8a8278;\n  --text-muted: #b8b0a6;\n  --gradient-gold:\n    linear-gradient(\n      135deg,\n      #c49a4a,\n      #a87a3e);\n  --gradient-gold-soft:\n    linear-gradient(\n      135deg,\n      #d4b06a,\n      #c49a4a);\n  --gradient-platinum:\n    linear-gradient(\n      135deg,\n      #9a9288,\n      #7a7268);\n  --gradient-cream:\n    linear-gradient(\n      135deg,\n      #faf7f2,\n      #ede5d8);\n  --glass-border: rgba(44, 36, 26, 0.08);\n  --glass-border-hover: rgba(44, 36, 26, 0.16);\n  --glass-shadow: 0 8px 32px rgba(44, 36, 26, 0.08);\n  --glass-blur: blur(20px);\n  --shadow-sm: 0 2px 12px rgba(44, 36, 26, 0.06);\n  --shadow-md: 0 8px 32px rgba(44, 36, 26, 0.08);\n  --shadow-lg: 0 16px 48px rgba(44, 36, 26, 0.10);\n  --shadow-xl: 0 24px 64px rgba(44, 36, 26, 0.12);\n  --shadow-card: 0 20px 60px rgba(44, 36, 26, 0.10);\n  --radius-sm: 8px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-xl: 32px;\n  --radius-full: 999px;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.flashcards-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  background: var(--bg-cream);\n  color: var(--text-primary);\n  min-height: 100vh;\n  padding: 0 0 40px 0;\n  position: relative;\n  overflow-x: hidden;\n  letter-spacing: 0.01em;\n}\n.flashcards-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 20%,\n      rgba(184, 148, 74, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 80% 80%,\n      rgba(138, 130, 120, 0.02) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(184, 148, 74, 0.015) 0%,\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.flashcards-wrapper[_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: radial-gradient(rgba(44, 36, 26, 0.02) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  z-index: 0;\n  opacity: 0.5;\n}\n.flash-header[_ngcontent-%COMP%] {\n  background: rgba(245, 239, 230, 0.92);\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n  border-bottom: 1px solid var(--glass-border);\n  padding: 14px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 20px rgba(44, 36, 26, 0.04);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 300;\n  font-size: 1.1rem;\n  letter-spacing: 0.15em;\n  color: var(--text-secondary);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--gold);\n  font-weight: 200;\n}\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  letter-spacing: 0.2em;\n  background: var(--gradient-gold);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.score-pill[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  padding: 6px 20px;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-secondary);\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.score-icon[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 0.7rem;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 32px 24px 40px;\n  position: relative;\n  z-index: 1;\n}\n.section-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.6rem;\n  letter-spacing: 0.08em;\n  color: var(--text-primary);\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-weight: 300;\n  font-size: 0.85rem;\n  letter-spacing: 0.03em;\n  margin-top: 2px;\n}\n.module-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  color: var(--text-tertiary);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  padding: 4px 16px;\n  background: var(--bg-glass);\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  border-radius: var(--radius-full);\n  height: 2px;\n  margin-bottom: 6px;\n  overflow: hidden;\n  border: 1px solid var(--glass-border);\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradient-gold);\n  border-radius: var(--radius-full);\n  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.counter[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-tertiary);\n  font-weight: 300;\n  font-size: 0.7rem;\n  margin-bottom: 28px;\n  letter-spacing: 0.1em;\n}\n.flashcard-container[_ngcontent-%COMP%] {\n  perspective: 1800px;\n  margin: 0 auto 28px;\n  max-width: 480px;\n}\n.flashcard[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n  cursor: pointer;\n}\n.flashcard.flipped[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flashcard-front[_ngcontent-%COMP%], \n.flashcard-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: var(--radius-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 28px 24px;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--shadow-card);\n  overflow: hidden;\n}\n.flashcard-front[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #faf7f2,\n      #f0e8de);\n  border-color: rgba(184, 148, 74, 0.08);\n  transform: rotateY(0deg);\n  z-index: 2;\n}\n.flashcard-front[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 30% 20%,\n      rgba(184, 148, 74, 0.04),\n      transparent 50%),\n    radial-gradient(\n      ellipse at 70% 80%,\n      rgba(184, 148, 74, 0.02),\n      transparent 40%);\n  pointer-events: none;\n}\n.flashcard-front[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(184, 148, 74, 0.08),\n      transparent);\n}\n.flashcard-back[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #faf7f2,\n      #f0e8de);\n  border-color: rgba(138, 130, 120, 0.08);\n  transform: rotateY(180deg);\n  z-index: 1;\n}\n.flashcard-back[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 70% 30%,\n      rgba(138, 130, 120, 0.04),\n      transparent 50%),\n    radial-gradient(\n      ellipse at 30% 80%,\n      rgba(138, 130, 120, 0.02),\n      transparent 40%);\n  pointer-events: none;\n}\n.flashcard-back[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(138, 130, 120, 0.06),\n      transparent);\n}\n.card-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--bg-glass);\n  border: 1px solid var(--glass-border);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.flashcard[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-image-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  gap: 10px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--glass-border);\n  border-top-color: var(--gold);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-tertiary);\n  font-weight: 300;\n}\n.card-image-fallback[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  color: var(--text-tertiary);\n  width: 100%;\n  height: 100%;\n}\n.fallback-icon[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  opacity: 0.4;\n}\n.fallback-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 300;\n  opacity: 0.6;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  color: var(--text-secondary);\n  border: 1px solid var(--glass-border);\n  padding: 6px 16px;\n  font-size: 0.6rem;\n  border-radius: var(--radius-full);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 32px;\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-glass-hover);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.card-badge[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  padding: 4px 16px;\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  background: var(--bg-glass);\n  position: relative;\n  z-index: 2;\n  flex-shrink: 0;\n}\n.flashcard-front[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  color: var(--gold);\n  border-color: rgba(184, 148, 74, 0.1);\n}\n.flashcard-back[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  color: var(--platinum);\n  border-color: rgba(138, 130, 120, 0.1);\n}\n.card-phrase[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 300;\n  text-align: center;\n  line-height: 1.3;\n  position: relative;\n  z-index: 2;\n  max-width: 100%;\n  word-wrap: break-word;\n  letter-spacing: 0.02em;\n  color: var(--text-primary);\n  flex-shrink: 0;\n}\n.card-hint[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  margin-top: 10px;\n  position: relative;\n  z-index: 2;\n  color: var(--text-tertiary);\n  font-weight: 300;\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n  letter-spacing: 0.1em;\n  flex-shrink: 0;\n}\n.flashcard[_ngcontent-%COMP%]:hover   .card-hint[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.nav-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 8px 0;\n  width: 100%;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: var(--radius-full);\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  letter-spacing: 0.05em;\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.6;\n}\n.btn-nav[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-secondary);\n  border: 1px solid var(--glass-border);\n  padding: 12px 28px;\n  font-size: 0.85rem;\n  min-height: 52px;\n  flex: 1 1 auto;\n  max-width: 220px;\n  justify-content: center;\n  font-weight: 500;\n}\n.btn-nav[_ngcontent-%COMP%]:hover {\n  background: var(--bg-glass);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.controls-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n  padding: 6px 0;\n}\n.btn-voice[_ngcontent-%COMP%] {\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  font-weight: 600;\n  box-shadow: 0 4px 16px rgba(90, 82, 72, 0.15);\n  padding: 10px 20px;\n  font-size: 0.75rem;\n  min-height: 44px;\n}\n.btn-voice[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(90, 82, 72, 0.2);\n  transform: translateY(-2px);\n  color: #faf7f2;\n  background: var(--gradient-platinum);\n}\n.btn-voice[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  color: #faf7f2;\n}\n.voice-control-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: var(--bg-glass);\n  border-radius: var(--radius-full);\n  padding: 3px;\n  border: 1px solid var(--glass-border);\n}\n.voice-control-group[_ngcontent-%COMP%]   .btn-voice[_ngcontent-%COMP%] {\n  border-radius: var(--radius-full);\n  box-shadow: none;\n  margin: 0;\n  padding: 8px 18px;\n  font-size: 0.75rem;\n  min-height: 40px;\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n}\n.voice-control-group[_ngcontent-%COMP%]   .btn-voice[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n}\n.voice-select[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-secondary);\n  padding: 6px 14px;\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n  max-width: 160px;\n  border-radius: var(--radius-full);\n  transition: all 0.3s ease;\n  height: 40px;\n}\n.voice-select[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-glass);\n}\n.voice-select[_ngcontent-%COMP%]:focus {\n  border: 1px solid var(--glass-border-hover);\n}\n.voice-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--bg-cream);\n  color: var(--text-primary);\n  padding: 6px 12px;\n}\n.btn-fav[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  font-size: 0.7rem;\n  padding: 10px 18px;\n  min-height: 44px;\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  color: var(--text-secondary);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-fav[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-glass-hover);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n}\n.btn-fav.active[_ngcontent-%COMP%] {\n  background: var(--gradient-gold);\n  color: #faf7f2;\n  border-color: transparent;\n  box-shadow: 0 4px 20px var(--gold-glow);\n}\n.btn-fav.active[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px var(--gold-glow);\n  color: #faf7f2;\n}\n.btn-note[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-tertiary);\n  border: none;\n  padding: 8px 16px;\n  font-size: 0.7rem;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n  min-height: auto;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.btn-note[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n  transform: none;\n  box-shadow: none;\n}\n.note-toggle-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n}\n.note-box[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n  border-radius: var(--radius-sm);\n  padding: 16px 20px;\n  display: none;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--glass-border);\n  margin-top: 8px;\n  margin-bottom: 20px;\n  align-items: flex-start;\n  gap: 12px;\n}\n.note-box.visible[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_noteFade 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_noteFade {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.note-icon[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 0.9rem;\n  opacity: 0.6;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.note-content[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 300;\n  line-height: 1.6;\n}\n.note-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.55rem;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-tertiary);\n  margin-bottom: 2px;\n}\n.favs-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--glass-border);\n}\n.favs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.favs-icon[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-size: 0.7rem;\n  opacity: 0.6;\n}\n.favs-title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  color: var(--text-tertiary);\n  text-transform: uppercase;\n}\n.favs-count[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--text-tertiary);\n  background: var(--bg-glass);\n  padding: 0 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--glass-border);\n  font-weight: 300;\n}\n.favs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.fav-chip[_ngcontent-%COMP%] {\n  background: var(--bg-glass);\n  color: var(--text-secondary);\n  padding: 5px 16px;\n  border-radius: var(--radius-full);\n  font-size: 0.7rem;\n  font-weight: 300;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid var(--glass-border);\n  letter-spacing: 0.02em;\n}\n.fav-chip[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-gold);\n  color: #faf7f2;\n  transform: translateY(-2px);\n  border-color: transparent;\n  box-shadow: 0 4px 20px var(--gold-glow);\n}\n.footer-divider[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--glass-border),\n      transparent);\n}\n.footer-note[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  font-weight: 300;\n  letter-spacing: 0.15em;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .flash-header[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    font-size: 0.9rem;\n  }\n  .score-pill[_ngcontent-%COMP%] {\n    padding: 4px 14px;\n    font-size: 0.6rem;\n  }\n  .nav-controls[_ngcontent-%COMP%] {\n    gap: 12px;\n    padding: 6px 0;\n  }\n  .btn-nav[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 0.75rem;\n    min-height: 46px;\n    max-width: 180px;\n  }\n  .controls-secondary[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .voice-control-group[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .voice-select[_ngcontent-%COMP%] {\n    min-width: 100px;\n    max-width: 130px;\n    font-size: 0.65rem;\n    padding: 4px 10px;\n    height: 36px;\n  }\n  .flashcard[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .card-image-wrapper[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n  .card-phrase[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .btn-voice[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.65rem;\n    min-height: 38px;\n  }\n  .btn-fav[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.65rem;\n    min-height: 38px;\n  }\n  .wrap[_ngcontent-%COMP%] {\n    padding: 20px 16px 32px;\n  }\n  .section-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .voice-control-group[_ngcontent-%COMP%]   .btn-voice[_ngcontent-%COMP%] {\n    padding: 6px 14px;\n    font-size: 0.65rem;\n    min-height: 34px;\n  }\n  .loading-text[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 480px) {\n  .flashcard[_ngcontent-%COMP%] {\n    height: 310px;\n  }\n  .card-image-wrapper[_ngcontent-%COMP%] {\n    height: 110px;\n  }\n  .card-phrase[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .nav-controls[_ngcontent-%COMP%] {\n    gap: 10px;\n    flex-direction: row;\n    width: 100%;\n    padding: 4px 0;\n  }\n  .btn-nav[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.65rem;\n    min-height: 40px;\n    max-width: 140px;\n    flex: 1 1 auto;\n  }\n  .controls-secondary[_ngcontent-%COMP%] {\n    gap: 6px;\n    flex-direction: column;\n    width: 100%;\n  }\n  .voice-control-group[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .voice-select[_ngcontent-%COMP%] {\n    min-width: 60px;\n    max-width: 80px;\n    font-size: 0.5rem;\n    padding: 3px 6px;\n    height: 28px;\n  }\n  .voice-control-group[_ngcontent-%COMP%]   .btn-voice[_ngcontent-%COMP%] {\n    padding: 4px 10px;\n    font-size: 0.55rem;\n    min-height: 28px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .card-badge[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n    padding: 3px 12px;\n  }\n  .flash-header[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .score-pill[_ngcontent-%COMP%] {\n    padding: 3px 10px;\n    font-size: 0.5rem;\n  }\n  .wrap[_ngcontent-%COMP%] {\n    padding: 14px 12px 24px;\n  }\n  .note-box[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    font-size: 0.7rem;\n  }\n  .fav-chip[_ngcontent-%COMP%] {\n    padding: 3px 12px;\n    font-size: 0.6rem;\n  }\n  .btn-voice[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.55rem;\n    min-height: 32px;\n  }\n  .btn-fav[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.55rem;\n    min-height: 32px;\n  }\n  .btn-icon[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .card-hint[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    margin-top: 8px;\n  }\n  .fallback-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .fallback-text[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .btn-refresh[_ngcontent-%COMP%] {\n    padding: 4px 12px;\n    font-size: 0.55rem;\n    min-height: 28px;\n  }\n  .loading-text[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-cream);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gold);\n  border-radius: var(--radius-full);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gold-light);\n}\n/*# sourceMappingURL=flashcards.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Flashcards, [{
    type: Component,
    args: [{ selector: "app-flashcards", standalone: false, template: `<!-- flashcards.html -->
<div class="flashcards-wrapper">

  <!-- HEADER -->
  <header class="flash-header">
    <div class="logo">
      <span class="logo-icon">\u25C6</span>
      <span>LexiCards</span>
    </div>
    <div class="header-actions">
      <div class="score-pill">
        <span class="score-icon">\u2726</span>
        {{ score }} pts
      </div>
    </div>
  </header>

  <div class="wrap">

    <!-- T\xCDTULO SECCI\xD3N -->
    <div class="section-top">
      <div>
        <div class="section-title">M\xF3dulo I</div>
        <div class="section-sub">Toque la tarjeta para descubrir la traducci\xF3n</div>
      </div>
      <div class="module-badge">25 expresiones</div>
    </div>

    <!-- PROGRESS -->
    <div class="progress-wrap">
      <div class="progress-fill" [style.width.%]="getProgress()"></div>
    </div>
    <div class="counter">{{ currentIndex + 1 }} / {{ phrases.length }}</div>

    <!-- FLASHCARD CON IMAGEN REAL -->
    <div class="flashcard-container">
      <div class="flashcard" [class.flipped]="isFlipped" (click)="flipCard()">
        
        <!-- CARA FRONTAL -->
        <div class="flashcard-front">
          <!-- IMAGEN REAL DE PICSUM -->
          <div class="card-image-wrapper">
            <ng-container *ngIf="currentPhrase">
              <img 
                *ngIf="currentPhrase.imageUrl && !currentPhrase.imageLoading" 
                [src]="currentPhrase.imageUrl" 
                [alt]="currentPhrase.en"
                class="card-image"
                (error)="onImageError()"
              />
              
              <!-- Estado de carga -->
              <div class="card-image-loading" *ngIf="currentPhrase.imageLoading">
                <div class="loading-spinner"></div>
              </div>
              
              <!-- Fallback si no carga -->
              <div class="card-image-fallback" *ngIf="!currentPhrase.imageUrl && !currentPhrase.imageLoading">
                <span class="fallback-icon">\u{1F4F7}</span>
                <span class="fallback-text">Sin imagen</span>
                <button class="btn btn-refresh" (click)="refreshCurrentImage(); $event.stopPropagation()">
                  \u21BB Buscar imagen
                </button>
              </div>
            </ng-container>
          </div>
          
          <div class="card-badge">EN</div>
          <div class="card-phrase">{{ currentPhrase?.en }}</div>
          <div class="card-hint">\u21BB tocar para girar</div>
        </div>
        
        <!-- CARA TRASERA -->
        <div class="flashcard-back">
          <div class="card-badge">ES</div>
          <div class="card-phrase">{{ currentPhrase?.es }}</div>
          <div class="card-hint">\u21BB tocar para girar</div>
        </div>
      </div>
    </div>

    <!-- CONTROLES DE NAVEGACI\xD3N -->
    <div class="nav-controls">
      <button class="btn btn-nav btn-prev" (click)="prevCard()">
        <span class="btn-icon">\u2190</span> Anterior
      </button>
      <button class="btn btn-nav btn-next" (click)="nextCard()">
        Siguiente <span class="btn-icon">\u2192</span>
      </button>
    </div>

    <!-- CONTROLES SECUNDARIOS -->
    <div class="controls-secondary">
      <div class="voice-control-group">
        <button class="btn btn-voice" (click)="speakPhrase()">
          <span class="btn-icon">\u25C9</span> Escuchar
        </button>
        <select class="voice-select" (change)="onVoiceChange($event)">
          <option *ngFor="let voice of voices" [value]="voice.name">
            {{ voice.name }} ({{ voice.lang }})
          </option>
        </select>
      </div>

      <button class="btn btn-fav" [class.active]="isFavorite()" (click)="toggleFav()">
        {{ isFavorite() ? '\u2605' : '\u2606' }} Favorito
      </button>
    </div>

    <!-- NOTE BUTTON -->
    <div class="note-toggle-wrap">
      <button class="btn btn-note" (click)="toggleNote()">
        {{ showNote ? '\u25BE Ocultar nota' : '\u25B8 Ver nota' }}
      </button>
    </div>

    <!-- NOTE BOX -->
    <div class="note-box" [class.visible]="showNote">
      <div class="note-icon">\u24D8</div>
      <div class="note-content">
        <span class="note-label">Nota</span>
        {{ currentPhrase?.note }}
      </div>
    </div>

    <!-- FAVORITOS -->
    <div class="favs-section" *ngIf="favorites.size > 0">
      <div class="favs-header">
        <span class="favs-icon">\u2726</span>
        <span class="favs-title">Favoritos</span>
        <span class="favs-count">{{ favorites.size }}</span>
      </div>
      <div class="favs-list">
        <div
          *ngFor="let fav of getFavoritesList()"
          class="fav-chip"
          (click)="goToCard(fav)">
          {{ getPhraseByIndex(fav)?.en }}
        </div>
      </div>
    </div>

    <!-- FOOTER DECORATIVO -->
    <div class="footer-divider"></div>
    <div class="footer-note">\u2014 Colecci\xF3n de expresiones cotidianas \u2014</div>

  </div>

</div>`, styles: ['/* src/app/modules/flashcards/flashcards/flashcards.css */\n:root {\n  --bg-cream: #f5efe6;\n  --bg-cream-light: #faf7f2;\n  --bg-cream-dark: #e8dfd3;\n  --bg-warm: #ede5d8;\n  --bg-elevated: #2c241a;\n  --bg-glass: rgba(44, 36, 26, 0.06);\n  --bg-glass-hover: rgba(44, 36, 26, 0.12);\n  --bg-glass-dark: rgba(44, 36, 26, 0.08);\n  --gold: #b8944a;\n  --gold-light: #d4b06a;\n  --gold-dark: #9a7a3e;\n  --gold-glow: rgba(184, 148, 74, 0.2);\n  --platinum: #7a7268;\n  --platinum-light: #9a9288;\n  --charcoal: #2c241a;\n  --ink: #1a1510;\n  --text-primary: #2c241a;\n  --text-secondary: #4a4238;\n  --text-tertiary: #8a8278;\n  --text-muted: #b8b0a6;\n  --gradient-gold:\n    linear-gradient(\n      135deg,\n      #c49a4a,\n      #a87a3e);\n  --gradient-gold-soft:\n    linear-gradient(\n      135deg,\n      #d4b06a,\n      #c49a4a);\n  --gradient-platinum:\n    linear-gradient(\n      135deg,\n      #9a9288,\n      #7a7268);\n  --gradient-cream:\n    linear-gradient(\n      135deg,\n      #faf7f2,\n      #ede5d8);\n  --glass-border: rgba(44, 36, 26, 0.08);\n  --glass-border-hover: rgba(44, 36, 26, 0.16);\n  --glass-shadow: 0 8px 32px rgba(44, 36, 26, 0.08);\n  --glass-blur: blur(20px);\n  --shadow-sm: 0 2px 12px rgba(44, 36, 26, 0.06);\n  --shadow-md: 0 8px 32px rgba(44, 36, 26, 0.08);\n  --shadow-lg: 0 16px 48px rgba(44, 36, 26, 0.10);\n  --shadow-xl: 0 24px 64px rgba(44, 36, 26, 0.12);\n  --shadow-card: 0 20px 60px rgba(44, 36, 26, 0.10);\n  --radius-sm: 8px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n  --radius-xl: 32px;\n  --radius-full: 999px;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.flashcards-wrapper {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  background: var(--bg-cream);\n  color: var(--text-primary);\n  min-height: 100vh;\n  padding: 0 0 40px 0;\n  position: relative;\n  overflow-x: hidden;\n  letter-spacing: 0.01em;\n}\n.flashcards-wrapper::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 20%,\n      rgba(184, 148, 74, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 80% 80%,\n      rgba(138, 130, 120, 0.02) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(184, 148, 74, 0.015) 0%,\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.flashcards-wrapper::after {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: radial-gradient(rgba(44, 36, 26, 0.02) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  z-index: 0;\n  opacity: 0.5;\n}\n.flash-header {\n  background: rgba(245, 239, 230, 0.92);\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n  border-bottom: 1px solid var(--glass-border);\n  padding: 14px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 20px rgba(44, 36, 26, 0.04);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 300;\n  font-size: 1.1rem;\n  letter-spacing: 0.15em;\n  color: var(--text-secondary);\n}\n.logo-icon {\n  font-size: 1.2rem;\n  color: var(--gold);\n  font-weight: 200;\n}\n.logo span:last-child {\n  font-weight: 500;\n  letter-spacing: 0.2em;\n  background: var(--gradient-gold);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.score-pill {\n  background: var(--bg-glass);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  padding: 6px 20px;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-secondary);\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.score-icon {\n  color: var(--gold);\n  font-size: 0.7rem;\n}\n.wrap {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 32px 24px 40px;\n  position: relative;\n  z-index: 1;\n}\n.section-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 20px;\n}\n.section-title {\n  font-weight: 300;\n  font-size: 1.6rem;\n  letter-spacing: 0.08em;\n  color: var(--text-primary);\n}\n.section-sub {\n  color: var(--text-tertiary);\n  font-weight: 300;\n  font-size: 0.85rem;\n  letter-spacing: 0.03em;\n  margin-top: 2px;\n}\n.module-badge {\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  color: var(--text-tertiary);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  padding: 4px 16px;\n  background: var(--bg-glass);\n}\n.progress-wrap {\n  background: var(--bg-glass);\n  border-radius: var(--radius-full);\n  height: 2px;\n  margin-bottom: 6px;\n  overflow: hidden;\n  border: 1px solid var(--glass-border);\n}\n.progress-fill {\n  height: 100%;\n  background: var(--gradient-gold);\n  border-radius: var(--radius-full);\n  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.counter {\n  text-align: center;\n  color: var(--text-tertiary);\n  font-weight: 300;\n  font-size: 0.7rem;\n  margin-bottom: 28px;\n  letter-spacing: 0.1em;\n}\n.flashcard-container {\n  perspective: 1800px;\n  margin: 0 auto 28px;\n  max-width: 480px;\n}\n.flashcard {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n  cursor: pointer;\n}\n.flashcard.flipped {\n  transform: rotateY(180deg);\n}\n.flashcard-front,\n.flashcard-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: var(--radius-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 28px 24px;\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--shadow-card);\n  overflow: hidden;\n}\n.flashcard-front {\n  background:\n    linear-gradient(\n      145deg,\n      #faf7f2,\n      #f0e8de);\n  border-color: rgba(184, 148, 74, 0.08);\n  transform: rotateY(0deg);\n  z-index: 2;\n}\n.flashcard-front::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 30% 20%,\n      rgba(184, 148, 74, 0.04),\n      transparent 50%),\n    radial-gradient(\n      ellipse at 70% 80%,\n      rgba(184, 148, 74, 0.02),\n      transparent 40%);\n  pointer-events: none;\n}\n.flashcard-front::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(184, 148, 74, 0.08),\n      transparent);\n}\n.flashcard-back {\n  background:\n    linear-gradient(\n      145deg,\n      #faf7f2,\n      #f0e8de);\n  border-color: rgba(138, 130, 120, 0.08);\n  transform: rotateY(180deg);\n  z-index: 1;\n}\n.flashcard-back::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      ellipse at 70% 30%,\n      rgba(138, 130, 120, 0.04),\n      transparent 50%),\n    radial-gradient(\n      ellipse at 30% 80%,\n      rgba(138, 130, 120, 0.02),\n      transparent 40%);\n  pointer-events: none;\n}\n.flashcard-back::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(138, 130, 120, 0.06),\n      transparent);\n}\n.card-image-wrapper {\n  width: 100%;\n  height: 160px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--bg-glass);\n  border: 1px solid var(--glass-border);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.flashcard:hover .card-image {\n  transform: scale(1.05);\n}\n.card-image-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  gap: 10px;\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--glass-border);\n  border-top-color: var(--gold);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-text {\n  font-size: 0.65rem;\n  color: var(--text-tertiary);\n  font-weight: 300;\n}\n.card-image-fallback {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  color: var(--text-tertiary);\n  width: 100%;\n  height: 100%;\n}\n.fallback-icon {\n  font-size: 2.8rem;\n  opacity: 0.4;\n}\n.fallback-text {\n  font-size: 0.7rem;\n  font-weight: 300;\n  opacity: 0.6;\n}\n.btn-refresh {\n  background: var(--bg-glass);\n  color: var(--text-secondary);\n  border: 1px solid var(--glass-border);\n  padding: 6px 16px;\n  font-size: 0.6rem;\n  border-radius: var(--radius-full);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 32px;\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n}\n.btn-refresh:hover {\n  background: var(--bg-glass-hover);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.card-badge {\n  font-size: 0.5rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  padding: 4px 16px;\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  background: var(--bg-glass);\n  position: relative;\n  z-index: 2;\n  flex-shrink: 0;\n}\n.flashcard-front .card-badge {\n  color: var(--gold);\n  border-color: rgba(184, 148, 74, 0.1);\n}\n.flashcard-back .card-badge {\n  color: var(--platinum);\n  border-color: rgba(138, 130, 120, 0.1);\n}\n.card-phrase {\n  font-size: 2.2rem;\n  font-weight: 300;\n  text-align: center;\n  line-height: 1.3;\n  position: relative;\n  z-index: 2;\n  max-width: 100%;\n  word-wrap: break-word;\n  letter-spacing: 0.02em;\n  color: var(--text-primary);\n  flex-shrink: 0;\n}\n.card-hint {\n  font-size: 0.6rem;\n  margin-top: 10px;\n  position: relative;\n  z-index: 2;\n  color: var(--text-tertiary);\n  font-weight: 300;\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n  letter-spacing: 0.1em;\n  flex-shrink: 0;\n}\n.flashcard:hover .card-hint {\n  opacity: 0.6;\n}\n.nav-controls {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 8px 0;\n  width: 100%;\n}\n.btn {\n  border: none;\n  border-radius: var(--radius-full);\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  letter-spacing: 0.05em;\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n}\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn:active {\n  transform: scale(0.97);\n}\n.btn-icon {\n  font-size: 0.9rem;\n  opacity: 0.6;\n}\n.btn-nav {\n  background: transparent;\n  color: var(--text-secondary);\n  border: 1px solid var(--glass-border);\n  padding: 12px 28px;\n  font-size: 0.85rem;\n  min-height: 52px;\n  flex: 1 1 auto;\n  max-width: 220px;\n  justify-content: center;\n  font-weight: 500;\n}\n.btn-nav:hover {\n  background: var(--bg-glass);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.controls-secondary {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n  padding: 6px 0;\n}\n.btn-voice {\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  font-weight: 600;\n  box-shadow: 0 4px 16px rgba(90, 82, 72, 0.15);\n  padding: 10px 20px;\n  font-size: 0.75rem;\n  min-height: 44px;\n}\n.btn-voice:hover {\n  box-shadow: 0 8px 28px rgba(90, 82, 72, 0.2);\n  transform: translateY(-2px);\n  color: #faf7f2;\n  background: var(--gradient-platinum);\n}\n.btn-voice .btn-icon {\n  opacity: 0.8;\n  color: #faf7f2;\n}\n.voice-control-group {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: var(--bg-glass);\n  border-radius: var(--radius-full);\n  padding: 3px;\n  border: 1px solid var(--glass-border);\n}\n.voice-control-group .btn-voice {\n  border-radius: var(--radius-full);\n  box-shadow: none;\n  margin: 0;\n  padding: 8px 18px;\n  font-size: 0.75rem;\n  min-height: 40px;\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n}\n.voice-control-group .btn-voice:hover {\n  background: var(--gradient-platinum);\n  color: #faf7f2;\n}\n.voice-select {\n  border: none;\n  background: transparent;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--text-secondary);\n  padding: 6px 14px;\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n  max-width: 160px;\n  border-radius: var(--radius-full);\n  transition: all 0.3s ease;\n  height: 40px;\n}\n.voice-select:hover {\n  color: var(--text-primary);\n  background: var(--bg-glass);\n}\n.voice-select:focus {\n  border: 1px solid var(--glass-border-hover);\n}\n.voice-select option {\n  background: var(--bg-cream);\n  color: var(--text-primary);\n  padding: 6px 12px;\n}\n.btn-fav {\n  background: var(--bg-glass);\n  font-size: 0.7rem;\n  padding: 10px 18px;\n  min-height: 44px;\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-full);\n  color: var(--text-secondary);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-fav:hover:not(.active) {\n  background: var(--bg-glass-hover);\n  border-color: var(--glass-border-hover);\n  color: var(--text-primary);\n}\n.btn-fav.active {\n  background: var(--gradient-gold);\n  color: #faf7f2;\n  border-color: transparent;\n  box-shadow: 0 4px 20px var(--gold-glow);\n}\n.btn-fav.active:hover {\n  box-shadow: 0 8px 32px var(--gold-glow);\n  color: #faf7f2;\n}\n.btn-note {\n  background: transparent;\n  color: var(--text-tertiary);\n  border: none;\n  padding: 8px 16px;\n  font-size: 0.7rem;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n  min-height: auto;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.btn-note:hover {\n  color: var(--text-secondary);\n  transform: none;\n  box-shadow: none;\n}\n.note-toggle-wrap {\n  text-align: center;\n  margin-top: 4px;\n}\n.note-box {\n  background: var(--bg-glass);\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n  border-radius: var(--radius-sm);\n  padding: 16px 20px;\n  display: none;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--glass-border);\n  margin-top: 8px;\n  margin-bottom: 20px;\n  align-items: flex-start;\n  gap: 12px;\n}\n.note-box.visible {\n  display: flex;\n  animation: noteFade 0.4s ease;\n}\n@keyframes noteFade {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.note-icon {\n  color: var(--gold);\n  font-size: 0.9rem;\n  opacity: 0.6;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.note-content {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 300;\n  line-height: 1.6;\n}\n.note-label {\n  display: block;\n  font-size: 0.55rem;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-tertiary);\n  margin-bottom: 2px;\n}\n.favs-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--glass-border);\n}\n.favs-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.favs-icon {\n  color: var(--gold);\n  font-size: 0.7rem;\n  opacity: 0.6;\n}\n.favs-title {\n  font-weight: 300;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  color: var(--text-tertiary);\n  text-transform: uppercase;\n}\n.favs-count {\n  font-size: 0.6rem;\n  color: var(--text-tertiary);\n  background: var(--bg-glass);\n  padding: 0 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--glass-border);\n  font-weight: 300;\n}\n.favs-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.fav-chip {\n  background: var(--bg-glass);\n  color: var(--text-secondary);\n  padding: 5px 16px;\n  border-radius: var(--radius-full);\n  font-size: 0.7rem;\n  font-weight: 300;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid var(--glass-border);\n  letter-spacing: 0.02em;\n}\n.fav-chip:hover {\n  background: var(--gradient-gold);\n  color: #faf7f2;\n  transform: translateY(-2px);\n  border-color: transparent;\n  box-shadow: 0 4px 20px var(--gold-glow);\n}\n.footer-divider {\n  margin-top: 32px;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--glass-border),\n      transparent);\n}\n.footer-note {\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  font-weight: 300;\n  letter-spacing: 0.15em;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .flash-header {\n    padding: 12px 20px;\n  }\n  .logo {\n    font-size: 1rem;\n  }\n  .logo span:last-child {\n    font-size: 0.9rem;\n  }\n  .score-pill {\n    padding: 4px 14px;\n    font-size: 0.6rem;\n  }\n  .nav-controls {\n    gap: 12px;\n    padding: 6px 0;\n  }\n  .btn-nav {\n    padding: 10px 20px;\n    font-size: 0.75rem;\n    min-height: 46px;\n    max-width: 180px;\n  }\n  .controls-secondary {\n    gap: 8px;\n  }\n  .voice-control-group {\n    width: 100%;\n    justify-content: center;\n  }\n  .voice-select {\n    min-width: 100px;\n    max-width: 130px;\n    font-size: 0.65rem;\n    padding: 4px 10px;\n    height: 36px;\n  }\n  .flashcard {\n    height: 350px;\n  }\n  .card-image-wrapper {\n    height: 130px;\n  }\n  .card-phrase {\n    font-size: 1.8rem;\n  }\n  .section-title {\n    font-size: 1.3rem;\n  }\n  .btn-voice {\n    padding: 8px 16px;\n    font-size: 0.65rem;\n    min-height: 38px;\n  }\n  .btn-fav {\n    padding: 8px 14px;\n    font-size: 0.65rem;\n    min-height: 38px;\n  }\n  .wrap {\n    padding: 20px 16px 32px;\n  }\n  .section-top {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .voice-control-group .btn-voice {\n    padding: 6px 14px;\n    font-size: 0.65rem;\n    min-height: 34px;\n  }\n  .loading-text {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 480px) {\n  .flashcard {\n    height: 310px;\n  }\n  .card-image-wrapper {\n    height: 110px;\n  }\n  .card-phrase {\n    font-size: 1.5rem;\n  }\n  .nav-controls {\n    gap: 10px;\n    flex-direction: row;\n    width: 100%;\n    padding: 4px 0;\n  }\n  .btn-nav {\n    padding: 8px 14px;\n    font-size: 0.65rem;\n    min-height: 40px;\n    max-width: 140px;\n    flex: 1 1 auto;\n  }\n  .controls-secondary {\n    gap: 6px;\n    flex-direction: column;\n    width: 100%;\n  }\n  .voice-control-group {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .voice-select {\n    min-width: 60px;\n    max-width: 80px;\n    font-size: 0.5rem;\n    padding: 3px 6px;\n    height: 28px;\n  }\n  .voice-control-group .btn-voice {\n    padding: 4px 10px;\n    font-size: 0.55rem;\n    min-height: 28px;\n  }\n  .section-title {\n    font-size: 1.1rem;\n  }\n  .card-badge {\n    font-size: 0.4rem;\n    padding: 3px 12px;\n  }\n  .flash-header {\n    padding: 10px 14px;\n  }\n  .score-pill {\n    padding: 3px 10px;\n    font-size: 0.5rem;\n  }\n  .wrap {\n    padding: 14px 12px 24px;\n  }\n  .note-box {\n    padding: 12px 16px;\n    font-size: 0.7rem;\n  }\n  .fav-chip {\n    padding: 3px 12px;\n    font-size: 0.6rem;\n  }\n  .btn-voice {\n    padding: 6px 12px;\n    font-size: 0.55rem;\n    min-height: 32px;\n  }\n  .btn-fav {\n    padding: 6px 12px;\n    font-size: 0.55rem;\n    min-height: 32px;\n  }\n  .btn-icon {\n    font-size: 0.6rem;\n  }\n  .card-hint {\n    font-size: 0.5rem;\n    margin-top: 8px;\n  }\n  .fallback-icon {\n    font-size: 2rem;\n  }\n  .fallback-text {\n    font-size: 0.6rem;\n  }\n  .btn-refresh {\n    padding: 4px 12px;\n    font-size: 0.55rem;\n    min-height: 28px;\n  }\n  .loading-text {\n    font-size: 0.55rem;\n  }\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n::-webkit-scrollbar-track {\n  background: var(--bg-cream);\n}\n::-webkit-scrollbar-thumb {\n  background: var(--gold);\n  border-radius: var(--radius-full);\n}\n::-webkit-scrollbar-thumb:hover {\n  background: var(--gold-light);\n}\n/*# sourceMappingURL=flashcards.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Flashcards, { className: "Flashcards", filePath: "src/app/modules/flashcards/flashcards/flashcards.ts", lineNumber: 24 });
})();

// src/app/modules/flashcards/flashcards-routing-module.ts
var flashcardsRoutes = [
  { path: "", component: Flashcards }
];

// src/app/modules/flashcards/flashcards-module.ts
var FlashcardsModule = class _FlashcardsModule {
  static \u0275fac = function FlashcardsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlashcardsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FlashcardsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(flashcardsRoutes)
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlashcardsModule, [{
    type: NgModule,
    args: [{
      declarations: [Flashcards],
      imports: [
        CommonModule,
        RouterModule.forChild(flashcardsRoutes)
      ],
      exports: [Flashcards]
    }]
  }], null, null);
})();
export {
  FlashcardsModule
};
//# sourceMappingURL=chunk-6OZZPGFK.js.map
