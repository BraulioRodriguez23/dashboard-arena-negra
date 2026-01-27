import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. OPTIMIZACIÓN DE IMÁGENES
  images: {
    // AVIF es un 20% más ligero que WebP, ideal para bajar esos 300KB
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // NOTA: 'quality' se eliminó de aquí en v15. Se usa en el componente <Image />
  },

  // 2. LIMPIEZA DE CÓDIGO
  compiler: {
    // Mantiene los errores para debug, pero quita logs pesados en producción
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },

  // 3. SEGURIDAD (Mejora las "Best Practices" en Lighthouse)
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

  // 4. ESTABILIDAD
  reactStrictMode: true,
  
  // swcMinify ya no es necesario, Next.js 15 lo usa por defecto.
};

export default nextConfig;