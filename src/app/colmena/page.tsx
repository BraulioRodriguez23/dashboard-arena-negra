'use client';

import React from 'react';
import { ChartLineUp, Buildings, Wrench, UsersThree } from "phosphor-react";
import FeatureCard from "./components/FeatureCard";
import ColmenaExperience from "./components/ColmenaExperience";

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
    <main className="bg-background w-full overflow-x-hidden transition-colors duration-500 selection:bg-dev/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 px-0 sm:px-6 overflow-hidden">
        
        {/* Glow dinámico de fondo */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="absolute w-[120%] md:w-[80%] h-[40%] bg-dev/10 dark:bg-vista/20 blur-[80px] md:blur-[120px] transition-colors duration-700 opacity-60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* IMAGEN HERO: 
              Móvil: aspect-auto para ver captura completa sin zoom.
              Desktop: aspect-square con object-cover para look premium.
          */}
          <div className="order-1 lg:order-2 w-full lg:w-full animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative rounded-none sm:rounded-[2.5rem] bg-card/50 border-y sm:border border-card-border shadow-2xl overflow-hidden aspect-auto md:aspect-square group">
              <img
                src="/sona_seleccion1.png"
                alt="Preview Colmena"
                className="w-full h-auto md:h-full object-contain md:object-cover md:object-top transition-transform duration-700 group-hover:scale-105"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {CARACTERISTICAS.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCIA COLMENA */}
      <div className="w-full">
        <ColmenaExperience />
      </div>

      {/* 4. CTA FINAL */}
      <section className="py-20 md:py-32 bg-background border-t border-card-border text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-[1.0]">
            Administra mejor. <br /> Vive tranquilo.
          </h2>
          <a 
            href="/contacto" 
            className="inline-block px-10 py-4 md:px-12 md:py-5 rounded-full font-black text-sm md:text-lg bg-dev text-black dark:bg-vista dark:text-white shadow-dev/20 dark:shadow-vista/20 transition-all hover:scale-105 active:scale-95"
          >
            Solicitar demo gratuita
          </a>
        </div>
      </section>
    </main>
  );
}