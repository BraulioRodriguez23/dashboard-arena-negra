// components/sections/ProductHighlight.tsx
/* 'use client'; */
import Link from "next/link";

import Module from "module";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function ProductHighlight() {
  return (
    <section className="relative bg-[#262626] text-[#F7F6F4] py-28 overflow-hidden">

      {/* Glow más suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,115,242,0.10)_0%,_rgba(38,38,38,1)_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-sm uppercase tracking-widest text-[#7E73F2]">
            Producto principal
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Colmena
          </h2>

          <p className="mt-6 text-lg text-[#F7F6F4]/75 leading-relaxed">
            Centraliza la gestión, automatiza tareas operativas y elimina
            fricción en la administración diaria. Menos procesos manuales,
            más control.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/colmena"
              className="px-8 py-3 bg-[#F9F72F] text-[#262626] font-bold rounded-lg transition hover:scale-105"
            >
              Ver producto
            </Link>

            <Link
              href="/contacto"
              className="px-8 py-3 border-2 border-[#7E73F2] rounded-lg font-bold hover:bg-[#7E73F2]"
            >
              Solicitar demo
            </Link>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/Colmena_Miel+Arena.jpg"
              alt="Preview del SaaS Colmena"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
