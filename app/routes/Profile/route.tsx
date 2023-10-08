import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

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
    <main>

      <Header />

      <nav className="d-flex container-fluid justify-content-center align-items-center my-4">
        <div className="row barraPerfil text-center border rounded pt-3 textNav">
          <div className="col py-2 pt-md-0">
            <Link to="/Profile/Dietas" style={{ textDecoration: "none" }}>
              <h6>Dietas Salvas</h6>
            </Link>
          </div>
          <div className="col py-2 pt-md-0">
            <Link to="/Profile/Dietas" style={{ textDecoration: "none" }}>
              <h6>Acompanhar Progresso</h6>
            </Link>
          </div>
          <div className="col py-2 pt-md-0">
            <Link to="/Profile/Dietas" style={{ textDecoration: "none" }}>
              <h6>Meus Exercícios</h6>
            </Link>
          </div>
          <div className="col py-2 pt-md-0">
            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <h6>Configurações</h6>
            </Link>
          </div>

        </div>
      </nav>

      <Outlet />

      <Footer />
    </main>
  );
}
