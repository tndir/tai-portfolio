export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white px-8 text-center">
      
      {/* Hero Content */}
      <div className="flex flex-col items-center">
        
        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter text-black leading-none whitespace-nowrap">
          Tai Nguyen
        </h1>

        {/* Tagline */}
        <p className="mt-6 w-full max-w-fit text-center text-xs md:text-sm uppercase tracking-[0.3em] text-black/50">
          Melbourne-based creative working across video, photo and content production.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-black/30">
          Scroll
        </span>

        <div className="h-12 w-px bg-black/20"></div>
      </div>

    </section>
  )
}