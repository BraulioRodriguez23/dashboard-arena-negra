// src/components/Topbar.tsx
import Link from "next/link";

export default function Topbar() {
  return (
    <nav className="fixed top-0 left-0 w-full text-ligero z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex items-center h-15 px-6">
        <div></div>

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center scale-150 hover:scale-100 transition-transform"
        >
          <img
            src="/AND_Blanco.png"
            alt="Arena Negra Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-8 items-center ml-auto mr-6 ">
          {/* HOME */}
          <Link
            href="/"
            className="hover:text-plumb transition-colors font-medium"
          >
            Home
          </Link>
          {/* ABOUT */}
          {/*    <Link
                        href="/about"
                        className="hover:text-plumb transition-colors font-medium"
                    >
                        About
                    </Link> */}

          {/* DROPDOWN PRODUCTOS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-plumb transition-colors font-medium py-2 rounded-lg">
              Productos
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* MENÚ */}
            <div
              className="
  absolute top-full left-0 mt-3 min-w-60 rounded-lg
  bg-white text-gray-800 shadow-xl
  opacity-0 invisible
  group-hover:opacity-100 group-hover:visible
  transition-all duration-200
"
            >
              {/* Flecha */}
              <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />

              <div className="flex flex-col overflow-hidden rounded-lg">
                <Link
                  href="/colmena"
                  className="px-5 py-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="block font-semibold text-black">
                    Colmena
                  </span>
                  <span className="block text-xs text-gray-500">
                    Gestión de condominios
                  </span>
                </Link>

                {/* Producto futuro */}
                {/* 
                <div className="px-5 py-4 opacity-50 cursor-not-allowed">
                  <span className="block font-semibold">
                    Próximamente
                  </span>
                  <span className="block text-xs text-gray-500">
                    Nuevo producto
                  </span>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contacto"
          className="bg-ligero text-arena px-5 py-2 rounded-md font-semibold hover:bg-white transition-colors"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
