"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Award, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { sendDemoNotification } from "@/lib/email"
import { useLanguage } from "@/components/language-provider"

export default function ScheduleDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    phone: "",
    challenges: "",
    preferredDate: "",
    preferredTime: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { t } = useLanguage()

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split("T")[0]
  }

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { error: insertError } = await supabase.from("demo_requests").insert([
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          industry: formData.industry,
          current_challenges: formData.challenges || null,
          preferred_date: formData.preferredDate || null,
          preferred_time: formData.preferredTime || null,
        },
      ])

      if (insertError) {
        throw insertError
      }

      const emailResult = await sendDemoNotification({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        industry: formData.industry,
        company_size: "Not specified",
        current_challenges: formData.challenges,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
      })

      if (!emailResult.success) {
        console.warn("Email notification failed, but demo request was saved")
      }

      // Construct WhatsApp Message
      const messageText = `*New Demo Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Company:* ${formData.company}\n*Industry:* ${formData.industry}\n*Phone:* ${formData.phone || "N/A"}\n*Challenges:* ${formData.challenges}\n*Date:* ${formData.preferredDate}\n*Time:* ${formData.preferredTime}`
      const whatsappUrl = `https://wa.me/919325519485?text=${encodeURIComponent(messageText)}`
      
      // Attempt to open WhatsApp
      try {
        const waWindow = window.open(whatsappUrl, "_blank")
        if (!waWindow) {
          window.location.href = whatsappUrl
        }
      } catch (e) {
        window.location.href = whatsappUrl
      }

      router.push("/schedule-demo/thank-you")
    } catch (err) {
      console.error("Error submitting demo request:", err)
      setError(t("demo.errorMsg") || "There was an error scheduling your demo. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 dark:text-white mb-6 font-sans">
            {t("demo.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("demo.subtitle")}
          </p>
        </div>
      </section>

      {/* Scheduling Hub - Two Column Layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: What to Expect */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
                  {t("demo.walkthroughTitle")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">
                        {t("demo.tourTitle")}
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {t("demo.tourDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">
                        {t("demo.challengeTitle")}
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {t("demo.challengeDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">
                        {t("demo.featureTitle")}
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {t("demo.featureDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-2">
                        {t("demo.qaTitle")}
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {t("demo.qaDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Scheduler */}
            <div className="lg:sticky lg:top-8">
              <Card className="shadow-xl dark:shadow-none border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
                    {t("demo.selectDateTime")}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">{t("demo.firstName")} *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">{t("demo.lastName")} *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">{t("demo.workEmail")} *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">{t("demo.companyName")} *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">
                        {t("demo.industry")} *
                      </label>
                      <select
                        required
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">{t("demo.selectIndustry")}</option>
                        <option value="dairy">{t("demo.dairyOption")}</option>
                        <option value="sugar">{t("demo.sugarOption")}</option>
                        <option value="gold">{t("demo.goldOption")}</option>
                        <option value="other">{t("demo.otherOption")}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">
                        {t("demo.challenge")}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.challenges}
                        onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t("demo.challengePlaceholder")}
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          {t("demo.preferredDate")} *
                        </label>
                        <input
                          type="date"
                          required
                          min={getMinDate()}
                          max={getMaxDate()}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 dark:text-gray-200 mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          {t("demo.preferredTime")} *
                        </label>
                        <select
                          required
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">{t("demo.selectTime")}</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time} (IST)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                        <p className="text-sm text-blue-700">
                          {t("demo.timeNote")}
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    >
                      {isLoading ? t("demo.scheduling") : t("demo.scheduleDemo")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-12 font-sans">
            {t("demo.whyChooseTitle")}
          </h2>

          <Card className="shadow-lg dark:shadow-none border-l-4 border-l-blue-600">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Award className="w-12 h-12 text-blue-600 flex-shrink-0 mt-2" />
                <div>
                  <blockquote className="text-lg text-gray-700 dark:text-zinc-300 italic mb-6 leading-relaxed">
                    {t("demo.testimonial")}
                  </blockquote>
                  <div className="text-gray-600 dark:text-zinc-400">
                    <p className="font-semibold">{t("demo.testimonialAuthor")}</p>
                    <p>{t("demo.testimonialRole")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
