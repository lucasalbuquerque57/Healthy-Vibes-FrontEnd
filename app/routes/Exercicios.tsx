import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { ExercicioBase } from "~/components/Exercicio_Base";
import { FiltroBarra } from "~/components/Filtro_Barra";

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





            {/* <div className="linhaBotaoFiltro">
                <button type="button" className="btn btn-primary md-2 filtroBtn" data-bs-toggle="collapse" data-bs-target="#barraDeFiltros">Filtros</button>
            </div> */}
            {/* botao ta so semifuncionando por algum motivo q n to conseguindo descobrir */}


            <div className="container-fluid d-flex align-items-center">
                <FiltroBarra />
                <section className="card-container">
                    <ExercicioBase
                        imgSrc="peito.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Mulher fazendo exercício de braço"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                    <ExercicioBase
                        imgSrc="abraco.png"
                        altImg="Um pão e copo de água"
                        cardTitle="Recursos adicionais"
                        textoCard="Monitore seu IMC, consumo de água e calorias"
                        link="/"
                    />

                </section>
            </div>

            <Footer />
        </main >
    );
}
