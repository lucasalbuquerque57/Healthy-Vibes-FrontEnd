
import controleConsumo from "~/styles/controleConsumo.css";

import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => ({
    title: "controle Consumo"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};
export default function ControleConsumo() {

    return (
        <main>
            <Header />
            <div id="conteudo" className="container-fluid texto">

                <h1 className='first-title'>Controle de Consumo</h1>

            </div>

            <Footer />
        </main>
    );
}
