import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";

import dietaDetalhes from "~/styles/dietasDetalhes.css";

export const links: LinksFunction = () => {
    return [
      { rel: "stylesheet", href: dietaDetalhes },
      { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
  };

export default function DietasDetalhes() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
          <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off"/>
          <label className="btn btn-secondary pontaEsquerda" htmlFor="option1">Dietas salvas</label>
          <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"/>
          <label className="btn btn-secondary" htmlFor="option2">Acompanhar Progresso</label>
          <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"/>
          <label className="btn btn-secondary" htmlFor="option3">Meus exercicíos</label>
          <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"/>
          <label className="btn btn-secondary pontaDireita" htmlFor="option4">Configurações</label>
        </div>
      
      <Footer />
    </div>
  );
}
