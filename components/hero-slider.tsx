"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const { t } = useLanguage()

  const slides = [
    {
      id: 1,
      mainHeading: t("home.heroSlide1Title"),
      subHeading: t("home.heroSlide1Desc"),
      priceText: t("home.heroSlide1Price"),
      image: "/modern-dairy-farm.png",
      bgColor: "from-blue-100 to-white",
      discount: t("home.heroSlide1Discount"),
      bank: "BOBCARD & HSBC"
    },
    {
      id: 2,
      mainHeading: t("home.heroSlide2Title"),
      subHeading: t("home.heroSlide2Desc"),
      priceText: t("home.heroSlide2Price"),
      image: "/modern-office-dashboard.png",
      bgColor: "from-amber-100 to-white",
      discount: t("home.heroSlide2Discount"),
      bank: "HDFC & SBI"
    },
    {
      id: 3,
      mainHeading: t("home.heroSlide3Title"),
      subHeading: t("home.heroSlide3Desc"),
      priceText: t("home.heroSlide3Price"),
      image: "/indian-software-office-collaboration.png",
      bgColor: "from-red-100 to-white",
      discount: t("home.heroSlide3Discount"),
      bank: "ICICI & AXIS"
    }
  ]


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden group" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className={`flex-[0_0_100%] min-w-0 relative h-[400px] bg-gradient-to-r ${slide.bgColor} flex items-center`}
          >
            <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
               {/* Left Content */}
               <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100">{slide.mainHeading}</h2>
                <h3 className="text-2xl font-medium text-gray-700 dark:text-zinc-300">{slide.subHeading}</h3>
                <div className="text-3xl font-bold text-blue-600">
                  {slide.priceText}
                </div>
                
                <div className="bg-white dark:bg-zinc-950/80 p-3 rounded-lg border border-gray-200 dark:border-zinc-800 inline-block">
                  <p className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase">
                    {t("home.bankOffer")}
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-zinc-100">{slide.discount}</p>
                  <p className="text-[10px] text-gray-500 dark:text-zinc-400">
                    {t("home.tnc").replace("{bank}", slide.bank)}
                  </p>
                </div>

                <div className="pt-2">
                  <Button className="bg-[#FFA41C] hover:bg-[#FA8900] text-black font-bold px-8 py-6 text-lg rounded-md shadow-md dark:shadow-none">
                    {t("home.shopNow")}
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[300px] hidden md:block">
                <Image 
                  src={slide.image} 
                  alt={slide.mainHeading} 
                  fill 
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950/50 hover:bg-white dark:bg-zinc-950 p-2 rounded-full shadow-lg dark:shadow-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft className="w-8 h-8 text-gray-800 dark:text-zinc-200" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950/50 hover:bg-white dark:bg-zinc-950 p-2 rounded-full shadow-lg dark:shadow-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight className="w-8 h-8 text-gray-800 dark:text-zinc-200" />
      </button>
    </div>
  )
}
