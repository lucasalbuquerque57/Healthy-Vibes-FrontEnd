import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import controleConsumo from "~/styles/controleConsumo.css";

import { CardAgua } from "~/routes/controleConsumo/Card_Agua";
import { CardCalorias } from "~/routes/controleConsumo/Card_Calorias";
import { useState } from "react";
import ModalInsertAgua from "./ModalInsert_Agua";
import { Button } from "react-bootstrap";



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
            text: 'Quantidade Ideal de água: 2L',
        },
    },
};

const water = {
    options,
    labels: ["QT. de Água", "QT. Restante de Água"],
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
            text: 'Quantidade de Calorias desejadas: 20Kcal',
        },
    },
};

const food = {
    labels: ["QT. de Calorias Ingeridas", "QT. Restante de calorias"],
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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main>
            <Header />
            <div id="conteudo" className="container-fluid texto">

                <h1 className='first-title'>Controle de Consumo</h1>

                <div className='graphics row'>
                    <div className="controlwater col">

                        <h1 className="title text-center my-3">E aí, já bebeu água?</h1>

                        <div className="graphicwater d-flex justify-content-center align-items-center">
                            <Doughnut options={options} data={water} />
                        </div>

                        {/* Ainda tem que arrumar a Responsividade nessa parte */}
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

                            <Button variant="primary" onClick={handleShow}>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </Button>

                        </div>




                    </div>
                    <div className="controlfood col">
                        <h1 className="titlefood text-center my-3">O que você comeu?</h1>
                        <div className="graphicfood d-flex justify-content-center align-items-center">
                            <Doughnut options={optionsfood} data={food} />
                        </div>

                        {/* Nessa tb */}
                        <div className='container-fluid d-flex justify-content-center align-items-center'>
                            <CardCalorias
                                horario="14:43"
                                quantidade="732"
                            />

                            <div className='adiciona'>

                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <ModalInsertAgua
                modal={{
                    onHide: handleClose,
                    show: show,
                }}
            />
            <Footer />
        </main>
    );
}
