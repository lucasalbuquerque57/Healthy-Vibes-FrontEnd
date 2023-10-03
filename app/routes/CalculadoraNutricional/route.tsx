import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import calculadoras from "~/styles/calculadoras.css";
import FormCalculadora from "./FormCalculadora";
import ModalAviso from "./ModalAviso";
import ModalResultado from "./ModalResultado";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calculadoras },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Calculadora Nutricional",
});


export interface Resultados {
  calorias: number,
  carboidratos: number,
  gorduras: number,
  proteina: number,
  opcaoPeso: string
}

export default function CalculadoraNutricional() {

  const [show, setShow] = useState(false);
  const [resultados, setResultados] = useState<Resultados>();
  const handleClose = () => setShow(false);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />

      <div className="tituloPagina pt-4">Calculadora Nutricional</div>

      <h3 className="tituloCategoria">Qual é o seu tipo de dieta?</h3>

      <FormCalculadora
        show={setShow}
        resultados={setResultados}
      />

      <ModalResultado
        modal={{
          show: show,
          onHide: handleClose
        }}
        resultados={resultados}
      />

      <ModalAviso />
      <Footer />
    </main >
  );
}
