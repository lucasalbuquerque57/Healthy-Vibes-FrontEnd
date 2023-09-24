import type { V2_MetaFunction } from "@remix-run/node";
import { useHookstate } from "@hookstate/core"
import { LinksFunction, LoaderArgs, json } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import React, { useState } from 'react';

import calculadoras from "~/styles/calculadoras.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calculadoras },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Calculadora Nutricional" },
  ];
};


export default function CalculadoraNutricional() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
 
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Header/>
        <main
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >

            <div className="tituloPagina">
                Calculadora Nutricional            
            </div>
            
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton >
              <Modal.Title className="text-center">Aviso em nome de sua saúde</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Essa calculadora utiliza do cálculo Gasto Energético Basal (GEB) para determinar quantas calorias, proteínas e gordura deve-se consumir</p>
              <h4>Vale Ressaltar: Este site não substitui uma consulta com especialistas médicos</h4>
    
            </Modal.Body>
          </Modal>

          <div className="avisoNutricaoFixo">
            <p>Essa calculadora utiliza do cálculo Gasto Energético Basal  (GEB) - Fórmula de Miffin-St Jeor, para determinar quantas calorias, proteínas e gorduras deve-se consumir.
              Utilizamos os resultados para gerar opções de refeições para sua dieta, que pode ser salva se estiver logado
            </p>
            <h5>Vale Ressaltar: Este site não substitue uma consulta com especialistas médicos; ESSA PORRA NÃO QUER SER CENTRALIZADA NA TELA</h5>
          </div>
          




        
        </main>

      <Footer />
    </div>
  );
}
