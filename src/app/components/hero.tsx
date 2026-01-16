"use client";

import { motion, easeOut } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function HomePage() {
  return (
    <section className="relative bg-background text-foreground min-h-screen flex flex-col overflow-hidden transition-colors duration-500">
      
      {/* CAPA DE BRILLO (GLOW) DINÁMICO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Brillo que cambia de Amarillo (dev) a Azul (vista) */}
        <div className="absolute w-[80%] h-[60%] rounded-full bg-dev/20 dark:bg-vista/20 blur-[140px] transition-colors duration-700 opacity-80" />
        <div className="absolute w-[60%] h-[60%] rounded-full bg-dev/10 dark:bg-vista/15 blur-[100px] transition-colors duration-700 opacity-80" />
      </div>

      <div className="h-24 w-full" />

      <div className="grow flex items-center justify-center py-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-6 text-center -mt-20"
        >
          {/* TÍTULO */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95]"
          >
            Transformamos la <br className="hidden md:block" /> complejidad en{" "}
            <span className="text-dev dark:text-vista italic transition-colors duration-500">
              tiempo libre
            </span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed mb-12 font-medium tracking-tight"
          >
            Diseñamos ecosistemas digitales inteligentes que automatizan tus procesos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* BOTÓN PRIMARIO */}
            <a
              href="/colmena"
              className="w-full sm:w-auto px-12 py-5 font-black rounded-full uppercase tracking-widest text-xs
                         bg-dev text-black shadow-2xl shadow-dev
                         dark:bg-vista dark:text-white dark:shadow-vista
                         transition-all duration-500 hover:scale-105 active:scale-95"
            >
              Ver Productos
            </a>

            {/* BOTÓN SECUNDARIO */}
            <a
              href="/contacto"
              className="w-full sm:w-auto px-12 py-5 border-2 font-black rounded-full uppercase tracking-widest text-xs
                         border-foreground text-foreground
                         hover:bg-dev hover:border-dev hover:text-black
                         dark:hover:bg-vista dark:hover:border-vista dark:hover:text-white
                         transition-all duration-300"
            >
              Contacto
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-12 w-full hidden md:block" />
    </section>
  );
}