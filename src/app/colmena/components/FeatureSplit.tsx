// app/colmena/components/FeatureSplit.tsx
import Image from "next/image";

interface FeatureSplitProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

export default function FeatureSplit({ title, description, imageSrc, reverse = false }: FeatureSplitProps) {
  return (
    <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 py-16 transition-colors duration-500`}>
      
      {/* BLOQUE DE TEXTO */}
      <div className="w-full md:w-1/2 text-left">
        {/* CAMBIO: text-foreground */}
        <h3 className="text-3xl md:text-5xl font-light text-foreground mb-6 tracking-tighter leading-tight">
          {title}<span className="text-dev">.</span>
        </h3>
        {/* CAMBIO: text-muted */}
        <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-prose">
          {description}
        </p>
      </div>

      {/* CONTENEDOR DE IMAGEN CON SCROLL INTERNO */}
      <div className="w-full md:w-1/2">
        {/* CAMBIO: border-card-border y bg-card */}
        <div className="relative w-full h-[450px] md:h-[600px] overflow-y-auto scrollbar-hide rounded-[2rem] border border-card-border bg-card shadow-2xl group">
          
          <div className="w-full min-h-[140vh] md:min-h-[220vh] relative">
            <Image 
              src={imageSrc} 
              alt={title} 
              width={1200}
              height={2400}
              priority
              className="w-full h-auto object-cover object-top block"
            />
            
            {/* Overlay sutil al final: ahora usa un degradado dinámico hacia bg-card */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-card to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-dev text-[10px] uppercase tracking-[0.3em]">Fin del módulo</span>
            </div>
          </div>
          
        </div>
        {/* Indicador de scroll - text-muted con opacidad baja */}
        <p className="text-muted/50 text-[10px] uppercase tracking-widest mt-4 text-center md:text-left">
            ← Deslice dentro del recuadro para ver más →
        </p>
      </div>
    </article>
  );
}