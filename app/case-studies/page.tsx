"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowRight, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
export default function CaseStudiesPage() {
  const { t } = useLanguage()

  const caseStudies = [
    {
      id: 1,
      title: t("caseStudies.study1Title"),
      client: t("caseStudies.study1Client"),
      industry: t("blog.dairy"),
      challenge: t("caseStudies.study1Challenge"),
      solution: t("caseStudies.study1Solution"),
      results: [
        t("caseStudies.study1Result1"),
        t("caseStudies.study1Result2"),
        t("caseStudies.study1Result3"),
        t("caseStudies.study1Result4"),
      ],
      timeline: `6 ${t("caseStudies.timeline") === "कालावधी" ? "महिने" : t("caseStudies.timeline") === "समयरेखा" ? "महीने" : t("caseStudies.timeline") === "ಕಾಲಮಿತಿ" ? "ತಿಂಗಳು" : "months"}`,
      image: "/modern-dairy-farm.png",
      featured: true,
    },
    {
      id: 2,
      title: t("caseStudies.study2Title"),
      client: t("caseStudies.study2Client"),
      industry: t("blog.sugar"),
      challenge: t("caseStudies.study2Challenge"),
      solution: t("caseStudies.study2Solution"),
      results: [
        t("caseStudies.study2Result1"),
        t("caseStudies.study2Result2"),
        t("caseStudies.study2Result3"),
        t("caseStudies.study2Result4"),
      ],
      timeline: `8 ${t("caseStudies.timeline") === "कालावधी" ? "महिने" : t("caseStudies.timeline") === "समयरेखा" ? "महीನೆ" : t("caseStudies.timeline") === "ಕಾಲಮಿತಿ" ? "ತಿಂಗಳು" : "months"}`,
      image: "/sugar-factory-production-line.png",
      featured: true,
    },
    {
      id: 3,
      title: t("caseStudies.study3Title"),
      client: t("caseStudies.study3Client"),
      industry: t("blog.gold"),
      challenge: t("caseStudies.study3Challenge"),
      solution: t("caseStudies.study3Solution"),
      results: [
        t("caseStudies.study3Result1"),
        t("caseStudies.study3Result2"),
        t("caseStudies.study3Result3"),
        t("caseStudies.study3Result4"),
      ],
      timeline: `4 ${t("caseStudies.timeline") === "कालावधी" ? "महिने" : t("caseStudies.timeline") === "समयरेखा" ? "महीने" : t("caseStudies.timeline") === "ಕಾಲಮಿತಿ" ? "ತಿಂಗಳು" : "months"}`,
      image: "/jewelry-store-system.png",
      featured: false,
    },
    {
      id: 4,
      title: t("caseStudies.study4Title"),
      client: t("caseStudies.study4Client"),
      industry: t("blog.dairy"),
      challenge: t("caseStudies.study4Challenge"),
      solution: t("caseStudies.study4Solution"),
      results: [
        t("caseStudies.study4Result1"),
        t("caseStudies.study4Result2"),
        t("caseStudies.study4Result3"),
        t("caseStudies.study4Result4"),
      ],
      timeline: `12 ${t("caseStudies.timeline") === "कालावधी" ? "महिने" : t("caseStudies.timeline") === "समयरेखा" ? "महीने" : t("caseStudies.timeline") === "ಕಾಲಮಿತಿ" ? "ತಿಂಗಳು" : "months"}`,
      image: "/modern-office-dashboard.png",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6" style={{ color: "var(--primary)" }} />
              </div>
              <Badge variant="secondary" className="px-3 py-1 font-sans">
                {t("caseStudies.resources")}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("caseStudies.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-3xl mx-auto">
              {t("caseStudies.subtitle")}
            </p>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-12" style={{ color: "var(--primary)" }}>
              {t("caseStudies.metricsTitle")}
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                  {t("caseStudies.metric1")}
                </div>
                <div className="text-lg font-sans font-semibold mb-2">{t("caseStudies.metric1Title")}</div>
                <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">{t("caseStudies.metric1Desc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                  {t("caseStudies.metric2")}
                </div>
                <div className="text-lg font-sans font-semibold mb-2">{t("caseStudies.metric2Title")}</div>
                <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">{t("caseStudies.metric2Desc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                  {t("caseStudies.metric3")}
                </div>
                <div className="text-lg font-sans font-semibold mb-2">{t("caseStudies.metric3Title")}</div>
                <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">{t("caseStudies.metric3Desc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                  {t("caseStudies.metric4")}
                </div>
                <div className="text-lg font-sans font-semibold mb-2">{t("caseStudies.metric4Title")}</div>
                <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">{t("caseStudies.metric4Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold mb-12" style={{ color: "var(--primary)" }}>
              {t("caseStudies.featured")}
            </h2>

            <div className="space-y-12">
              {caseStudies
                .filter((study) => study.featured)
                .map((study, index) => (
                  <Card key={study.id} className="overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                      <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge
                            className="px-3 py-1 font-sans text-xs"
                            style={{ backgroundColor: "var(--accent)", color: "white" }}
                          >
                            {study.industry} {t("caseStudies.industrySuffix")}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400">
                            <Clock className="h-4 w-4" />
                            <span className="font-serif">{study.timeline}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-sans font-bold mb-3" style={{ color: "var(--primary)" }}>
                          {study.title}
                        </h3>
                        <p className="text-lg font-sans font-semibold text-gray-700 dark:text-zinc-300 mb-4">{study.client}</p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-sans font-semibold text-gray-800 dark:text-zinc-200 mb-2">{t("caseStudies.challengeLabel")}:</h4>
                            <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-gray-800 dark:text-zinc-200 mb-2">{t("caseStudies.solutionLabel")}:</h4>
                            <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-sans font-semibold text-gray-800 dark:text-zinc-200 mb-3">{t("caseStudies.resultsLabel")}:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm font-serif text-gray-600 dark:text-zinc-400">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          className="font-sans font-semibold"
                          style={{ backgroundColor: "var(--primary)", color: "white" }}
                        >
                          {t("caseStudies.readFull")} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Other Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold mb-12" style={{ color: "var(--primary)" }}>
              {t("caseStudies.moreStories")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies
                .filter((study) => !study.featured)
                .map((study) => (
                  <Card key={study.id} className="group hover:shadow-xl dark:shadow-none transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={250}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge
                        className="absolute top-4 left-4 px-3 py-1 font-sans text-xs"
                        style={{ backgroundColor: "var(--accent)", color: "white" }}
                      >
                        {study.industry} {t("caseStudies.industrySuffix")}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-sans font-bold group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </CardTitle>
                      <p className="text-lg font-sans font-semibold text-gray-700 dark:text-zinc-300">{study.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm mb-4 leading-relaxed line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-sans font-semibold text-gray-800 dark:text-zinc-200 mb-2 text-sm">{t("caseStudies.resultsLabel")}:</h4>
                        <div className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="text-xs font-serif text-gray-600 dark:text-zinc-400">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-zinc-400">
                          <Clock className="h-3 w-3" />
                          <span className="font-serif">{study.timeline}</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-sans font-semibold text-sm group-hover:text-blue-600 transition-colors"
                          style={{ color: "var(--primary)" }}
                        >
                          {t("caseStudies.readMore")} <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("caseStudies.ctaTitle")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
              {t("caseStudies.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 py-3"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                >
                  {t("caseStudies.scheduleDemo")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-sans font-semibold px-8 py-3 bg-transparent"
                  style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                >
                  {t("caseStudies.contactTeam")}
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
