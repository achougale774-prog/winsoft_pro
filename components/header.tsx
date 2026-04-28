"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Moon, Sun, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const navItems = (t: (key: string) => string) => [
  {
    label: t("nav.home"),
    href: "/",
  },
  {
    label: t("nav.about us"),
    href: "/our-story",
  },
  {
    label: t("nav.products"),
    children: [
      {
        href: "/products",
        title: t("footer.allProducts"),
        description: t("footer.productsDesc"),
      },
      {
        href: "/dairy-solutions",
        title: t("nav.dairy"),
        description: t("dairy.dairySubtitle"),
      },
      {
        href: "/gold-industry-solutions",
        title: t("nav.gold"),
        description: t("home.product2Desc"),
      },
      {
        href: "/products",
        title: t("services.inventoryTitle"),
        description: t("services.inventoryMgmt"),
      },
      {
        href: "/sugar-factory-solutions",
        title: t("nav.sugar"),
        description: t("home.product3Desc"),
      },
    ],
  },
  {
    label: t("nav.features"),
    href: "/features",
  },
  {
    label: t("nav.industries"),
    children: [
      {
        href: "/dairy-solutions#village-collection",
        title: t("dairy.industry1Title"),
        description: t("dairy.industry1Desc"),
      },
      {
        href: "/dairy-solutions#cooperative",
        title: t("dairy.industry2Title"),
        description: t("dairy.industry2Desc"),
      },
      {
        href: "/dairy-solutions#private",
        title: t("dairy.industry3Title"),
        description: t("dairy.industry3Desc"),
      },
      {
        href: "/dairy-solutions#unions",
        title: t("dairy.industry4Title"),
        description: t("dairy.industry4Desc"),
      },
      {
        href: "/dairy-solutions#sangh",
        title: t("dairy.industry5Title"),
        description: t("dairy.industry5Desc"),
      },
      {
        href: "/dairy-solutions#manufacturers",
        title: t("dairy.industry6Title"),
        description: t("dairy.industry6Desc"),
      },
    ],
  },
  {
    label: t("nav.contact"),
    href: "/contact",
  },
]

type NavItem = {
  label: string
  href?: string
  children?: {
    href: string
    title: string
    description: string
  }[]
}

function DropdownItem({ item }: { item: NavItem & { children: NonNullable<NavItem["children"]> } }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="font-sans inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-gray-800 dark:text-zinc-200 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-gray-900 dark:text-zinc-100"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-[340px] rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 shadow-xl dark:shadow-none animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid gap-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-md p-3 text-gray-800 dark:text-zinc-200 no-underline transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setOpen(false)}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-zinc-100">
                  {child.title}
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
                  {child.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile accordion for dropdowns
function MobileDropdown({ item }: { item: NavItem & { children: NonNullable<NavItem["children"]> } }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:text-zinc-100"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-zinc-800 pl-3 pb-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:text-zinc-100"
              onClick={() => setOpen(false)}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  const currentNavItems = navItems(t)

  return (
    <header className="bg-white dark:bg-zinc-950 shadow-sm dark:shadow-none border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-sans font-bold" style={{ color: "var(--primary)" }}>
              Winsoft
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {currentNavItems.map((item) =>
              item.children ? (
                <DropdownItem key={item.label} item={item as NavItem & { children: NonNullable<NavItem["children"]> }} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="font-sans px-4 py-2 text-sm font-medium text-gray-800 dark:text-zinc-200 dark:text-gray-200 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-zinc-900 dark:hover:bg-gray-800 hover:text-gray-900 dark:text-zinc-100 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA and Settings */}
          <div className="hidden lg:flex items-center gap-4">
            <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
              <SelectTrigger className="w-[120px] h-9">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" || theme === "system" && window.matchMedia('(prefers-color-scheme: dark)').matches ? "light" : "dark")}
              className="w-9 h-9"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href="/schedule-demo">
              <Button className="font-sans font-semibold" style={{ backgroundColor: "var(--accent)", color: "white" }}>
                {t("header.scheduleDemo") !== "header.scheduleDemo" ? t("header.scheduleDemo") : "Request Demo"}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {currentNavItems.map((item) =>
                item.children ? (
                  <MobileDropdown key={item.label} item={item as NavItem & { children: NonNullable<NavItem["children"]> }} />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:text-zinc-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="px-3 py-2">
                <Link href="/schedule-demo">
                  <Button
                    className="w-full font-sans font-semibold"
                    style={{ backgroundColor: "var(--accent)", color: "white" }}
                  >
                    {t("header.scheduleDemo") !== "header.scheduleDemo" ? t("header.scheduleDemo") : "Request Demo"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
