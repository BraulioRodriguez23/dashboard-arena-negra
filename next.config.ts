/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. OPTIMIZACIÓN DE IMÁGENES
  images: {
    // Permite que Next.js genere versiones AVIF (más ligeras que WebP)
    formats: ['image/avif', 'image/webp'],
    // Define los anchos de pantalla para generar imágenes responsivas automáticamente
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Calidad de compresión (75 es el punto dulce entre peso y fidelidad)
    quality: 75,
  },

  // 2. RENDIMIENTO DEL BUNDLE
  // Minificación agresiva usando SWC (el compilador rápido de Rust)
  swcMinify: true,
  
  // 3. LIMPIEZA DE CÓDIGO EN PRODUCCIÓN
  compiler: {
    // Elimina console.logs en producción para ahorrar bytes
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },

  // 4. SEGURIDAD Y SEO
  // Forzar que el sitio solo se cargue en marcos del mismo origen (Mitiga Clickjacking)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },

  // 5. ESTABILIDAD
  reactStrictMode: true,
};

export default nextConfig;