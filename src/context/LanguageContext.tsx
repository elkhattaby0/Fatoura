"use client"; 

import { createContext, useContext, useState, useEffect } from "react";
import en from "../translation/en"
import ar from "../translation/ar"

const translations: any = { en, ar };
const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("en"); // Default language

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; 
  };
  useEffect(() => {
    changeLanguage(language); // ضبط الاتجاه عند تحميل الصفحة
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }} >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);