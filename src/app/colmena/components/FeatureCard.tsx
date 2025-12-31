// components/FeatureCard.tsx
import React from "react";
import { IconProps } from "phosphor-react";

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.FC<IconProps>;
}

export default function FeatureCard({
  title,
  text,
  icon: IconComponent,
}: FeatureCardProps) {
  return (
    <div className="bg-arena p-8 rounded-2xl border border-[#F9F72F] shadow-yellow-300 shadow-2xl hover:shadow-md transition-all duration-300 flex flex-col items-start group">

      {/* Icono: sin fondo, blanco */}
      <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <IconComponent
          size={28}
          weight="duotone"
          className="text-white"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-zinc-500 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
