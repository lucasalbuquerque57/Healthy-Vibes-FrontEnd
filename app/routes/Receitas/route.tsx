import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita } from "./CardReceita";
import { Button } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: receitas },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Receitas"
});


export default function Receitas() {
    const navigate = useNavigate();

    return (

        <main>


            <Header />

            <div className="blocoReceitas">

                <div className="container-receita">
                    <h1>Café da Manhã</h1>
                    <div className="container-gerar">
                        <p className="gerarNov">Gerar Novamente</p>
                        <img className="gerarNov" src="/IconRestaurar.png" alt=""></img>
                    </div>
                </div>

                <CardReceita title="Pão com Ovo" dificuldade="Fácil" porcao="1" />

                <CardReceita title="Café" dificuldade="Fácil" porcao="2" />

            </div>

            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center py-5 me-5">

                    <div className="row gap-3">
                        <Button type="button" className="ms-5 buttonForm col" size="lg"
                            onClick={() => { navigate("/Macros/notSaved") }}
                        >Detalhes Macro</Button>
                        <Button type="submit" className="ms-5 buttonForm col" size="lg"
                            onClick={() => { navigate("/CalculadoraNutricional") }}
                        >Voltar para Calculadora</Button>
                        <Button type="button" className="ms-5 buttonForm col" size="lg">Salvar Dieta</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}   