"use client"

import Image from "next/image"
import { Heart, Shield, Calendar, GraduationCap, Users, Coffee, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function CareersPage() {
  const { t } = useLanguage()

  const benefits = [
    { icon: Heart, title: t("careers.benefit1"), description: t("careers.benefit1Desc") },
    { icon: Shield, title: t("careers.benefit2"), description: t("careers.benefit2Desc") },
    { icon: Calendar, title: t("careers.benefit3"), description: t("careers.benefit3Desc") },
    {
      icon: GraduationCap,
      title: t("careers.benefit4"),
      description: t("careers.benefit4Desc"),
    },
    { icon: Users, title: t("careers.benefit5"), description: t("careers.benefit5Desc") },
    { icon: Coffee, title: t("careers.benefit6"), description: t("careers.benefit6Desc") },
  ]

  const openings = [
    {
      title: t("careers.seniorDev"),
      location: t("careers.location"),
      type: t("careers.type"),
      description: t("careers.seniorDevDesc"),
    },
    {
      title: t("careers.ba"),
      location: t("careers.location"),
      type: t("careers.type"),
      description: t("careers.baDesc"),
    },
    {
      title: t("careers.qa"),
      location: t("careers.location"),
      type: t("careers.type"),
      description: t("careers.qaDesc"),
    },
    {
      title: t("careers.uiux"),
      location: t("careers.location"),
      type: t("careers.type"),
      description: t("careers.uiuxDesc"),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
            {t("careers.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      {/* Life at Company Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
            {t("careers.partnershipTitle")}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
                {t("careers.desc1")}
              </p>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                {t("careers.desc2")}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/indian-software-office-collaboration.png"
                alt="Life at Winsoft"
                width={600}
                height={400}
                className="rounded-lg shadow-lg dark:shadow-none"
              />
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid md:grid-cols-3 gap-4">
            <Image
              src="/indian-software-team-celebration.png"
              alt="Team celebration"
              width={300}
              height={250}
              className="rounded-lg shadow-md dark:shadow-none"
            />
            <Image
              src="/indian-developers-training.png"
              alt="Training session"
              width={300}
              height={250}
              className="rounded-lg shadow-md dark:shadow-none"
            />
            <Image
              src="/placeholder-h4kej.png"
              alt="Team lunch"
              width={300}
              height={250}
              className="rounded-lg shadow-md dark:shadow-none"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
            {t("careers.perksTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 rounded-lg p-6 shadow-md dark:shadow-none border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
            {t("careers.openingsTitle")}
          </h2>

          <div className="space-y-6 mb-12">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-md dark:shadow-none transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-zinc-400 mb-3 space-x-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-gray-600 dark:text-zinc-400 mb-4">{job.description}</p>
                  </div>
                  <Button variant="outline" className="ml-4 bg-transparent">
                    {t("careers.applyNow")}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see a fit section */}
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-4">
              {t("careers.noFitTitle")}
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              {t("careers.noFitDesc")}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t("careers.sendResume")}
            </Button>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-2">careers@winsoft.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
