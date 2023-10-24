import { Link } from "@remix-run/react";

interface CardsProps {
  imgSrc: string
  altImg: string
  cardTitle: string
  textoCard: string
  link: string
}

export function ExercicioBase(props: CardsProps) {
  return (

    <div className="card" >

      <Link to={props.link} style={{ textDecoration: "none" }}>
        <div className="card">
          <div className="card-top">
            <div className="ImageAdress">
              <img src={`/treino/${props.imgSrc}`} alt={props.altImg} />
            </div>
          </div>
          <div className="card-content">
            <h3 className="title">{props.cardTitle}</h3>
            <h6 className="tag tag-travel">Musculação</h6>
            <p>{props.textoCard}</p>
          </div>
        </div >
      </Link >

    </div >
  )
}

