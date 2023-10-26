import { Link } from "@remix-run/react";
import Swal from "sweetalert2";

interface CardsProps {
  title: string;
}

export function CardDieta(props: CardsProps) {

  function changeAnimation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.currentTarget.className += " fa-shake"
  }

  function changeToDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "")
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    // Vou colocar os bglhs do axios aqui
    e.preventDefault();
    Swal.fire({
      title: 'Quer deletar?',
      showDenyButton: true,
      /* showCancelButton: true, */
      confirmButtonText: 'Deletar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deletado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Não deletado', '', 'info')
      }
    })

  }

  return (

    <Link to="/profile/dietasDetalhes" style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-top">
          <div className="ImageAdress"><img src="/PastaIcon.png" alt="Imagem Dieta" /></div>
        </div>
        <div className="card-content">
          <h3 className="title">{props?.title}</h3>
          <h6 className="tag tag-travel">Dieta Perder Peso</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-end iconsCard">
            <button type="button" title="Excluir" className="buttonCards" onClick={handleDelete}>
              <i className="px-2 fa-solid fa-trash text-danger"
                onMouseEnter={changeAnimation}
                onMouseLeave={changeToDefault}
              >
              </i>
            </button>
            <button type="button" title="Atualizar" className="buttonCards">
              <i className="px-2 fa-solid fa-ellipsis text-info" title="Atualizar"
                onMouseEnter={changeAnimation}
                onMouseLeave={changeToDefault}
              ></i>
            </button>
          </p>
        </div>
      </div >
    </Link>
  )
}

