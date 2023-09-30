import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Tabs, Tab } from "react-bootstrap";


import dietaDetalhes from "~/styles/dietasDetalhes.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dietaDetalhes },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  ];
};




export default function DietasDetalhes() {
  return (

    <main>
      <div className="fundoTeste">
        <Header />
        {/* <div className="opcoesMenu d-flex justify-content-center">
        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
        <label className="btn btn-secondary pontaEsquerda" htmlFor="option1">Dietas salvas</label>
        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
        <label className="btn btn-secondary" htmlFor="option2">Acompanhar Progresso</label>
        <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
        <label className="btn btn-secondary" htmlFor="option3">Meus exercicíos</label>
        <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
        <label className="btn btn-secondary pontaDireita" htmlFor="option4">Configurações</label>
      </div> */}

        <div className="Abas">
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            justify

          >
            <Tab eventKey="dietasSalvas" title="Dietas Salvas" className="tab-teste">
              <div className="tituloDieta">
                <h1>Dieta Tal</h1>
              </div>
              <div>

              </div>
            </Tab>
            <Tab eventKey="acompanharProg" title="Acompanhar Progresso" className="tab-teste">
              Tab content for Profile
            </Tab>
            <Tab eventKey="meusExerc" title="Meus Exercícios" className="tab-teste" >
              Tab content for Contact
            </Tab>
            <Tab eventKey="config" title="Configurações" className="tab-teste" >
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>

        <Footer />
      </div>
    </main>
  );
}
