import { Link } from "@remix-run/react";



interface CardsProps {
  title: string;
}

export function Card_Dieta(props: CardsProps) {
  return (
    <div className="dietaCard col w-25">
      <div className="card row">
        <div className="iconTitDieta col-md-4">
          <i className="fa-regular fa-folder h1" ></i>
          <h2 className="titleDieta">{props.title}</h2>
        </div>
        <div className=" interacaoDieta col-md-6">
          <i className="fa-solid fa-ellipsis"></i>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-sharp fa-regular fa-trash"></i>
        </div>                       
      </div>
    </div>

    
  )
}
export default Card_Dieta;


{/* <div className="card card_dieta">
      <div className="container" >
        <img src="/PastaIcon.png" alt={props.title} />
        <div className="iconsstyle">
          <img src="/MoreIcon.png" alt="Mais Opções" />
          <img src="/PlusIcon.png" alt="Mais Conteúdo" />
          <img src="/LixeiraIcon.png" alt="Lixeira" />
        </div>
      </div>
      <div>
        <h2 className="titledieta">{props.title}</h2>
      </div>
    </div> */}