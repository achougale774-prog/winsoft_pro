"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { dictionaries, Language } from "@/lib/i18n/dictionaries"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && dictionaries[savedLang]) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // A simple function to get nested keys like "nav.home"
  const t = (path: string): string => {
    const keys = path.split('.')
    let current: any = dictionaries[language]
    for (const key of keys) {
      if (current[key] === undefined) {
        return path // fallback to the path if not found
      }
      current = current[key]
    }
    return current as string
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


