"use client"

import { useEffect, useRef } from "react"

const services = [
  {
    number: "01",
    title: "Videography",
    description:
      "From concept to delivery, producing purposeful video content for brands.",
    tags: ["Cinematography", "Directing", "Editing"],
    bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    text: "text-white",
    tagStyle: "border-white/20 text-white/80",
  },
  {
    number: "02",
    title: "Photography",
    description:
      "Product, lifestyle, and editorial imagery designed to capture attention and elevate brands.",
    tags: ["Photography", "Retouching"],
    bg: "bg-gradient-to-br from-pink-500 via-red-500 to-orange-400",
    text: "text-white",
    tagStyle: "border-white/20 text-white/80",
  },
  {
    number: "03",
    title: "Content Production",
    description:
      "End-to-end social content production from strategy and shooting through to editing.",
    tags: ["Shot Planning", "Creative Direction"],
    bg: "bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-300",
    text: "text-white",
    tagStyle: "border-white/20 text-white/80",
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

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
      { threshold: 0.15 }
    )

    const children = ref.current?.querySelectorAll(".reveal")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="px-8 py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out text-xs tracking-widest uppercase text-black/40 mb-6 text-center">
          Services
        </p>

        {/* Heading */}
        <h2 className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-100 text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center mx-auto">
          Services that shape your brand.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
              className={`reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out ${service.bg} ${service.text} rounded-2xl p-8 flex flex-col justify-between aspect-square`}
            >

              {/* Top — Number + Tags */}
              <div className="flex flex-col gap-6">
                <span className="text-xs tracking-widest opacity-40">
                  {service.number}
                </span>

                {/* Tags — auto scrolling, full bleed */}
                  <div className="overflow-hidden -mx-8">
                    <div className="flex gap-2 animate-[scrollX_8s_linear_infinite] px-8">
                      {[...service.tags, ...service.tags].map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs uppercase tracking-widest rounded-full px-3 py-1 whitespace-nowrap bg-white/20 backdrop-blur-sm text-white border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
              </div>

              {/* Bottom — Title + Description */}
              <div className="flex flex-col gap-3 mt-8">
                <h3 className="text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}