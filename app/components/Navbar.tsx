import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Proof", href: "#proof" },
  { label: "Currently", href: "#currently" },
  { label: "How I Think", href: "#how-i-think" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3 text-sm font-medium tracking-[0.18em] uppercase">
          <span className="h-2 w-2 rounded-full bg-ink transition-transform group-hover:scale-135" />
          Jakes Eddy
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase text-muted hover:text-ink transition-colors duration-300 tracking-[0.14em]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-3 bg-ink text-paper px-4 py-2.5 text-[11px] hover:bg-ink-soft transition-colors duration-300 tracking-[0.14em] uppercase"
        >
          <span>Let&apos;s Talk</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M1 9L9 1M9 1H1M9 1V9" />
          </svg>
        </Link>

        <button
          className={`menu-toggle flex md:hidden ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>
      </nav>
      <div className={`mobile-menu md:hidden ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="text-sm uppercase tracking-[0.14em] text-ink">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="text-sm uppercase tracking-[0.14em] text-muted">
              Let&apos;s Talk ↗
            </Link>
        </div>
      </div>
    </header>
  );
}