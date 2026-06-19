// components/Footer.tsx
import Link from "next/link";
import ShaderBackground from "./heroBg";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white">
      
      {/* ===================================================
          1. CTA LEAD CAPTURE SECTION (WITH MESH BACKGROUND)
          =================================================== */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden py-32">
        {/* Reusing your dynamic WebGL Shader Canvas */}
        <ShaderBackground />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Display Headline */}
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            Scale your growth, <br />
            not your workload.
          </h2>
          
          {/* Sub-headline */}
          <p className="mt-5 text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            Book a free 30-min audit. We'll map <br />
            your biggest automation opportunity.
          </p>

          {/* Inline Email Input Form */}
          <form className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md px-4 sm:px-0">
            <input
              type="email"
              placeholder="hi@scalar.com"
              className="w-full rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md focus:outline-none focus:border-white/20 transition"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 whitespace-nowrap"
            >
              Free Audit
            </button>
          </form>
        </div>
      </section>

      {/* ===================================================
          2. MAIN FOOTER LINKS & INFORMATION SECTION
          =================================================== */}
      <footer className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
          
          {/* Navigation Grid Mapping */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12 pb-16">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 text-white">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="8" width="4" height="12" rx="1" />
                  <rect x="10" y="3" width="4" height="17" rx="1" />
                  <rect x="18" y="11" width="4" height="9" rx="1" />
                </svg>
                <span className="text-xl font-bold tracking-tight">Proxima Labs</span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 max-w-xs mt-2">
                High-quality Framer template crafted for AI automation agencies.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-gray-200">Navigation</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Solutions</Link></li>
                <li><Link href="#" className="hover:text-white transition">Results</Link></li>
                <li><Link href="#" className="hover:text-white transition">Process</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal Links */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-gray-200">Legal</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-white transition">404 Page</Link></li>
              </ul>
            </div>

            {/* Column 4: Social Connections */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-gray-200">Socials</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">X(twitter)</Link></li>
                <li><Link href="#" className="hover:text-white transition">Linkedin</Link></li>
                <li><Link href="#" className="hover:text-white transition">YouTube</Link></li>
                <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright and Attributions */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-gray-500 sm:flex-row">
            <p>©2026 Proxima Labs. All rights reserved.</p>
            <p>
              <Link 
                href="#" 
                className="underline transition hover:text-gray-300"
              >
                Built by Proxima Labs
              </Link>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}