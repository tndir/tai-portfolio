import Navbar from "../../components/Navbar"

export default function PappaRich() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">

        <div className="px-8 pt-40 pb-16 max-w-7xl mx-auto">
          <a href="/#work" className="text-xs uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-12 inline-block">
            &larr; Back
          </a>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-16 max-w-4xl">
            PappaRich — Brand Campaign
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 border-t border-black/10 pt-12">
            <div className="flex flex-col gap-6">
              <div className="flex gap-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Client</p>
                  <p className="text-sm font-medium">PappaRich</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Year</p>
                  <p className="text-sm font-medium">2026</p>
                </div>
              </div>
              <p className="text-black/60 text-sm leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 mb-4">Scope of Work</p>
              <div className="flex flex-col gap-2">
                {["Photography", "Videography", "Editing"].map((item) => (
                  <span key={item} className="text-sm font-medium border-b border-black/10 pb-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 max-w-7xl mx-auto flex flex-col gap-4 pb-32">
          <div className="w-full overflow-hidden rounded-2xl aspect-[16/9]">
            <img src="/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg" alt="PappaRich" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img src="/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg" alt="PappaRich" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img src="/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg" alt="PappaRich" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 px-8 py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-black/40 mb-6">Like what you see?</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">Let's Connect</h2>
          <a href="/#contact" className="border border-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Get In Touch
          </a>
        </div>

      </main>
    </>
  )
}