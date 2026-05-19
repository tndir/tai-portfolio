import { FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 pt-8 md:pt-16 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        {/* Large rotating text */}
        <div className="mb-12">
          <p className="text-5xl md:text-6xl font-bold tracking-tighter leading-none flex flex-wrap items-center gap-x-3 gap-y-0 max-w-lg">
            <span className="text-white">Let's</span>
            <span className="inline-block h-[60px] overflow-hidden align-middle w-[200px] md:w-[360px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_90%,transparent_100%)]">
              <span
                className="flex flex-col animate-[spinWords_6s_linear_infinite]"
                style={{ height: "360px" }}
              >
                {/* Original set */}
                <span className="h-[60px] flex items-center text-white">
                  visualise
                </span>
                <span className="h-[60px] flex items-center text-white">
                  create
                </span>
                <span className="h-[60px] flex items-center text-white">
                  connect
                </span>
                {/* Duplicate set — enables seamless loop */}
                <span className="h-[60px] flex items-center text-white">
                  visualise
                </span>
                <span className="h-[60px] flex items-center text-white">
                  create
                </span>
                <span className="h-[60px] flex items-center text-white">
                  connect
                </span>
              </span>
            </span>
            <span className="text-white/60">your vision.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Email + Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Email
            </p>

            <a
              href="mailto:tndir.au@gmail.com"
              className="text-sm text-white hover:opacity-50 transition-opacity"
            >
              tndir.au@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Social
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/tn.dir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:-translate-y-1 transition-transform duration-200 hover:opacity-50"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/tai-nguyen-943951209/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:-translate-y-1 transition-transform duration-200 hover:opacity-50"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Melbourne, Australia
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Tai Nguyen
          </p>
        </div>
      </div>
    </footer>
  )
}