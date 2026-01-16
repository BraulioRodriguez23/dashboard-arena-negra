'use client';

import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function HomePage() {
  return (
    // CAMBIO: bg-background y text-foreground para control total del tema
    <section className="relative bg-background text-foreground min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 transition-colors duration-500">
      
      {/* GLOW DINÁMICO: Cambia de opacidad según el tema */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 dark:opacity-100 pointer-events-none transition-opacity duration-500" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* TÍTULO */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.05] text-foreground"
        >
          Transformamos la complejidad <br className="hidden md:block" />
          en <span className="text-dev italic font-normal">tiempo libre</span>.
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-light"
        >
          Diseñamos ecosistemas digitales inteligentes que automatizan tus procesos
          y eliminan el caos operativo. Tecnología que trabaja para ti.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-12 justify-center items-center"
        >
          <Link
            href="/colmena"
            className="w-full sm:w-auto px-10 py-4 bg-dev text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(var(--dev-rgb),0.3)]"
          >
            Ver Productos
          </Link>

          <Link
            href="/contacto"
            // CAMBIO: El borde ahora es dinámico (foreground/20)
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-foreground/20 text-foreground font-bold rounded-full transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}