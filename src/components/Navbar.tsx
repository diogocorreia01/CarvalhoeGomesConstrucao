"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-neutral-900"
        >
          Carvalho&Gomes<span className="text-[var(--brand)]">Construção</span>
        </Link>

        {/* LINKS */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="/servicos"
              className="text-neutral-700 hover:text-[var(--brand)] transition"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="text-neutral-700 hover:text-[var(--brand)] transition"
            >
              Contactos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
