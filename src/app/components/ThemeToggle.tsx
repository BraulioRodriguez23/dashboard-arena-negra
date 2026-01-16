'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "phosphor-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación asegurando que el cliente esté montado
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return (
    <div className="p-2 w-9 h-9" /> // Skeleton para evitar saltos de layout
  );

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        p-2.5 rounded-full transition-all duration-300 active:scale-90
        ${isDark 
          ? 'bg-dev/10 text-dev hover:bg-dev/20' // Modo Oscuro: Acento Miel
          : 'bg-navy/5 text-navy hover:bg-navy/10' // Modo Claro: Acento Navy
        }
      `}
      aria-label="Cambiar tema"
    >
      {isDark ? (
        <Sun size={20} weight="fill" className="animate-in fade-in zoom-in duration-300" />
      ) : (
        <Moon size={20} weight="fill" className="animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
}