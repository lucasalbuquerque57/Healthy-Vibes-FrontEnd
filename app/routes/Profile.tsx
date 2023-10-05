import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import profile from "~/styles/profile.css";


export const meta: MetaFunction = () => ({
  title: "Perfil"
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: profile }];
};

export default function Profile() {
  return (
    <div>
      <Header />
      <main id="conteudo" className="container-fluid texto">
        <nav className="barraPerfil">
          <ul>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="*">Dietas Salvas</a>
            </li>
            <li>
              <a href="#">Acompanhar Progresso</a>
            </li>
            <li>
              <a href="#">Meus Exercícios</a>
            </li>
          </ul>
        </nav>
        <div className="dataperson">
        </div>
          <Outlet />

      </main>
      <Footer />
    </div>
  );
}
