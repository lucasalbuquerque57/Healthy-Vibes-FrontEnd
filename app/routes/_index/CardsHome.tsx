import { Link } from "@remix-run/react";

export default function CardsHome() {
    const cardInfos = [
        {
            imgSrc: "recursos_home.png",
            altImg: "Pessoa se pesando na balança",
            cardTitle: "Calculadora nutricional",
            textoCard: "Monte sua dieta conforme suas necessidades específicas",
            link: "/CalculadoraNutricional"
        },
        {
            imgSrc: "exercicio_home.png",
            altImg: "Uma mulher se alongando",
            cardTitle: "Exercícios",
            textoCard: "Escolha entre diversos exercícios de acordo com suas prioridades",
            link: "/Exercicios"
        },
        {
            imgSrc: "calculadora_home.png",
            altImg: "Um pão e copo de água",
            cardTitle: "Recursos adicionais",
            textoCard: "Monitore seu IMC, consumo de água e calorias",
            link: "/"
        },
    ]
    return (
        <div className="row m-auto cardBox">
            {
                cardInfos.map(card => {
                    return (
                        <div className="column" key={card.cardTitle}>
                            <Link to={card.link} style={{ textDecoration: 'none' }}>
                                <div className="card" >
                                    <img src={`/home/${card.imgSrc}`} className="card-img-top" alt={card.altImg} />
                                    <h5 className="card-title">{card.cardTitle}</h5>
                                    <div className="textoCard">{card.textoCard}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )

}