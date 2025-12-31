// app/colmena/page.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import FeatureSplit from "./components/FeatureSplit";
import FeatureCard from "./components/FeatureCard";

import {
  ChartLineUp,
  Buildings,
  Wrench,
  UsersThree
} from "phosphor-react";

const CARACTERISTICAS = [
  {
    title: "Dashboard con KPIs",
    text: "Visualiza métricas clave y alertas importantes en un solo panel intuitivo.",
    icon: ChartLineUp,
    color: "bg-arena text-emerald-600",
  },
  {
    title: "Gestión de Unidades",
    text: "Administra información de residentes y propietarios de forma centralizada.",
    icon: Buildings,
    color: "bg-arena text-blue-600",
  },
  {
    title: "Control de Mantenimiento",
    text: "Programa y gestiona todas las tareas preventivas y correctivas.",
    icon: Wrench,
    color: "bg-arena text-orange-600",
  },
  {
    title: "Personal y Proveedores",
    text: "Gestiona contratos, pagos y evaluaciones de tu equipo de trabajo.",
    icon: UsersThree,
    color: "bg-arena text-purple-600",
  }
];

export default function ColmenaPage() {
  return (
    <main className="bg-[#262626] text-[#F7F6F4]">
      {/* 1. HERO SECTION - DISEÑO DE ALTO IMPACTO */}
      <section className="relative pt-16 pb-12 md:pt-32 md:pb-40 overflow-hidden">
        {/* Gradiente ambiental sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,247,47,0.05),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:gap-16 items-center grid-cols-1 md:grid-cols-2">
            
            {/* BLOQUE DE TEXTO: Prioridad 1 en móvil */}
            <div className="order-1 md:order-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Administración de condominios,
                <span className="text-[#F9F72F] block mt-2">sin fricción.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Colmena centraliza pagos, comunicación y la operación diaria para que gestionar tu comunidad deje de ser un problema manual.
              </p>
              
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5">
                <Link
                  href="/contacto"
                  className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#F9F72F] text-[#262626] font-bold hover:shadow-[0_0_30px_rgba(249,247,47,0.4)] transition-all active:scale-95 text-base md:text-lg"
                >
                  Solicitar demo
                </Link>
                <a
                  href="#beneficios"
                  className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-zinc-700 text-zinc-300 hover:bg-white/5 transition-colors text-base md:text-lg text-center"
                >
                  Ver beneficios
                </a>
              </div>
            </div>

            {/* IMAGEN: Grande y desbordada en PC, centrada en móvil */}
            <div className="order-2 md:order-2 relative w-full flex justify-center md:block">
              <div className="relative h-[350px] md:h-[600px] w-full md:w-[80%] lg:w-[80%] md:-mr-[40%] rounded-[2.5rem] bg-[#1E1E20] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                <Image
                  src="/sona_seleccion1.png"
                  alt="Dashboard Principal de Colmena"
                  fill
                  className="object-cover object-top" 
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN BENEFICIOS - ESTRUCTURADOS Y CLAROS */}
      <section className="py-20 bg-[#262626]"> {/* Fondo blanco para contrastar con el Hero oscuro */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {CARACTERISTICAS.map((card, index) => (
              <FeatureCard 
                key={index}
                title={card.title}
                text={card.text}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PREVIEW (Features) - INTERFACES INTUITIVAS */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-32">
          <FeatureSplit
            title="Panel de administración intuitivo"
            description="Gestiona todas las áreas de tu condominio desde un solo lugar con una interfaz diseñada para ser entendida en segundos."
            imageSrc="/dashboard.png"
          />
          <FeatureSplit
            title="Comunicación efectiva"
            description="Mantén a los residentes informados con notificaciones instantáneas y avisos generales, facilitando la convivencia diaria."
            imageSrc="/comunicacion.png"
            reverse
          />
          <FeatureSplit
            title="Reportes detallados"
            description="Genera estados financieros con transparencia total para los condóminos, optimizando la gestión de recursos."
            imageSrc="/estados_financieros.png"
          />
        </div>
      </section>

      {/* 4. CTA FINAL - CIERRE CONFIABLE */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[#1a1a1a] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white leading-tight">
            Administra mejor. Vive más tranquilo.
          </h2>
          <p className="text-[#F9F72F] text-xl md:text-2xl font-light mb-8 md:mb-12 leading-relaxed">
            Mejora la calidad de vida de tu comunidad con automatización inteligente.
          </p>
          <Link
            href="/contacto"
            className="w-full sm:w-auto inline-block px-12 py-4 md:py-5 rounded-full bg-[#F9F72F] text-[#262626] font-black text-base md:text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Solicitar demo gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}