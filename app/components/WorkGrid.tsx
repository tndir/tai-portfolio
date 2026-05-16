"use client"

import { useEffect, useRef } from "react"
import { allProjects } from "../data/projects"

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
          {featuredProjects.map((project, index) => (
            <a
              href={project.href}
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className="reveal group block cursor-pointer opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.client}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category pill */}
                <div className="absolute left-4 top-4 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="rounded-full bg-black/90 px-4 py-3 text-xs text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Bottom overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="relative z-10 flex items-end justify-between">
                    <span className="text-lg font-semibold tracking-tight text-white">
                      {project.client}
                    </span>
                  </div>
                </div>

                {/* Hover text */}
                <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white">
                    ↗ View Project
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      {/* View all projects */}
        <div className="mt-24 text-center">
          
          <a  href="/work"
            className="text-lg font-black uppercase tracking-widest text-black/90 hover:text-black transition-colors duration-300"
          >
            View other projects ↗
          </a>
        </div>

      </div>
    </section>
  )
}