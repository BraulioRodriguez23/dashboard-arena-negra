// app/colmena/components/FeatureSplit.tsx
import Image from "next/image";

interface FeatureSplitProps {
  title: string; // Corregido: 'title' en lugar de 'tittle'
  description: string;
  imageSrc?: string;
  reverse?: boolean;
}

export default function FeatureSplit({
  title,
  description,
  imageSrc,
  reverse = false,
}: FeatureSplitProps) {
  return (
    <article
      className={`grid gap-12 items-center py-12 ${
        reverse ? "md:grid-cols-2 md:grid-flow-dense" : "md:grid-cols-2"
      }`}
    >
      {/* Contenedor de Imagen con Relación de Aspecto Controlada */}
      <div className="relative w-full h-[420px] md:h-[550px] rounded-2xl bg-[#1A1A1A] border border-white/5 shadow-2xl overflow-hidden group">
  {imageSrc ? (
    <Image
      src={imageSrc}
      alt={`Interfaz de ${title}`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
      priority
      quality={95}
    />
  ) : (
    <div className="flex items-center justify-center h-full bg-zinc-900 text-zinc-600">
      <span>Vista previa próximamente</span>
    </div>
  )}
</div>

      {/* Bloque de Texto */}
      <div className={reverse ? "md:pl-10" : "md:pr-10"}>
        <h3 className="text-3xl md:text-4xl font-bold text-[#F9F72F] mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-zinc-400 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}