import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import GridOverlay from "./components/GridOverlay"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tai Nguyen | Video Production & Photography Melbourne",
  description:
    "Melbourne-based creative executing visuals that connect and convert. Specialising in video production, photography and content creation for brands.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "video production melbourne",
    "photographer melbourne",
    "brand videographer",
    "content creation melbourne",
    "Tai Nguyen",
  ],
  authors: [{ name: "Tai Nguyen" }],
  creator: "Tai Nguyen",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://tai-portfolio-silk.vercel.app",
    siteName: "Tai Nguyen",
    title: "Tai Nguyen | Video Production & Photography Melbourne",
    description:
      "Melbourne-based creative executing visuals that connect and convert. Specialising in video production, photography and content creation for brands.",
    images: [
      {
        url: "/Images/about me-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tai Nguyen - Melbourne Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Nguyen | Video Production & Photography Melbourne",
    description:
      "Melbourne-based creative executing visuals that connect and convert.",
    images: ["/Images/about me-photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Grid Overlay */}
      <body className="min-h-full flex flex-col">
        {/* {process.env.NODE_ENV === "development" && <GridOverlay />} */}

        {children}

        {/* Bottom fade */}
        <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-30 backdrop-blur-sm [mask-image:linear-gradient(to_top,black_30%,transparent)]" />
      </body>
    </html>
  )
}
