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

  console.log("speakText called with lang:", lang, "text preview:", text.substring(0, 20))

  // Cancel any ongoing speech
  window.speechSynthesis.cancel()
  
  const utterance = new SpeechSynthesisUtterance(text)
  
  const setVoice = () => {
    const voices = window.speechSynthesis.getVoices()
    console.log("Available voices count:", voices.length)

    if (lang === 'mr') {
      const marathiVoice = voices.find(v => v.lang.toLowerCase().includes('mr') || v.name.toLowerCase().includes('marathi'))
      if (marathiVoice) {
        utterance.voice = marathiVoice
        utterance.lang = marathiVoice.lang
      } else {
        utterance.lang = 'mr-IN'
      }
    } else if (lang === 'kn') {
      const kannadaVoice = voices.find(v => v.lang.toLowerCase().includes('kn') || v.name.toLowerCase().includes('kannada'))
      if (kannadaVoice) {
        utterance.voice = kannadaVoice
        utterance.lang = kannadaVoice.lang
      } else {
        utterance.lang = 'kn-IN'
      }
    } else {
      utterance.lang = 'en-US'
    }
    
    utterance.rate = 0.85 // Slightly slower for better clarity
    utterance.pitch = 1.0
    utterance.volume = 1.0
    
    console.log("Actually speaking with lang:", utterance.lang, "Voice:", utterance.voice?.name || "System Default")
    window.speechSynthesis.speak(utterance)
  }

  // Ensure voices are loaded
  if (window.speechSynthesis.getVoices().length > 0) {
    setVoice()
  } else {
    window.speechSynthesis.onvoiceschanged = setVoice
    // Fallback if event doesn't fire
    setTimeout(() => {
      if (window.speechSynthesis.getVoices().length > 0) setVoice()
    }, 500)
  }

  utterance.onerror = (event) => {
    console.error("SpeechSynthesis error:", event.error)
  }
}
