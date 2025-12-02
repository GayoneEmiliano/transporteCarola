"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (

    <section
      className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6 relative "
      style={{
        backgroundImage: "url('/transporte-carola.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-wide">
            Transporte & Logística Profesional
          </div>
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg ">
            Transporte CAROLA
          </h1>

          <p className="text-lg mb-6 drop-shadow-md ">
            Servicio de transporte, logística y distribución en todo el país.
          </p>

          <a
            href="#contacto"
            className="bg-blue-600 px-6 py-3 mx-5 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Solicitar Cotización
          </a>
          <a
            href="#servicios"
            className="px-6 py-3 rounded-lg border border-white/40 bg-white/30 text-white font-semibold hover:bg-white/50 transition"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
