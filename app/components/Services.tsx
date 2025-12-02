"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (

    <section id="servicios" className="py-24 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-600 text-center mb-14">Nuestros Servicios</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto justify-items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 transition text-center hover:shadow-xl hover:-translate-y-1">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center content-center ">🚚</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">Transporte de Cargas</h3>
            <p className="text-gray-600">
              Movemos mercaderías livianas y pesadas en todo el país.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200  text-center transition hover:shadow-xl hover:-translate-y-1">
            <div className="text-blue-600 text-4xl mb-4 flex justify-center content-center">📦</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-600">Logística Empresarial</h3>
            <p className="text-gray-600">
              Soluciones de distribución, entregas y transporte planificado.
            </p>
          </div>
        </motion.div>
        {/* <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl hover:-translate-y-1">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center content-center">⚡</div>
          <h3 className="text-2xl font-semibold mb-3">Entregas Express</h3>
          <p className="text-gray-600">
            Soluciones de distribución para emergencias.
          </p>
        </div> */}

      </div>

    </section>

  );
}
