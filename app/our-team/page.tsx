"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function OurTeamPage() {
  const { t } = useLanguage()

  const leadership = [
    {
      name: "Rajesh Patil",
      title: "Founder & CEO",
      bio: t("team.ceoBio"),
      image: "/indian-businessman-ceo.png",
    },
    {
      name: "Priya Sharma",
      title: "Head of Development",
      bio: t("team.devHeadBio"),
      image: "/indian-woman-software-developer.png",
    },
    {
      name: "Amit Kumar",
      title: "Head of Client Success",
      bio: t("team.successHeadBio"),
      image: "/indian-man-client-success-headshot.png",
    },
  ]

  const teamMembers = [
    { name: "Rohan", role: "Senior .NET Developer" },
    { name: "Sneha", role: "Dairy Solutions Specialist" },
    { name: "Vikram", role: "Database Administrator" },
    { name: "Kavya", role: "UI/UX Designer" },
    { name: "Arjun", role: "Quality Assurance Lead" },
    { name: "Meera", role: "Business Analyst" },
    { name: "Suresh", role: "Sugar Industry Expert" },
    { name: "Anita", role: "Support Specialist" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
            {t("team.heroTitle")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {t("team.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">{t("team.leadershipTitle")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg dark:shadow-none overflow-hidden border border-gray-100">
                <div className="aspect-square relative">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{t("team.connectLinkedin")}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
            {t("team.teamSectionTitle")}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/professional-indian.png?height=200&width=200&query=professional Indian ${member.role.toLowerCase()} headshot`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-zinc-100">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div className="text-center">
            <div className="relative inline-block rounded-lg overflow-hidden shadow-lg dark:shadow-none">
              <Image src="/placeholder-dw19d.png" alt="Winsoft Team" width={800} height={400} className="rounded-lg" />
            </div>
            <p className="text-gray-600 dark:text-zinc-400 mt-4 italic">{t("team.teamPhotoCaption")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
