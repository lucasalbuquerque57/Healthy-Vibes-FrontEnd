import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import exercicios from "~/styles/exercicios.css";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});

export default function Exercicios() {


    return (
        <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <Header />

            {/* Tenta usar o do react bootstrap */}

            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filtrar</button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>


            <div className="cardExercicio"></div>


            <div className="card" style={{ width: "18rem" }}>
                <img src="/treino/abdominal.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Abdominal</h5>
                    <p className="card-text linkExerc">Ver mais</p>
                </div>
            </div>

            <Footer />
        </main >
    );
}
