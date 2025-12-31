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
    <section className="relative bg-[#262626] text-[#F7F6F4] h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(126,115,242,0.15)_0%,_rgba(38,38,38,1)_70%)] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* TÍTULO */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Transformamos la complejidad <br className="hidden md:block" />
          en <span className="text-[#F9F72F]">tiempo libre</span>.
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl text-[#F7F6F4]/80 max-w-2xl mx-auto leading-relaxed"
        >
          Diseñamos ecosistemas digitales inteligentes que automatizan tus procesos
          y eliminan el caos operativo. Tecnología que trabaja para ti.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
        >
          <Link
            href="/colmena"
            className="px-8 py-3 bg-[#F9F72F] text-[#262626] font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,247,47,0.3)]"
          >
            Ver Productos
          </Link>

          <Link
            href="/contacto"
            className="px-8 py-3 bg-transparent border-2 border-[#7E73F2] text-[#F7F6F4] font-bold rounded-lg transition-all duration-300 hover:bg-[#7E73F2]"
          >
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
