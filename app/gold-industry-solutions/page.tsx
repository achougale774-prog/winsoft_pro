"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gem,
  ArrowLeftRight,
  ShoppingBag,
  FileText,
  CalendarCheck,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  Award,
  BarChart3,
  Search,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function GoldIndustrySolutionsPage() {
  const { t } = useLanguage()

  const goldProducts = useMemo(() => [
    {
      title: t("gold.goldProd1Title"),
      icon: ArrowLeftRight,
      description: t("gold.goldProd1Desc"),
      features: [
        t("gold.goldProd1Feat1"),
        t("gold.goldProd1Feat2"),
        t("gold.goldProd1Feat3"),
        t("gold.goldProd1Feat4"),
        t("gold.goldProd1Feat5"),
        t("gold.goldProd1Feat6"),
      ],
    },
    {
      title: t("gold.goldProd2Title"),
      icon: ShoppingBag,
      description: t("gold.goldProd2Desc"),
      features: [
        t("gold.goldProd2Feat1"),
        t("gold.goldProd2Feat2"),
        t("gold.goldProd2Feat3"),
        t("gold.goldProd2Feat4"),
        t("gold.goldProd2Feat5"),
        t("gold.goldProd2Feat6"),
      ],
    },
    {
      title: t("gold.goldProd3Title"),
      icon: FileText,
      description: t("gold.goldProd3Desc"),
      features: [
        t("gold.goldProd3Feat1"),
        t("gold.goldProd3Feat2"),
        t("gold.goldProd3Feat3"),
        t("gold.goldProd3Feat4"),
        t("gold.goldProd3Feat5"),
        t("gold.goldProd3Feat6"),
        t("gold.goldProd3Feat7"),
      ],
    },
    {
      title: t("gold.goldProd4Title"),
      icon: CalendarCheck,
      description: t("gold.goldProd4Desc"),
      features: [
        t("gold.goldProd4Feat1"),
        t("gold.goldProd4Feat2"),
        t("gold.goldProd4Feat3"),
        t("gold.goldProd4Feat4"),
        t("gold.goldProd4Feat5"),
        t("gold.goldProd4Feat6"),
      ],
    },
  ], [t])

  const challenges = useMemo(() => [
    {
      title: t("gold.complexCalc"),
      description: t("gold.complexCalcDesc"),
      icon: BarChart3,
      color: "blue",
    },
    {
      title: t("gold.inventorySecurity"),
      description: t("gold.inventorySecurityDesc"),
      icon: Shield,
      color: "amber",
    },
    {
      title: t("gold.inconsistentBilling"),
      description: t("gold.inconsistentBillingDesc"),
      icon: Search,
      color: "green",
    },
  ], [t])

  const benefits = useMemo(() => [
    { title: t("about.yearsExp"), icon: Award, text: t("about.industrySpecialist") },
    { title: t("gold.financialAccuracy"), icon: TrendingUp, text: t("gold.financialAccuracyDesc") },
    { title: t("gold.complianceReady"), icon: Shield, text: t("gold.complianceReadyDesc") },
    { title: t("gold.instantSupport"), icon: Clock, text: t("gold.instantSupportDesc") },
  ], [t])
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Gem className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 font-sans bg-amber-50 text-amber-700 border-amber-200">
                    {t("gold.goldBadge")}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 leading-tight">
                  {t("gold.goldHeroTitle")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-8">
                  {t("gold.goldHeroSubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/schedule-demo">
                    <Button
                      size="lg"
                      className="font-sans font-semibold px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="font-sans font-semibold px-8 py-3 bg-transparent">
                      {t("gold.getInTouch")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/jewelry-store-system.png"
                  alt="Jewellery management software"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {t("gold.manualProcessTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
                {t("gold.manualProcessDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, idx) => (
                <Card key={idx} className="border-0 shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transition-shadow">
                  <CardHeader>
                    <div className={`bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <item.icon className={`h-6 w-6 text-amber-600`} />
                    </div>
                    <CardTitle className="text-xl font-sans font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-zinc-400 font-serif">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Software Products */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {t("gold.goldSolutionsTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg">
                {t("gold.goldSolutionsDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {goldProducts.map((product, idx) => (
                <Card key={idx} className="border border-slate-100 dark:border-zinc-800 hover:border-amber-200 transition-colors bg-white dark:bg-zinc-950 shadow-sm dark:shadow-none hover:shadow-lg dark:shadow-none overflow-hidden flex flex-col">
                  <div className="p-8 flex-1">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <product.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">{product.title}</h3>
                    <p className="text-gray-600 dark:text-zinc-400 font-serif mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-zinc-300 font-serif">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 dark:bg-black border-t border-slate-100 dark:border-zinc-800">
                    <Link href="/schedule-demo">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-sans font-semibold">
                        {t("gold.getDemo")}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust/Benefits Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-8">
                  {t("gold.whyChooseGold")}
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-white dark:bg-zinc-950/10 p-3 rounded-lg flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-slate-400 font-serif">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950/5 p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center">
                <blockquote className="text-2xl font-serif italic mb-8 leading-relaxed text-slate-300">
                  "{t("gold.goldQuote")}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center font-bold text-lg">J</div>
                  <div>
                    <div className="font-bold">{t("gold.shopOwner")}</div>
                    <div className="text-slate-500 text-sm">{t("gold.mumbaiIndia")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                {t("product.videoTitle")}
              </h2>
              <div className="h-1.5 w-20 bg-amber-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={t("product.videoTitle")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6">
              {t("gold.elevateBusinessTitle")}
            </h2>
            <p className="text-xl opacity-90 mb-10 font-serif max-w-2xl mx-auto">
              {t("gold.elevateBusinessDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-white dark:bg-zinc-950 text-amber-600 hover:bg-slate-100 font-sans font-bold px-10">
                  {t("gold.getStartedNow")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white dark:bg-zinc-950/10 font-sans font-bold px-10">
                  {t("gold.contactExpert")}
                </Button>
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
