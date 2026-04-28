"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Volume2, Calculator, MessageCircle, PhoneCall, Info } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function VillagePortal() {
  const { t, language } = useLanguage()
  const [fat, setFat] = useState("")
  const [quantity, setQuantity] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateRate = () => {
    const f = parseFloat(fat)
    const q = parseFloat(quantity)
    if (!isNaN(f) && !isNaN(q)) {
      // Simplified formula: (Fat * 6.5) * Quantity
      const total = f * 6.5 * q
      setResult(total)
    }
  }

  const playAudioHelp = () => {
    const text = language === 'mr' 
      ? "विनसॉफ्ट डेअरी सॉफ्टवेअरमध्ये आपले स्वागत आहे. हे सॉफ्टवेअर वापरणे अतिशय सोपे आहे. दुधाची नोंद करण्यासाठी फक्त फॅट आणि वजन टाका, बिल आपोआप तयार होईल."
      : "Welcome to Winsoft Dairy Software. This software is very easy to use. To record milk, just enter fat and weight, and the bill will be generated automatically."
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language === 'mr' ? 'mr-IN' : 'en-US'
    window.speechSynthesis.speak(utterance)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-zinc-950 dark:to-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t("home.villagePortalTitle")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400">
            {t("home.villagePortalDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Tool */}
          <Card className="border-2 border-purple-200 dark:border-purple-900/30 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Calculator className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
                  {t("home.milkCalcTitle")}
                </h3>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label className="text-lg font-medium">{language === 'mr' ? "फॅट (Fat) टाका" : "Enter Fat"}</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 3.5" 
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    className="h-14 text-xl rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-medium">{language === 'mr' ? "दूध वजन (Liters) टाका" : "Enter Quantity"}</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 10" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="h-14 text-xl rounded-2xl"
                  />
                </div>
                <Button 
                  onClick={calculateRate}
                  className="h-16 text-xl bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-lg shadow-purple-200 dark:shadow-none"
                >
                  {language === 'mr' ? "हिशोब तपासा" : "Calculate Bill"}
                </Button>

                {result !== null && (
                  <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl text-center">
                    <p className="text-green-800 dark:text-green-300 text-lg font-medium mb-1">
                      {language === 'mr' ? "अंदाजे बिल रक्कम:" : "Approximate Bill Amount:"}
                    </p>
                    <p className="text-4xl font-bold text-green-700 dark:text-green-400">
                      ₹{result.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Support Options */}
          <div className="grid gap-6">
            <Card className="hover:scale-[1.02] transition-transform cursor-pointer border border-gray-100 dark:border-zinc-800 rounded-[2rem] shadow-lg dark:shadow-none" onClick={playAudioHelp}>
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-5 bg-orange-100 dark:bg-orange-900/40 rounded-3xl">
                  <Volume2 className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t("home.voiceHelpTitle")}</h4>
                  <p className="text-gray-500 dark:text-zinc-400">{t("home.voiceHelpDesc")}</p>
                </div>
              </CardContent>
            </Card>

            <Link href="https://wa.me/919423039902" target="_blank">
              <Card className="hover:scale-[1.02] transition-transform cursor-pointer border border-gray-100 dark:border-zinc-800 rounded-[2rem] shadow-lg dark:shadow-none bg-green-50/50 dark:bg-green-900/10">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="p-5 bg-green-100 dark:bg-green-900/40 rounded-3xl">
                    <MessageCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{t("home.whatsappSupportTitle")}</h4>
                    <p className="text-gray-500 dark:text-zinc-400">{t("home.whatsappSupportDesc")}</p>
                  </div>
                </CardContent>
              </Link>
            </Link>

            <Card className="border border-gray-100 dark:border-zinc-800 rounded-[2rem] shadow-lg dark:shadow-none bg-blue-50/50 dark:bg-blue-900/10">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-5 bg-blue-100 dark:bg-blue-900/40 rounded-3xl">
                  <Info className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{language === 'mr' ? "सॉफ्टवेअर माहिती" : "Software Information"}</h4>
                  <p className="text-gray-500 dark:text-zinc-400">{language === 'mr' ? "आमच्या सर्व सुविधांची यादी पहा." : "View list of all our features."}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
