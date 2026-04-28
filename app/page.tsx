"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"
import { useLanguage } from "@/components/language-provider"

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
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <HeroSlider />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t("home.coreSolutionsTitle")}
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {t("home.coreSolutionsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white dark:bg-zinc-950 rounded-3xl shadow-md dark:shadow-none border border-gray-200 dark:border-zinc-800 p-8 flex flex-col justify-between min-h-[450px] hover:shadow-xl dark:shadow-none transition group">
              <div className="flex flex-col h-full">
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3">
                <Link href={`/product/${product.id}`} className="block">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 dark:text-zinc-300 font-semibold py-4 rounded-2xl">
                    {t("home.viewDetails")}
                  </Button>
                </Link>
                <Link href="/schedule-demo" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition">
                    {t("home.requestDemo")}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

