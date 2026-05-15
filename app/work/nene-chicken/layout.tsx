import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nene Chicken - HotCrunch Launch | Tai Nguyen",
  description: "Video production and photography for Nene Chicken's HotCrunch Launch in Melbourne. Produced, shot and edited by Tai Nguyen.",
  openGraph: {
    title: "Nene Chicken - HotCrunch Launch | Tai Nguyen",
    description: "Video production and photography for Nene Chicken's HotCrunch Launch in Melbourne.",
    images: [
      {
        url: "/Images/abstract-painting-texture-with-orange-green-and-2026-03-25-23-56-46-utc.webp",
        width: 1200,
        height: 630,
        alt: "Nene Chicken HotCrunch Launch",
      },
    ],
  },
}

export default function NeneChickenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}