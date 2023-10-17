import type { LinksFunction, MetaFunction } from "@remix-run/node";




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
    </main>
  );
}
