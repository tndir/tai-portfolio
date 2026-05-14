"use client"

import { useEffect, useRef, useState } from "react"
import ContactModal from "./ContactModal"

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

        {/* Top — Large heading */}
        <h2 className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-24">
          Melbourne-based creative capturing brands with purpose and intention.
        </h2>

        {/* Bottom — Image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left — Image */}
          <div className="overflow-hidden aspect-[2/3] rounded-2xl shadow-lg max-w-xs">
            <img
              src="/Images/about me-photo.jpeg"
              alt="Tai Nguyen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col gap-8 pt-4">

            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 text-black/80 text-base leading-relaxed font-medium">
              I picked up a camera years ago — and never looked back.
            </p>

            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-300 text-black/60 text-sm leading-relaxed">
              What started as a passion for capturing moments grew into a full creative practice. I work across video production, photography, and content creation — always chasing the best way to tell each story.
            </p>

            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-400 text-black/60 text-sm leading-relaxed">
              I work with brands and businesses to create visuals that don't just look good — they connect with audiences and drive results. Every project is approached with intention, from concept through to delivery.
            </p>

            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-500 text-black/80 text-sm leading-relaxed font-medium">
              Details matter because they carry intention.
            </p>

            <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-500 text-black/60 text-sm leading-relaxed">
              Every frame, every edit, every beat has to serve the story. If it doesn't, it doesn't stay.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-500 text-xs tracking-widest uppercase border-b border-black pb-1 w-fit hover:opacity-50 transition-opacity mt-4"
            >
              Let's Talk
            </button>

          </div>
        </div>

      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}