import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import controleConsumo from "~/styles/controleConsumo.css";

import { CardAgua } from "~/components/Card_Agua";
import { CardCalorias } from "~/components/Card_Calorias";


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
            display: false,
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
            display: false,
            text: 'O que você comeu?',
        },
    },
};

const food = {
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

                <h1 className='first-title'>Controle de Consumo</h1>

                <div className='graphics'>
                    <div className="controlwater">
                        <div>
                            <h1 className="title">E aí, já bebeu água?</h1>
                        </div>
                        <div className="graphicwater">
                            <Doughnut options={options} data={water} />
                        </div>


                        <div className='container-fluid d-flex justify-content-center align-items-center'>
                            <div>

                                <CardAgua
                                    horario="12:20"
                                    quantidade="200"
                                />
                                <CardAgua
                                    horario="15:00"
                                    quantidade="300"
                                />
                            </div>

                            <div className='adiciona'>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </div>

                        </div>




                    </div>
                    <div className="controlfood">
                        <div>
                            <h1 className="titlefood">O que você comeu?</h1>
                        </div>
                        <div className="graphicfood">
                            <Doughnut options={optionsfood} data={food} />
                        </div>

                        <div className='container-fluid d-flex justify-content-center align-items-center'>
                            <CardCalorias
                                horario="14:43"
                                quantidade="732"
                            />

                            <div className='adiciona'>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}
