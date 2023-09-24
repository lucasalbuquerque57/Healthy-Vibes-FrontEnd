import type { V2_MetaFunction } from "@remix-run/node";
import { useHookstate } from "@hookstate/core";
import { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import profile from "~/styles/profile.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Profile" }];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: profile }];
};

export default function Profile() {
  return (
    <div>
      <Header />
      <main id="conteudo" className="container-fluid texto">
        <nav className = "barraPerfil">
          <ul>
              <li><a href="#">Página Inicial</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
          </ul>
        </nav>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}
