import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import Swal from "sweetalert2";
import type { ImageInterface } from "../Receitas/CardReceita";
import { axiosHealthyApi } from "~/configs/https";

/* interface CardsProps {
  imgSrc: string
  altImg: string
  cardTitle: string
  textoCard: string
  id: string
} */

interface CardsProps {
  title: string;
  descricao: string;
  calorias: number,
  carboidratos: number;
  gordura: number;
  proteína: number;
  ingredientes: [{ _id: string, nome: string, qtd: string }];
  image: ImageInterface;
  idsReceitas: string[] | undefined
  id: string;
  idDiet: string | undefined;
  modoDePreparo: string
}

export function CardDietaDetalhe(props: CardsProps) {

  function image() {
    if (props.image != null) {

      return `data:image/png;base64,${Buffer.from(props.image.img.data).toString('base64')}`
    } else {
      return "/IconeLogo.png"
    }
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

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

        if (props.idsReceitas) {
          for (let i = 0; i < props.idsReceitas.length; i++) {
            if (props.id == props.idsReceitas[i])
              props.idsReceitas?.splice(i, 1)
          }
        }

        axiosHealthyApi.patch(`/diets/${props.idDiet}`, {
          recipes: props.idsReceitas
        })
          .then(() => { Swal.fire('Deletado!', '', 'success').then(() => { window.location.reload() }) })
          .catch((e) => { console.log(e) })
      } else if (result.isDenied) {
        Swal.fire('Não deletado', '', 'info')
      }
    })

  }

  const addLineBreak = (str: string) =>
    str.split(';').map((subStr) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });


  return (

    <Card className="cardDetalheDieta mx-3">
      <Card.Img variant="top" src={image()} width="200px" height="200px" />
      <Card.Body>
        <Card.Title>{props?.title}</Card.Title>
        <Card.Text>
          {props?.descricao}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <OverlayTrigger
          trigger="click"
          placement="auto"
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">{props?.title}</Popover.Header>
              <Popover.Body>
                Calorias: {props.calorias}
                <br />
                Carboidratos: {props.carboidratos}g
                <br />
                Gorduras: {props.gordura}g
                <br />
                Proteinas: {props.proteína}g
                <div className="border-bottom border-dark my-1" />
                <strong>Igredientes</strong>
                {
                  props.ingredientes.length < 1 ?
                    "Não há ingredientes salvos"
                    :
                    props.ingredientes.map((i, index) => {
                      const key = i._id + index + props.id
                      return (
                        <div key={key}>{i.nome} - {i.qtd}</div>
                      )
                    })
                }
                <div className="border-bottom border-dark my-1" />
                <strong>Modo de Preparo</strong><br />
                {addLineBreak(props.modoDePreparo)}
              </Popover.Body>
            </Popover>
          }
          rootClose
        >
          <button type="button" title="Opcoes" className="buttonCards float-end">
            <i
              className="px-2 fa-solid fa-ellipsis iconeCardDetalheMais"
              title="Opcoes"
            ></i>
          </button>
        </OverlayTrigger>
        <button
          type="button"
          title="Excluir"
          className="buttonCards" onClick={handleDelete}
        >
          <i className="px-2 fa-solid fa-trash apagarDetalheDieta" ></i>
        </button>
      </Card.Body>
    </Card>



  );
}
