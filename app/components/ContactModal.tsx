"use client"

import { useState } from "react"

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white/90 backdrop-blur-xl border border-white/80 w-full max-w-md rounded-2xl p-8 relative shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => { onClose(); setSubmitted(false) }}
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
              onClick={() => { onClose(); setSubmitted(false) }}
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
  )
}