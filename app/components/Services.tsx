export default function Services() {
    return (
      <section id="servicios" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
  
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3">Transporte de Cargas</h3>
            <p className="text-gray-600">
              Movemos mercaderías livianas y pesadas en todo el país.
            </p>
          </div>
  
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3">Logística Empresarial</h3>
            <p className="text-gray-600">
              Soluciones de distribución, entregas y transporte planificado.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3">Entregas Express</h3>
            <p className="text-gray-600">
              Soluciones de distribución para emergencias.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  