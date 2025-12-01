export default function Hero() {
    return (
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6 relative"
        style={{
          backgroundImage: "url('/transporte-carola.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Capa oscura para que el texto contraste */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Contenido */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg ">
            Transporte CAROLA
          </h1>
  
          <p className="text-lg mb-6 drop-shadow-md">
            Servicio de transporte, logística y distribución en todo el país.
          </p>
  
          <a
            href="#contacto"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    );
  }
  