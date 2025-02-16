"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../translation/en";
import ar from "../translation/ar";


type TranslationObject = {
  [key: string]: string | TranslationObject;
};

const translations: Record<string, TranslationObject> = { en, ar };

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  t: TranslationObject; // 
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<keyof typeof translations>("en");

  const changeLanguage = (lang: keyof typeof translations) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
