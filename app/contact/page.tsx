"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { MapPin, Phone, Mail, Clock, Send, Calendar, Headphones, MessageSquare, ChevronDown } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { sendContactNotification } from "@/lib/email"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { error: insertError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || null,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        },
      ])

      if (insertError) {
        throw insertError
      }

      await sendContactNotification({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        inquiry_type: formData.inquiryType,
      })

      // Construct WhatsApp Message
      const messageText = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || "N/A"}\n*Inquiry:* ${formData.inquiryType}\n*Message:* ${formData.message}`
      const whatsappUrl = `https://wa.me/919325519485?text=${encodeURIComponent(messageText)}`

      // Attempt to open WhatsApp
      setTimeout(() => {
        try {
          const waWindow = window.open(whatsappUrl, "_blank")
          if (!waWindow) {
            window.location.href = whatsappUrl
          }
        } catch (e) {
          window.location.href = whatsappUrl
        }
      }, 100)

      console.log("Contact form submitted successfully:", formData)
      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(t("contactPage.errorMsg") || "There was an error submitting your message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Header />

      <main>
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("contactPage.heroTitle")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 dark:text-gray-300 font-serif leading-relaxed max-w-3xl mx-auto mb-8">
              {t("contactPage.heroSubtitle")}
            </p>

            {/* Quick-Link Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-sans font-semibold px-8 py-3"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t("header.scheduleDemo")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-sans font-semibold px-8 py-3 bg-transparent"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                onClick={() => document.getElementById("direct-contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Headphones className="mr-2 h-5 w-5" />
                {t("dairy.supportLabel")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-sans font-semibold px-8 py-3 bg-transparent"
                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        </section>

        {/* Main Contact Hub - Two Column Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column: Contact Form */}
              <div id="contact-form">
                <h2 className="text-3xl font-sans font-bold mb-4" style={{ color: "var(--primary)" }}>
                  {t("contactPage.formTitle")}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
                  {t("contactPage.formSubtitle")}
                </p>

                {!isSubmitted ? (
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            {error}
                          </div>
                        )}

                        <div>
                          <Label htmlFor="name" className="font-sans font-medium">
                            {t("contactPage.fullName")} *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company" className="font-sans font-medium">
                            {t("contact.companyName") !== "contact.companyName" ? t("contact.companyName") : "Company Name"}
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="font-sans font-medium">
                            {t("contactPage.email")} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="font-sans font-medium">
                            {t("contactPage.phone")} *
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="inquiryType" className="font-sans font-medium">
                            {t("contactPage.subject")} *
                          </Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                          >
                            <SelectTrigger className="font-serif mt-1">
                              <SelectValue placeholder={t("contactPage.subject")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="demo">{t("header.scheduleDemo")}</SelectItem>
                              <SelectItem value="dairy">{t("nav.dairy")}</SelectItem>
                              <SelectItem value="sugar">{t("nav.sugar")}</SelectItem>
                              <SelectItem value="gold">{t("nav.gold")}</SelectItem>
                              <SelectItem value="support">{t("dairy.supportLabel")}</SelectItem>
                              <SelectItem value="general">{t("nav.contact")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message" className="font-sans font-medium">
                            {t("contactPage.message")} *
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={5}
                            className="font-serif mt-1"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full font-sans font-semibold py-3"
                          style={{ backgroundColor: "var(--accent)", color: "white" }}
                        >
                          {isLoading ? t("contactPage.sending") : t("contactPage.sendMessage")} <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-8 text-center">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-sans font-bold text-green-800 mb-2">{t("contactPage.successMsg")}</h3>
                      <p className="text-green-700 mb-6">If WhatsApp didn't open automatically, click the button below:</p>
                      <Button 
                        onClick={() => {
                          const messageText = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || "N/A"}\n*Inquiry:* ${formData.inquiryType}\n*Message:* ${formData.message}`
                          window.open(`https://wa.me/919325519485?text=${encodeURIComponent(messageText)}`, "_blank")
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 mx-auto"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Send on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column: Direct Contact Information */}
              <div id="direct-contact">
                <h2 className="text-3xl font-sans font-bold mb-8" style={{ color: "var(--primary)" }}>
                  {t("contactPage.findUs")}
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.callTitle")}</h3>
                      <p className="text-gray-700 dark:text-zinc-300 font-serif text-lg">+91 98765 43210</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.emailTitle")}</h3>
                      <div className="space-y-1 font-serif text-gray-700 dark:text-zinc-300">
                        <p>sales@winsoft.com</p>
                        <p>support@winsoft.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.officeTitle")}</h3>
                      <div className="font-serif text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>123 Business District</p>
                        <p>Technology Park</p>
                        <p>Mumbai, Maharashtra 400001</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.workHours")}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-8" style={{ color: "var(--primary)" }}>
              {t("contactPage.findUs")}
            </h2>
            <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg dark:shadow-none overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-zinc-400 font-serif">Interactive Google Map</p>
                  <p className="text-sm text-gray-500 dark:text-zinc-400 font-serif">123 Business District, Technology Park, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

