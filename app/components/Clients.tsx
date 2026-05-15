"use client"
import { useEffect, useRef } from "react"

export default function Clients() {
  const clients = [
    "Nene Chicken", "PappaRich", "TYGA", "Byron Bay Cookies",
    "CPA Australia", "Crusader Caravans", "Barry Plant", "Facey Property",
    "Kurimu", "TamJai Mixian", "WAYGOOD",
    // duplicate for seamless loop
    "Nene Chicken", "PappaRich", "TYGA", "Byron Bay Cookies",
    "CPA Australia", "Crusader Caravans", "Barry Plant", "Facey Property",
    "Kurimu", "TamJai Mixian", "WAYGOOD",
  ]
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
    <section className="bg-white overflow-hidden" ref={ref}>

      {/* Label */}
      <p className="reveal opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out text-xs tracking-widest uppercase text-black/40 mb-10 text-center pt-12">
        Trusted By
      </p>

      {/* Scrolling strip */}
      <div className="relative flex">
        <div className="flex animate-[scrollX_20s_linear_infinite] gap-16 whitespace-nowrap">
          {clients.map((client, index) => (
            <span
              key={index}
              className="text-sm font-semibold uppercase tracking-widest text-black/30 hover:text-black transition-colors duration-300 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}