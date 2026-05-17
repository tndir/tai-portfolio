"use client"

import { Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { allProjects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

type Props = {
  title: string
  client: string
  year: string
  description: string
  scope: string[]
  images: string[]
}

export default function ProjectLayout({
  title,
  client,
  year,
  description,
  scope,
  images,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showMailBtn, setShowMailBtn] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)

  const moreProjects = [...allProjects]
    .sort((a, b) => b.id - a.id)
    .filter((p) => p.client !== client)
    .slice(0, 2)

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
          
          <a  href="/work"
            className="mb-12 inline-block text-xs uppercase tracking-widest text-black/40 transition-colors hover:text-black"
          >
            &larr; Back
          </a>

          <h1 className="mb-12 max-w-4xl text-5xl font-black leading-none tracking-tighter text-black md:text-8xl">
            {title}
          </h1>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-black/40">Client</span>
              <span className="text-sm font-medium text-black">{client}</span>
            </div>
            <div className="h-4 w-px bg-black/20" />
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-black/40">Year</span>
              <span className="text-sm font-medium text-black">{year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-black/70">
            {description}
          </p>

          {/* Scope */}
          <div className="flex flex-col gap-2">
            <span className="mb-2 text-xs uppercase tracking-widest text-black/40">
              Scope of Work
            </span>
            <div className="flex flex-wrap gap-2">
              {scope.map((item) => (
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
          {images[0] && (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img src={images[0]} alt={`${client} hero`} className="h-full w-full object-cover" />
            </div>
          )}
          {(images[1] || images[2]) && (
            <div className="grid grid-cols-2 gap-4">
              {images[1] && (
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={images[1]} alt={`${client} image 2`} loading="lazy" className="h-full w-full object-cover" />
                </div>
              )}
              {images[2] && (
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={images[2]} alt={`${client} image 3`} loading="lazy" className="h-full w-full object-cover" />
                </div>
              )}
            </div>
          )}
          {images[3] && (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img src={images[3]} alt={`${client} image 4`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          )}
        </div>

        {/* More Projects */}
        <div className="mx-auto max-w-7xl border-t border-black/10 px-8 py-24">
          <h2 className="mb-12 text-xs uppercase tracking-widest text-black/40">
            More Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {moreProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/work" className="text-sm uppercase tracking-widest text-black transition-colors hover:text-black/50">
              View all projects ↗
            </a>
          </div>

          {/* CTA */}
          <div
            id="contact"
            ref={ctaRef}
            className="mt-32 flex flex-col items-center gap-6 py-16 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Let&apos;s Work Together
            </p>
            <h2 className="text-5xl font-black leading-none tracking-tighter text-black md:text-7xl">
              Got a project
              <br />
              in mind?
            </h2>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-black/80"
            >
              <Mail size={18} strokeWidth={1.5} />
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating Mail Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 md:bottom-8 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
          showMailBtn ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80">
            <Mail size={18} strokeWidth={1.5} />
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-md rounded-2xl border border-white/80 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
              <button
                onClick={() => { setIsOpen(false); setSubmitted(false) }}
                className="absolute right-4 top-4 text-xl text-black/40 transition-colors hover:text-black"
              >
                ✕
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <p className="text-2xl font-bold tracking-tight text-black">Message Sent!</p>
                  <p className="text-center text-sm text-black/50">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setIsOpen(false); setSubmitted(false) }}
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
                    <input type="text" name="name" placeholder="Your Name" required className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black" />
                    <input type="email" name="email" placeholder="Your Email" required className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black" />
                    <input type="text" name="subject" placeholder="Subject" required className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black" />
                    <textarea name="message" placeholder="Tell me about your project..." required rows={4} className="resize-none rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black" />
                    <button type="submit" className="mt-2 rounded-lg bg-black py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-black/80">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}