"use client"

import { useState, useEffect, useRef } from "react"
import Footer from "./Footer"
import ContactModal from "./ContactModal"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "blur-none"
            )
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8",
              "blur-sm"
            )
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
    <>
      <section
        id="contact"
        className="px-8 py-32 bg-white flex flex-col items-center text-center overflow-hidden"
        ref={ref}
      >
        {/* Small Label */}
        <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out text-xs tracking-[0.25em] uppercase text-black/40 mb-6">
          Let's Work Together
        </p>

        {/* Main CTA */}
        <h2 className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-100 text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
          Got a project
          <br />
          in mind?
        </h2>

        {/* Contact Button */}
        <div className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200">
          <button
            onClick={() => setIsOpen(true)}
            className="shadow-lg bg-white text-black border border-black/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-colors duration-75"
          >
            Get In Touch
          </button>
        </div>

        {/* Melbourne */}
        <p className="text-xs uppercase tracking-[0.25em] text-black/40 mt-12">
          Melbourne, Australia
        </p>
      </section>

      <Footer />

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
