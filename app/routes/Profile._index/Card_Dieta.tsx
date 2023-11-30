import { Link } from "@remix-run/react";
import Swal from "sweetalert2";
import { axiosHealthyApi } from "~/configs/https";

interface CardsProps {
  title: string;
  id: string,
  opcao: string,
  descricao: string,
  currentId: React.Dispatch<string>,
  showModal: React.Dispatch<boolean>
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
      denyButtonText: `Cancelar`,
      confirmButtonText: 'Deletar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosHealthyApi.delete(`/diets/${props.id}`)
          .then(() => {
            Swal.fire('Deletado!', '', 'success').then(() => { window.location.reload() })
          })
          .catch(e => { console.log(e) })

      } else if (result.isDenied) {
        Swal.fire('Não deletado', '', 'info')
      }
    })

  }

  function handleUpdate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    props.currentId(props.id)
    props.showModal(true)
  }

  return (

    <Link to={`/profile/dietasDetalhes/dietaId=${props.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-top">
          <div className="ImageAdress"><img src="/PastaIcon.png" alt="Imagem Dieta" /></div>
        </div>
        <div className="card-content">
          <h3 className="title">{props?.title}</h3>
          <h6 className="tag tag-travel">Dieta {props.opcao}</h6>
          <p>{props.descricao}</p>
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
                onClick={
                  handleUpdate
                }
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

