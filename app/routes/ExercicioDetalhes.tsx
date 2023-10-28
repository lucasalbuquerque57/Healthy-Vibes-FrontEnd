import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Link } from "@remix-run/react";






import exercicios from "~/styles/exerciciosDetalhes.css";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});

export default function ExercicioDetalhes() {

    return (
        <div>
            <main id="conteudo" className=" texto">
                <Header />
                <div className="headline text">
                    <h1 className="title text-center py-3">Tríceps</h1>
                </div>
                <div className="barraHoriz container-fluid">
                    <Link to="/exercicios">
                        <button type="button" title="Excluir" className="buttonCards">
                            <i className="px-2 fa-solid fa-arrow-left fa-2xl" style={{ color: "var(--text-quadenary)" }}>
                            </i>
                        </button>
                    </Link>
                </div>

                <div className="container-video text-center pb-4" >
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/A2FAa4Q-4eg?si=1y-fgwSsrG1coOM5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                <div>
                    <h5 className="texto-justificado">
                        Fazer pranchas melhora significativamente uma postura erecta e estável.
                        Através do fortalecimento de core, o corpo será capaz de manter uma
                        postura correcta porque os músculos no abdómen têm grande influência
                        sobre a estabilidade do pescoço, ombros, peito e costas.
                    </h5>
                </div>
                <Footer />
            </main>
        </div>
    );
}
