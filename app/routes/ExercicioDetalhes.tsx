import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";



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
            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="headline text">
                    <h1 className="text-center py-3">Prancha</h1>
                </div>

                <div className="container-video">
                    <video width="750" height="500" controls >
                        <source src={""} type="video/mp4" />
                    </video>
                </div>

                

                <div>
                    <h5 className="text-justify py-2 px-3">
                        4x 30s
                    </h5>
                </div>
                <div>
                    <h5 className="texto-justificado">
                        Fazer pranchas melhora significativamente uma postura erecta e estável.
                        Através do fortalecimento de core, o corpo será capaz de manter uma
                        postura correcta porque os músculos no abdómen têm grande influência
                        sobre a estabilidade do pescoço, ombros, peito e costas.
                    </h5>
                </div>
            </main>
            <Footer />
        </div>
    );
}
