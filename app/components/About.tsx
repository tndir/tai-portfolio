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
          Hi, I&apos;m Tai - a filmmaker and creative for brands that want to
          connect.
        </h2>

        {/* Right-aligned summary + button */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <div className="hidden md:block" />

          <div className="flex flex-col gap-4">
            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-100 text-black text-sm md:text-md font-bold leading-relaxed md:max-w-xs md:ml-auto">
              Melbourne-based creative working across film, photography, and
              creative direction. Creating thoughtful stories and visuals that
              feel natural, intentional, and true to the brand.
            </p>

            {/* Let's Talk pill button */}
            <div className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 w-fit md:ml-auto mt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="shadow-lg bg-white text-black border border-black/20 px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors duration-75"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>

        {/* Photo — right aligned on desktop, full width on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div /> {/* empty left column on desktop */}
          <div className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 overflow-hidden rounded-2xl aspect-square w-full md:max-w-xs md:ml-auto shadow-2xl">
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