'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mregwjvy', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus('idle');
      alert('Algo salió mal. Intenta de nuevo.');
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            // CAMBIO: bg-card y border-dev
            className="bg-card border border-dev/30 rounded-2xl p-10 text-center backdrop-blur-xl shadow-2xl"
          >
            <div className="w-16 h-16 bg-dev/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-dev" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
               </svg>
            </div>
            {/* CAMBIO: text-foreground */}
            <h3 className="text-2xl font-light text-foreground mb-2 tracking-tight">¡Mensaje Recibido!</h3>
            <p className="text-muted font-light">
              Nos pondremos en contacto con usted a la brevedad posible.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              {/* CAMBIOS EN INPUTS: bg-card, border-card-border, text-foreground */}
              <input
                name="name"
                required
                placeholder="Nombre completo"
                className="w-full p-4 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:border-dev outline-none transition-all font-light shadow-sm"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Correo corporativo"
                className="w-full p-4 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:border-dev outline-none transition-all font-light shadow-sm"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono de contacto"
                className="w-full p-4 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:border-dev outline-none transition-all font-light shadow-sm"
              />

              <input
                name="condominio"
                required
                placeholder="Nombre del condominio / empresa"
                className="w-full p-4 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:border-dev outline-none transition-all font-light shadow-sm"
              />

              <textarea
                name="direccion"
                required
                placeholder="Dirección o detalles adicionales"
                rows={3}
                className="w-full p-4 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:border-dev outline-none transition-all font-light resize-none shadow-sm"
              ></textarea>
            </div>

            <input type="text" name="_gotcha" className="hidden" />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              // CAMBIO: bg-foreground text-background (botón negro en light, blanco en dark)
              className="w-full bg-foreground text-background font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-dev hover:text-black transition-colors duration-500 shadow-xl"
            >
              {status === 'loading' ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                  <span>Procesando...</span>
                </>
              ) : (
                'Solicitar Consultoría'
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}