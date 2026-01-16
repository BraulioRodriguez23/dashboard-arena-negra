import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers"; // 👈 Importamos el nuevo provider
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colmena Landing",
  description: "Landing page oficial de Colmena",
  icons: {
    icon: "/icono.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning es obligatorio para next-themes
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Topbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}