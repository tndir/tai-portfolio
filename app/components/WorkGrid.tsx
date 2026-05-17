"use client"

import { useEffect, useRef } from "react"
import { allProjects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function WorkGrid() {
  const ref = useRef<HTMLDivElement>(null)

  // Show featured projects if manually set, otherwise show last 4
  const featuredProjects = allProjects.some((p) => p.featured)
    ? allProjects.filter((p) => p.featured).reverse()
    : allProjects.slice(-4).reverse()

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
      { threshold: 0.1 }
    )

    const children = ref.current?.querySelectorAll(".reveal")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="bg-white px-8 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <h2 className="reveal mb-12 text-xs uppercase tracking-widest text-black/40 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out">
          Selected Work
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {/* View all projects */}
        <div className="mt-24 text-center">
          <a
            href="/work"
            className="text-lg font-black uppercase tracking-widest text-black/90 hover:text-black transition-colors duration-300"
          >
            View other projects ↗
          </a>
        </div>
      </div>
    </section>
  )
}