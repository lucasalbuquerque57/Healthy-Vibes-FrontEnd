import { Link } from "@remix-run/react";

interface CardsProps {
  title: string;
}

export function Exercicio_Base(props: CardsProps) {
  return (

    <><Link to="" style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-top">
          <div className="ImageAdress"><img src="/treino/abdominal.png" alt="Unsplash Photo" /></div>
        </div>
        <div className="card-content">
          <h3 className="title">Abdominal</h3>
          <h6 className="tag tag-travel">Musculação</h6>
          <p>Abdominal é um tipo de exercício físico para desenvolver e fortalecer a musculatura do abdômen.</p>

        </div>

      </div>
    </Link><Link to="" style={{ textDecoration: "none" }}>
        <div className="card">
          <div className="card-top">
            <div className="ImageAdress"><img src="/treino/funcional.png" alt="Unsplash Photo" /></div>
          </div>
          <div className="card-content">
            <h3 className="title">Funcional</h3>
            <h6 className="tag tag-travel">Musculação</h6>
            <p>O treinamento funcional é um método de atividade física realizada sem aparelhos da academia.</p>

          </div>

        </div>
      </Link></>
  )
}

