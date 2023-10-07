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

const water = {
    options,
    labels: ["QT. de Água", "QT. Ideal de Água"],
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

const food = {
    optionsfood,
    labels: ["QT. de Calorias Ingeridas", "QT. Ideal de Calorias"],
    datasets: [
        {
            label: 'Controle de Calorias',
            data: [932, 2500],
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

                <div className='graphics'>
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
                            <h1 className="titlefood">O que você comeu?</h1>
                        </div>
                        <div className="graphicfood">
                            <Doughnut data={food} />
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}
