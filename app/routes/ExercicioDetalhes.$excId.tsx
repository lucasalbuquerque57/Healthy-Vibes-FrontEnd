import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Link, useLoaderData } from "@remix-run/react";

import exercicios from "~/styles/exerciciosDetalhes.css";
import { useCallback, useEffect, useState } from "react";
import { axiosHealthyApi } from "~/configs/https";
import type { ExerciseInterface } from "./Exercicios/route";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export async function loader({
    params,
}: LoaderArgs) {

    const urlParams = new URLSearchParams(params.excId)

    if (urlParams.has('exercise')) {


        return urlParams.get('exercise')

    } else {
        throw new Error("Url inválida")
    }


}

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});

export default function ExercicioDetalhes() {
    const data = useLoaderData<typeof loader>();

    const [exercicio, setExercicio] = useState<ExerciseInterface>()

    const handleGet = useCallback(async () => {
        await axiosHealthyApi
            .get(`/exercises/${data}`)
            .then((r) => {
                setExercicio(r.data);
                document.title = r.data.nome;
            })
            .catch((e) => {
                console.log(e)
            });
    }, [data]);

    useEffect(() => {
        handleGet()
    }, [handleGet])

    return (
        <div>
            <main id="conteudo" className=" texto">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="barraHoriz col-2 mt-4">
                            <Link to="/exercicios">
                                <button type="button" title="Excluir" className="buttonCards m-2 ">
                                    <i className="px-2 fa-solid fa-arrow-left fa-2xl" style={{ color: "var(--text-quadenary)" }}>
                                    </i>
                                </button>
                            </Link>
                        </div>
                        <div className="headline text col-8">
                            <h1 className="title text-center py-3 labelSimples">{exercicio?.nome}</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center py-4" >
                    <iframe className="video" src="https://www.youtube.com/embed/A2FAa4Q-4eg?si=1y-fgwSsrG1coOM5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                    </iframe>
                </div>

                <div className="container video d-flex justify-content-start align-items-center flex-column">
                    <div className="exercise">
                        <div >
                            <div className="mx-md-2 labelSimples titulo fw-bold">
                                <h2 className="fw-bold">Repetições</h2>
                                <p className="rep rounded">{exercicio?.sets}</p>
                            </div>
                        </div>
                        <div >
                            <h5 className="texto-justificado m-md-4 mx-md-3 labelSimples">
                                {exercicio?.descricao}
                            </h5>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
