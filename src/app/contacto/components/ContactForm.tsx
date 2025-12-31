'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mregwjvy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('idle');
      alert('Algo salió mal. Intenta de nuevo.');
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#F9F72F] mb-2">
            ¡Gracias!
          </h3>
          <p className="text-[#F7F6F4]/70">
            Recibimos tus datos. Te contactamos muy pronto.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Nombre"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Correo"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono (opcional)"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            name="condominio"
            required
            placeholder="Nombre del condominio"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            name="direccion"
            required
            placeholder="Dirección del condominio"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          {/* anti-spam */}
          <input type="text" name="_gotcha" className="hidden" />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={status === 'loading'}
            className="w-full bg-[#F9F72F] text-[#262626] font-bold py-3 rounded-lg flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                Enviando...
              </>
            ) : (
              'Solicitar contacto'
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
