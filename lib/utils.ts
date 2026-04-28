import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function speakText(text: string, lang: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    console.error("Speech synthesis not supported")
    return
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel()
  
  const utterance = new SpeechSynthesisUtterance(text)
  
  const setVoice = () => {
    const voices = window.speechSynthesis.getVoices()
    if (lang === 'mr') {
      // Look for Marathi voices
      const marathiVoice = voices.find(v => v.lang.includes('mr') || v.name.toLowerCase().includes('marathi'))
      if (marathiVoice) {
        utterance.voice = marathiVoice
        utterance.lang = marathiVoice.lang
      } else {
        utterance.lang = 'mr-IN'
      }
    } else {
      utterance.lang = 'en-US'
    }
    
    utterance.rate = 0.9
    utterance.volume = 1.0
    console.log("Speaking with voice:", utterance.voice?.name || "default", "lang:", utterance.lang)
    window.speechSynthesis.speak(utterance)
  }

  // If voices are already loaded, speak immediately
  if (window.speechSynthesis.getVoices().length > 0) {
    setVoice()
  } else {
    // Wait for voices to load
    window.speechSynthesis.onvoiceschanged = setVoice
  }

  utterance.onerror = (event) => {
    console.error("SpeechSynthesis error:", event.error)
  }
}
