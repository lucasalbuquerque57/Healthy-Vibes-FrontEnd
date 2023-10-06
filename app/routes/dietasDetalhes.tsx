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
      <div>
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
            defaultActiveKey="dietasSalvas"
            id="fill-tab-example"
            className="mb-3"
            justify

          >
            <Tab eventKey="dietasSalvas" title="Dietas Salvas" className="tab-teste">

              <div className="container-fluid">

                <h1 className="tituloDieta">Dieta Tal</h1>

                <div className="titulo-refeicao">
                  <h2>Café da Manhã</h2>        
                  <button className="botao adiciona">Adicionar</button>        
                </div>
               
                  
                


                <div className="receita">
                  <img className="imagemComida" src="/IconeLogo.png" alt="finge que tem uma imagem aqui" />
                  <div className="textos-info">
                    <p className="texto">Torrada Integral com Salsa</p>
                    <p className="texto">Dificuldade: Fácil</p>
                    <p className="texto">Porções: 2</p>
                  </div>

                  <div className="botoes2">
                    <button className="botao">Favoritar</button>
                    <button className="botao">Opções</button>
                    <button className="botao">Excluir</button>
                  </div>
                </div>

                <div className="receita">
                  <img className="imagemComida" src="/IconeLogo.png" alt="finge que tem uma imagem aqui" />
                  <div className="textos-info">
                    <p className="texto">Sanduiche de Peito de Frango</p>
                    <p className="texto">Dificuldade: Fácil</p>
                    <p className="texto">Porções: 1</p>
                  </div>
                  
                  <div className="botoes2">
                    <button className="botao">Favoritar</button>
                    <button className="botao">Opções</button>
                    <button className="botao">Excluir</button>
                  </div>
                </div>

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
