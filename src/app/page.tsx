import Image from "next/image";
import Topbar from "./components/topbar";
import Hero from "./components/hero";
import { About } from "./components/about";
import ProductHighlight from "./components/products";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProductHighlight/>
      <About/>
      
    </>
  );
}
