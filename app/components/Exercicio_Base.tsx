import { Link } from "@remix-run/react";

interface CardsProps {
  title: string;
}

export function Exercicio_Base(props: CardsProps) {
  return (

    <Link to="" style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-top">
          <div className="ImageAdress"><img src="/treino/abdominal.png" alt="Unsplash Photo" /></div>
        </div>
        <div className="card-content">
          <h3 className="title">Maromba</h3>
          <h6 className="tag tag-travel">Musculação</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
        </div>
      </div >
    </Link>
  )
}

