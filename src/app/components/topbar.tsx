"use client";

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
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
            ? "bg-background/70 backdrop-blur-xl border-b border-card-border py-0 shadow-sm" 
            : "bg-transparent border-b border-transparent py-2"
        }`}
        style={{ transform: 'translateZ(0)' }} 
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center z-[120]" onClick={() => setOpen(false)}>
            {mounted ? (
              <img
                src={logoSrc}
                alt="Arena Negra"
                className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105 will-change-transform"
              />
            ) : (
              <div className="h-12 w-32" />
            )}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[10px] font-black hover:text-vista transition-colors tracking-[0.2em] uppercase text-foreground/70">Home</Link>
            <Link href="/colmena" className="text-[10px] font-black hover:text-vista transition-colors tracking-[0.2em] uppercase text-foreground/70">Colmena</Link>
            
            <div className="h-4 w-px bg-card-border mx-2" />
            
            <ThemeToggle />
            
            <Link
              href="/contacto"
              className="px-8 py-3 bg-foreground text-background text-[10px] font-black rounded-full hover:bg-vista hover:text-white transition-all shadow-xl uppercase tracking-widest active:scale-95"
            >
              Contacto
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-4 md:hidden z-[120]">
            <ThemeToggle />
            <button 
              className="p-2 text-foreground focus:outline-none" 
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className="space-y-1.5 w-6">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MÓVIL FULL SCREEN */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-3xl md:hidden z-[105] transition-all duration-500 ease-in-out ${
          open 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 pt-20">
          <div className="flex flex-col items-center space-y-10 w-full max-w-[280px]">
            <Link href="/" onClick={() => setOpen(false)} className="text-2xl font-black tracking-[0.4em] text-foreground">HOME</Link>
            <Link href="/colmena" onClick={() => setOpen(false)} className="text-2xl font-black tracking-[0.4em] text-foreground">COLMENA</Link>
            
            <div className="w-10 h-px bg-card-border" />
            
            <Link 
              href="/contacto" 
              onClick={() => setOpen(false)} 
              className="w-full py-5 bg-dev text-black dark:bg-vista dark:text-white font-black rounded-full text-center text-lg shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}