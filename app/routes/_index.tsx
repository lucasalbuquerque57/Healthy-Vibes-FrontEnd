import type { V2_MetaFunction } from "@remix-run/node";
import { LinksFunction, LoaderArgs, json } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import home from "~/styles/home.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: home },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
  ];
};

export default function Index() {
  return (
 
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header/>
      <div className="bannerPrincipal">
        <img src="/BannerPic.png" className="bannerImage"/>
        <div className="textoCentradoBanner">
          <h1 className="Title textoCentradoBannerContent">Melhore sua Vida! </h1>
          <h2 className="Title textoCentradoBannerContent">Sla </h2>
        </div>
      </div>
      <div className="parteFuncoes">
        <h3 className="subtitulo">Navegue entre as </h3>
        <h3 className="subtitulo">funções do site </h3>

        <div className="card-group">
          <div className="card">
            <img src="/SchwarzIcon.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Função 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet varius mattis. Nulla feugiat tempus ex id laoreet. </p>
            </div>
          </div>
          <div className="card">
            <img src="/SchwarzIcon.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Função 2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet varius mattis. Nulla feugiat tempus ex id laoreet. </p>
            </div>
          </div>
          <div className="card">
            <img src="/SchwarzIcon.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Função 3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet varius mattis. Nulla feugiat tempus ex id laoreet. </p>
            </div>
          </div>
        </div>

      </div>
      

      <Footer />
    </div>
  );
}
