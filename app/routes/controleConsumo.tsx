import React from 'react';
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import controleConsumo from "~/styles/controleConsumo.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const meta: MetaFunction = () => ({
    title: "controleConsumo"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};

export const options = {
    /* scales: {
        y: {
            min: 0,
            max: 100,
        },
    }, */
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'E aí, já bebeu água?',
        },
    },
};

const opcao = ["QT. de Água", "QT. Ideal de Água"];

const labels = opcao;

const water = {
    options,
    labels,
    datasets: [
        {
            label: 'Controle de Água',
            data: [500, 2000],
            backgroundColor: [
                'rgba(175, 205, 223, 1.0)',
                'rgba(211, 211, 211, 1.0)'

            ]
        },
    ],
};

// Gráfico Calorias

export const optionsfood = {
    /* scales: {
        y: {
            min: 0,
            max: 100,
        },
    }, */
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'O que você comeu?',
        },
    },
};

const opcaofood = ["QT. de Calorias Ingeridas", "QT. Ideal de Calorias"];

const labelsfood = opcaofood;

const food = {
    optionsfood,
    labelsfood,
    datasets: [
        {
            label: 'Controle de Água',
            data: [732, 2500],
            backgroundColor: [
                'rgba(144, 238, 144, 1.0)',
                'rgba(211, 211, 211, 1.0)'

            ]
        },
    ],
};


export default function ControleConsumo() {
    return (
        <div>
            <Header />
            <main id="conteudo" className="container-fluid texto">

                <div className="controlwater">
                    <div>
                        <h1 className="title">E aí, já bebeu água?</h1>
                    </div>
                    <div className="graphicwater">
                        <Doughnut data={water} />
                    </div>
                </div>


                <div className="controlfood">
                    <div>
                        <h1 className="title">O que você comeu?</h1>
                    </div>
                    <div className="graphicfood">
                        <Doughnut data={food} />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
