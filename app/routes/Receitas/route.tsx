import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";


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
                <h1>Café da Manhã</h1>


                <p className="gerarNov">Gerar Novamente</p>


            </div>

            <Footer />
        </main>
    );
}