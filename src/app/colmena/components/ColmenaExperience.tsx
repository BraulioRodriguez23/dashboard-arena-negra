'use client';

import React, { useEffect, useState } from 'react';

type Experience = { id: string; title: string; desc: string; img: string; };

const EXPERIENCES: Experience[] = [
  { id: 'intro', title: 'Colmena', desc: 'La plataforma definitiva para la transparencia y armonía en tu condominio.', img: '' },
  { id: 'modulo-1', title: 'Dashboard Operativo', desc: 'Control total de morosidad, flujo de caja y mantenimientos urgentes en tiempo real.', img: '/dashboard.webp' },
  { id: 'modulo-2', title: 'Comunicación Oficial', desc: 'Envío de avisos, votaciones y reglamentos directamente al celular de cada residente.', img: '/comunicacion.webp' },
  { id: 'modulo-3', title: 'Finanzas Transparentes', desc: 'Generación automática de estados de cuenta y recibos de pago con un solo clic.', img: '/estados_financieros.webp' },
  { id: 'modulo-4', title: 'Mantenimiento Eficiente', desc: 'Programación y seguimiento de mantenimientos preventivos y correctivos sin complicaciones.', img: '/mantenimiento.webp' }
];

export default function ColmenaExperience() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index) setActiveSection(Number(index));
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.snap-section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen w-full max-w-full bg-background overflow-hidden selection:bg-dev/30">
      
      {/* INDICADORES */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
        {EXPERIENCES.map((_, index) => (
          <div key={index} className={`h-1 rounded-full transition-all duration-700 ${activeSection === index ? 'bg-dev dark:bg-vista w-8' : 'bg-muted/20 w-3'}`} />
        ))}
      </div>

      <div className="h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory md:snap-none no-scrollbar">
        
        {/* INTRO */}
        <section data-index="0" className="snap-section snap-start w-full h-screen flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-full gpu-accelerated">
            <h1 className="text-5xl md:text-9xl font-black text-foreground tracking-tighter mb-4 italic uppercase">
              Colmena<span className="text-dev dark:text-vista">.</span>
            </h1>
            <p className="text-muted text-sm md:text-2xl font-medium max-w-prose italic opacity-80">{EXPERIENCES[0].desc}</p>
          </div>
        </section>

        {/* MÓDULOS */}
        {EXPERIENCES.slice(1).map((item, index) => (
          <section 
            key={item.id}
            data-index={index + 1}
            // ESTÁNDAR: Centrado perfecto con un poco de respiro
            className="snap-section snap-start w-full h-screen flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden"
          >
            {/* CARD: Altura de 80vh para garantizar compatibilidad universal */}
            <div className="relative w-full h-[80vh] md:h-[85vh] max-w-full md:max-w-7xl flex flex-col rounded-[2.5rem] md:rounded-[3rem] border border-card-border bg-card shadow-2xl overflow-hidden gpu-accelerated">
              
              {/* HEADER */}
              <div className="shrink-0 w-full h-10 md:h-12 bg-card/95 flex items-center justify-between px-6 border-b border-card-border z-30">
                <span className="text-muted text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black italic">Módulo: {item.title}</span>
                <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500/20" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" /><div className="w-1.5 h-1.5 rounded-full bg-green-500/20" /></div>
              </div>

              {/* CONTENIDO */}
              <div className="grow overflow-y-auto no-scrollbar scroll-smooth">
                <div className="w-full flex flex-col items-center">
                  <div className="w-full bg-black/[0.02] flex justify-center">
                    {item.img && (
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-auto object-contain md:object-cover md:object-top block" 
                        loading="lazy"
                      />
                    )}
                  </div>
                  
                  <div className="py-12 md:py-24 w-full flex flex-col items-center justify-center text-center px-8 md:px-10 bg-card border-t border-card-border">
                    <h2 className="text-foreground text-xl md:text-6xl font-black mb-3 md:mb-4 tracking-tighter italic uppercase">{item.title}</h2>
                    <p className="text-muted text-[10px] md:text-xl font-medium max-w-2xl leading-relaxed mx-auto opacity-80">{item.desc}</p>
                    <div className="mt-8 flex flex-col items-center gap-3">
                      <span className="text-[8px] md:text-[11px] uppercase tracking-[0.5em] font-black text-dev dark:text-vista animate-pulse">Siga bajando</span>
                      <div className="w-px h-10 md:h-20 bg-gradient-to-b from-dev dark:from-vista to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}