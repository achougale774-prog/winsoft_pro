"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Pause, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { speakText } from "@/lib/utils"
import { toast } from "sonner"

interface AudioButtonProps {
  text: string;
  className?: string;
  colorTheme?: 'purple' | 'blue' | 'orange' | 'green';
}

export function AudioButton({ text, className = "", colorTheme = 'purple' }: AudioButtonProps) {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const themeColors = {
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      hover: "hover:bg-purple-200 dark:hover:bg-purple-900/50",
      activeBg: "bg-purple-600 dark:bg-purple-500",
      activeText: "text-white",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:bg-blue-200 dark:hover:bg-blue-900/50",
      activeBg: "bg-blue-600 dark:bg-blue-500",
      activeText: "text-white",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-800",
      hover: "hover:bg-orange-200 dark:hover:bg-orange-900/50",
      activeBg: "bg-orange-600 dark:bg-orange-500",
      activeText: "text-white",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
      hover: "hover:bg-green-200 dark:hover:bg-green-900/50",
      activeBg: "bg-green-600 dark:bg-green-500",
      activeText: "text-white",
    }
  }

  const colors = themeColors[colorTheme]

  useEffect(() => {
    return () => {
      if (isPlaying) {
        window.speechSynthesis.cancel()
      }
    }
  }, [isPlaying])

  const toggleSpeak = () => {
    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume()
        setIsPaused(false)
        toast.info(language === 'mr' ? "माहिती पुन्हा सुरू केली..." : language === 'kn' ? "ಮಾಹಿತಿ ಪುನರಾರಂಭಿಸಲಾಗಿದೆ..." : "Resumed speaking...")
      } else {
        window.speechSynthesis.pause()
        setIsPaused(true)
        toast.info(language === 'mr' ? "माहिती थांबवली..." : language === 'kn' ? "ಮಾಹಿತಿ ವಿರಾಮಗೊಳಿಸಲಾಗಿದೆ..." : "Paused speaking...")
      }
    } else {
      window.speechSynthesis.cancel()
      setIsPlaying(true)
      setIsPaused(false)
      
      toast.info(language === 'mr' ? "माहिती बोलत आहे... (मराठी)" : language === 'kn' ? "ಮಾಹಿತಿ ಹೇಳಲಾಗುತ್ತಿದೆ... (ಕನ್ನಡ)" : "Speaking info... (English)")
      speakText(text, language)
      
      const checkEnd = setInterval(() => {
        if (!window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          setIsPlaying(false)
          setIsPaused(false)
          clearInterval(checkEnd)
        }
      }, 500)
    }
  }

  const stopSpeak = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    toast.info(language === 'mr' ? "माहिती बंद केली." : language === 'kn' ? "ಮಾಹಿತಿ ನಿಲ್ಲಿಸಲಾಗಿದೆ." : "Stopped speaking.")
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button 
        onClick={toggleSpeak}
        variant="outline"
        className={`group relative overflow-hidden transition-all duration-300 rounded-full shadow-sm hover:shadow-md ${
          isPlaying && !isPaused
            ? `${colors.activeBg} ${colors.activeText} border-transparent scale-105` 
            : `${colors.bg} ${colors.text} ${colors.border} ${colors.hover}`
        } px-5 py-2.5 flex items-center gap-2.5 h-auto`}
        title={language === 'mr' ? "माहिती ऐका" : "Listen to info"}
      >
        <div className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isPlaying && !isPaused ? (
          <>
            <Pause className="w-4 h-4 relative z-10" fill="currentColor" />
            <span className="text-sm font-bold relative z-10 mr-1">
              {language === 'mr' ? 'थांबवा' : language === 'kn' ? 'ವಿರಾಮ' : 'Pause'}
            </span>
            <div className="flex gap-0.5 items-end h-3 relative z-10 opacity-90">
              <span className="w-[3px] bg-current h-[100%] animate-[bounce_1s_infinite_0ms] rounded-full"></span>
              <span className="w-[3px] bg-current h-[60%] animate-[bounce_1s_infinite_200ms] rounded-full"></span>
              <span className="w-[3px] bg-current h-[80%] animate-[bounce_1s_infinite_400ms] rounded-full"></span>
              <span className="w-[3px] bg-current h-[40%] animate-[bounce_1s_infinite_600ms] rounded-full"></span>
            </div>
          </>
        ) : isPlaying && isPaused ? (
          <>
            <Play className="w-4 h-4 relative z-10" fill="currentColor" />
            <span className="text-sm font-bold relative z-10">
              {language === 'mr' ? 'पुढे सुरू करा' : language === 'kn' ? 'ಪುನರಾರಂಭಿಸಿ' : 'Resume'}
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 relative z-10" />
            <span className="text-sm font-bold relative z-10">
              {language === 'mr' ? 'माहिती ऐका' : language === 'kn' ? 'ಮಾಹಿತಿ ಕೇಳಿ' : 'Listen Info'}
            </span>
          </>
        )}
      </Button>

      {isPlaying && (
        <Button
          onClick={stopSpeak}
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 shrink-0 bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700 dark:bg-red-900/30 dark:border-red-900/50 dark:hover:bg-red-900/50 transition-all animate-in fade-in zoom-in shadow-sm hover:shadow-md"
          title={language === 'mr' ? "बंद करा" : "Stop"}
        >
          <VolumeX className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
