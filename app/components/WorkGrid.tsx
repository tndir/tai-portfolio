"use client"

import { useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    client: "Nene Chicken",
    category: "Video + Photo",
    image: "/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg",
    link: "/work/nene-chicken",
  },
  {
    id: 2,
    client: "PappaRich",
    category: "Video + Photo",
    image: "/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg",
    link: "/work/papparich",
  },
  {
    id: 3,
    client: "AptoNow",
    category: "Video",
    image: "/Images/pexels-lisa-fotios-7918258.jpg",
    link: "/work/aptonow",
  },
  {
    id: 4,
    client: "SecondZ",
    category: "Video",
    image: "/Images/pramod-tiwari-f8gKP82Quh4-unsplash.jpg",
    link: "/work/secondz",
  },
]

export default function WorkGrid() {
  const ref = useRef<HTMLDivElement>(null)

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
          {projects.map((project, index) => (
            <a
              href={project.link}
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
      </div>
    </section>
  )
}