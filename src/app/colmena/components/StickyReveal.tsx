"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  imageSrc: string;
  alt: string;
}

export default function StickyReveal({ imageSrc, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const calculateDistance = () => {
      if (imgRef.current) {
        const imgH = imgRef.current.offsetHeight;
        const vh = window.innerHeight;
        setScrollDistance(imgH > vh ? imgH - vh : 0);
      }
    };

    const timeout = setTimeout(calculateDistance, 100);
    window.addEventListener("resize", calculateDistance);
    return () => {
      window.removeEventListener("resize", calculateDistance);
      clearTimeout(timeout);
    };
  }, [imageSrc]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section 
      ref={containerRef} 
      // CAMBIO: bg-background para que sea blanco en light y arena en dark
      className="relative w-full bg-background transition-colors duration-500"
      style={{ height: `calc(100vh + ${scrollDistance}px)` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute top-0 left-0 w-full">
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className="w-full h-auto block"
            onLoad={(e) => {
              const height = e.currentTarget.offsetHeight;
              setScrollDistance(height > window.innerHeight ? height - window.innerHeight : 0);
            }}
          />
        </motion.div>

        {/* Badge superior dinámico */}
        <div className="absolute top-8 left-8 z-20">
          {/* CAMBIO: bg-card/40, border-card-border y texto dev */}
          <div className="px-4 py-1.5 bg-card/40 backdrop-blur-md border border-card-border rounded-full text-dev text-[9px] uppercase tracking-[0.4em] font-medium shadow-lg">
            {alt}
          </div>
        </div>

        {/* Gradiente de salida opcional para suavizar el final del scroll */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}