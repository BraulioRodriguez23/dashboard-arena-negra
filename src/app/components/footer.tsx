import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-[#F7F6F4]/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-[#F9F72F] mb-4">
            Colmena
          </h3>
          <p className="text-sm leading-relaxed">
            Software que reduce fricción, automatiza lo importante
            y te devuelve tiempo.
          </p>
        </div>
         <br />

        {/* Navegación */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Producto
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/colmena" className="hover:text-white">Colmena</Link></li>
            <li><Link href="/demo" className="hover:text-white">Solicitar demo</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
         

        {/* Empresa */}
        {/* <div>
          <h4 className="font-semibold mb-4 text-white">
            Empresa
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/privacidad" className="hover:text-white">Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:text-white">Términos</Link></li>
          </ul>
        </div> */}

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Colima, México</li>
            <li>
              <a
                href="mailto:arenanegradevelop@gmail.com"
                className="hover:text-white"
              >
                arenanegradevelop@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-[#F7F6F4]/50">
        © {new Date().getFullYear()} Colmena. Todos los derechos reservados.
      </div>
    </footer>
  );
}
