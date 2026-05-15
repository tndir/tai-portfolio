import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WorkGrid from "./components/WorkGrid"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Clients from "./components/Clients"

export const metadata: Metadata = {
  title: "Tai Nguyen | Video Production & Photography Melbourne",
  description: "Melbourne-based creative executing visuals that connect and convert. Specialising in video production, photography and content creation for brands.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <WorkGrid />
      <About />
      <Clients />
      <Services />
      <Contact />
    </main>
  )
}