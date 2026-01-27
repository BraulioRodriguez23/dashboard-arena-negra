'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// CARGA CRÍTICA (Estática): Estos componentes deben cargar de inmediato para un LCP rápido
import FeatureCard from "./components/FeatureCard";

// CARGA DINÁMICA: Estos componentes se cargan bajo demanda para reducir el JS inicial
const ColmenaExperience = dynamic(() => import("./components/ColmenaExperience"), {
  ssr: false,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

// Importación dinámica de iconos para reducir el tamaño del bundle inicial
const ChartLineUp = dynamic(() => import("phosphor-react").then(mod => mod.ChartLineUp));
const Buildings = dynamic(() => import("phosphor-react").then(mod => mod.Buildings));
const Wrench = dynamic(() => import("phosphor-react").then(mod => mod.Wrench));
const UsersThree = dynamic(() => import("phosphor-react").then(mod => mod.UsersThree));

const CARACTERISTICAS = [
  { 
    title: "Dashboard con KPIs", 
    text: "Visualiza métricas clave y alertas importantes en un solo panel intuitivo.", 
    icon: ChartLineUp 
  },
  { 
    title: "Gestión de Unidades", 
    text: "Administra información de residentes y propietarios de forma centralizada.", 
    icon: Buildings 
  },
  { 
    title: "Control de Mantenimiento", 
    text: "Programa y gestiona todas las tareas preventivas y correctivas.", 
    icon: Wrench 
  },
  { 
    title: "Personal y Proveedores", 
    text: "Gestiona contratos, pagos y evaluaciones de tu equipo de trabajo.", 
    icon: UsersThree 
  },
];

export default function ColmenaPage() {
  return (
    // ACCESIBILIDAD: Uso de <main> como punto de referencia principal
    <main className="bg-background w-full overflow-x-hidden transition-colors duration-500 selection:bg-dev/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 px-0 sm:px-6 overflow-hidden">
        
        {/* Glow dinámico de fondo */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="absolute w-[120%] md:w-[80%] h-[40%] bg-dev/10 dark:bg-vista/20 blur-[80px] md:blur-[120px] transition-colors duration-700 opacity-60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="order-1 lg:order-2 w-full lg:w-full animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative rounded-none sm:rounded-[2.5rem] bg-card/50 border-y sm:border border-card-border shadow-2xl overflow-hidden aspect-auto md:aspect-square group">
              {/* RENDIMIENTO: Atributos width/height y fetchPriority para optimizar LCP */}
              <img
                src="/sona_seleccion1.webp"
                alt="Vista previa de la interfaz de administración Colmena"
                width={800} 
                height={800}
                className="w-full h-auto md:h-full object-contain md:object-cover md:object-top transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* TEXTO HERO */}
          <div className="order-2 lg:order-1 text-center lg:text-left px-6 sm:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.95] md:leading-[0.9]">
              Administración <br />
              <span className="text-dev dark:text-vista italic transition-colors duration-500">
                sin fricción.
              </span>
            </h1>

            <p className="mt-6 md:mt-8 text-muted text-sm md:text-xl max-w-prose mb-8 font-medium leading-relaxed mx-auto lg:mx-0">
              Colmena centraliza pagos, comunicación y la operación diaria para que gestionar tu comunidad sea un flujo natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/contacto" 
                // ACCESIBILIDAD: Contraste de texto negro sobre amarillo dev
                className="px-10 py-4 font-black rounded-full shadow-xl bg-dev text-black dark:bg-vista dark:text-white shadow-dev/20 dark:shadow-vista/20 uppercase tracking-widest text-[10px] md:text-xs transition-all hover:scale-105 active:scale-95"
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE BENEFICIOS */}
      <section id="beneficios" className="py-16 md:py-24 bg-background px-6">
        <div className="max-w-7xl mx-auto">
          {/* ACCESIBILIDAD: Rol de región para navegación por lectores de pantalla */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" role="region" aria-label="Características principales">
            {CARACTERISTICAS.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCIA COLMENA (Cargada dinámicamente) */}
      <div className="w-full">
        <ColmenaExperience />
      </div>

      {/* 4. CTA FINAL */}
      <section className="py-20 md:py-32 bg-background border-t border-card-border text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-none">
            Administra mejor. <br /> Vive tranquilo.
          </h2>
          <a 
            href="/contacto" 
            className="inline-block px-10 py-4 md:px-12 md:py-5 rounded-full font-black text-sm md:text-lg bg-dev text-black dark:bg-vista dark:text-white shadow-dev/20 dark:shadow-vista/20 transition-all hover:scale-105 active:scale-95"
            aria-label="Solicitar una demostración gratuita de Colmena"
          >
            Solicitar demo gratuita
          </a>
        </div>
      </section>
    </main>
  );
}