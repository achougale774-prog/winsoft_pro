"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"
import { useLanguage } from "@/components/language-provider"
import { VillagePortal } from "@/components/village-portal"

export default function HomePage() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      title: t("home.product1Title"),
      description: t("home.product1Desc"),
      image: "/modern-office-dashboard.png",
    },
    {
      id: 2,
      title: t("home.product2Title"),
      description: t("home.product2Desc"),
      image: "/modern-office-dashboard.png",
    },
    {
      id: 3,
      title: t("home.product3Title"),
      description: t("home.product3Desc"),
      image: "/modern-office-dashboard.png",
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      {/* Animated Premium Background */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-sky-400/20 dark:bg-sky-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <Header />
      <HeroSlider />

      <main className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-gradient drop-shadow-sm">{t("home.coreSolutionsTitle")}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("home.coreSolutionsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="glass-card hover-lift p-8 flex flex-col justify-between min-h-[480px] group border-t border-white/40 dark:border-zinc-800/50">
              <div className="flex flex-col h-full">
                <Link href={`/product/${product.id}`} className="block relative">
                  <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden border border-white/50 dark:border-zinc-800 shadow-sm">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-zinc-400 text-base mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Link href={`/product/${product.id}`} className="block">
                  <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
                    {t("home.viewDetails")}
                  </Button>
                </Link>
                <Link href="/schedule-demo" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25">
                    {t("home.requestDemo")}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <VillagePortal />

      <Footer />
    </div>
  )
}

