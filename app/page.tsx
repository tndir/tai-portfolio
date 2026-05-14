import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WorkGrid from "./components/WorkGrid"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Clients from "./components/Clients"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <WorkGrid />
      <About />
      <Services />
      <Clients />
      <Contact />
    </main>
  )
}