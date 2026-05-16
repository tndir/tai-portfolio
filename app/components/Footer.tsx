import { FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center overflow-visible bg-white px-8 pb-16 text-center">
      
      {/* Social Links */}
      <div className="flex gap-6 py-2">
        <a
          href="https://instagram.com/tn.dir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:-translate-y-2 transition-transform duration-200 transition-opacity hover:opacity-50"
        >
          <FaInstagram size={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/tai-nguyen-943951209/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:-translate-y-2 transition-transform duration-200 transition-opacity hover:opacity-50"
        >
          <FaLinkedin size={40} />
        </a>
      </div>

      {/* Rotating Words */}
      <div className="mt-32 h-[100px] overflow-hidden">
        <div className="animate-[spinWords_6s_infinite]">
          <div className="flex h-[100px] items-center justify-center text-5xl font-bold uppercase tracking-tighter leading-none text-black md:text-8xl">
            Visualise
          </div>

          <div className="flex h-[100px] items-center justify-center text-5xl font-bold uppercase tracking-tighter leading-none text-black md:text-8xl">
            Create
          </div>

          <div className="flex h-[100px] items-center justify-center text-5xl font-bold uppercase tracking-tighter leading-none text-black md:text-8xl">
            Connect
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-20 text-xs uppercase tracking-[0.25em] text-black/50">
        © 2026 Tai Nguyen
      </p>
    </footer>
  )
}