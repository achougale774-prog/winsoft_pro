"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"

export default function BlogPage() {
  const { t, language } = useLanguage()

  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: t("blog.post1Title"),
      excerpt: t("blog.post1Desc"),
      author: t("blog.author1"),
      date: "2024-01-15",
      category: t("blog.dairy"),
      readTime: t("blog.readTime").replace("{n}", "8"),
      image: "/modern-dairy-farm.png",
      featured: true,
    },
    {
      id: 2,
      title: t("blog.post2Title"),
      excerpt: t("blog.post2Desc"),
      author: t("blog.author2"),
      date: "2024-01-10",
      category: t("blog.sugar"),
      readTime: t("blog.readTime").replace("{n}", "6"),
      image: "/sugar-factory-production-line.png",
      featured: true,
    },
    {
      id: 3,
      title: t("blog.post3Title"),
      excerpt: t("blog.post3Desc"),
      author: t("blog.author3"),
      date: "2024-01-05",
      category: t("blog.gold"),
      readTime: t("blog.readTime").replace("{n}", "5"),
      image: "/jewelry-store-system.png",
      featured: false,
    },
    {
      id: 4,
      title: t("blog.post4Title"),
      excerpt: t("blog.post4Desc"),
      author: t("blog.author4"),
      date: "2023-12-28",
      category: t("blog.tech"),
      readTime: t("blog.readTime").replace("{n}", "7"),
      image: "/modern-office-dashboard.png",
      featured: false,
    },
    {
      id: 5,
      title: t("blog.post5Title"),
      excerpt: t("blog.post5Desc"),
      author: t("blog.author5"),
      date: "2023-12-20",
      category: t("blog.foodProcessing"),
      readTime: t("blog.readTime").replace("{n}", "6"),
      image: "/placeholder-91egf.png",
      featured: false,
    },
    {
      id: 6,
      title: t("blog.post6Title"),
      excerpt: t("blog.post6Desc"),
      author: t("blog.author6"),
      date: "2023-12-15",
      category: t("blog.strategy"),
      readTime: t("blog.readTime").replace("{n}", "4"),
      image: "/placeholder-8znyd.png",
      featured: false,
    },
  ], [t])

  const categories = [t("blog.all"), t("blog.dairy"), t("blog.sugar"), t("blog.gold"), t("blog.tech"), t("blog.strategy")]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                <BookOpen className="h-6 w-6" style={{ color: "var(--primary)" }} />
              </div>
              <Badge variant="secondary" className="px-3 py-1 font-sans">
                {t("blog.resources")}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("blog.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-3xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sans font-bold mb-12" style={{ color: "var(--primary)" }}>
              {t("blog.featured")}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl dark:shadow-none transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge
                        className="absolute top-4 left-4 px-3 py-1 font-sans text-xs"
                        style={{ backgroundColor: "var(--accent)", color: "white" }}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-sans font-bold group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span className="font-serif">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span className="font-serif">{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span className="font-serif">{post.readTime}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-sans font-semibold text-sm group-hover:text-blue-600 transition-colors"
                        style={{ color: "var(--primary)" }}
                      >
                        {t("blog.readMore")} <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-sans font-bold" style={{ color: "var(--primary)" }}>
                {t("blog.latest")}
              </h2>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" style={{ color: "var(--primary)" }} />
                <span className="font-sans text-sm" style={{ color: "var(--primary)" }}>
                  {t("blog.updatedWeekly")}
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="px-3 py-1 font-sans text-xs cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg dark:shadow-none transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <Badge
                        className="absolute top-3 left-3 px-2 py-1 font-sans text-xs"
                        style={{ backgroundColor: "var(--accent)", color: "white" }}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-sans font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm mb-3 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="font-serif">{post.author}</span>
                        </div>
                        <span className="font-serif">{post.readTime}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-sans font-semibold text-sm group-hover:text-blue-600 transition-colors"
                        style={{ color: "var(--primary)" }}
                      >
                        {t("blog.readMore")} <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("blog.stayUpdated")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
              {t("blog.newsletterDesc")}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'mr' ? "तुमचा ईमेल प्रविष्ट करा" : language === 'hi' ? "अपना ईमेल दर्ज करें" : language === 'kn' ? "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ" : "Enter your email"}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-serif text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="font-sans font-semibold px-6 py-3"
                style={{ backgroundColor: "var(--accent)", color: "white" }}
              >
                {t("blog.subscribe")}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

