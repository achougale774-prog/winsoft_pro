"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"
import { speakText } from "@/lib/utils"
import { toast } from "sonner"

export function FloatingAudio() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const [isPlaying, setIsPlaying] = useState(false)

  // Hide the global floating audio on product and products pages
  // because those pages have their own specific audio buttons
  if (pathname?.startsWith('/product') || pathname?.startsWith('/dairy') || pathname?.startsWith('/sugar') || pathname?.startsWith('/gold')) {
    return null
  }

  const toggleSpeak = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    } else {
      let text = ""
      let toastMsg = ""
      
      if (language === 'mr') {
        text = "विनसॉफ्ट डिजिटल सोल्यूशन्स मध्ये आपले स्वागत आहे. आम्ही दुग्ध, साखर आणि सुवर्ण उद्योगांसाठी प्रगत सॉफ्टवेअर देतो. अधिक माहितीसाठी खालील बटणांवर क्लिक करा किंवा व्हॉट्सॲपवर मेसेज करा."
        toastMsg = "माहिती बोलत आहे... (मराठी)"
      } else if (language === 'kn') {
        text = "ವಿನ್ಸಾಫ್ಟ್ ಡಿಜಿಟಲ್ ಸೊಲ್ಯೂಷನ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ. ನಾವು ಡೈರಿ, ಸಕ್ಕರೆ ಮತ್ತು ಚಿನ್ನದ ಉದ್ಯಮಗಳಿಗೆ ಸುಧಾರಿತ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಕೆಳಗಿನ ಬಟನ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ."
        toastMsg = "ಮಾಹಿತಿ ಹೇಳಲಾಗುತ್ತಿದೆ... (ಕನ್ನಡ)"
      } else {
        text = "Welcome to Winsoft Digital Solutions. We provide advanced software for Dairy, Sugar, and Gold industries. For more information, click the buttons below or message us on WhatsApp."
        toastMsg = "Speaking info... (English)"
      }
      
      console.log("FloatingAudio toggleSpeak language:", language)
      toast.info(toastMsg)
      speakText(text, language)
      setIsPlaying(true)
      
      // Reset isPlaying when speech ends
      const checkEnd = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          setIsPlaying(false)
          clearInterval(checkEnd)
        }
      }, 500)
    }
  }

  return (
    <div className="fixed bottom-24 left-6 z-50">
      <Button
        onClick={toggleSpeak}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isPlaying ? "bg-red-500 hover:bg-red-600 scale-110" : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isPlaying ? (
          <VolumeX className="w-7 h-7 text-white animate-pulse" />
        ) : (
          <Volume2 className="w-7 h-7 text-white" />
        )}
      </Button>
      {!isPlaying && (
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 px-3 py-1 rounded-lg shadow-md border border-gray-100 dark:border-zinc-800 whitespace-nowrap hidden md:block">
          <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
            {language === 'mr' ? "माहिती ऐका" : "Listen Info"}
          </span>
        </div>
      )}
    </div>
  )
}
