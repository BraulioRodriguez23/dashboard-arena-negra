'use client';

import React, { useEffect, useState } from 'react';

const EXPERIENCES = [
  { 
    id: 'intro', 
    img: null, 
    title: "Colmena", 
    desc: "La plataforma definitiva para la transparencia y armonía en tu condominio." 
  },
  { 
    id: 'modulo-1', 
    img: "/dashboard.png", 
    title: "Dashboard Operativo", 
    desc: "Control total de morosidad, flujo de caja y mantenimientos urgentes en tiempo real." 
  },
  { 
    id: 'modulo-2', 
    img: "/comunicacion.png", 
    title: "Comunicación Oficial", 
    desc: "Envío de avisos, votaciones y reglamentos directamente al celular de cada residente." 
  },
  { 
    id: 'modulo-3', 
    img: "/estados_financieros.png", 
    title: "Finanzas Transparentes", 
    desc: "Generación automática de estados de cuenta y recibos de pago con un solo clic." 
  }
];

export default function ColmenaExperience() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('.snap-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.snap-section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen bg-background transition-colors duration-500 overflow-hidden">
      
      {/* INDICADORES LATERALES */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {EXPERIENCES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`group relative flex items-center justify-end transition-all duration-300 ${
              activeSection === index ? 'w-10' : 'w-3'
            }`}
          >
            <span className={`text-[10px] absolute right-12 text-dev dark:text-vista uppercase tracking-[0.3em] transition-all duration-300 whitespace-nowrap font-black ${
              activeSection === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}>
               {EXPERIENCES[index].title}
            </span>
            <div className={`h-1 rounded-full transition-all duration-500 ${
              activeSection === index ? 'bg-dev dark:bg-vista w-full' : 'bg-muted/20 w-full'
            }`} />
          </button>
        ))}
      </div>

      {/* SNAP SCROLL SIN BARRA VISIBLE */}
      <div className="h-full overflow-y-auto scroll-smooth snap-y snap-mandatory no-scrollbar">
        
        {/* 1. INTRO SECTION */}
        <section 
          data-index="0"
          className="snap-section snap-start snap-always relative w-full h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-9xl font-black text-foreground tracking-tighter mb-4">
              Colmena<span className="text-dev dark:text-vista">.</span>
            </h1>
            <div className="w-12 md:w-20 h-1 md:h-2 bg-dev dark:bg-vista mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-muted text-sm md:text-2xl font-medium leading-relaxed">
              {EXPERIENCES[0].desc}
            </p>
          </div>
        </section>

        {/* 2. MÓDULOS */}
        {EXPERIENCES.slice(1).map((item, index) => (
          <section 
            key={index}
            data-index={index + 1}
            className="snap-section snap-start snap-always relative w-full h-screen flex flex-col items-center justify-center"
          >
            <div className="experience-card relative z-10 w-full h-full md:w-[85%] md:h-[82vh] max-w-7xl flex flex-col md:rounded-[3rem] md:border border-card-border bg-card shadow-2xl overflow-hidden transition-all duration-700">
              
              {/* HEADER TIPO BROWSER */}
              <div className="shrink-0 w-full h-10 md:h-12 bg-card/90 backdrop-blur-xl flex items-center justify-between px-6 md:px-8 border-b border-card-border">
                <span className="text-muted text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black italic">
                   Módulo: {item.title}
                </span>
                <div className="flex gap-1.5">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/10" />
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/10" />
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/10" />
                </div>
              </div>

              {/* CONTENIDO SCROLLABLE INTERNO */}
              <div className="grow overflow-y-auto no-scrollbar">
                <div className="w-full">
                  {/* IMAGEN: object-top y object-cover restauran la alineación profesional */}
                  <img 
                    src={item.img || ''} 
                    alt={item.title} 
                    className="w-full h-auto block object-cover object-top" 
                  />
                  
                  {/* TEXTO DE CIERRE AJUSTADO */}
                  <div className="py-14 md:py-24 w-full flex flex-col items-center justify-center text-center px-10 bg-card border-t border-card-border">
                    <h3 className="text-foreground text-xl md:text-5xl font-black mb-3 tracking-tighter italic">
                      {item.title}
                    </h3>
                    <p className="text-muted text-[11px] md:text-xl font-medium max-w-[260px] md:max-w-2xl leading-relaxed mx-auto">
                      {item.desc}
                    </p>
                    
                    <div className="mt-8 md:mt-12 flex flex-col items-center gap-3">
                      <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black text-dev dark:text-vista">
                        Siga bajando
                      </span>
                      <div className="w-px h-8 md:h-14 bg-gradient-to-b from-dev dark:from-vista to-transparent"></div>
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