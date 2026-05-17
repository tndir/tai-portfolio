"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  id: number
  client: string
  category: string
  image: string
  href: string
}

export default function ProjectCard({
  client,
  category,
  image,
  href,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [gradientColor, setGradientColor] = useState("0,0,0")

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const extractColor = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const colorThiefModule = (await import("colorthief")) as any
        const colorThief = new colorThiefModule.default()

        if (img.complete) {
          const color = colorThief.getColor(img)
          setGradientColor(`${color[0]},${color[1]},${color[2]}`)
        } else {
          img.addEventListener("load", () => {
            const color = colorThief.getColor(img)
            setGradientColor(`${color[0]},${color[1]},${color[2]}`)
          })
        }
      } catch (err) {
        setGradientColor("0,0,0")
      }
    }

    extractColor()
  }, [])

  return (
    <a href={href} className="group block cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          ref={imgRef}
          src={image}
          alt={client}
          crossOrigin="anonymous"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category pill */}
        <div className="absolute left-4 top-4 transition-opacity duration-300 group-hover:opacity-0">
          <span className="rounded-full bg-black/90 px-4 py-3 text-xs text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Dynamic colour gradient */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background: `linear-gradient(to top, rgba(${gradientColor},0.9) 0%, rgba(${gradientColor},0.3) 40%, transparent 100%)`,
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
