import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita } from "./CardReceita";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: receitas },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Receitas"
});


export default function Receitas() {
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

                <CardReceita title="Pão com Ovo" dificuldade="Fácil" porcao="1"/>

                <CardReceita title="Café" dificuldade="Fácil" porcao="2"/>
          
            </div>
            <Footer />




        </main>
    );
}