"use client"

import { useState, useEffect } from "react"

type Props = {
  id?: number
  client: string
  category: string
  image: string
  href: string
  gradient?: string
}

export default function ProjectCard({
  client,
  category,
  image,
  href,
  gradient,
}: Props) {
  const [gradientColor, setGradientColor] = useState("0,0,0")

  useEffect(() => {
    if (gradient) {
      // Use manually set colour if provided
      setGradientColor(gradient)
    } else {
      // Generate a random vibrant colour
      const hue = Math.floor(Math.random() * 360)
      const saturation = 60 + Math.floor(Math.random() * 40) // 60-100%
      const lightness = 20 + Math.floor(Math.random() * 20) // 20-40%

      // Convert HSL to RGB
      const h = hue / 360
      const s = saturation / 100
      const l = lightness / 100
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      const hue2rgb = (t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      const r = Math.round(hue2rgb(h + 1 / 3) * 255)
      const g = Math.round(hue2rgb(h) * 255)
      const b = Math.round(hue2rgb(h - 1 / 3) * 255)
      setGradientColor(`${r},${g},${b}`)
    }
  }, [gradient])

  return (
    <a href={href} className="group block cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={client}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category pill */}
        <div className="absolute left-4 top-4 transition-opacity duration-300 group-hover:opacity-0">
          <span className="rounded-full bg-black/90 px-4 py-3 text-xs text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Gradient */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background: `linear-gradient(to top, rgba(${gradientColor},0.9) 0%, rgba(${gradientColor},0.3) 15%, transparent 25%)`,
          }}
        >
          <span className="relative z-10 text-lg font-semibold tracking-tight text-white">
            {client}
          </span>
        </div>

        {/* Hover text */}
        <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-white">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2" y1="10" x2="10" y2="2" />
              <polyline points="4,2 10,2 10,8" />
            </svg>
            View Project
          </span>
        </div>
      </div>
    </a>
  )
}
