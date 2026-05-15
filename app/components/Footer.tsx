export default function Footer() {
  return (
    <footer className="bg-white flex flex-col items-center text-center overflow-hidden px-8 pb-16">

      {/* Location + Social Links */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.25em] text-black/40">
          Melbourne, Australia
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-[0.25em]">
          
         <a   href="https://instagram.com/"
            target="_blank"
            className="hover:opacity-50 transition-opacity"
          >
            Instagram
          </a>
          
         <a   href="https://linkedin.com/"
            target="_blank"
            className="hover:opacity-50 transition-opacity"
          >
            LinkedIn
          </a>
          
        <a    href="mailto:tndir.au@gmail.com"
            className="hover:opacity-50 transition-opacity"
          >
            Email
          </a>
        </div>
      </div>

      {/* Rotating Words */}
      <div className="mt-32 h-[100px] overflow-hidden">
        <div className="animate-[spinWords_6s_infinite]">
          <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Visualise
          </div>
          <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Create
          </div>
          <div className="h-[100px] flex items-center justify-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Connect
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs uppercase tracking-[0.25em] text-black/30 mt-20">
        © 2026 Tai Nguyen
      </p>

    </footer>
  )
}