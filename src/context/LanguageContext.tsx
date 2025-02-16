// @ts-ignore
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import en from "../translation/en";
import ar from "../translation/ar";

// @ts-ignore
const translations = { en, ar };

// @ts-ignore
const LanguageContext = createContext(null);

// @ts-ignore
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  
  // @ts-ignore
  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    // @ts-ignore
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// @ts-ignore
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
