"use client"

import { useState, useEffect, useRef } from "react"
import Footer from "./Footer"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch("https://formspree.io/f/xqenowql", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    setSubmitted(true)
  }

  const ref = useRef<HTMLDivElement>(null)

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

        {/* Contact Button — pill shaped frosted glass */}
        <button
          onClick={() => setIsOpen(true)}
          className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-200 bg-black/10 backdrop-blur-md border border-black/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300"
        >
          Get In Touch
        </button>

        {/* Melbourne */}
        <p className="text-xs uppercase tracking-[0.25em] text-black/40 mt-12">
          Melbourne, Australia
        </p>

      </section>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 w-full max-w-md rounded-2xl p-8 relative shadow-2xl">

            <button
              onClick={() => { setIsOpen(false); setSubmitted(false) }}
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors text-xl"
            >
              ✕
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <p className="text-2xl font-bold tracking-tight">Message Sent!</p>
                <p className="text-sm text-black/50 text-center">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setIsOpen(false); setSubmitted(false) }}
                  className="mt-4 border border-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold tracking-tight mb-1">
                  Let's Talk
                </h3>
                <p className="text-sm text-black/40 mb-8">
                  Fill out the form below and I'll be in touch.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-4 text-xs uppercase tracking-widest hover:bg-black/80 transition-colors rounded-lg mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}