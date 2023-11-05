import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita } from "./CardReceita";
import { Button } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: receitas }];
};

export const meta: MetaFunction = () => ({
  title: "Receitas",
});

// Vou colocar aqui para pegar localStorage ou hookstate e toda a logica que eu preciso

export default function Receitas() {
  const navigate = useNavigate();

  return (
    <main>
      <Header />

      <h2 className="dietaNome">Café da Manhã</h2>

      <div className="container-fluid d-flex justify-content-center align-items-center">
        <section className="card-container">
          <CardReceita title="Pão com Ovo" dificuldade="Fácil" porcao="1" descricao="Não esqueça do sal"/>

          <CardReceita title="Café" dificuldade="Fácil" porcao="2" descricao="Farinha de beterraba queimada no lugar de café"/>
        </section>
      </div>

      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center py-5 me-5">
          <div className="row gap-3">
            <Button
              type="button"
              className="ms-5 buttonForm col"
              size="lg"
              onClick={() => {
                navigate("/Macros/notSaved");
              }}
            >
              Detalhes Macro
            </Button>
            <Button
              type="submit"
              className="ms-5 buttonForm col"
              size="lg"
              onClick={() => {
                navigate("/CalculadoraNutricional");
              }}
            >
              Voltar para Calculadora
            </Button>
            <Button type="button" className="ms-5 buttonForm col" size="lg">
              Salvar Dieta
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
