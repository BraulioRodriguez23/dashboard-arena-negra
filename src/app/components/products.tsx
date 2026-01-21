'use client';
import Link from "next/link";

export default function ProductHighlight() {
  return (
    <section className="relative bg-background text-foreground py-28 overflow-hidden transition-colors duration-500">

      {/* GLOW CENTRALIZADO: Mismo que el Hero para dar continuidad */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Brillo que cambia de dev (amarillo) a vista (azul) */}
        <div className="absolute w-[80%] h-[60%] rounded-full bg-dev/10 dark:bg-vista/20 blur-[120px] transition-colors duration-700 opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* COLUMNA DE TEXTO */}
        <div>
          {/* LABEL SUPERIOR: Amarillo en light, Azul en dark */}
          <span className="text-sm uppercase tracking-[0.2em] text-dev dark:text-vista font-black transition-colors duration-500">
            Producto destacado
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight tracking-tighter text-foreground">
            Colmena
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed font-medium">
            Centraliza la gestión, automatiza tareas operativas y elimina
            fricción en la administración diaria. Menos procesos manuales,
            más control.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* BOTÓN PRIMARIO: bg-dev (Amarillo) -> dark:bg-vista (Azul) */}
            <Link
              href="/colmena"
              className="px-10 py-4 font-black rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest text-xs
                bg-dev text-black shadow-dev/20 
                dark:bg-vista dark:text-white dark:shadow-vista/20"
            >
              Ver producto
            </Link>

            {/* BOTÓN SECUNDARIO: Hover dinámico según el tema */}
            <Link
              href="/contacto"
              className="px-10 py-4 border-2 font-black rounded-full transition-all duration-500 uppercase tracking-widest text-xs
                border-foreground text-foreground
                hover:bg-dev hover:border-dev hover:text-black
                dark:hover:bg-vista dark:hover:border-vista dark:hover:text-white"
            >
              Solicitar demo
            </Link>
          </div>
        </div>

        {/* COLUMNA DE PREVIEW (IMAGEN) */}
        <div className="relative group">
          <div className="rounded-[2.5rem] overflow-hidden border border-card-border bg-card shadow-2xl transition-all duration-500 group-hover:border-dev dark:group-hover:border-vista">
            <img
              src="/Colmena_Miel-Arena.webp"
              alt="Preview del SaaS Colmena"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          
          {/* Brillo dinámico detrás de la imagen (Aura) */}
          <div className="absolute -z-10 -inset-6 bg-dev/20 dark:bg-vista/20 blur-3xl rounded-full opacity-40 transition-colors duration-700" />
        </div>

      </div>
    </section>
  );
}