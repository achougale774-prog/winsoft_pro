"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft, Headphones, Mail, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ProductDetailPage() {
  const params = useParams()
  const { t, language } = useLanguage()
  const productId = typeof params?.id === 'string' ? params.id : "1"

  const productsData: Record<string, any> = useMemo(() => ({
    "1": {
      id: 1,
      title: t("home.product1Title"),
      brand: "WinSoft Solutions",
      category: t("contact.dairy"),
      description: t("home.product1Desc"),
      variants: [t("product.prod1Variant1"), t("product.prod1Variant2"), t("product.prod1Variant3")],
      details: {
        [t("product.softwareType")]: "Desktop & Cloud",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Android",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: t("product.lifetime"),
      },
      about: [
        t("product.prod1About1"),
        t("product.prod1About2"),
        t("product.prod1About3"),
        t("product.prod1About4"),
        t("product.prod1About5"),
      ],
      images: ["/modern-office-dashboard.png", "/modern-dairy-farm.png", "/indian-software-office-collaboration.png"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    "2": {
      id: 2,
      title: t("home.product2Title"),
      brand: "WinSoft Solutions",
      category: t("contact.gold"),
      description: t("home.product2Desc"),
      variants: [t("product.prod2Variant1"), t("product.prod2Variant2"), t("product.prod2Variant3")],
      details: {
        [t("product.softwareType")]: "Desktop & Cloud",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Web",
        [t("product.barcodeSupport")]: t("product.yes"),
        [t("product.accounting")]: "In-built GST Ready",
      },
      about: [
        t("product.prod2About1"),
        t("product.prod2About2"),
        t("product.prod2About3"),
        t("product.prod2About4"),
        t("product.prod2About5"),
      ],
      images: ["/indian-software-office-collaboration.png", "/modern-office-dashboard.png"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    "3": {
      id: 3,
      title: t("home.product3Title"),
      brand: "WinSoft Solutions",
      category: t("nav.sugar"),
      description: t("home.product3Desc"),
      variants: [t("product.prod3Variant1"), t("product.prod3Variant2")],
      details: {
        [t("product.softwareType")]: "Enterprise ERP",
        [t("product.brand")]: "WinSoft",
        [t("product.database")]: "SQL Server",
        [t("product.modules")]: language === 'mr' ? "ऊस, स्टोअर, खाते, पेरोल" : 
                               language === 'hi' ? "गन्ना, स्टोर, खाता, पेरोल" :
                               language === 'kn' ? "ಕಬ್ಬು, ಸ್ಟೋರ್, ಖಾತೆ, ಪೇರೋಲ್" : "Cane, Store, Account, Payroll",
        [t("product.hardwareIntegration")]: "Weighbridge, RFID",
      },
      about: [
        t("product.prod3About1"),
        t("product.prod3About2"),
        t("product.prod3About3"),
        t("product.prod3About4"),
        t("product.prod3About5"),
      ],
      images: ["/modern-dairy-farm.png", "/indian-software-office-collaboration.png"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    }

  }), [t, language])

  const product = productsData[productId] || productsData["1"]

  const [mainImage, setMainImage] = useState(product.images[0])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-gray-900 dark:text-zinc-100">
      <Header />

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200 dark:border-zinc-800 px-4 py-3 text-sm text-gray-500 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="hover:underline text-gray-700 dark:text-zinc-300 flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> {t("product.backToSolutions")}
          </Link>
          <span className="mx-3 text-gray-300">|</span>
          <Link href="/" className="hover:underline">{t("product.home")}</Link>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          <span className="text-gray-400">{product.category}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SECTION (IMAGE GALLERY) */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="relative w-full aspect-[4/3] border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 bg-gray-50 flex items-center justify-center overflow-hidden shadow-sm dark:shadow-none">
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((img: string, idx: number) => (
                <div 
                  key={idx}
                  className={`relative w-20 h-20 border-2 rounded-2xl cursor-pointer overflow-hidden transition-all ${mainImage === img ? 'border-purple-600 shadow-md dark:shadow-none scale-105' : 'border-gray-200 dark:border-zinc-800 hover:border-purple-300'}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE SECTION (DETAILS) */}
          <div className="w-full lg:w-4/12 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                {t("product.availableEditions")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v: string) => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-sm rounded-xl border transition-all ${selectedVariant === v ? 'border-purple-600 bg-purple-50 text-purple-700 font-semibold' : 'border-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-600 dark:text-zinc-400'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                {t("product.technicalSpecs")}
              </h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="contents">
                    <div className="font-semibold text-gray-500 dark:text-zinc-400">{key}</div>
                    <div className="text-gray-900 dark:text-zinc-100 font-medium">{value as string}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                {t("product.keyFeatures")}
              </h3>
              <ul className="space-y-3">
                {product.about.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-zinc-300 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION (CONTACT/ACTION) */}
          <div className="w-full lg:w-3/12">
            <div className="bg-gray-50 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 sticky top-8 space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">
                  {t("product.interested")}
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 text-sm">
                  {t("product.personalizedWalkthrough")}
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/schedule-demo" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 rounded-2xl shadow-lg dark:shadow-none transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {t("product.requestDemo")}
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 dark:text-zinc-300 font-bold py-6 rounded-2xl hover:bg-white dark:bg-zinc-950 transition-all flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    {t("product.contactSales")}
                  </Button>
                </Link>
                <WhatsAppButton className="block" />
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-zinc-800 space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                  {t("product.supportAssistance")}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-gray-100 flex items-center justify-center shadow-sm dark:shadow-none">
                    <Headphones className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold">{t("product.support247")}</p>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs">
                      {t("product.callUs")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-gray-100 flex items-center justify-center shadow-sm dark:shadow-none">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold">{t("product.dataSecurity")}</p>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs">{t("product.certified")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        {product.videoUrl && (
          <div className="mt-24 pt-16 border-t border-gray-100 dark:border-zinc-800">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100">
                {t("product.videoTitle")}
              </h2>
              <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  className="w-full h-full"
                  src={product.videoUrl}
                  title={product.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}



