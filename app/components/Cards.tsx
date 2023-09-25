import { Link } from "@remix-run/react";
                                          
interface CardsProps {
    imageUrl: string;
    title: string;
    pageflow: string;
}

export function Cards(props:CardsProps){
  return (
    <div className="card custom-card" >
      <img src={props.imageUrl} alt={props.title}  />
      <h2>{props.title}</h2>
      <Link to={props.pageflow} className="footer-link text-left">Ver Mais</Link>
    </div>
  )
}
export default Cards;
