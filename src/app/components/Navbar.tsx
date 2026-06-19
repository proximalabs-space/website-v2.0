import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full pt-6">
      <div className="mx-auto max-w-7xl px-6">

        {/* Floating Capsule Bar */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#121212]/90 px-6 py-4 shadow-xl backdrop-blur-md">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/logo.png"
              alt="Proxima Labs Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />

            <span className="text-xl font-bold tracking-tight">
              Proxima Labs
            </span>
          </Link>

          {/* Centered Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Aligned CTA Button */}
          <div>
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-gray-200"
            >
              Let's Talk
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}