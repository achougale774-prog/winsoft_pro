"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-sans font-bold text-white mb-4">
              <Link href="/">Winsoft</Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("footer.about")}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 dark:text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.products")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.allProducts")}
                </Link>
              </li>
              <li>
                <Link href="/dairy-solutions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.dairySoftware")}
                </Link>
              </li>
              <li>
                <Link href="/gold-industry-solutions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.goldSoftware")}
                </Link>
              </li>
              <li>
                <Link href="/sugar-factory-solutions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.sugarSoftware")}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.features")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/our-story" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t("footer.caseStudies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-gray-500 dark:text-zinc-400 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-gray-500 dark:text-zinc-400 flex-shrink-0" />
                <span>info@winsoft.com</span>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-500 dark:text-zinc-400 flex-shrink-0" />
                <span>
                  Plot No. 45, Software Park
                  <br />
                  Kolhapur, Maharashtra 416001
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/schedule-demo"
                className="inline-block rounded-md px-5 py-2.5 text-sm font-sans font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {t("footer.requestDemo")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-zinc-400 text-sm">© {new Date().getFullYear()} Winsoft. {t("footer.allRightsReserved")}</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-300 text-sm transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-300 text-sm transition-colors">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

