"use client"

import { useEffect, useRef, useState } from "react"

const name = "Tai Nguyen"
const letters = name.split("")

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)
  const [isPressed, setIsPressed] = useState(false)
  const [mouseX, setMouseX] = useState<number | null>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    function handleScroll() {
      setShowScroll(window.scrollY < 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleClick() {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    const workSection = document.querySelector("#work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  function handleMouseMove(e: React.MouseEvent) {
    setMouseX(e.clientX)
  }

  function handleMouseLeave() {
    setMouseX(null)
  }

  function getScaleFromMouse(index: number): number {
    if (!mouseX || !nameRef.current) return 1
    const spans = nameRef.current.querySelectorAll("span")
    const span = spans[index]
    if (!span) return 1
    const rect = span.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const distance = Math.abs(mouseX - center)
    const maxDistance = 80
    if (distance > maxDistance) return 1
    return 1 + 0.6 * (1 - distance / maxDistance)
  }

  function getYFromMouse(index: number): number {
    if (!mouseX || !nameRef.current) return 0
    const spans = nameRef.current.querySelectorAll("span")
    const span = spans[index]
    if (!span) return 0
    const rect = span.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const distance = Math.abs(mouseX - center)
    const maxDistance = 80
    if (distance > maxDistance) return 0
    return -(18 * (1 - distance / maxDistance))
  }

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8 text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Name */}
        <h1
          ref={nameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter text-white leading-none whitespace-nowrap"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                transform: `translateY(${getYFromMouse(index)}px) scale(${getScaleFromMouse(index)})`,
                transition: "transform 0.12s ease-out",
                cursor: "default",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="mt-6 w-full max-w-fit text-center text-xs md:text-sm uppercase tracking-[0.3em] font-extrabold text-white/70">
          Melbourne-based creative working across video, photo and content
          production.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-500 z-40 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={handleClick}
          className={`flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg transition-all duration-150 ${
            isPressed ? "scale-90 shadow-lg" : "scale-100 hover:scale-110"
          }`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-150 ${
              isPressed ? "shadow-none" : "shadow-md"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#F94D00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="2" x2="8" y2="14" />
              <polyline points="4,10 8,14 12,10" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}
