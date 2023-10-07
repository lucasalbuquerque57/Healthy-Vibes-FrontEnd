import type { LinksFunction, MetaFunction } from "@remix-run/node";


import acompanharProgresso from "~/styles/acompanharProgresso.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: acompanharProgresso },
  ];
};


export default function AcompanharProgresso() {
  return (

    <main>
      <div className="container-prog">
                <div className="campo-prog">
                    <div>
                        <label className="rotulo">Altura</label>
                    </div>
                    <input type="text" id="nome" name="nome" placeholder="1.87" />
                </div>
                <div className="campo-prog">
                    <div>
                        <label className="rotulo">Peso</label>
                    </div>
                    <input type="email" id="email" name="email" placeholder="87.6" />
                </div>
                <div className="buttonAdd">
                    <button type="button" className="stylebutton">Adicionar</button>
                </div>
      </div>
    </main>
  );
}
