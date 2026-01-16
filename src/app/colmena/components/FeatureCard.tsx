import React from 'react';

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.ElementType;
}

export default function FeatureCard({ title, text, icon: Icon }: FeatureCardProps) {
  return (
    // CAMBIO: bg-card y border-card-border para el fondo y borde dinámico
    <div className="group p-6 md:p-8 rounded-4xl bg-card border border-card-border shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-dev/35">
      
      {/* El icono mantiene bg-dev/10 porque el color de acento (amarillo) funciona en ambos temas */}
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-dev/10 rounded-2xl text-dev transition-transform duration-500 group-hover:scale-110 mb-5">
        <Icon size={28} weight="duotone" />
      </div>

      <div>
        {/* CAMBIO: text-foreground para el título */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-tight">
          {title}
        </h3>
        
        {/* CAMBIO: text-muted para la descripción */}
        <p className="text-muted text-sm md:text-base leading-relaxed max-w-[46ch]">
          {text}
        </p>
      </div>
    </div>
  );
}