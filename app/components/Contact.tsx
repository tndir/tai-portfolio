"use client"

import { useState, useEffect, useRef } from "react"

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
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
          GOT A PROJECT
          <br />
          IN MIND?
        </h2>

        {/* Contact Button — opens modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="border border-black px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300"
        >
          Get In Touch
        </button>

        {/* Footer Info */}
        <div className="mt-32 flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Melbourne, Australia
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-[0.25em]">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="hover:opacity-50 transition-opacity"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:opacity-50 transition-opacity"
            >
              LinkedIn
            </a>

            <a
              href="mailto:tndir.au@gmail.com"
              className="hover:opacity-50 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>

        {/* Rotating Words */}
        <div className="mt-32 h-[100px] overflow-hidden">
          <div className="animate-[spinWords_6s_infinite]">
            <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Visualise
            </div>
            <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Create
            </div>
            <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Connect
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-[0.25em] text-black/30 mt-20">
          © 2026 Tai Nguyen
        </p>
      </section>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          
          {/* Modal Box */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 w-full max-w-md rounded-2xl p-8 relative shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => { setIsOpen(false); setSubmitted(false) }}
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors text-xl"
            >
              ✕
            </button>

            {submitted ? (
              /* Success State */
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
              /* Form */
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