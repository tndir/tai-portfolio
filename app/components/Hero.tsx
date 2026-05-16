"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowScroll(window.scrollY < 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleClick() {
    // Tactile press effect
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)

    // Scroll to work section
    const workSection = document.querySelector("#work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white px-8 text-center">

      {/* Hero Content */}
      <div className="flex flex-col items-center">

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter text-black leading-none whitespace-nowrap">
          {"Tai Nguyen".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:scale-125 cursor-default"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
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
        <button
          onClick={handleClick}
          className={`flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg transition-all duration-150 ${
            isPressed ? "scale-90 shadow-lg" : "scale-100 hover:scale-115"
          }`}
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-150 ${
            isPressed ? "shadow-none" : "shadow-md"
          }`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#F94D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="2" x2="8" y2="14"/>
              <polyline points="4,10 8,14 12,10"/>
            </svg>
          </div>
        </button>
      </div>

    </section>
  )
}