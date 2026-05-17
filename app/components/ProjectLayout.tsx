"use client"

import { useEffect, useRef } from "react"
import { allProjects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function WorkGrid() {
  const ref = useRef<HTMLDivElement>(null)

  const featuredProjects = allProjects.some((p) => p.featured)
    ? allProjects.filter((p) => p.featured).reverse()
    : [...allProjects].slice(-4).reverse()

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
      { threshold: 0.1 }
    )

    const children = ref.current?.querySelectorAll(".reveal")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="bg-white px-8 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 className="reveal mb-12 text-xs uppercase tracking-widest text-black/40 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/work"
            className="text-sm uppercase tracking-widest text-black/40 hover:text-black transition-colors duration-300"
          >
            View all my projects ↗
          </a>
        </div>
      </div>
    </section>
  )
}