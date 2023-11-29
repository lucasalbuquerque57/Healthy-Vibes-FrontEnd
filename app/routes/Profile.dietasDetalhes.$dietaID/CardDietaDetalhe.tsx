import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import Swal from "sweetalert2";
import type { ImageInterface } from "../Receitas/CardReceita";

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
  ingredientes: [{ nome: string, qtd: string }];
  image: ImageInterface;
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
        Swal.fire('Deletado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Não deletado', '', 'info')
      }
    })

  }

  return (

    <Card className="cardDetalheDieta mx-3 limiteAltura">
      <Card.Img variant="top" src={image()} width="200px" height="200px" />
      <Card.Body>
        <Card.Title>{props?.title}</Card.Title>
        <Card.Text>
          {props?.descricao}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {/* <button type="button" title="Favoritar" className="buttonCards">
              <i className="px-2 fa-regular fa-heart text-danger iconeCardDetalheFav" title="Favoritar"></i>
            </button>   vou engavetar essa ideia*/}
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
                {
                  props.ingredientes.length < 1 ?
                    "Não há ingredientes salvos"
                    :
                    props.ingredientes.map((i, index) => {
                      return (
                        <div key={index}>{i.nome} - {i.qtd}</div>
                      )
                    })
                }
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
        {/* <button type="button" title="Regerar" className="buttonCards float-end">
              <i
                className="px-2 fa-solid fa-arrows-rotate iconeCardDetalheMais"
                title="Regerar"
              ></i>
            </button>  */}
      </Card.Body>
    </Card>



  );
}
