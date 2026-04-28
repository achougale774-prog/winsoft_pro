"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Milk, Factory, Gem, BarChart3, Users, Shield, Cloud, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("services.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
        </section>


        {/* Main Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-12" style={{ color: "var(--primary)" }}>
              {t("services.industrySolutions")}
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Dairy Solutions */}
              <Card className="group hover:shadow-xl dark:shadow-none transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Milk className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold" style={{ color: "var(--primary)" }}>
                    {t("services.dairyTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/modern-dairy-farm.png"
                    alt="Dairy management system"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.dairyDesc")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.milkCollection")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.qualityTesting")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.farmerPayments")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.inventoryDist")}
                      </span>
                    </div>
                  </div>
                  <Link href="/dairy-solutions">
                    <Button
                      className="w-full font-sans font-semibold group-hover:bg-opacity-90 transition-all"
                      style={{ backgroundColor: "var(--accent)", color: "white" }}
                    >
                      {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Sugar Factory Solutions */}
              <Card className="group hover:shadow-xl dark:shadow-none transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Factory className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold" style={{ color: "var(--primary)" }}>
                    {t("services.sugarTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/sugar-factory-production-line.png"
                    alt="Sugar factory management system"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.sugarDesc")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.caneProcurement")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.productionProcess")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.qualityAssurance")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.financialMgmt")}
                      </span>
                    </div>
                  </div>
                  <Link href="/sugar-factory-solutions">
                    <Button
                      className="w-full font-sans font-semibold group-hover:bg-opacity-90 transition-all"
                      style={{ backgroundColor: "var(--accent)", color: "white" }}
                    >
                      {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Gold Industry Solutions */}
              <Card className="group hover:shadow-xl dark:shadow-none transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Gem className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold" style={{ color: "var(--primary)" }}>
                    {t("services.goldTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/jewelry-store-system.png"
                    alt="Gold industry management system"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.goldDesc")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.inventoryMgmt")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.crm")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.salesBilling")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-serif">
                        {t("services.purityTracking")}
                      </span>
                    </div>
                  </div>
                  <Link href="/gold-industry-solutions">
                    <Button
                      className="w-full font-sans font-semibold group-hover:bg-opacity-90 transition-all"
                      style={{ backgroundColor: "var(--accent)", color: "white" }}
                    >
                      {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-12" style={{ color: "var(--primary)" }}>
              {t("services.whyChoose")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-sans font-semibold mb-2">
                    {t("services.analytics")}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.analyticsDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-sans font-semibold mb-2">
                    {t("services.multiUser")}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.multiUserDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-sans font-semibold mb-2">
                    {t("services.dataSecurity")}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.dataSecurityDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-8 w-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="text-lg font-sans font-semibold mb-2">
                    {t("services.cloudOnPrem")}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">
                    {t("services.cloudOnPremDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-8" style={{ color: "var(--primary)" }}>
              {t("services.modernTech")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
              {t("services.modernTechDesc")}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.webBased")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.mobileResponsive")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.realTimeSync")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.apiIntegration")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.customReports")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-sans">
                {t("services.support247")}
              </Badge>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("services.readyToTransform")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
              {t("services.transformDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 py-3"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                >
                  {t("services.scheduleDemo")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-sans font-semibold px-8 py-3 bg-transparent"
                  style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                >
                  {t("services.requestQuote")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
