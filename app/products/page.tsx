"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
    Volume2,
    VolumeX,
    ShieldCheck,
    Zap,
    Users,
    Cloud,
    Search
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AudioButton } from "@/components/audio-button"

export default function ProductsPage() {
    const { t, language } = useLanguage()
    const [activeCategory, setActiveCategory] = useState("dairy")
    const [activeDairyTier, setActiveDairyTier] = useState("dairy50")
    const [searchQuery, setSearchQuery] = useState("")
    const [scrollProgress, setScrollProgress] = useState(0)

    // Scroll Progress Effect
    import("react").then(({ useEffect }) => {
        useEffect(() => {
            const handleScroll = () => {
                const totalScroll = document.documentElement.scrollTop
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
                const scroll = `${totalScroll / windowHeight}`
                setScrollProgress(Number(scroll) * 100)
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }, [])
    })

    const filterProducts = (products: any[]) => {
        if (!searchQuery) return products;
        const query = searchQuery.toLowerCase()
        return products.filter(p => 
            p.title.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query)) ||
            (p.features && p.features.some((f: string) => f.toLowerCase().includes(query)))
        )
    }

    let audioText = ""
    if (language === 'mr') {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. आमची प्रमुख उत्पादने: दुग्ध व्यवसाय सॉफ्टवेअर, सुवर्ण व दागिन्यांचे सॉफ्टवेअर, इन्व्हेंटरी आणि अकाउंटिंग, साखर कारखाना सॉफ्टवेअर.`
    } else if (language === 'kn') {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. ನಮ್ಮ ಪ್ರಮುಖ ಉತ್ಪನ್ನಗಳು: ಹೈನುಗಾರಿಕೆ ಸಾಫ್ಟ್‌ವೇರ್, ಚಿನ್ನ ಮತ್ತು ಆಭರಣಗಳ ಸಾಫ್ಟ್‌ವೇರ್, ಇನ್ವೆಂಟರಿ ಮತ್ತು ಅಕೌಂಟಿಂಗ್, ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಸಾಫ್ಟ್‌ವೇರ್.`
    } else {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. Our main products: Dairy Software, Gold & Jewellery Software, Inventory & Accounting, Sugar Industry Software.`
    }

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
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
            {/* Scroll Progress Bar */}
            <div 
                className="fixed top-0 left-0 h-1 bg-blue-600 dark:bg-blue-500 z-50 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
            
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col items-center justify-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.heroTitle")}</h1>
                        <AudioButton text={audioText} colorTheme="blue" />
                    </div>
                    <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
                        {t("productsPage.heroSubtitle")}
                    </p>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="bg-white dark:bg-zinc-950 border-b sticky top-0 z-40">
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

            {/* ─── LIVE SEARCH BAR ─── */}
            <section className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-[72px] z-40 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <Input
                            type="text"
                            placeholder={language === 'mr' ? 'कोणतेही प्रॉडक्ट शोधा... (उदा. Dairy, Billing)' : language === 'kn' ? 'ಯಾವುದೇ ಉತ್ಪನ್ನವನ್ನು ಹುಡುಕಿ...' : 'Search for any product, feature, or keyword...'}
                            className="pl-12 pr-4 py-6 w-full rounded-full border-2 border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-lg focus-visible:ring-0 focus-visible:border-blue-500 focus-visible:bg-white dark:focus-visible:bg-zinc-900 transition-all shadow-inner"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
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
                                {filterProducts(currentDairyTier.products).length > 0 ? (
                                    filterProducts(currentDairyTier.products).map((product: any, idx: number) => (
                                        <ProductCard key={idx} title={product.title} icon={product.icon} features={product.features} color={currentDairyTier.color} />
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center text-gray-500 dark:text-zinc-400">
                                        <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p className="text-lg">No products found matching "{searchQuery}"</p>
                                    </div>
                                )}
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
                            {filterProducts(goldProducts).length > 0 ? (
                                filterProducts(goldProducts).map((product, idx) => (
                                    <ProductCard key={idx} {...product} />
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center text-gray-500 dark:text-zinc-400">
                                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-lg">No products found matching "{searchQuery}"</p>
                                </div>
                            )}
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
                            {filterProducts(inventoryProducts).length > 0 ? (
                                filterProducts(inventoryProducts).map((product, idx) => (
                                    <ProductCard key={idx} {...product} />
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center text-gray-500 dark:text-zinc-400">
                                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-lg">No products found matching "{searchQuery}"</p>
                                </div>
                            )}
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
                            {filterProducts(sugarProducts).length > 0 ? (
                                filterProducts(sugarProducts).map((product, idx) => (
                                    <ProductCard key={idx} {...product} />
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center text-gray-500 dark:text-zinc-400">
                                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-lg">No products found matching "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── WHY CHOOSE SECTION (NEW) ─── */}
            <section className="py-20 relative overflow-hidden bg-white dark:bg-zinc-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 dark:from-blue-900/10 to-transparent rounded-[100%] blur-3xl -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                            {language === 'mr' ? 'विनसॉफ्ट सॉफ्टवेअर का निवडावे?' : language === 'kn' ? 'ವಿನ್‌ಸಾಫ್ಟ್ ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?' : 'Why Choose WinSoft Software?'}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            {language === 'mr' ? '२५ वर्षांचा अनुभव आणि प्रगत तंत्रज्ञान.' : language === 'kn' ? '25 ವರ್ಷಗಳ ಅನುಭವ ಮತ್ತು ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ.' : '25 years of experience combined with advanced technology.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: language === 'mr' ? '१००% सुरक्षित' : language === 'kn' ? '100% ಸುರಕ್ಷಿತ' : '100% Secure', desc: language === 'mr' ? 'तुमचा डेटा पूर्णपणे सुरक्षित आहे' : language === 'kn' ? 'ನಿಮ್ಮ ಡೇಟಾ ಸಂಪೂರ್ಣವಾಗಿ ಸುರಕ್ಷಿತವಾಗಿದೆ' : 'Your data is completely secure with encryption.', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                            { icon: Zap, title: language === 'mr' ? 'सुपरफास्ट स्पीड' : language === 'kn' ? 'ಸೂಪರ್‌ಫಾಸ್ಟ್ ವೇಗ' : 'Superfast Speed', desc: language === 'mr' ? 'कोणत्याही लेगशिवाय बिलिंग करा' : language === 'kn' ? 'ಯಾವುದೇ ವಿಳಂಬವಿಲ್ಲದೆ ಬಿಲ್ಲಿಂಗ್ ಮಾಡಿ' : 'Lightning fast billing with zero lag.', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                            { icon: Cloud, title: language === 'mr' ? 'क्लाउड सिंक' : language === 'kn' ? 'ಕ್ಲೌಡ್ ಸಿಂಕ್' : 'Cloud Sync', desc: language === 'mr' ? 'कोणत्याही डिव्हाइसवरून ऍक्सेस करा' : language === 'kn' ? 'ಯಾವುದೇ ಸಾಧನದಿಂದ ಪ್ರವೇಶಿಸಿ' : 'Access your data from any device, anywhere.', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                            { icon: Users, title: language === 'mr' ? '५००+ समाधानी ग्राहक' : language === 'kn' ? '500+ ಸಂತೋಷದ ಗ್ರಾಹಕರು' : '500+ Happy Clients', desc: language === 'mr' ? 'संपूर्ण महाराष्ट्रात विश्वासाचे प्रतीक' : language === 'kn' ? 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಂಬಿಕೆಯ ಸಂಕೇತ' : 'Trusted by businesses across the state.', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-zinc-900/50 border border-transparent hover:border-gray-100 dark:hover:border-zinc-800">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color} shadow-sm`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">{stat.title}</h3>
                                <p className="text-gray-600 dark:text-zinc-400">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
        <Card className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:shadow-none h-full border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 100%)` }} />
            
            <CardContent className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3.5 rounded-2xl bg-opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner" style={{ backgroundColor: `${color}1A`, color }}>
                        {Icon && <Icon className="w-7 h-7" />}
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-zinc-100 leading-tight transition-colors duration-300" style={{ '--hover-color': color } as React.CSSProperties}>
                        <span className="group-hover:text-[var(--hover-color)]">{title}</span>
                    </h3>
                </div>
                
                {description && <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">{description}</p>}
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent mb-5" />

                {features && features.length > 0 && (
                    <ul className="space-y-3 mb-4">
                        {features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-zinc-300 group/item">
                                <div className="mt-0.5 relative flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 transition-transform group-hover/item:scale-125" style={{ color }} />
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-50 blur-sm transition-opacity" style={{ backgroundColor: color }} />
                                </div>
                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-in-out" style={{ backgroundColor: color }} />
        </Card>
    )
}
