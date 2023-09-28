import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";

import calculadoras from "~/styles/calculadoras.css";

import Modal from "react-bootstrap/Modal";
import Link from "react-bootstrap/Modal";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calculadoras },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Calculadora Nutricional",
});

export default function CalculadoraNutricional() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <main
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <div className="tituloPagina">Calculadora Nutricional</div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              Aviso em nome de sua saúde
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Essa calculadora utiliza do cálculo Gasto Energético Basal (GEB)
              para determinar quantas calorias, proteínas e gordura deve-se
              consumir
            </p>
            <h4>
              Vale Ressaltar: Este site não substitui uma consulta com
              especialistas médicos
            </h4>
          </Modal.Body>
        </Modal>

        <div>
          <h6 className="tituloCategoria">Qual é o seu tipo de dieta?</h6>
        </div>
        <div className="row m-auto cardBox">
          <div className="card cardTeste">
            <img
              className="card-img-top imgTipoDieta"
              src="/calculadora/tudo_Cnutricional.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text cardTxtTipoDieta">Tudo</p>
            </div>
          </div>
          <div className="card cardTeste">
            <img
              className="card-img-top imgTipoDieta"
              src="/calculadora/vegetariana_Cnutricional.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text cardTxtTipoDieta">Vegetariana</p>
            </div>
          </div>
          <div className="card cardTeste">
            <img
              className="card-img-top imgTipoDieta"
              src="/calculadora/cetogenica_Cnutricional.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text cardTxtTipoDieta">Cetogênica</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
