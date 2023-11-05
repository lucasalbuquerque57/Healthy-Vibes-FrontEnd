import type { LinksFunction, MetaFunction } from "@remix-run/node";

import dietaDetalhes from "~/styles/detalhesDietas.css"; /* troquei a folha de estilo p testar o uso de cards, o nome original era 'dietasDetalhes' */

import { CardRefeicao } from "./CardRefeicao";
import { Toast, ToastContainer} from "react-bootstrap";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: dietaDetalhes }];
};

export const meta: MetaFunction = () => ({
  title: "Dieta Genérica",
});

export default function DietasDetalhes() {
  return (
    <main>
      <ToastContainer
          className="position-sticky container-fluid"
          position="top-start"
          style={{ zIndex: 1 }}
        >
      <Toast>
      <Toast.Body className="fw-bold text-center fs-5">Dieta do Holandês</Toast.Body>
    </Toast>
    </ToastContainer>
    
      <div className="container-fluid">
        <CardRefeicao titulo="Café da Manhã" qtdReceita={3} idDieta="dwdw" />
        <CardRefeicao titulo="Al Mossar" qtdReceita={2} idDieta="dwdw" />
      </div>

    </main>
  );
}
