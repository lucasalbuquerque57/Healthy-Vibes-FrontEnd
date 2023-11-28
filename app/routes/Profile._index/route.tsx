import { Link } from "@remix-run/react";
import { CardDieta } from "./Card_Dieta";
import { useCallback, useEffect, useState } from "react";
import { axiosHealthyApi } from "~/configs/https";


export interface DietInterface {
    nome: string,
    recipes: [string],
    user: string
    opcaoPeso: string,
    descricao: string,
}

export default function DietasProfile() {

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
                        Não há valores, use a Calculadora Nutricional para obter
                    </h1>
                    :
                    <section className="card-container cardDiet">
                        <CardDieta
                            title="Dieta Sla"
                        />
                        <CardDieta
                            title="Dieta Sla"
                        />
                        <CardDieta
                            title="Dieta Sla"
                        />
                    </section>
                }
            </div>
            <div className="container-fluid mb-5">
                <Link to="/CalculadoraNutricional">
                    <button className="float-end stylebutton me-4 p-0 px-4 py-2" type="button">Adicionar Dieta</button>
                </Link>
            </div>
        </main>
    )
}