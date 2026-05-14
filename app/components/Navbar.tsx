"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 80
      setIsScrolled(scrolled)

      if (!scrolled) {
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault()

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }

    setIsExpanded(false)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[90vw] -translate-x-1/2 md:w-auto flex flex-col items-center">
      {/* Main Pill */}
      <div
        onMouseEnter={() => isScrolled && setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`flex items-center rounded-full border border-black/10 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-500 ${
          isScrolled && !isExpanded
            ? "scale-90 px-5 py-3"
            : "scale-100 px-6 py-4"
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
            setIsExpanded(false)
            setMobileMenuOpen(false)
          }}
          className="flex items-center gap-3"
        >
          <div
            className={`rounded-full bg-black transition-all duration-500 ${
              isScrolled && !isExpanded ? "h-7 w-7" : "h-8 w-8"
            }`}
          />

          <span
            className={`whitespace-nowrap font-semibold uppercase tracking-tight text-black transition-all duration-500 ${
              isScrolled && !isExpanded ? "text-sm" : "text-sm md:text-lg"
            }`}
          >
            TAI NGUYEN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden items-center overflow-hidden transition-all duration-500 md:flex ${
            isScrolled && !isExpanded
              ? "ml-0 max-w-0 opacity-0"
              : "ml-12 max-w-[500px] opacity-100"
          }`}
        >
          <div className="flex items-center gap-10 whitespace-nowrap">
            {[
              { label: "Work", href: "#work" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Animated Typing Dots */}
        <div
          className={`hidden overflow-hidden transition-all duration-500 md:block ${
            isScrolled && !isExpanded
              ? "ml-5 max-w-[44px] opacity-100"
              : "ml-0 max-w-0 opacity-0"
          }`}
        >
          <div className="flex h-5 items-center gap-1">
            <span className="h-1.5 w-1.5 animate-[typingDot_1.2s_infinite] rounded-full bg-black/40" />
            <span className="h-1.5 w-1.5 animate-[typingDot_1.2s_0.2s_infinite] rounded-full bg-black/40" />
            <span className="h-1.5 w-1.5 animate-[typingDot_1.2s_0.4s_infinite] rounded-full bg-black/40" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-6 flex flex-col gap-1.5 p-1 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`mt-2 overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-lg backdrop-blur-xl transition-all duration-300 md:hidden w-48 ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 text-center">
          {[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}