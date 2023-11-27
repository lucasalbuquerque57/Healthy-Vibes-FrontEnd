import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { ExercicioBase } from "~/routes/Exercicios/Exercicio_Base";
import { FiltroBarra } from "~/routes/Exercicios/Filtro_Barra";

import exercicios from "~/styles/exercicios.css";
import { axiosHealthyApi } from "~/configs/https";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});


/* const categories = [
    "Alongamento",
    "Perna",
    "Braço",
    "Tríceps",
    "Peito",
]; */

/* const allExercises = [
    {
        id: "a",
        imgSrc: "pernas.png",
        altImg: "Mulher_agachamentoCurto",
        duracao: "Curto",
        cardTitle: "Agachamento - Curto",
        descricaoCurta: "Trabalha os membros e músculos inferiores de uma forma bem completa.",
    },
]; */

interface ExerciseInterface {
    _id: string,
    nome: string,
    descricao: string,
    descricaoCurta: string,
    video: string,
    area: string,
    intensidade: number,
    sets: string,
    duracao: string,
    image: string
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
            .get("/exercises")
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

    const filteredExercises =
        categoryFilters.size === 0
            ? exercicio
            : exercicio
                .filter((p) => categoryFilters.has(p.area))
    /* .filter((p) => categoryFilters.has(p.intensidade)) */


    return (
        <main>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <FiltroBarra
                        update={updateFilters}
                    />
                    <section className="card-container col-md">
                        {filteredExercises.map((prod) => {
                            return (


                                <ExercicioBase
                                    key={prod._id}
                                    id={prod._id}
                                    imgSrc={prod.image}
                                    altImg={prod.nome}
                                    duracao={prod.duracao}
                                    cardTitle={prod.nome}
                                    textoCard={prod.descricaoCurta}
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

