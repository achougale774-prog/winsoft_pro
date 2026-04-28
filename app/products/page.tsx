"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle,
    Monitor,
    Rocket,
    Globe,
    Milk,
    Receipt,
    Factory,
    Smartphone,
    Bluetooth,
    BarChart3,
    Truck,
    Building2,
    Gem,
    ArrowLeftRight,
    ShoppingBag,
    FileText,
    CalendarCheck,
    Package,
    DollarSign,
    Warehouse,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ProductsPage() {
    const { t } = useLanguage()
    const [activeCategory, setActiveCategory] = useState("dairy")
    const [activeDairyTier, setActiveDairyTier] = useState("dairy50")

    // ─── DAIRY ───
    const dairyTiers = [
        {
            id: "dairy41",
            name: "Dairy 4.1",
            subtitle: t("dairy.tier1Subtitle"),
            icon: Monitor,
            color: "#2563eb",
            products: [
                {
                    title: t("home.product1Title"),
                    icon: Milk,
                    features: [t("dairy.feat1"), t("dairy.feat2"), t("dairy.feat4"), t("dairy.feat8"), t("features.billingH2"), t("sugar.misReports")],
                },
                {
                    title: t("dairy.industry2Title"),
                    icon: Receipt,
                    features: [t("features.farmerH1"), t("features.billingH2"), t("features.accountingH3"), t("features.accountingH4")],
                },
            ],
        },
        {
            id: "dairy50",
            name: "Dairy 5.0",
            subtitle: t("dairy.tier2Subtitle"),
            icon: Rocket,
            color: "#7c3aed",
            products: [
                { title: t("home.product1Title"), icon: Milk, features: [t("dairy.industry1Desc"), t("features.billingH1"), t("features.cloudH2"), t("features.erpH1"), t("features.securityH1")] },
                { title: t("dairy.industry2Title"), icon: Receipt, features: [t("features.accountingDesc"), t("features.accountingH1"), t("features.accountingH3"), t("features.accountingH2"), t("features.accountingH4")] },
                { title: t("dairy.industry6Title"), icon: Factory, features: [t("features.prodH1"), t("features.prodH2"), t("features.prodH3"), t("features.prodH4")] },
                { title: t("features.mobileTitle"), icon: Smartphone, features: [t("features.mobileH1"), t("features.mobileH2"), t("features.mobileH3"), t("features.mobileH4")] },
                { title: t("dairy.industry1Title"), icon: Bluetooth, features: [t("features.mobileDesc"), t("features.mobileH4"), t("features.mobileH3"), t("features.mobileH2")] },
                { title: t("dairy.tier2Subtitle"), icon: BarChart3, features: [t("dairy.feat9"), t("dairy.feat10"), t("dairy.feat11"), t("dairy.feat12"), t("dairy.feat7"), t("sugar.misReports")] },
            ],
        },
        {
            id: "webdairy",
            name: "Web Dairy",
            subtitle: t("dairy.tier3Subtitle"),
            icon: Globe,
            color: "#0891b2",
            products: [
                { title: t("home.product1Title"), icon: Milk, features: [t("features.cloudH1"), t("features.cloudH2"), t("features.cloudH3"), t("features.cloudH4")] },
                { title: t("dairy.industry2Title"), icon: Receipt, features: [t("features.cloudDesc"), t("features.billingH4"), t("features.farmerH1"), t("features.analyticsH3")] },
                { title: t("dairy.industry6Title"), icon: Factory, features: [t("features.prodH1"), t("features.prodH3"), t("features.prodH2"), t("features.prodH4")] },
                { title: t("features.transportTitle"), icon: Truck, features: [t("features.transportH1"), t("features.transportH2"), t("features.transportH3"), t("features.transportH4")] },
                { title: t("dairy.industry4Title"), icon: Building2, features: [t("features.erpH2"), t("features.erpH1"), t("features.erpH3"), t("features.erpH4")] },
            ],
        },
    ]

    // ─── GOLD & JEWELLERY ───
    const goldProducts = [
        {
            title: t("productsPage.goldExchange"),
            icon: ArrowLeftRight,
            color: "#b45309",
            description: t("productsPage.goldExchangeDesc"),
            features: [t("gold.module2"), t("gold.module3"), t("gold.module9")],
        },
        {
            title: t("productsPage.goldExchangeBilling"),
            icon: ShoppingBag,
            color: "#b45309",
            description: t("productsPage.goldExchangeBillingDesc"),
            features: [t("gold.module1"), t("gold.module2"), t("gold.module9")],
        },
        {
            title: t("productsPage.goldFull"),
            icon: FileText,
            color: "#b45309",
            description: t("productsPage.goldFullDesc"),
            features: [t("gold.module1"), t("gold.module2"), t("gold.module9"), t("gold.module8")],
        },
        {
            title: t("productsPage.goldBooking"),
            icon: CalendarCheck,
            color: "#b45309",
            description: t("productsPage.goldBookingDesc"),
            features: [t("gold.module4"), t("gold.module5"), t("gold.module9")],
        },
    ]

    // ─── INVENTORY & ACCOUNTING ───
    const inventoryProducts = [
        {
            title: t("productsPage.invAccSoftware"),
            icon: Package,
            color: "#059669",
            description: t("productsPage.invAccSoftwareDesc"),
            features: [t("dairy.feat11"), t("gold.module3"), t("gold.module9")],
        },
        {
            title: t("productsPage.fullBusinessSoftware"),
            icon: DollarSign,
            color: "#059669",
            description: t("productsPage.fullBusinessSoftwareDesc"),
            features: [t("gold.module1"), t("gold.module3"), t("gold.module9")],
        },
    ]

    // ─── SUGAR INDUSTRY ───
    const sugarProducts = [
        {
            title: t("sugar.sugarSystemTitle"),
            icon: Warehouse,
            color: "#dc2626",
            description: t("sugar.sugarHeroSubtitle"),
            features: [t("sugar.module1"), t("sugar.module2"), t("sugar.module3"), t("sugar.module4"), t("sugar.module5"), t("sugar.module8")],
        },
    ]

    const categories = [
        { id: "dairy", name: t("productsPage.dairySoftware"), icon: Milk, color: "#2563eb", count: 13 },
        { id: "gold", name: t("productsPage.goldJewellery"), icon: Gem, color: "#b45309", count: 4 },
        { id: "inventory", name: t("productsPage.invAcc"), icon: Package, color: "#059669", count: 2 },
        { id: "sugar", name: t("productsPage.sugarIndustry"), icon: Factory, color: "#dc2626", count: 1 },
    ]

    const currentDairyTier = dairyTiers.find((t) => t.id === activeDairyTier)!

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">{t("productsPage.heroTitle")}</h1>
                    <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
                        {t("productsPage.heroSubtitle")}
                    </p>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="bg-white dark:bg-zinc-950 border-b sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 py-2 sm:py-0 overflow-x-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-3 px-5 py-3.5 text-left font-sans font-medium transition-all border-b-2 sm:flex-1 rounded-lg sm:rounded-none whitespace-nowrap ${isActive ? "bg-gray-50 text-gray-900 dark:text-zinc-100" : "border-transparent text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
                                        }`}
                                    style={isActive ? { color: cat.color, borderBottomColor: cat.color } : undefined}
                                >
                                    <cat.icon className="h-5 w-5 flex-shrink-0" />
                                    <div>
                                        <div className="text-sm font-semibold">{cat.name}</div>
                                        <div className="text-xs text-gray-500 dark:text-zinc-400">{cat.count} {t("nav.products")}</div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── DAIRY SECTION ─── */}
            {activeCategory === "dairy" && (
                <>
                    {/* Dairy Tier Selector */}
                    <section className="py-6 bg-gray-50 border-b">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-wrap gap-3">
                                {dairyTiers.map((tier) => {
                                    const isActive = activeDairyTier === tier.id
                                    return (
                                        <button
                                            key={tier.id}
                                            onClick={() => setActiveDairyTier(tier.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${isActive ? "text-white shadow-md dark:shadow-none" : "bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 border border-gray-200 dark:border-zinc-800 hover:border-gray-300"
                                                }`}
                                            style={isActive ? { backgroundColor: tier.color } : undefined}
                                        >
                                            <tier.icon className="h-4 w-4" />
                                            {tier.name} — {tier.subtitle}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Dairy Products */}
                    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mb-8">
                                <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                                    {currentDairyTier.name} <span className="text-lg font-normal text-gray-500 dark:text-zinc-400">— {currentDairyTier.subtitle}</span>
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentDairyTier.products.map((product, idx) => (
                                    <ProductCard key={idx} title={product.title} icon={product.icon} features={product.features} color={currentDairyTier.color} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ─── GOLD & JEWELLERY SECTION ─── */}
            {activeCategory === "gold" && (
                <section className="py-12 bg-gradient-to-b from-white to-amber-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.goldJewellery")}</h2>
                            <p className="text-gray-600 dark:text-zinc-400 mt-1">{t("gold.goldHeroSubtitle")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {goldProducts.map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── INVENTORY & ACCOUNTING SECTION ─── */}
            {activeCategory === "inventory" && (
                <section className="py-12 bg-gradient-to-b from-white to-emerald-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.invAcc")}</h2>
                            <p className="text-gray-600 dark:text-zinc-400 mt-1">{t("productsPage.invAccSoftwareDesc")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {inventoryProducts.map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── SUGAR INDUSTRY SECTION ─── */}
            {activeCategory === "sugar" && (
                <section className="py-12 bg-gradient-to-b from-white to-red-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.sugarIndustry")}</h2>
                            <p className="text-gray-600 dark:text-zinc-400 mt-1">{t("sugar.sugarHeroSubtitle")}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sugarProducts.map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-sans font-bold text-white mb-4">{t("productsPage.notSureTitle")}</h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        {t("productsPage.notSureDesc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/schedule-demo">
                            <Button size="lg" className="font-sans font-semibold text-lg px-8 py-3" style={{ backgroundColor: "var(--accent)", color: "white" }}>
                                {t("features.requestFreeDemo")}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="font-sans font-semibold text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white dark:bg-zinc-950/10">
                                {t("productsPage.contactSales")}
                            </Button>
                        </Link>
                        <WhatsAppButton />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

function ProductCard({ title, icon: Icon, features, color, description }: any) {
    return (
        <Card className="hover:shadow-lg dark:shadow-none transition-all h-full">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-opacity-10" style={{ backgroundColor: `${color}1A`, color }}>
                        {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 leading-tight">{title}</h3>
                </div>
                {description && <p className="text-gray-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">{description}</p>}
                {features && features.length > 0 && (
                    <ul className="space-y-2">
                        {features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-zinc-300">
                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    )
}
