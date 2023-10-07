import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

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
        <div className="row barraPerfil text-center border rounded-pill py-2 textNav">
          <div className="col"> 
            <Link to="#">
              <h6>teste</h6> 
            </Link> 
          </div> 
          <div className="col"> 
            <h6>teste</h6>   
          </div> 
          <div className="col"> 
            <h6>teste</h6>  
          </div> 
          <div className="col"> 
            <h6>teste</h6>  
          </div> 
        
        </div>
      </nav>

      <Outlet />

      <Footer />
    </main>
  );
}
