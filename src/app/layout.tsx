import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  // display: 'swap' asegura que el texto sea legible mientras carga la fuente
  display: 'swap', 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Optimizamos el viewport para mejorar la puntuación de accesibilidad móvil
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F0ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arena Negra | Colmena - Administración sin fricción",
  description: "Landing page oficial de Colmena. Centraliza pagos, comunicación y operación diaria para tu condominio.",
  metadataBase: new URL('https://arenanegradevelopment.com'),
  icons: {
    icon: "/icono.png",
  },
  // Añadimos OpenGraph para mejorar el SEO y cómo se comparte en redes
  openGraph: {
    title: "Colmena | Arena Negra",
    description: "Administración de condominios sin fricción.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* PRECARGA CRÍTICA: Elimina el retraso de renderizado de 2.5s del LCP */}
        <link 
          rel="preload" 
          href="/sona_seleccion1.webp" 
          as="image" 
          fetchPriority="high" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-dev/30`}
        // suppressHydrationWarning en body también ayuda con next-themes
        suppressHydrationWarning
      >
        <Providers>
          <Topbar />
          {/* El contenido principal se envuelve en children, 
              pero asegúrate de que tus páginas usen la etiqueta <main> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}