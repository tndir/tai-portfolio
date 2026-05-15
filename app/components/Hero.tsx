"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    function handleScroll() {
      setShowScroll(window.scrollY < 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white px-8 text-center">

      {/* Hero Content */}
      <div className="flex flex-col items-center">

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter text-black leading-none whitespace-nowrap">
          Tai Nguyen
        </h1>

        {/* Tagline */}
        <p className="mt-6 w-full max-w-fit text-center text-xs md:text-sm uppercase tracking-[0.3em] text-black/50">
          Melbourne-based creative working across video, photo and content production.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-500 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#F94D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="2" x2="8" y2="14"/>
      <polyline points="4,10 8,14 12,10"/>
    </svg>
  </div>
</div>
      </div>

    </section>
  )
}