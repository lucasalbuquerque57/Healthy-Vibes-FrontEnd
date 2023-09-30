import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import home from "~/styles/home.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: home }];
};

export const meta: MetaFunction = () => ({
  title: "Home"
});

export default function Index() {
  return (
    <main>

      <Header />
      <div className="bannerPrincipal">
        <img src="/BannerPicV2.png" className="bannerImage" alt="Banner com frutas" />
        <div className="textoCentradoBanner">
          <h1 className="Title textoCentradoBannerContent">
            Melhore sua Vida!{" "}
          </h1>
          <h2 className="Title textoCentradoBannerContentSub">
            Com nossa ajuda{" "}
          </h2>
        </div>
      </div>
      <div className="parteFuncoes">
        <div>
          <h3 className="subtitulo">Navegue entre as </h3>
          <h3 className="subtituloPt2">funções do site </h3>
        </div>
      </div>


      <div className="row m-auto cardBox">
        <div className="column">
          <div className="card">
            <img src="/home/calculadora_home.png" className="card-img-top" alt="..." />
            <h5 className="card-title">Recursos adicionais</h5>
            <div className="textoCard">Monitore seu IMC, consumo de água e calorias</div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/home/exercicio_home.png" className="card-img-top" alt="..." />
            <h5 className="card-title">Exercícios</h5>
            <div className="textoCard">Escolha entre diversos exercícios de acordo com suas prioridades</div>
          </div>
        </div>
        <div className="column">
          <Link to="/CalculadoraNutricional" style={{ textDecoration: 'none' }}>
            <div className="card" >
              <img src="/home/recursos_home.png" className="card-img-top" alt="..." />
              <h5 className="card-title">Calculadora nutricional</h5>
              <div className="textoCard">Monte sua dieta conforme suas necessidades específicas</div>
            </div>
          </Link>
        </div>

      </div>
      {/* </div> */}

      <Footer />
    </main>

  );
}
