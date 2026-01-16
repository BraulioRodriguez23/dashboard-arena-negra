'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // CAMBIO: bg-background y text-muted para adaptabilidad total
    <footer className="bg-background text-muted border-t border-card-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          {/* CAMBIO: text-dev (Miel) para el nombre de marca */}
          <h3 className="text-xl font-bold text-dev mb-4">
            Colmena
          </h3>
          <p className="text-sm leading-relaxed">
            Software que reduce fricción, automatiza lo importante 
            y te devuelve tiempo.
          </p>
        </div>
        
        {/* Espaciador decorativo opcional */}
        <div className="hidden md:block" />

        {/* Navegación */}
        <div>
          {/* CAMBIO: text-foreground para encabezados */}
          <h4 className="font-semibold mb-4 text-foreground">
            Producto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/colmena" className="hover:text-dev transition-colors">
                Colmena
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-dev transition-colors">
                Solicitar demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Colima, México</li>
            <li>
              <a
                href="mailto:arenanegradevelop@gmail.com"
                className="hover:text-dev transition-colors"
              >
                arenanegradevelop@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      {/* CAMBIO: Borde dinámico y texto muted suave */}
      <div className="border-t border-card-border py-6 text-center text-xs text-muted/50">
        © {currentYear} Colmena. Todos los derechos reservados.
      </div>
    </footer>
  );
}