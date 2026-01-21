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
      { threshold: 0.2 }
    );
    document.querySelectorAll('.scroll-section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full bg-background selection:bg-dev/30">
      
      {/* INDICADORES LATERALES */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
        {EXPERIENCES.map((_, index) => (
          <div key={index} className={`h-1 rounded-full transition-all duration-700 ${activeSection === index ? 'bg-dev dark:bg-vista w-8' : 'bg-muted/20 w-3'}`} />
        ))}
      </div>

      <div className="w-full flex flex-col no-scrollbar">
        
        {/* INTRO */}
        <section data-index="0" className="scroll-section w-full h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
          <div className="max-w-full gpu-accelerated">
            <h1 className="text-6xl md:text-[9.5rem] font-black text-foreground tracking-tighter mb-4 italic uppercase leading-none">
              Colmena<span className="text-dev dark:text-vista">.</span>
            </h1>
            <p className="text-muted text-lg md:text-3xl font-medium max-w-2xl italic opacity-80">{EXPERIENCES[0].desc}</p>
          </div>
        </section>

        {/* MÓDULOS: Ajuste de paddings para móvil */}
        {EXPERIENCES.slice(1).map((item, index) => (
          <section 
            key={item.id} 
            data-index={index + 1} 
            // p-2 en móvil para que la tarjeta use casi todo el ancho de la pantalla
            className="scroll-section w-full flex flex-col items-center justify-start pt-20 md:pt-40 p-2 md:p-8"
          >
            {/* CARD: rounded-[2rem] y w-[96%] para que se vea más cerca del borde en móvil */}
            <div className="relative w-[96%] md:w-full max-w-full md:max-w-7xl flex flex-col rounded-[2rem] md:rounded-[3rem] border border-card-border bg-card shadow-2xl overflow-hidden gpu-accelerated">
              
              <div className="shrink-0 w-full h-10 md:h-14 bg-card flex items-center justify-between px-6 md:px-8 border-b border-card-border z-30">
                <span className="text-muted text-[9px] md:text-[12px] uppercase tracking-[0.4em] font-black italic">Módulo: {item.title}</span>
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/20" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/20" />
                </div>
              </div>

              <div className="w-full h-auto">
                <div className="w-full flex flex-col items-center">
                  <div className="w-full flex justify-center bg-black/[0.01]">
                    {item.img && (
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        // object-top asegura que la interfaz se vea desde arriba sin cortes raros
                        className="w-full h-auto object-contain md:object-cover md:object-top block" 
                      />
                    )}
                  </div>
                  
                  {/* TEXTO: py-8 en móvil para que sea más compacto */}
                  <div className="py-8 md:py-32 w-full flex flex-col items-center justify-center text-center px-6 md:px-16 bg-card border-t border-card-border">
                    <h2 className="text-foreground text-2xl md:text-7xl font-black mb-3 md:mb-6 tracking-tighter italic uppercase">{item.title}</h2>
                    <p className="text-muted text-[10px] md:text-2xl font-medium max-w-3xl leading-relaxed mx-auto opacity-80">{item.desc}</p>
                    <div className="mt-8 flex flex-col items-center gap-4">
                      <div className="w-px h-12 md:h-24 bg-gradient-to-b from-dev dark:from-vista to-transparent" />
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