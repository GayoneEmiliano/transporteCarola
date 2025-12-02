"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20  text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-white/10 border-b border-white/20 rounded-b-2xl shadow-lg">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          CAROLA
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8">
          <Link href="#servicios" className="hover:text-blue-400">Servicios</Link>
          <Link href="#flota" className="hover:text-blue-400">Flota</Link>
          <Link href="#beneficios" className="hover:text-blue-400">Por qué elegirnos</Link>
          <Link href="#contacto" className="hover:text-blue-400">Contacto</Link>
        </div>

        {/* BOTÓN CTA */}
        <a
            href="https://wa.me/5492915087636" target="_blank"
            className="bg-green-600 px-4 py-2 rounded-lg text-center"
          >
            WhatsApp
          </a>

        {/* MENU MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {open && (
        <div className="md:hidden flex flex-col bg-black/90 px-6 pb-4 gap-4">
          <Link href="#servicios">Servicios</Link>
          <Link href="#flota">Flota</Link>
          <Link href="#beneficios">Por qué elegirnos</Link>
          <Link href="#contacto">Contacto</Link>
          <a
            href="https://wa.me/5492915087636" target="_blank"
            className="bg-green-600 px-4 py-2 rounded-lg text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
