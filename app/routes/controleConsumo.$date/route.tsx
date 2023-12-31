import type { LoaderArgs, LinksFunction, MetaFunction } from "@remix-run/node";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import controleConsumo from "~/styles/controleConsumo.css";

import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CardInfos } from "./CardInfos";
import ModalInsert from "./ModalInsert";
import { Link, useLoaderData } from "@remix-run/react";
import { useHookstate } from "@hookstate/core";
import { themePage } from "~/script/changeTheme";
import { axiosHealthyApi } from "~/configs/https";
import { DietInterfaceWithRecipes } from "../Profile.dietasDetalhes.$dietaID/route";


ChartJS.register(ArcElement, Tooltip, Legend, Title);

export async function loader({
    params,
}: LoaderArgs) {

    const urlParams = new URLSearchParams(params.date)

    const diaMes = new Date(urlParams.get("date") || "")

    if (diaMes.getDate() > 0) {

        return diaMes
    } else {
        throw new Error("Url inválida")
    }

}


export const meta: MetaFunction<typeof loader> = ({
    data,
}) => {

    const actualDate = new Date(data)

    return ({
        title: "Dia: " + actualDate.getUTCDate() + "/" + (actualDate.getMonth() + 1) + "/" + actualDate.getFullYear()
    })

};

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};

interface ConsumptionInterface {
    _id: string,
    quantidade: number,
    tipoConsumo: string,
    user: string,
    createdAt: string,
    belongDate: Date
}


export default function ControleConsumo() {
    const data = useLoaderData<typeof loader>();
    const [show, setShow] = useState(false);
    const [contentModal, setContentModal] = useState("");
    const [updateOrInsert, setUpdateOrInsert] = useState("insert");
    const [actualId, setActualId] = useState("");
    const handleClose = () => setShow(false);
    const changeTheme = useHookstate(themePage);

    function handleShow(typeOperation: string) {
        setShow(true);
        setContentModal(typeOperation)
    }

    const [actualDiet, setDietActualDiet] = useState("")
    const [diet, setDiet] = useState<DietInterfaceWithRecipes[]>([])
    const [totalCal, setTotalCal] = useState(0)


    useEffect(() => {
        for (let i = 0; i < diet.length; i++) {
            if (actualDiet == diet[i]._id) {
                const dietaEscolhida = diet[i].recipes;
                const CalCount = dietaEscolhida.reduce((accumulator, object) => { return accumulator + object.calorias }, 0)
                setTotalCal(CalCount)
                break;
            }
        }
    }, [actualDiet, diet])

    const actualDate = new Date(data)

    const [consumptions, setConsumptions] = useState<ConsumptionInterface[]>([])

    const handleGet = useCallback(async () => {
        const actualDate = new Date(data)
        await axiosHealthyApi
            .get("/consumptions/myConsumptions")
            .then((r) => {
                const filterConsumptions: ConsumptionInterface[] = r.data
                setConsumptions(
                    filterConsumptions.filter((c) => {
                        const date = new Date(c.belongDate)
                        return (date.getUTCDate() == actualDate.getUTCDate() && date.getUTCMonth() == actualDate.getUTCMonth() && date.getUTCFullYear() == actualDate.getUTCFullYear())
                    })
                );
            })
            .catch((e) => {
                console.log(e)
            });
    }, [data]);


    const handleGetDiet = useCallback(async () => {
        await axiosHealthyApi
            .get("/diets/myDiets")
            .then((r) => {
                setDiet(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
        handleGetDiet()
    }, [handleGet, handleGetDiet])

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Quantidade Ideal de água: 2L',
                color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)",
            },
            legend: {
                display: true,
                labels: {
                    color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
                }
            }
        },
    };
    const optionsfood = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${totalCal == 0 ? "Selecione uma dieta para basear o gráfico" : `Quantidade de Calorias desejadas: ${totalCal}cal`}`,
                color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)",
            },
            legend: {
                display: true,
                labels: {
                    color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
                }
            }
        },
    };

    const water = {
        labels: ["QT. de Água", "QT. Restante de Água"],
        datasets: [
            {
                label: 'Controle de Água',
                data: [
                    consumptions.filter((c) => c.tipoConsumo == "Água").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0),
                    consumptions.filter((c) => c.tipoConsumo == "Água").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0) <= 2000 ?
                        2000 - consumptions.filter((c) => c.tipoConsumo == "Água").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0) : 0
                ],
                color: [changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"],
                backgroundColor: [
                    changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(51,69,155, 0.61)",
                    changeTheme.get() == "contraOn" ? "rgba(30,30,30)" : "rgba(211, 211, 211, 1.0)",
                ]
            },
        ],
    };

    const food = {
        labels: ["QT. de Calorias Ingeridas", "QT. Restante de calorias"],
        datasets: [
            {
                label: 'Controle de Calorias',
                data: [
                    consumptions.filter((c) => c.tipoConsumo == "Calorias").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0),
                    consumptions.filter((c) => c.tipoConsumo == "Calorias").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0) <= totalCal ?
                        totalCal - consumptions.filter((c) => c.tipoConsumo == "Calorias").reduce((accumulator, object) => { return accumulator + object.quantidade }, 0) : 0
                ],
                backgroundColor: [
                    changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(10,153,6,0.60)",
                    changeTheme.get() == "contraOn" ? "rgba(30,30,30)" : "rgba(211, 211, 211, 1.0)",
                ]
            },
        ],
    };

    return (
        <main>
            <Header />
            <div id="conteudo" className="container-fluid texto">
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="barraHoriz col-2 mt-4">
                            <Link to="/controleConsumo">
                                <button
                                    type="button"
                                    title="Excluir"
                                    className="buttonCards m-2 "
                                >
                                    <i
                                        className="px-2 fa-solid fa-arrow-left fa-2xl"
                                        style={{ color: "var(--text-quadenary)" }}
                                    ></i>
                                </button>
                            </Link>
                        </div>
                        <div className="headline text col-8">
                            <h1 className='first-title'>Controle de Consumo</h1>
                            <h2 className='first-title'>{actualDate.getUTCDate() + "/" + (actualDate.getUTCMonth() + 1) + "/" + actualDate.getFullYear()}</h2>
                        </div>
                    </div>
                </div>



                <div className='graphics row mt-3'>
                    <div className="controlwater col">

                        <h1 className="title text-center my-3">E aí, já bebeu água?</h1>

                        <div className="graphicwater d-flex justify-content-center align-items-center">
                            <Doughnut options={options} data={water} />
                        </div>

                        <div className='container d-flex justify-content-center align-items-center'>

                            <div className="row g-2 pt-3">
                                {
                                    consumptions.filter((c) => c.tipoConsumo == "Água")
                                        .map((c, index) => {
                                            const dateC = new Date(c.createdAt)
                                            const time =
                                                `
                                            ${dateC.getHours() < 10 ? "0" : ""}
                                            ${dateC.getHours()}
                                            :${dateC.getMinutes() < 10 ? "0" : ""}
                                            ${dateC.getMinutes()}
                                            `
                                            return (
                                                <CardInfos
                                                    id={c._id}
                                                    key={`${c._id}${index}`}
                                                    horario={time.replaceAll(/\s/g, '')}
                                                    quantidade={`${c.quantidade} Ml`}
                                                    setUpdateOrInsert={setUpdateOrInsert}
                                                    handleShow={handleShow}
                                                    typeCard="Água"
                                                    setId={setActualId}
                                                />
                                            )
                                        })
                                }


                                <div className="col">
                                    <Button variant="success" className="m-md-4 float-end float-md-none"
                                        onClick={() => {
                                            handleShow("Água")
                                            setUpdateOrInsert("Inserir")
                                        }}
                                    >
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
                                {
                                    consumptions.filter((c) => c.tipoConsumo == "Calorias")
                                        .map((c, index) => {
                                            const dateC = new Date(c.createdAt)
                                            const time =
                                                `
                                            ${dateC.getHours() < 10 ? "0" : ""}
                                            ${dateC.getHours()}
                                            :${dateC.getMinutes() < 10 ? "0" : ""}
                                            ${dateC.getMinutes()}
                                            `
                                            return (
                                                <CardInfos
                                                    id={c._id}
                                                    key={`${c._id}${index}`}
                                                    horario={time.replaceAll(/\s/g, '')}
                                                    quantidade={`${c.quantidade} cal`}
                                                    setUpdateOrInsert={setUpdateOrInsert}
                                                    handleShow={handleShow}
                                                    typeCard="Calorias"
                                                    setId={setActualId}
                                                />
                                            )
                                        })
                                }


                                <div className="col">
                                    <Button variant="success" className="m-md-4 float-end float-md-none"
                                        onClick={() => {
                                            handleShow("Calorias")
                                            setUpdateOrInsert("Inserir")
                                        }}
                                    >
                                        <i className="fa-solid fa-circle-plus fa-2xl"></i>
                                    </Button>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-center my-3">
                            <label htmlFor="Diet" className="mx-3">Escolha a Dieta:</label>
                            <select className="form-select selectConsumo" aria-label="Default select example" value={actualDiet} id="Diet"
                                onChange={(e) => {
                                    setDietActualDiet(e.target.value)
                                }}
                            >
                                <option value="" disabled>Escolha uma para base</option>
                                {diet.map((d) => {
                                    return (<option key={d._id} value={d._id}>{d.nome}</option>)
                                })}
                            </select>
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
                updateOrInsert={updateOrInsert}
                handleClose={handleClose}
                id={actualId}
                actualDate={actualDate}
            />

            <Footer />
        </main>
    );
}
