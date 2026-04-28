"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  Truck,
  Warehouse,
  Users,
  CheckCircle,
  FileText,
  BarChart3,
  TrendingUp,
  Shield,
  ArrowRight,
  Database,
  Computer,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import Image from "next/image"

export default function SugarFactorySolutionsPage() {
  const { t } = useLanguage()

  const sugarModules = useMemo(() => [
    t("sugar.module1"),
    t("sugar.module2"),
    t("sugar.module3"),
    t("sugar.module4"),
    t("sugar.module5"),
    t("sugar.module6"),
    t("sugar.module7"),
    t("sugar.module8"),
    t("sugar.module9"),
  ], [t])

  const capabilities = useMemo(() => [
    { title: t("sugar.caneProc"), icon: Truck, color: "red" },
    { title: t("sugar.farmerMgmt"), icon: Users, color: "blue" },
    { title: t("sugar.prodTracking"), icon: Factory, color: "orange" },
    { title: t("sugar.financialERP"), icon: BarChart3, color: "green" },
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
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-red-600" />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 font-sans bg-red-50 text-red-700 border-red-200">
                    {t("sugar.sugarBadge")}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 leading-tight">
                  {t("sugar.sugarHeroTitle")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-8">
                  {t("sugar.sugarHeroSubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/schedule-demo">
                    <Button
                      size="lg"
                      className="font-sans font-semibold px-8 py-3 bg-red-600 hover:bg-red-700 text-white"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" size="lg" className="font-sans font-semibold px-8 py-3 bg-transparent">
                      {t("sugar.viewModules")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-100 inline-block">
                  <p className="text-sm font-sans font-bold text-red-800">
                    {t("sugar.trustedSugar")}
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/sugar-factory-production-line.png"
                  alt="Sugar factory management system"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {t("sugar.gateToGateTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
                {t("sugar.gateToGateSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transition-shadow flex flex-col items-center text-center">
                  <div className={`p-4 rounded-xl mb-4 bg-red-50`}>
                    <item.icon className={`h-8 w-8 text-red-600`} />
                  </div>
                  <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Product Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                  {t("sugar.sugarSystemTitle")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif mb-8">
                  {t("sugar.sugarSystemDesc")}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {sugarModules.map((module, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-zinc-300 font-sans font-medium">{module}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/schedule-demo">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold px-10">
                      {t("sugar.requestModules")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Warehouse className="h-10 w-10 text-red-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.inventoryTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.inventoryDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Database className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.paymentTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.paymentDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Computer className="h-10 w-10 text-orange-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.misReports")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.misReportsDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <FileText className="h-10 w-10 text-green-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.complianceTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.complianceDesc")}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-12">
              {t("sugar.perfEffTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="flex gap-4">
                <div className="bg-red-600 p-3 rounded-xl h-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    {t("sugar.robustSecurity")}
                  </h4>
                  <p className="text-slate-400 font-serif">
                    {t("sugar.robustSecurityDesc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 p-3 rounded-xl h-fit">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    {t("sugar.optimizedProc")}
                  </h4>
                  <p className="text-slate-400 font-serif">
                    {t("sugar.optimizedProcDesc")}
                  </p>
                </div>
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
              <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
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
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6">
                {t("sugar.modernizeSugarTitle")}
              </h2>
              <p className="text-xl opacity-90 mb-8 font-serif">
                {t("sugar.modernizeSugarDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule-demo">
                  <Button size="lg" className="bg-white dark:bg-zinc-950 text-red-600 hover:bg-slate-100 font-sans font-bold px-10">
                    {t("sugar.freeERPDemo")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white dark:bg-zinc-950/10 font-sans font-bold px-10">
                    {t("sugar.connectWithUs")}
                  </Button>
                </Link>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
