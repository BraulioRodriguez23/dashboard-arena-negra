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
    // Detectar scroll para añadir un sutil desenfoque solo cuando bajas
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  const logoSrc = mounted && resolvedTheme === "dark" 
    ? "/AND_Blanco.png" 
    : "/AND_Negro.png";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled 
          ? "bg-background/40 backdrop-blur-md border-b border-card-border py-0" 
          : "bg-transparent border-b border-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative z-50">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {mounted ? (
            <img
              src={logoSrc}
              alt="Arena Negra"
              className="h-16 md:h-24 w-auto object-contain transition-transform hover:scale-105"
            />
          ) : (
            <div className="h-16 w-32" />
          )}
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium hover:text-vista transition tracking-wider uppercase text-foreground">Home</Link>
          <Link href="/colmena" className="text-sm font-medium hover:text-vista transition tracking-wider uppercase text-foreground">Colmena</Link>
          
          <ThemeToggle />
          
          <Link
            href="/contacto"
            className="px-8 py-2.5 bg-foreground text-background text-sm font-bold rounded-full hover:bg-vista hover:text-white transition-all shadow-lg"
          >
            Contacto
          </Link>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 text-foreground relative focus:outline-none" 
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5 w-7">
              <span className={`block h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* MENU MÓVIL - Mantiene el fondo para legibilidad */}
      <div 
        className={`fixed left-0 w-full bg-background/98 backdrop-blur-2xl transition-all duration-500 md:hidden border-b border-card-border shadow-2xl ${
          open 
            ? 'top-24 opacity-100 visible h-[calc(100vh-6rem)]' 
            : 'top-[-100%] opacity-0 invisible h-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 pb-20">
          <div className="flex flex-col items-center space-y-12 w-full max-w-[280px]">
            <Link href="/" onClick={() => setOpen(false)} className="text-3xl font-light tracking-[0.3em] text-foreground hover:text-vista transition">HOME</Link>
            <Link href="/colmena" onClick={() => setOpen(false)} className="text-3xl font-light tracking-[0.3em] text-foreground hover:text-vista transition">COLMENA</Link>
            
            <div className="w-12 h-px bg-card-border" />
            
            <Link 
              href="/contacto" 
              onClick={() => setOpen(false)} 
              className="w-full py-5 bg-foreground text-background font-black rounded-full text-center text-xl shadow-xl hover:bg-vista hover:text-white transition-colors"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}