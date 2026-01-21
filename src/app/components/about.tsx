import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24 relative overflow-hidden transition-colors duration-500">
      
      {/* GLOW DE FONDO: Sutil y centrado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[70%] h-[60%] rounded-full bg-dev/5 dark:bg-vista/10 blur-[120px] transition-colors duration-700 opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 md:px-12">
        {/* Header: Título con impacto pero sin exagerar */}
        <div className="mb-14 md:mb-20 text-center">
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] inline-block">
            <span className="text-dev dark:text-vista transition-colors duration-500">Menos fricción.</span> 
            <br /> 
            Más claridad.
          </h3>
        </div>

        {/* Cuerpo: Grid 50/50 equilibrado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
              Tecnología que se adapta a tu vida
            </h4>
            <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
              <p>
                No creemos en plataformas infladas. Cada decisión busca que tú pienses menos y avances más.
              </p>
              <p>
                Automatizamos lo repetitivo y ordenamos lo complejo, dejando espacio para tu enfoque y tranquilidad.
              </p>
            </div>
          </div>

          {/* Imagen: Proporción 16:10 para un look cinematográfico limpio */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-[2.5rem] overflow-hidden border border-card-border shadow-2xl transition-all duration-500 hover:border-dev dark:hover:border-vista group">
            <Image
              src="/AND_Slogan(Ingles).webp"
              alt="Slogan Arena Negra"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Valores: Cards con buen aire entre ellas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Automatización", desc: "Menos tareas manuales y errores operativos." },
            { title: "Diseño", desc: "Interfaces claras que no requieren manuales." },
            { title: "Paz Operativa", desc: "Todo fluye. Todo se entiende. Nada estorba." }
          ].map((item, i) => (
            <div key={i} className="bg-card p-8 rounded-[2rem] border border-card-border shadow-sm transition-all hover:border-dev dark:hover:border-vista">
              <h4 className="font-black mb-2 text-foreground text-[11px] uppercase tracking-[0.25em]">
                {item.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};