import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F0ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
  // Evita el zoom accidental en inputs en iOS para mejorar accesibilidad
  maximumScale: 5, 
};

export const metadata: Metadata = {
  title: "Arena Negra | Colmena - Administración sin fricción",
  description: "Landing page oficial de Colmena. Centraliza pagos, comunicación y operación diaria para tu condominio.",
  metadataBase: new URL('https://arenanegradevelopment.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/icono.png",
  },
  openGraph: {
    title: "Colmena | Arena Negra",
    description: "Administración de condominios sin fricción.",
    type: "website",
    images: ['/sona_seleccion1.webp'],
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
        {/* DNS Prefetch y Preconnect: Ahorra ~100ms en la conexión de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PRECARGA CRÍTICA: Prioridad absoluta para el LCP */}
        <link 
          rel="preload" 
          href="/sona_seleccion1.webp" 
          as="image" 
          type="image/webp"
          fetchPriority="high" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-dev/30`}
        suppressHydrationWarning
      >
        <Providers>
          <Topbar />
          {/* El contenido está envuelto, asegurando que el navegador sepa donde empieza el flujo */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}