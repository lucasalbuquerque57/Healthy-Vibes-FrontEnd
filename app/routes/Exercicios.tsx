import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { ExercicioBase } from "~/components/Exercicio_Base";
import { FiltroBarra } from "~/components/Filtro_Barra";

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
                            imgSrc="peito.png"
                            altImg="Homem_PranchaCurto"
                            cardTitle="Prancha Avançada"
                            textoCard="É o exercício ideal para trabalhar a musculatura abdominal."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="abraco.png"
                            altImg="Mulher_BracoCurto"
                            cardTitle="Braço"
                            textoCard="Treinar os braços evita problemas futuros de mobilidade."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="pernas.png"
                            altImg="Mulher_agachamentoCurto"
                            cardTitle="Agachamento"
                            textoCard="Trabalha os membros e músculos inferiores de uma forma bem completa."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="alongamento.png"
                            altImg="Mulher_alogamentoCurto"
                            cardTitle="Alongamento"
                            textoCard="Reduz o encurtamento muscular e melhora a coordenação motora."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="funcional.png"
                            altImg="Homem_FuncionalCurto"
                            cardTitle="Funcional"
                            textoCard="O treino funcional ajuda a fortalecer os músculos, emagrecer ou melhorar o condicionamento físico."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="prancha.jpg"
                            altImg="Um pão e copo de água"
                            cardTitle="Prancha"
                            textoCard="Pode auxiliar a coluna lombar e a pelve a manterem a estabilidade do tronco."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="triceps.png"
                            altImg="Mulher_tricepsCurto"
                            cardTitle="Triceps"
                            textoCard="O treino de tríceps contribui para o crescimento e desenvolvimento dos músculos."
                            link="/ExercicioDetalhes"
                        />
                        <ExercicioBase
                            imgSrc="abdominal.png"
                            altImg="Homem_AbdominalCurto"
                            cardTitle="Abdominal"
                            textoCard="O abdominal pode ajudar na diminuição do desgaste da coluna, reduzindo significativamente as dores nas costas."
                            link="/"
                        />
                        <ExercicioBase
                            imgSrc="peito.png"
                            altImg="Um pão e copo de água"
                            cardTitle="Peito"
                            textoCard="o aumento do tônus abaixo do tecido gorduroso que forma o seio, o que dará mais sustentação a ele, além de um maior equilíbrio corporal."
                            link="/"
                        />
                        <ExercicioBase
                            imgSrc="alongamento_avancado.png"
                            altImg="Um pão e copo de água"
                            cardTitle="Alongamento - Longo"
                            textoCard="Melhora a circulação sanguínea, prevenindo problemas articulares nos braços, pernas e coluna.
                            "
                            link="/"
                        />
                        <ExercicioBase
                            imgSrc="braco_longo.jpg"
                            altImg="Um pão e copo de água"
                            cardTitle="Braço - Longo"
                            textoCard="o treino bíceps ajuda muito a aumentar a estabilidade do corpo."
                            link="/"
                        />
                        <ExercicioBase
                            imgSrc="funcional_avancado.png"
                            altImg="Um pão e copo de água"
                            cardTitle="Funcional - Longo"
                            textoCard="O treino usa os músculos para movimentos naturais do corpo para melhorar a força e a resistência."
                            link="/"
                        />
                    </section>
                </div>
            </div>

            <Footer />
        </main >
    );
}
