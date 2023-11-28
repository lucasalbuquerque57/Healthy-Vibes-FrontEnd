import { Link } from "@remix-run/react";
import type { ImageInterface } from "../Receitas/CardReceita";


interface CardsProps {
  cardTitle: string
  textoCard: string
  duracao: string
  id: string,
  image: ImageInterface
}

export function ExercicioBase(props: CardsProps) {

  function image() {
    if (props.image != null) {

      return `data:image/png;base64,${Buffer.from(props.image.img.data).toString('base64')}`
    } else {
      return `/treino/abdominal.png`
    }
  }


  return (

    <div className="card" >

      <Link to={`/ExercicioDetalhes/exercise=${props.id}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <div className="card-top">
            <div className="ImageAdress">
              <img src={image()} alt={props.cardTitle} className="teste" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="title">{props.cardTitle}</h3>
            <h6 className="tag tag-travel">{props.duracao}</h6>
            <p>{props.textoCard}</p>
          </div>
        </div >
      </Link >
    </div >

  )
}

