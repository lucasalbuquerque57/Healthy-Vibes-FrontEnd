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
        


        <div className="Abas">
          <Tabs
            defaultActiveKey="config"
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


              <form className="input-form">
                <div className="group-input">
                  
                  <label>Altura</label>
                  <input name="altura" />


                  <label>Peso</label>
                  <input name="peso" />


                  <button className="botao acomp">Adicionar</button>
                </div>
              </form>

              <div className="caixas">
                <div className="caixa-dados">
                  <p>IMC: 27,5</p>
                  <p>Data: 31/02/2012</p>
                  <button className="botao dado">excluir</button>
                  <button className="botao dado">editar</button>
                </div>
                <div className="caixa-dados">
                  <p>IMC: 27,5</p>
                  <p>Data: 31/02/2012</p>
                  <button className="botao dado">excluir</button>
                  <button className="botao dado">editar</button>
                </div>
              </div>

              <div className="grafico">
              Gráfico
              </div>

            </Tab>
            <Tab eventKey="meusExerc" title="Meus Exercícios" className="tab-teste" >
              Tab content for Contact
            </Tab>
            <Tab eventKey="config" title="Configurações" className="tab-teste" >
              <h2>Alterar Informações de Cadastro</h2>

              <form className="input-form">
              <div className="edit-group-input">
                  
                  <div className="row-input">
                  <input name="edit-nome" placeholder="Novo nome" />
                  <button className="botao edit-botao">Salvar</button>
                  </div>

                  <div className="row-input">
                  <input name="edit-email" type="email" placeholder="Insira o novo email" />
                  <button className="botao edit-botao">Salvar</button>
                  </div>

                  <div className="row-input">
                  <input name="edit-senha" type="password" placeholder="Insira a nova senha" />
                  <button className="botao edit-botao">Salvar</button>
                  </div>

                </div>
              </form>

            </Tab>
          </Tabs>
        </div>

      </div>
    </main>
  );
}
