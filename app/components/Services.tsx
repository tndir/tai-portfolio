"use client"

import { useEffect, useRef } from "react"

const services = [
  {
    number: "01",
    title: "Video Production",
    description:
      "From concept to delivery, I craft cinematic video content that tells your brand's story with intention — commercials, reels, brand films and everything in between.",
    tags: ["Brand Films", "Reels", "Commercials", "Drone", "Editing", "Colour Grading"],
    bg: "bg-black",
    text: "text-white",
    tagStyle: "border-white/20 text-white/60",
  },
  {
    number: "02",
    title: "Photography",
    description:
      "Still imagery that stops the scroll. Product, lifestyle, and editorial photography that captures your brand at its best.",
    tags: ["Product", "Lifestyle", "Editorial", "Events", "Portraits", "Campaign"],
    bg: "bg-neutral-100",
    text: "text-black",
    tagStyle: "border-black/20 text-black/50",
  },
  {
    number: "03",
    title: "Content Production",
    description:
      "End-to-end content creation built for social. Strategy, shooting, and editing — all tailored to perform across platforms.",
    tags: ["Social Media", "Short Form", "UGC", "Strategy", "Instagram", "TikTok"],
    bg: "bg-neutral-800",
    text: "text-white",
    tagStyle: "border-white/20 text-white/60",
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
              className={`reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out ${service.bg} ${service.text} rounded-2xl p-8 flex flex-col justify-between min-h-[420px]`}
            >

              {/* Top — Number + Tags */}
              <div className="flex flex-col gap-6">
                <span className="text-xs tracking-widest opacity-40">
                  {service.number}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs uppercase tracking-widest border rounded-full px-3 py-1 ${service.tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
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