import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { ExercicioBase } from "~/routes/Exercicios/Exercicio_Base";
import { FiltroBarra } from "~/routes/Exercicios/Filtro_Barra";

import exercicios from "~/styles/exercicios.css";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: exercicios },
        { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Exercícios",
});

export default function Exercicios() {



    return (
        <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <FiltroBarra />
                    <section className="card-container col-md">
                        <ExercicioBase
                            id="1"
                            imgSrc="peito.png"
                            altImg="Homem_PranchaCurto"
                            cardTitle="Prancha - Longo"
                            textoCard="É o exercício ideal para trabalhar a musculatura abdominal."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="abraco.png"
                            altImg="Mulher_BracoCurto"
                            cardTitle="Braço - Curto"
                            textoCard="Treinar os braços evita problemas futuros de mobilidade."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="pernas.png"
                            altImg="Mulher_agachamentoCurto"
                            cardTitle="Agachamento - Curto"
                            textoCard="Trabalha os membros e músculos inferiores de uma forma bem completa."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="alongamento.png"
                            altImg="Mulher_alogamentoCurto"
                            cardTitle="Alongamento - Curto"
                            textoCard="Reduz o encurtamento muscular e melhora a coordenação motora."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="funcional.png"
                            altImg="Homem_FuncionalCurto"
                            cardTitle="Funcional - Curto"
                            textoCard="O treino funcional ajuda a fortalecer os músculos, emagrecer ou melhorar o condicionamento físico."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="prancha.jpg"
                            altImg="Exercicio_Prancha"
                            cardTitle="Prancha - Curto"
                            textoCard="Pode auxiliar a coluna lombar e a pelve a manterem a estabilidade do tronco."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="triceps.png"
                            altImg="Mulher_tricepsCurto"
                            cardTitle="Triceps - Curto"
                            textoCard="O treino de tríceps contribui para o crescimento e desenvolvimento dos músculos."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="abdominal.png"
                            altImg="Homem_AbdominalCurto"
                            cardTitle="Abdominal - Curto"
                            textoCard="O abdominal pode ajudar na diminuição do desgaste da coluna, reduzindo significativamente as dores nas costas."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="peito.png"
                            altImg="Exercicio_Peito"
                            cardTitle="Peito - Curto"
                            textoCard="O aumento do tônus abaixo do tecido gorduroso que forma o seio, o que dará mais sustentação a ele, além de um maior equilíbrio corporal."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="alongamento_avancado.png"
                            altImg="Exercicio_Alongamento"
                            cardTitle="Alongamento - Longo"
                            textoCard=" O alongamento ajuda a Melhorar a circulação do sangue, prevenindo problemas articulares."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="braco_longo.jpg"
                            altImg="Exercicio_Braco"
                            cardTitle="Braço - Longo"
                            textoCard="O treino bíceps ajuda muito a aumentar a estabilidade do corpo.E contribui para a realização dos movimentos do dia a dia."
                        />
                        <ExercicioBase
                            id="1"
                            imgSrc="funcional_avancado.png"
                            altImg="Exercicio_Funcional"
                            cardTitle="Funcional - Longo"
                            textoCard="O treino usa os músculos para movimentos naturais do corpo para melhorar a força e a resistência."
                        />
                    </section>
                </div>
            </div>

            <Footer />
        </main >
    );
}
