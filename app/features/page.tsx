"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Milk,
    Receipt,
    Users,
    Factory,
    Truck,
    BarChart3,
    Smartphone,
    Cloud,
    Shield,
    Bluetooth,
    FileText,
    TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function FeaturesPage() {
    const { t } = useLanguage()

    const features = [
        {
            icon: Milk,
            title: t("features.milkTitle"),
            description: t("features.milkDesc"),
            highlights: [
                t("features.milkH1"),
                t("features.milkH2"),
                t("features.milkH3"),
                t("features.milkH4")
            ],
        },
        {
            icon: Receipt,
            title: t("features.billingTitle"),
            description: t("features.billingDesc"),
            highlights: [
                t("features.billingH1"),
                t("features.billingH2"),
                t("features.billingH3"),
                t("features.billingH4")
            ],
        },
        {
            icon: Users,
            title: t("features.farmerTitle"),
            description: t("features.farmerDesc"),
            highlights: [
                t("features.farmerH1"),
                t("features.farmerH2"),
                t("features.farmerH3"),
                t("features.farmerH4")
            ],
        },
        {
            icon: Factory,
            title: t("features.prodTitle"),
            description: t("features.prodDesc"),
            highlights: [
                t("features.prodH1"),
                t("features.prodH2"),
                t("features.prodH3"),
                t("features.prodH4")
            ],
        },
        {
            icon: Truck,
            title: t("features.transportTitle"),
            description: t("features.transportDesc"),
            highlights: [
                t("features.transportH1"),
                t("features.transportH2"),
                t("features.transportH3"),
                t("features.transportH4")
            ],
        },
        {
            icon: BarChart3,
            title: t("features.erpTitle"),
            description: t("features.erpDesc"),
            highlights: [
                t("features.erpH1"),
                t("features.erpH2"),
                t("features.erpH3"),
                t("features.erpH4")
            ],
        },
        {
            icon: Smartphone,
            title: t("features.mobileTitle"),
            description: t("features.mobileDesc"),
            highlights: [
                t("features.mobileH1"),
                t("features.mobileH2"),
                t("features.mobileH3"),
                t("features.mobileH4")
            ],
        },
        {
            icon: Cloud,
            title: t("features.cloudTitle"),
            description: t("features.cloudDesc"),
            highlights: [
                t("features.cloudH1"),
                t("features.cloudH2"),
                t("features.cloudH3"),
                t("features.cloudH4")
            ],
        },
        {
            icon: FileText,
            title: t("features.accountingTitle"),
            description: t("features.accountingDesc"),
            highlights: [
                t("features.accountingH1"),
                t("features.accountingH2"),
                t("features.accountingH3"),
                t("features.accountingH4")
            ],
        },
        {
            icon: Shield,
            title: t("features.securityTitle"),
            description: t("features.securityDesc"),
            highlights: [
                t("features.securityH1"),
                t("features.securityH2"),
                t("features.securityH3"),
                t("features.securityH4")
            ],
        },
        {
            icon: Bluetooth,
            title: t("features.hardwareTitle"),
            description: t("features.hardwareDesc"),
            highlights: [
                t("features.hardwareH1"),
                t("features.hardwareH2"),
                t("features.hardwareH3"),
                t("features.hardwareH4")
            ],
        },
        {
            icon: TrendingUp,
            title: t("features.analyticsTitle"),
            description: t("features.analyticsDesc"),
            highlights: [
                t("features.analyticsH1"),
                t("features.analyticsH2"),
                t("features.analyticsH3"),
                t("features.analyticsH4")
            ],
        },
    ]

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                        {t("features.heroTitle")}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
                        {t("features.heroSubtitle")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products">
                            <Button
                                size="lg"
                                className="font-sans font-semibold px-8 py-3"
                                style={{ backgroundColor: "var(--accent)", color: "white" }}
                            >
                                {t("features.exploreProducts")}
                            </Button>
                        </Link>
                        <Link href="/schedule-demo">
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-sans font-semibold px-8 py-3 bg-transparent"
                                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                            >
                                {t("features.requestDemo")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 transition-all hover:shadow-lg dark:shadow-none hover:-translate-y-1"
                            >
                                <div
                                    className="rounded-full w-12 h-12 flex items-center justify-center mb-5"
                                    style={{ backgroundColor: "rgba(69, 123, 157, 0.1)" }}
                                >
                                    <feature.icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                                </div>
                                <h3 className="text-lg font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">{feature.description}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {feature.highlights.map((h) => (
                                        <div key={h} className="flex items-center gap-1.5">
                                            <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                                            <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--primary)" }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-sans font-bold text-white mb-4">
                        {t("features.ctaTitle")}
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        {t("features.ctaDesc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/schedule-demo">
                            <Button
                                size="lg"
                                className="font-sans font-semibold text-lg px-8 py-3"
                                style={{ backgroundColor: "var(--accent)", color: "white" }}
                            >
                                {t("features.requestFreeDemo")}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-sans font-semibold text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white dark:bg-zinc-950/10"
                            >
                                {t("features.contactUs")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
