import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { allProjects } from "@/data/projects"

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-8 pb-16 pt-40">
          <p className="mb-4 text-xs uppercase tracking-widest text-black/40">
            Selected Work
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-none tracking-tighter md:text-7xl">
            My most recent work
          </h1>

          <p className="text-sm text-black/50">
            Visuals that connect and convert - projects from recent
            years captured across Melbourne and beyond.
          </p>
        </div>

        <div className="border-t border-black/10" />

        {/* Projects Grid */}
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {allProjects.reverse().map((project) => (
              <a
                key={project.id}
                href={project.href}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.client}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category pill */}
                  <div className="absolute left-4 top-4 transition-opacity duration-300 group-hover:opacity-0">
                    <span className="rounded-full bg-black/80 px-4 py-2 text-xs text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <span className="relative z-10 text-lg font-semibold tracking-tight text-white">
                      {project.client}
                    </span>
                  </div>

                  {/* Hover text */}
                  <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-widest text-white">
                      ↗ View Project
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-7xl border-t border-black/10 px-8 py-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-black/40">
            Like what you see?
          </p>

          <h2 className="mb-10 text-4xl font-bold tracking-tighter md:text-6xl">
            Let's connect
          </h2>

          <a
            href="/#contact"
            className="border border-black px-8 py-4 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-black hover:text-white"
          >
            Get In Touch
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}