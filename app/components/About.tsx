"use client"

import { useEffect, useRef, useState } from "react"
import ContactModal from "./ContactModal"
import { Mail } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "blur-none")
            entry.target.classList.remove("opacity-0", "translate-y-8", "blur-sm")
          }
        })
      },
      { threshold: 0.15 }
    )

    const children = ref.current?.querySelectorAll(".reveal")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="px-8 py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Full width massive headline */}
        <h2 className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
          Hi, I'm Tai — a filmmaker and creative for brands that want to connect.
        </h2>

        {/* Right-aligned summary + button + arrow */}
        <div className="grid grid-cols-2 mb-16">
          <div /> {/* empty left */}
          <div className="flex flex-col gap-4 pl-8">
            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-100 text-black text-xl font-bold leading-relaxed max-w-xs ml-auto">
              Melbourne-based creative working across film, photography, and creative direction. Creating thoughtful stories and visuals that feel natural, intentional, and true to the brand.
            </p>

            {/* Let's Talk pill button */}
            <button
              onClick={() => setModalOpen(true)}
              className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-black/80 mt-2 w-fit ml-auto"
            >
              Let's Talk
            </button>

            {/* Arrow */}
            <div className="mt-2 ml-auto">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#F94D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"/>
                <polyline points="6,16 12,22 18,16"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Two images — Kyson style layout */}
          <div className="grid grid-cols-[8fr_4fr] gap-4 items-end">

            {/* Left — wider, YouTube video embed */}
            <div className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 overflow-hidden rounded-2xl aspect-[1/1]">
              <iframe
                src="https://www.youtube.com/embed/SfG6Kx5MS2Y"
                title="Tai Nguyen Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Right — narrower portrait photo */}
            <div className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-300 overflow-hidden rounded-2xl aspect-[9/16]">
              <img
                src="/Images/about me-photo.jpeg"
                alt="Tai Nguyen"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}