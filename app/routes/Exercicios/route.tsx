import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { ExercicioBase } from "~/routes/Exercicios/Exercicio_Base";
import { FiltroBarra } from "~/routes/Exercicios/Filtro_Barra";

import exercicios from "~/styles/exercicios.css";
import { axiosHealthyApi } from "~/configs/https";
import type { ImageInterface } from "../Receitas/CardReceita";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});


interface ExerciseInterface {
    _id: string,
    nome: string,
    descricao: string,
    descricaoCurta: string,
    video: string,
    area: string,
    sets: string,
    duracao: string,
    image: ImageInterface
}


export default function Exercicios() {

    let [categoryFilters, setcategoryFilters] = useState(new Set<string>());

    function updateFilters(checked: boolean, categoryFilter: string) {
        if (checked)
            setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
            setcategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }


    const [exercicio, setExercicio] = useState<ExerciseInterface[]>([])

    const handleGet = useCallback(async () => {
        await axiosHealthyApi
            .get("/exercises/withImage")
            .then((r) => {
                setExercicio(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])

    const [duracaoEx, setduracaoEx] = useState("Todos")

    const filteredArea =
        duracaoEx == "Todos" ?
            exercicio : exercicio.filter((p) => {
                return p.duracao == duracaoEx
            })


    const filteredExercises =
        categoryFilters.size == 0
            ? filteredArea
            : filteredArea
                .filter((p) => categoryFilters.has(p.area))



    return (
        <main>
            <Header />

            <div className="container-fluid my-5">
                <div className="row">
                    <FiltroBarra
                        duracao={setduracaoEx}
                        update={updateFilters}
                    />
                    <section className="card-container col-md my-5">
                        {filteredExercises.map((prod) => {
                            return (


                                <ExercicioBase
                                    key={prod._id}
                                    id={prod._id}
                                    duracao={prod.duracao}
                                    cardTitle={prod.nome}
                                    textoCard={prod.descricaoCurta}
                                    image={prod.image}
                                />


                            );
                        })}
                    </section>
                </div>
            </div>

            <Footer />
        </main >
    );
}

