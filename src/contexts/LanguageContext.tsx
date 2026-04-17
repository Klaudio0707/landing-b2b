import { createContext, useState, useContext,type ReactNode } from 'react';
import { translations } from '../utils/translation';
import type { ILanguageContextD, TLanguage } from '../@Type/ILanguageContext';

type LanguageContextData = ILanguageContextD;

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<TLanguage>('pt');


  const t = translations[lang] || translations['pt'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
}