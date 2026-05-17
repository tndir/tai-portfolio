"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { allProjects } from "@/data/projects"
import ProjectCard from "../components/ProjectCard"
import ContactModal from "../components/ContactModal"

export default function WorkPage() {
  const [isOpen, setIsOpen] = useState(false)

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
          <h2 className="mb-10 text-5xl text-black/90 font-bold tracking-tighter md:text-7xl leading-none">
            Got a project
            <br />
            in mind?
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="shadow-lg bg-white text-black border border-black/20 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-colors duration-75"
          >
            Get In Touch
          </button>
        </div>
      </main>

      <Footer />

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
