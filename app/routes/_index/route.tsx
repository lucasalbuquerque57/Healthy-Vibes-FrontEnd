import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import home from "~/styles/home.css";
import CardsHome from "./CardsHome";


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


      <CardsHome />


      <Footer />
    </main>

  );
}
