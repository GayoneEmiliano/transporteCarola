import Image from "next/image";

export default function Fleet() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-600 mb-12">Nuestra Flota</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto justify-items-center">

        <div className="group w-[350px] h-[220px] mx-auto [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <Image
                src="/fiorino2.png"
                alt="Fiorino"
                width={350}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="absolute inset-0 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
              <h3 className="text-xl font-bold text-gray-700">Fiorino</h3>
              <p className="text-gray-500 text-sm mt-2">
                Ideal para entregas rápidas y paquetería.
              </p>
            </div>

          </div>
        </div>

        <div className="group w-[350px] h-[220px] mx-auto [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <Image
                src="/camion.webp"
                alt="Camión"
                width={350}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="absolute inset-0 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
              <h3 className="text-xl font-bold text-gray-700">Camión Volvo</h3>
              <p className="text-gray-500 text-sm mt-2">
                Transporte de cargas pesadas a larga distancia.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>


  );
}
