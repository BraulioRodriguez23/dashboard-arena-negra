'use client';

import React from 'react';
import { EnvelopeSimple } from "phosphor-react";

export default function ContactoPage() {
  return (
    <main className="bg-background min-h-screen transition-colors duration-500 selection:bg-dev/30 overflow-hidden">
      
      {/* GLOW DE FONDO */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[80%] h-[60%] bg-dev/10 dark:bg-vista/20 blur-[120px] transition-colors duration-700 opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-between">
          
          {/* COLUMNA 1: INFO */}
          <div className="w-full lg:max-w-md space-y-10">
            <div>
              <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-6">
                Hablemos de tu <br />
                <span className="text-dev dark:text-vista italic transition-colors duration-500">Condominio.</span>
              </h1>
              <p className="text-muted text-lg md:text-xl font-medium max-w-sm leading-relaxed">
                ¿Listo para eliminar el caos administrativo? Estamos aquí para ayudarte a implementar Colmena.
              </p>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-card border border-card-border flex items-center justify-center text-dev dark:text-vista transition-all group-hover:scale-110">
                <EnvelopeSimple size={24} weight="bold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-muted mb-1">Escríbenos</p>
                <p className="text-foreground font-bold text-base md:text-lg">arenanegradevelop@gmail.com</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: FORMULARIO (Reducido un 10% - max-w-xl) */}
          <div className="w-full max-w-xl lg:ml-auto">
            <div className="bg-card border border-card-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-500">
              <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-muted ml-2">Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full bg-background/50 border border-card-border rounded-2xl px-5 py-4 outline-none focus:border-dev dark:focus:border-vista transition-all text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-muted ml-2">Condominio</label>
                    <input 
                      type="text" 
                      placeholder="Edificio"
                      className="w-full bg-background/50 border border-card-border rounded-2xl px-5 py-4 outline-none focus:border-dev dark:focus:border-vista transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted ml-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-background/50 border border-card-border rounded-2xl px-5 py-4 outline-none focus:border-dev dark:focus:border-vista transition-all text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted ml-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full bg-background/50 border border-card-border rounded-2xl px-5 py-4 outline-none focus:border-dev dark:focus:border-vista transition-all text-foreground resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99]
                    bg-dev text-black dark:bg-vista dark:text-white 
                    shadow-xl shadow-dev/20 dark:shadow-vista/20"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}