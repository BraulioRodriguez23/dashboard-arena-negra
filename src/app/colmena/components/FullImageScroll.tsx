// app/colmena/components/FullImageScroll.tsx
import Image from "next/image";

interface FullImageScrollProps {
  imageSrc: string;
  alt: string;
}

export default function FullImageScroll({ imageSrc, alt }: FullImageScrollProps) {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
      
      {/* Contenedor principal con CSS inyectado para ocultar el scrollbar */}
      <div 
        className="relative w-full h-[500px] md:h-[750px] overflow-y-auto rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#0A0A0A] shadow-[0_0_100px_rgba(0,0,0,0.5)] group"
        style={{ 
          scrollbarWidth: 'none',           /* Firefox */
          msOverflowStyle: 'none',          /* IE y Edge */
          WebkitOverflowScrolling: 'touch'  /* Suavizado en iOS */
        }} 
      >
        {/* Este bloque oculta el scroll en Chrome, Safari y nuevas versiones de Edge */}
        <style dangerouslySetInnerHTML={{ __html: `
          div::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `}} />
        
        <div className="w-full min-h-[160vh] md:min-h-[250vh] relative">
          <Image 
            src={imageSrc} 
            alt={alt} 
            width={1600} 
            height={3200}
            priority
            className="w-full h-auto object-cover object-top block transition-opacity duration-700 opacity-90 group-hover:opacity-100"
          />
          
          <div className="sticky top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-medium italic">
              Vista Inmersiva: {alt}
            </span>
          </div>

          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 text-zinc-600">
        <div className="w-8 h-[1px] bg-zinc-800"></div>
        <p className="text-[10px] uppercase tracking-[0.3em] font-light">
          Deslice sobre la imagen para explorar el módulo
        </p>
        <div className="w-8 h-[1px] bg-zinc-800"></div>
      </div>
    </div>
  );
}