"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Milk,
  Monitor,
  Rocket,
  Globe,
  Store,
  Handshake,
  Building2,
  Landmark,
  Shell,
  Package,
  ArrowRight,
  MapPin,
  Users,
  Factory,
  Smartphone,
  Cloud,
  CheckCircle2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function DairySolutionsPage() {
  const { t } = useLanguage()

  const industries = useMemo(() => [
    {
      title: t("dairy.industry1Title"),
      description: t("dairy.industry1Desc"),
      features: [t("dairy.feat1"), t("dairy.feat2"), t("dairy.feat3"), t("dairy.feat4")],
      icon: MapPin,
      color: "blue",
    },
    {
      title: t("dairy.industry2Title"),
      description: t("dairy.industry2Desc"),
      features: [t("dairy.feat5"), t("dairy.feat6"), t("dairy.feat7"), t("dairy.feat8")],
      icon: Users,
      color: "green",
    },
    {
      title: t("dairy.industry3Title"),
      description: t("dairy.industry3Desc"),
      features: [t("dairy.feat9"), t("dairy.feat10"), t("dairy.feat11"), t("dairy.feat12")],
      icon: Factory,
      color: "orange",
    },
    {
      title: t("dairy.industry4Title"),
      description: t("dairy.industry4Desc"),
      features: [t("dairy.feat13"), t("dairy.feat14"), t("dairy.feat15"), t("dairy.feat16")],
      icon: Building2,
      color: "purple",
    },
    {
      title: t("dairy.industry5Title"),
      description: t("dairy.industry5Desc"),
      features: [t("dairy.feat17"), t("dairy.feat18"), t("dairy.feat19"), t("dairy.feat20")],
      icon: Landmark,
      color: "red",
    },
    {
      title: t("dairy.industry6Title"),
      description: t("dairy.industry6Desc"),
      features: [t("dairy.feat21"), t("dairy.feat22"), t("dairy.feat23"), t("dairy.feat24")],
      icon: Package,
      color: "amber",
    },
  ], [t])

  const tiers = useMemo(() => [
    {
      name: "Desktop",
      subtitle: t("dairy.tier1Subtitle"),
      description: t("dairy.tier1Desc"),
      includes: t("dairy.tier1Includes"),
      bestFor: t("dairy.tier1Best"),
      icon: Monitor,
    },
    {
      name: "Advanced",
      subtitle: t("dairy.tier2Subtitle"),
      description: t("dairy.tier2Desc"),
      includes: t("dairy.tier2Includes"),
      bestFor: t("dairy.tier2Best"),
      icon: Smartphone,
    },
    {
      name: "Cloud",
      subtitle: t("dairy.tier3Subtitle"),
      description: t("dairy.tier3Desc"),
      includes: t("dairy.tier3Includes"),
      bestFor: t("dairy.tier3Best"),
      icon: Cloud,
    },
  ], [t])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-b relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 text-sm font-sans font-bold mb-6 border border-blue-100">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  {t("footer.dairySoftware")}
                </div>
                <h1 className="text-4xl md:text-7xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 tracking-tight leading-[1.1]">
                  {t("dairy.dairyTitle")} <span className="text-blue-600">{t("nav.dairy")}</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-10 max-w-xl">
                  {t("dairy.dairySubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/schedule-demo">
                    <Button
                      size="lg"
                      className="font-sans font-bold px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg dark:shadow-none shadow-blue-200"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-sans font-bold px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-zinc-800 hover:border-blue-600 hover:text-blue-600 rounded-xl"
                    >
                      {t("hero.cta2")}
                    </Button>
                  </Link>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 dark:border-zinc-800 pt-8">
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">25+</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.yearsExp")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">500+</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.happyClients")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">99.9%</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.uptime")}</div>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-[600px] hidden lg:block">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] rotate-3 translate-x-4 translate-y-4" />
                <Image
                  src="/modern-dairy-farm.png"
                  alt="Modern Dairy Management"
                  width={800}
                  height={600}
                  className="rounded-[40px] shadow-2xl relative z-10 object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairy.industriesTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {t("dairy.industriesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-blue-200 hover:shadow-xl dark:shadow-none hover:shadow-blue-900/5 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-7 w-7 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 font-sans">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairyInfo.title")}
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-zinc-400 font-serif leading-relaxed space-y-4">
                <p>{t("dairyInfo.intro1")}</p>
                <p>{t("dairyInfo.intro2")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: t("dairyInfo.billingTitle"), items: t("dairyInfo.billingList"), icon: Landmark },
                { title: t("dairyInfo.rebateTitle"), items: t("dairyInfo.rebateList"), icon: Users },
                { title: t("dairyInfo.accountingTitle"), items: t("dairyInfo.accountingList"), icon: Store },
                { title: t("dairyInfo.collectionTitle"), items: t("dairyInfo.collectionList"), icon: Milk },
                { title: t("dairyInfo.companyTitle"), items: t("dairyInfo.companyList"), icon: Building2 },
                { title: t("dairyInfo.workflowTitle"), items: t("dairyInfo.workflowList"), icon: Factory },
                { title: t("dairyInfo.feedTitle"), items: t("dairyInfo.feedList"), icon: Package },
                { title: t("dairyInfo.appTitle"), items: t("dairyInfo.appList"), icon: Smartphone },
              ].map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-800 hover:shadow-xl dark:shadow-none transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {Array.isArray(section.items) ? (section.items as any[]).map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    )) : null}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Contact Box */}
            <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-sans mb-2">{t("dairyInfo.contactTitle")}</h3>
                <p className="text-blue-100 mb-1 font-serif text-lg">{t("dairyInfo.contactName")}</p>
                <p className="text-blue-100 font-serif">{t("dairyInfo.contactOffice")}</p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right">
                <div className="text-3xl font-bold font-sans tracking-wide">
                  {t("dairyInfo.contactPhone")}
                </div>
                <Link href="/contact" className="inline-block mt-4">
                  <Button variant="secondary" className="font-bold text-blue-600 px-8 py-2 rounded-full">
                    {t("hero.cta2")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tiers */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairy.tiersTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {t("dairy.tiersSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-3xl border ${idx === 1 ? "border-blue-600 shadow-2xl shadow-blue-900/10" : "border-slate-100 dark:border-zinc-800"} flex flex-col`}
                >
                  {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-sans font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-8">
                    <tier.icon className={`h-12 w-12 ${idx === 1 ? "text-blue-600" : "text-slate-400"} mb-6`} />
                    <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-2">{tier.name}</h3>
                    <div className="text-blue-600 font-sans font-bold mb-4">{tier.subtitle}</div>
                    <p className="text-gray-500 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="space-y-6 mt-auto">
                    <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
                      <div className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {t("product.includes")}
                      </div>
                      <div className="text-gray-900 dark:text-zinc-100 font-sans font-bold">{tier.includes}</div>
                    </div>
                    <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
                      <div className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {t("product.bestFor")}
                      </div>
                      <div className="text-gray-700 dark:text-zinc-300 font-serif text-sm">{tier.bestFor}</div>
                    </div>
                    <Link href="/contact" className="block mt-8">
                      <Button
                        className={`w-full py-6 rounded-xl font-sans font-bold ${
                          idx === 1 ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        {t("product.contactSales")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  25+
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.yearsExp")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  500+
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.happyClients")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  99.9%
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.uptime")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  24/7
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.supportLabel")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                {t("product.videoTitle")}
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--primary)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">
              {t("dairy.ctaModernizeTitle")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t("dairy.ctaModernizeDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 py-3"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                >
                  {t("home.requestDemo")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-semibold px-8 py-3 bg-transparent border-white text-white hover:bg-white dark:bg-zinc-950/10"
                >
                  {t("product.contactSales")}
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
