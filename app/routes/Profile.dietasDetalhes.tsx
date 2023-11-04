import type { LinksFunction, MetaFunction } from "@remix-run/node";




import dietaDetalhes from "~/styles/dietasDetalhes.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dietaDetalhes },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Exercícios Generico",
});

export default function DietasDetalhes() {
  return (

    <main>
     <div className="container-fluid">
      <div className="row">
        <div className="col-13 mt-4">
          <div className="card">
            <div className="card-horizontal">
              <div className="img-square-wrapper">
                <img
                  className=""
                  src="/PastaIcon.png"
                  alt="Card cap"
                />
              </div>
              <div className="card-body">
                <div className="card-titulo-botoes">
                  <h4 className="card-title">Algo vai aqui</h4>
                  <button className="opcoes">
                    <img src="/FavoriteIcon.png" alt=""></img>
                  </button>
                  <button className="opcoes">
                    <img src="/MoreIcon2.png" alt=""></img>
                  </button>
                </div>
                <p className="card-text">
                  Dificuldade: Médio
                </p>
                <p>
                  3 Porção(ões)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </main>
  );
}
