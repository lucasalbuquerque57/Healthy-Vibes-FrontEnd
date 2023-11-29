import { Link } from "@remix-run/react";
import { CardDieta } from "./Card_Dieta";
import { useCallback, useEffect, useState } from "react";
import { axiosHealthyApi } from "~/configs/https";
import ModalUpdateDiet from "./ModalUpdateDiet";


export interface DietInterface {
    _id: string,
    nome: string,
    user: string,
    opcaoPeso: string,
    descricao: string,
}

export default function DietasProfile() {
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const handleClose = () => setShow(false);
    const [diet, setDiet] = useState<DietInterface[]>([])

    const handleGet = useCallback(async () => {
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
    }, [handleGet])


    return (
        <main>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                {diet.length == 0 ?
                    <h1 className="py-5 my-5 text-center container-fluid">
                        Não há dietas salvas
                    </h1>
                    :
                    <section className="card-container cardDiet">
                        {diet.map((d) => {
                            return (
                                <CardDieta
                                    key={d._id}
                                    title={d.nome}
                                    descricao={d.descricao}
                                    id={d._id}
                                    opcao={d.opcaoPeso}
                                    currentId={setCurrentId}
                                    showModal={setShow}
                                />
                            )
                        })}
                    </section>
                }
            </div>
            <div className="container-fluid mb-5">
                <Link to="/CalculadoraNutricional">
                    <button className="float-end stylebutton me-4 p-0 px-4 py-2" type="button">Adicionar Dieta</button>
                </Link>
            </div>
            <ModalUpdateDiet
                modal={{
                    show: show,
                    onHide: handleClose
                }}
                id={currentId}

            />
        </main>
    )
}