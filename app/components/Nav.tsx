"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Nav() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
                : "backdrop-blur-xl bg-white/10 border-b border-white/20"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-white font-semibold text-xl">CAROLA</h1>

                <div className="hidden md:flex gap-8">
                    <Link href="#servicios" className="hover:text-blue-400">Servicios</Link>
                    <Link href="#flota" className="hover:text-blue-400">Flota</Link>
                    <Link href="#beneficios" className="hover:text-blue-400">Por qué elegirnos</Link>
                    <Link href="#contacto" className="hover:text-blue-400">Contacto</Link>
                </div>

                {/* BOTÓN CTA */}
                <a
                    href="https://wa.me/5492921408822" target="_blank"
                    className="bg-green-600 px-4 py-2 rounded-lg text-center"
                >
                    WhatsApp
                </a>
                
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl"
                >
                    ☰
                </button>

                {open && (
                    <div className="md:hidden flex flex-col bg-black/90 px-6 pb-4 gap-4">
                        <Link href="#servicios">Servicios</Link>
                        <Link href="#flota">Flota</Link>
                        <Link href="#beneficios">Por qué elegirnos</Link>
                        <Link href="#contacto">Contacto</Link>
                        <a
                            href="https://wa.me/5492921408822" target="_blank"
                            className="bg-green-600 px-4 py-2 rounded-lg text-center"
                        >
                            WhatsApp
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
