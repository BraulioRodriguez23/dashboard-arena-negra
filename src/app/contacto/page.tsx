'use client'
import Link from "next/link";
import Image from "next/image";
import { section } from "framer-motion/client";
import ContactForm from "./components/ContactForm";

export default function ContactoPage() {
    return(
        <section className="relative bg-[var(--bg-dark)] text-[var(--text-light)] py-28 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-14 items-start">
                    {/* TEXTO */}
                    <div>
                        <span className="text-sm uppercase tracking-widest text-[#7E73F2]">
                            Contacto
                        </span>
                        <h2 className="text-4xl font-bold mt-2">¿Tienes alguna pregunta?</h2>
                        <p className="mt-4">¡No dudes en contactarnos! Estamos aquí para ayudarte con cualquier duda o consulta que tengas.</p>
                        <div className="mt-8 space-y-4 text-[#F7F6F4]/80">
                            <p>
                                <span className="font-semibold">Email:</span> arenanegradevelop@gmail.com
                            </p>
                            {/* <p><span className="font-semibold">Teléfono:</span> +57 300 123 4567</p> */}
                            <span className="font-semibold">Ubicacion:</span> Colima, México
                        </div>
                    </div>
                    {/* FORMULARIO DE CONTACTO */}
                    <ContactForm />
                </div>
            </div>
            </section>
    )
}