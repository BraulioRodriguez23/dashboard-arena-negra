import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-[#262626] text-[#F7F6F4] py-28 relative overflow-hidden">

      {/* Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,115,242,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Menos fricción. Más claridad.
          </h3>

          <p className="text-lg text-[#F7F6F4]/70 leading-relaxed">
            Diseñamos software para personas que ya tienen suficiente caos.
            Sistemas que no estorban, no confunden y no te roban energía.
          </p>
        </div>

        {/* Bloque doble */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">

          {/* Texto */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">
              Tecnología que se adapta a tu vida
            </h4>

            <p className="text-[#F7F6F4]/70 leading-relaxed">
              No creemos en plataformas infladas ni en dashboards por deporte.
              Cada decisión de diseño y desarrollo tiene un solo objetivo:
              que tú pienses menos y avances más.
            </p>

            <p className="text-[#F7F6F4]/70 leading-relaxed">
              Automatizamos lo repetitivo, ordenamos lo complejo y dejamos
              espacio para lo importante: tu tiempo, tu enfoque y tu tranquilidad.
            </p>
          </div>

          {/* Visual */}
        <div className="relative h-72 rounded-2xl overflow-hidden border border-zinc-800">
  <Image
    src="/AND_Slogan(ingles).jpg"
    alt="Imagen"
    fill
    className="object-cover object-center"
    priority
  />
</div>
        </div>

        {/* Valores / beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <h4 className="font-bold mb-3">Automatización real</h4>
            <p className="text-sm text-gray-400">
              Menos tareas manuales, menos errores, menos dependencia.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <h4 className="font-bold mb-3">Diseño con intención</h4>
            <p className="text-sm text-gray-400">
              Interfaces claras que no requieren manual ni paciencia.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
            <h4 className="font-bold mb-3">Paz operativa</h4>
            <p className="text-sm text-gray-400">
              Todo fluye. Todo se entiende. Nada estorba.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
