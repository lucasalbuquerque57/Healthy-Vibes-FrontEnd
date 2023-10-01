import { Link } from "@remix-run/react";


                                          
interface CardsProps {
    title: string;
}

export function Card_Dieta(props:CardsProps){
  return (
<div className="card_dieta">
    <div className="container" >
      <img src="/PastaIcon.png" alt={props.title}  />
      <div className="iconsstyle">
        <img src="/MoreIcon.png" alt="Mais Opções" />
        <img src="/PlusIcon.png" alt="Mais Conteúdo" />
        <img src="/LixeiraIcon.png" alt="Lixeira"/>
      </div>
    </div>
      <div>
      <h2 className="titledieta">{props.title}</h2>
      </div>
</div>
  )
}
export default Card_Dieta;
