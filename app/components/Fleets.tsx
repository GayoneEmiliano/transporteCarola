import Image from "next/image";

export default function Fleet() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestra Flota</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="flex flex-col items-center">
          {/* <Image src="/camioneta.jpg" width={350} height={200} alt="Camioneta" className="rounded-lg" /> */}
          <p className="mt-3 font-semibold">Camiones de Carga</p>
        </div>

        <div className="flex flex-col items-center">
          {/* <Image src="/camion.jpg" width={350} height={200} alt="Camion" className="rounded-lg" /> */}
          <p className="mt-3 font-semibold">Camionetas para paqueteria</p>
        </div>

      </div>
    </section>
  );
}
