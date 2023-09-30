import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";

import calculadoras from "~/styles/calculadoras.css"
import { Link } from "@remix-run/react";
import { Modal } from "react-bootstrap";




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
          <h6>Qual é o seu tipo de dieta?</h6>
        </div>
        <div className="row m-auto cardBox">
          <div className="column">
            <div className="card">
              <img src="/" className="card-img-top img-responsive" alt="..." />
              <h5 className="card-title">Recursos adicionais</h5>
              <div className="textoCard">Monitore seu IMC, consumo de água e calorias</div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/" className="card-img-top" alt="..." />
              <h5 className="card-title">Exercícios</h5>
              <div className="textoCard">Escolha entre diversos exercícios de acordo com suas prioridades</div>
            </div>
          </div>
          <div className="column">
            <Link to="/CalculadoraNutricional" style={{ textDecoration: 'none' }}>
              <div className="card" >
                <img src="/" className="card-img-top" alt="..." />
                <h5 className="card-title">Calculadora nutricional</h5>
                <div className="textoCard">Monte sua dieta conforme suas necessidades específicas</div>
              </div>
            </Link>
          </div>

        </div>






      </main>

      <Footer />
    </div>
  );
}
