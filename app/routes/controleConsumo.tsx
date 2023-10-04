import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

const data = {
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



export const meta: MetaFunction = () => ({
    title: "Controle de Consumo"
});


export default function ControleConsumo() {
    return (
        <div>
            <Header />
            <main id="conteudo" className="container-fluid texto">

                <div className="col-lg-6">
                    <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                        <Doughnut data={data} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
