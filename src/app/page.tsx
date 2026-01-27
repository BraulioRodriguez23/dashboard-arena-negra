import Hero from "./components/hero";
import { About } from "./components/about";
import ProductHighlight from "./components/products";


export default function Home() {
  return (
    // CAMBIO: Envolvemos todo en <main> para accesibilidad
    // overflow-hidden previene que glows o animaciones generen scroll lateral innecesario
    <main className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION: El primer punto de contacto visual */}
      <Hero />
      
      {/* 2. PRODUCT HIGHLIGHT: Sección de Colmena */}
      <ProductHighlight />
      
      {/* 3. ABOUT: Información de la agencia */}
      <About />
      
    </main>
  );
}