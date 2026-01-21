'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Umbral de scroll para la transición
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueo de scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  const logoSrc = mounted && resolvedTheme === "dark" 
    ? "/AND_Blanco.webp" 
    : "/AND_Negro.webp";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-card-border shadow-sm" 
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ transform: 'translateZ(0)' }} 
      >
        {/* ALTURA DEL CONTENEDOR: 
            Aumentamos a h-24 (96px) para que el logo tenga espacio real de respiración.
            Al scrollear baja a h-20 (80px).
        */}
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-24 md:h-28"
        }`}>
          
          {/* LOGO: Ahora con h-16/h-20 reales */}
          <Link href="/" className="flex items-center z-[120]" onClick={() => setOpen(false)}>
            {mounted ? (
              <img
                src={logoSrc}
                alt="Arena Negra"
                className={`w-auto object-contain transition-all duration-500 hover:scale-105 will-change-transform ${
                  scrolled ? "h-12 md:h-16" : "h-16 md:h-20"
                }`}
              />
            ) : (
              <div className="h-16 w-40" />
            )}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-[11px] font-black hover:text-vista transition-colors tracking-[0.25em] uppercase text-foreground/80">Home</Link>
            <Link href="/colmena" className="text-[11px] font-black hover:text-vista transition-colors tracking-[0.25em] uppercase text-foreground/80">Colmena</Link>
            
            <div className="h-6 w-px bg-card-border mx-2" />
            
            <ThemeToggle />
            
            <Link
              href="/contacto"
              className="px-10 py-4 bg-foreground text-background text-[11px] font-black rounded-full hover:bg-vista hover:text-white transition-all shadow-2xl uppercase tracking-[0.2em] active:scale-95 shadow-dev/5"
            >
              Contacto
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-5 md:hidden z-[120]">
            <ThemeToggle />
            <button 
              className="p-2 text-foreground focus:outline-none" 
              onClick={() => setOpen(!open)}
            >
              <div className="space-y-2 w-7">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'w-4 ml-auto'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MÓVIL (Mismo código anterior) */}
      <div className={`fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-3xl md:hidden z-[105] transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full px-8 pt-20">
          <div className="flex flex-col items-center space-y-12 w-full max-w-[300px]">
            <Link href="/" onClick={() => setOpen(false)} className="text-3xl font-black tracking-[0.5em] text-foreground">HOME</Link>
            <Link href="/colmena" onClick={() => setOpen(false)} className="text-3xl font-black tracking-[0.5em] text-foreground">COLMENA</Link>
            <div className="w-12 h-px bg-card-border" />
            <Link href="/contacto" onClick={() => setOpen(false)} className="w-full py-6 bg-foreground text-background dark:bg-vista dark:text-white font-black rounded-full text-center text-xl shadow-2xl active:scale-95 uppercase tracking-widest">CONTACTO</Link>
          </div>
        </div>
      </div>
    </>
  );
}