import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import macro from "~/styles/macro.css";
import { Link } from "@remix-run/react";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: macro }];
};

export const meta: MetaFunction = () => ({
    title: "Macros"
});

export default function Index() {


    const data = {
        labels: ['Proteínas', 'Carboidratos', 'Gordura'],
        datasets: [
            {
                label: '% de calorias',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132,1)',
                    'rgba(54, 162, 235,1)',
                    'rgba(255, 206, 86,1)',
                    
                ]

            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                formatter: (value: number) => {
                    return value + '%';
                },
                color: '#FFF',
                font: {
                    size: 20,
                },
            },
        },
    };

    return (
        <main>
            <Header />

            <div className="container-fluid py-5">

                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="barraHoriz col-2 mt-4">
                            <Link to="/receitas">
                                <button type="button" title="Excluir" className="buttonCards m-2 ">
                                    <i className="px-2 fa-solid fa-arrow-left fa-2xl" style={{ color: "var(--text-quadenary)" }}>
                                    </i>
                                </button>
                            </Link>
                        </div>
                        <div className="headline text col-8">
                            <h1 className="title text-center py-3 labelSimples fw-bold">Macros</h1>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col d-flex flex-column justify-content-start align-items-center">

                        <div className="start pt-3 mb-4" >


                            <Pie data={data} options={options} className="graficoPizza" />

                        </div>


                    </div>
                    <div className="col d-flex flex-column justify-content-start align-items-center">
                        <div className="end" >

                            <div className="px-5">
                                <h4 className="fw-semibold fs-2 valTotais">Valores totais</h4>
                            </div>
                            <table className="table fs-4">
                                <tbody>
                                    <tr >
                                        <td>Calorias</td>
                                        <td>2414</td>
                                    </tr>
                                    <tr>
                                        <td>Proteínas</td>
                                        <td>43 g</td>
                                    </tr>
                                    <tr>
                                        <td>Carboidratos</td>
                                        <td>43 g</td>
                                    </tr>
                                    <tr>
                                        <td>Gorduras</td>
                                        <td>43 g</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main >

    );
}