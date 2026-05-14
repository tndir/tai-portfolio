"use client"

import { Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Navbar from "../../components/Navbar"

export default function NeneChicken() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showMailBtn, setShowMailBtn] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)

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
useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 300

      // Check if CTA section is visible
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect()
        const ctaVisible = rect.top < window.innerHeight
        setShowMailBtn(scrolled && !ctaVisible)
      } else {
        setShowMailBtn(scrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-8 pb-16 pt-32">
          <a
            href="/#work"
            className="mb-12 inline-block text-xs uppercase tracking-widest text-black/40 transition-colors hover:text-black"
          >
            &larr; Back
          </a>

          <h1 className="mb-12 max-w-4xl text-5xl font-bold leading-none tracking-tighter text-black md:text-8xl">
            Nene Chicken — HotCrunch Launch
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-black/40">
                Client
              </span>
              <span className="text-sm font-medium text-black">
                Nene Chicken
              </span>
            </div>

            <div className="h-4 w-px bg-black/20" />

            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-black/40">
                Year
              </span>
              <span className="text-sm font-medium text-black">2026</span>
            </div>
          </div>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-black/70">
            For Nene Chicken&apos;s HotCrunch Launch I produced, shot, and
            edited several videos and a series of stills right from their
            restaurant.
          </p>

          <div className="flex flex-col gap-2">
            <span className="mb-2 text-xs uppercase tracking-widest text-black/40">
              Scope of Work
            </span>

            <div className="flex flex-wrap gap-2">
              {["Photography", "Videography", "Editing"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/20 px-4 py-1.5 text-xs text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        {/* Images */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-16">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img
              src="/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg"
              alt="Nene Chicken HotCrunch Launch"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg"
                alt="Nene Chicken"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg"
                alt="Nene Chicken"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img
              src="/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg"
              alt="Nene Chicken HotCrunch Launch"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* More Projects */}
        <div className="mx-auto max-w-7xl border-t border-black/10 px-8 py-24">
          <h2 className="mb-12 text-xs uppercase tracking-widest text-black/40">
            More Projects
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a href="/work/papparich" className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg"
                  alt="PappaRich"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <span className="relative z-10 text-lg font-semibold tracking-tight text-white">
                    PappaRich
                  </span>
                </div>

                <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-widest text-white">
                    ↗ View Project
                  </span>
                </div>
              </div>
            </a>

            <a href="/work/aptonow" className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/Images/pexels-lisa-fotios-7918258.jpg"
                  alt="AptoNow"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <span className="relative z-10 text-lg font-semibold tracking-tight text-white">
                    AptoNow
                  </span>
                </div>

                <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-widest text-white">
                    ↗ View Project
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#work"
              className="text-sm uppercase tracking-widest text-black transition-colors hover:text-black/50"
            >
              View all projects ↗
            </a>
          </div>

        {/* Bottom CTA */}
          <div ref={ctaRef} className="mt-32 flex flex-col items-center gap-6 rounded-2xl py-16 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-black/100">
          Let's Work Together
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black/100 leading-none">
          GOT A PROJECT
          <br />
          IN MIND?
        </h2>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-black/80"
            >
              <Mail size={18} strokeWidth={1.5} /> Let's Talk
            </button>
          </div>
        </div>
      </main>

      {/* Floating mail button */}
<button
  onClick={() => setIsOpen(true)}
  className={`fixed bottom-8 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
    showMailBtn
      ? "translate-y-0 opacity-100"
      : "translate-y-24 opacity-0"
  }`}
>
  {/* Outer frosted glass ring */}
  <div className="flex h-18 w-18 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg">
    {/* Inner black circle */}
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors">
      <Mail size={18} strokeWidth={1.5} />
    </div>
  </div>
</button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-white/80 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => {
                setIsOpen(false)
                setSubmitted(false)
              }}
              className="absolute right-4 top-4 text-xl text-black/40 transition-colors hover:text-black"
            >
              ✕
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12">
                <p className="text-2xl font-bold tracking-tight text-black">
                  Message Sent!
                </p>

                <p className="text-center text-sm text-black/50">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>

                <button
                  onClick={() => {
                    setIsOpen(false)
                    setSubmitted(false)
                  }}
                  className="mt-4 border border-black px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-xl font-bold tracking-tight text-black">
                  Let&apos;s Talk
                </h3>

                <p className="mb-8 text-sm text-black/40">
                  Fill out the form below and I&apos;ll be in touch.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="rounded-lg border border-black/10 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="resize-none rounded-lg border border-black/10 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                  />

                  <button
                    type="submit"
                    className="mt-2 rounded-lg bg-black py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-black/80"
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