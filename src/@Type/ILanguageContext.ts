import type { translations } from "../utils/translation";

export type TLanguage = 'pt' | 'en' | 'es' | 'zh';

export interface ILanguageContextD {
  lang: TLanguage;
  setLang: (lang: TLanguage) => void;
  t: typeof translations[TLanguage];
}