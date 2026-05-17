"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { allProjects } from "@/data/projects"
import ProjectCard from "../components/ProjectCard"

export default function WorkPage() {
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

  const sortedProjects = [...allProjects].sort((a, b) => b.id - a.id)

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-8 pb-16 pt-40 text-center">
          <h1 className="mb-4 text-5xl text-black font-bold leading-none tracking-tighter md:text-7xl">
            My most
            <br /> recent work
          </h1>
          <p className="text-sm text-black/50 max-w-md mx-auto">
            Thoughtful visuals that feel natural, intentional, and true to the
            people behind the brand.
          </p>
        </div>

        <div className="border-t border-black/10" />

        {/* Projects Grid */}
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-7xl border-t border-black/10 px-8 py-24 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-black/40">
            Let's Work Together
          </p>
          <h2 className="mb-10 text-5xl font-bold tracking-tighter md:text-7xl leading-none">
            Got a project
            <br />
            in mind?
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black/10 backdrop-blur-md border border-black/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
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
                    Thanks for reaching out. I'll get back to you soon.
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
                    Let's Talk
                  </h3>
                  <p className="mb-8 text-sm text-black/40">
                    Fill out the form below and I'll be in touch.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      className="resize-none rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
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
        </div>
      )}
    </>
  )
}
