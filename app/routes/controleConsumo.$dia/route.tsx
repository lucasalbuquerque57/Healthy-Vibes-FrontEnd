import type { LoaderArgs, LinksFunction, MetaFunction } from "@remix-run/node";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import controleConsumo from "~/styles/controleConsumo.css";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { CardInfos } from "./CardInfos";
import ModalInsert from "./ModalInsert";



ChartJS.register(ArcElement, Tooltip, Legend, Title);


export async function loader({
    params,
}: LoaderArgs) {

    if (params.dia?.includes(".")) {

        const diaMes = params.dia || ""

        return diaMes.replace(".", "/");
    } else {
        return ""
    }

}


export const meta: MetaFunction<typeof loader> = ({
    data,
}) =>
({
    title: "Dia: " + data
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
    const [contentModal, setContentModal] = useState("");
    const handleClose = () => setShow(false);

    function handleShow(typeOperation: string) {
        setShow(true);
        setContentModal(typeOperation)
    }

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

                        <div className='container d-flex justify-content-center align-items-center'>

                            <div className="row g-2 pt-3">

                                <CardInfos
                                    horario="15:00"
                                    quantidade="300 Ml"
                                />

                                <CardInfos
                                    horario="12:20"
                                    quantidade="200 Ml"
                                />


                                <div className="col">
                                    <Button variant="success" onClick={() => handleShow("Água")} className="m-md-4 float-end float-md-none">
                                        <i className="fa-solid fa-circle-plus fa-2xl"></i>
                                    </Button>
                                </div>


                            </div>


                        </div>

                    </div>
                    <div className="controlfood col">
                        <h1 className="titlefood text-center my-3">O que você comeu?</h1>
                        <div className="graphicfood d-flex justify-content-center align-items-center">
                            <Doughnut options={optionsfood} data={food} />
                        </div>

                        <div className='container d-flex justify-content-center align-items-center'>
                            <div className="row g-2 pt-3 ">
                                <CardInfos
                                    horario="15:00"
                                    quantidade="300 Kcal"
                                />
                                <CardInfos
                                    horario="12:20"
                                    quantidade="200 Kcal"
                                />

                                <div className="col">
                                    <Button variant="success" onClick={() => handleShow("Calorias")} className="m-md-4 float-end float-md-none">
                                        <i className="fa-solid fa-circle-plus fa-2xl"></i>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <ModalInsert
                modal={{
                    onHide: handleClose,
                    show: show,
                }}
                formFor={contentModal}
            />

            <Footer />
        </main>
    );
}
