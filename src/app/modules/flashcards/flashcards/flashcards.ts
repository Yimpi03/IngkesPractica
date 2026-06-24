import { Component, OnInit } from '@angular/core';

interface Phrase {
  en: string;
  es: string;
  note: string;
  imageUrl?: string;
  imageLoading?: boolean;
  searchTerm?: string;
}

interface VoiceOption {
  name: string;
  lang: string;
  voice: SpeechSynthesisVoice;
}

@Component({
  selector: 'app-flashcards',
  standalone: false,
  templateUrl: './flashcards.html',
  styleUrls: ['./flashcards.css']
})
export class Flashcards implements OnInit {

  private readonly PEXELS_API_KEY = 'EDLdaT5tA3O5HNM0w84JHbA5lfEb5sBIgnMwpidJiQYWTuM3b1dC1Od0';

  phrases: Phrase[] = [
    { en: "Good to see you", es: "Me alegra verte", note: "Se usa cuando te alegra ver a alguien después de tiempo.", searchTerm: "friends greeting smiling" },
    { en: "Hurry up", es: "Date prisa", note: "Para pedir a alguien que se apure.", searchTerm: "person running fast" },
    { en: "Don't give up", es: "No te rindas", note: "Para animar a alguien a seguir adelante.", searchTerm: "person climbing mountain motivation" },
    { en: "How embarrassing", es: "Qué vergüenza", note: "Para expresar algo bochornoso.", searchTerm: "embarrassed person covering face" },
    { en: "It depends", es: "Depende", note: "Cuando la respuesta varía según la situación.", searchTerm: "person thinking decision" },
    { en: "It's about time", es: "Ya era hora", note: "Algo tardó más de lo esperado.", searchTerm: "clock time waiting" },
    { en: "Don't mention it", es: "No hay de qué", note: "Respuesta cortés a un agradecimiento.", searchTerm: "thank you handshake" },
    { en: "How cute", es: "Qué lindo", note: "Para expresar ternura.", searchTerm: "cute puppy kitten" },
    { en: "It's unnecessary", es: "Está de más", note: "Algo que no hace falta.", searchTerm: "minimal simple empty desk" },
    { en: "I'm so sorry", es: "Lo siento mucho", note: "Disculpa profunda.", searchTerm: "sad apologizing person" },
    { en: "Don't even think about it", es: "Ni se te ocurra", note: "Para prohibir algo con firmeza.", searchTerm: "stop hand warning" },
    { en: "Listen to me", es: "Hazme caso", note: "Para pedir atención.", searchTerm: "person listening carefully" },
    { en: "How boring", es: "Qué aburrido", note: "Algo tedioso.", searchTerm: "bored tired person" },
    { en: "There's no rush", es: "No hay prisa", note: "No hay urgencia.", searchTerm: "relaxed calm coffee" },
    { en: "I give up", es: "Me rindo", note: "Ya no se puede continuar.", searchTerm: "tired frustrated person" },
    { en: "How bad", es: "Qué atrevido", note: "Algo que va demasiado lejos.", searchTerm: "mischievous child" },
    { en: "It makes no sense", es: "No tiene sentido", note: "Algo ilógico.", searchTerm: "confused person thinking" },
    { en: "Take it easy", es: "Tómatelo con calma", note: "Para pedir calma.", searchTerm: "relaxing beach sunset" },
    { en: "It's all the same to me", es: "Me da igual", note: "Expresa indiferencia.", searchTerm: "indifferent person shrugging" },
    { en: "How outrageous", es: "Qué barbaridad", note: "Expresa indignación.", searchTerm: "shocked surprised person" },
    { en: "You'll see", es: "Ya lo verás", note: "Con el tiempo se comprobará.", searchTerm: "future hope horizon" },
    { en: "Don't exaggerate", es: "No exageres", note: "Pedir objetividad.", searchTerm: "dramatic surprised person" },
    { en: "Those were the days", es: "Qué tiempos aquellos", note: "Recuerdo con nostalgia.", searchTerm: "old photos nostalgia" },
    { en: "It's not worth it", es: "No vale la pena", note: "El esfuerzo no justifica el resultado.", searchTerm: "waste of time tired" },
    { en: "Just to be safe", es: "Por las dudas", note: "Tomar una precaución.", searchTerm: "safety helmet careful" }
  ];

  currentIndex = 0;
  isFlipped = false;
  showNote = false;
  favorites: Set<number> = new Set();
  score = 0;

  voices: VoiceOption[] = [];
  selectedVoice = '';

  ngOnInit(): void {
    this.loadVoices();
    this.loadImageForPhrase(this.currentIndex);
  }

  get currentPhrase(): Phrase | undefined {
    return this.phrases[this.currentIndex];
  }

  getProgress(): number {
    return ((this.currentIndex + 1) / this.phrases.length) * 100;
  }

  async loadImageForPhrase(index: number): Promise<void> {
    const phrase = this.phrases[index];
    if (!phrase) return;

    phrase.imageLoading = true;

    try {
      const query = encodeURIComponent(phrase.searchTerm || phrase.en);

      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=1&orientation=landscape`,
        {
          headers: {
            Authorization: this.PEXELS_API_KEY
          }
        }
      );

      const data = await response.json();

      if (data.photos && data.photos.length > 0) {
        phrase.imageUrl = data.photos[0].src.large;
      } else {
        phrase.imageUrl = undefined;
      }
    } catch (error) {
      console.error('Error buscando imagen:', error);
      phrase.imageUrl = undefined;
    }

    phrase.imageLoading = false;
  }

  async refreshCurrentImage(): Promise<void> {
    if (!this.currentPhrase) return;

    const phrase = this.currentPhrase;
    phrase.imageLoading = true;

    try {
      const query = encodeURIComponent(phrase.searchTerm || phrase.en);
      const randomPage = Math.floor(Math.random() * 10) + 1;

      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${randomPage}&orientation=landscape`,
        {
          headers: {
            Authorization: this.PEXELS_API_KEY
          }
        }
      );

      const data = await response.json();

      if (data.photos && data.photos.length > 0) {
        phrase.imageUrl = data.photos[0].src.large;
      } else {
        phrase.imageUrl = undefined;
      }
    } catch (error) {
      console.error('Error refrescando imagen:', error);
      phrase.imageUrl = undefined;
    }

    phrase.imageLoading = false;
  }

  onImageError(): void {
    if (this.currentPhrase) {
      this.currentPhrase.imageUrl = undefined;
      this.currentPhrase.imageLoading = false;
    }
  }

  nextCard(): void {
    this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
    this.isFlipped = false;
    this.showNote = false;

    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }

  prevCard(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.phrases.length - 1;

    this.isFlipped = false;
    this.showNote = false;

    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;

    if (this.isFlipped) {
      this.score += 1;
    }
  }

  loadVoices(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
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

  setVoices(availableVoices: SpeechSynthesisVoice[]): void {
    this.voices = availableVoices.map(voice => ({
      name: voice.name,
      lang: voice.lang,
      voice
    }));

    const englishVoice = this.voices.find(v => v.lang.startsWith('en'));
    this.selectedVoice = englishVoice ? englishVoice.name : this.voices[0]?.name || '';
  }

  speakPhrase(): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const text = this.currentPhrase?.en || '';
    if (!text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;

    const selected = this.voices.find(v => v.name === this.selectedVoice);
    if (selected) {
      utterance.voice = selected.voice;
    }

    window.speechSynthesis.speak(utterance);
  }

  onVoiceChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedVoice = select.value;
  }

  toggleNote(): void {
    this.showNote = !this.showNote;
  }

  toggleFav(): void {
    if (this.favorites.has(this.currentIndex)) {
      this.favorites.delete(this.currentIndex);
    } else {
      this.favorites.add(this.currentIndex);
    }
  }

  isFavorite(): boolean {
    return this.favorites.has(this.currentIndex);
  }

  getFavoritesList(): number[] {
    return Array.from(this.favorites);
  }

  getPhraseByIndex(index: number): Phrase | undefined {
    return this.phrases[index];
  }

  goToCard(index: number): void {
    this.currentIndex = index;
    this.isFlipped = false;
    this.showNote = false;

    if (!this.currentPhrase?.imageUrl) {
      this.loadImageForPhrase(this.currentIndex);
    }
  }
}