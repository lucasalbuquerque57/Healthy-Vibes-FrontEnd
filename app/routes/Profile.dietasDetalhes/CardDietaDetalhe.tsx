import { Link } from "@remix-run/react";
import { Card, ListGroup, OverlayTrigger, Popover } from "react-bootstrap";
import Swal from "sweetalert2";

/* interface CardsProps {
  imgSrc: string
  altImg: string
  cardTitle: string
  textoCard: string
  id: string
} */


export function CardDietaDetalhe() {

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

    <Card className="cardDetalheDieta mx-md-5">
      < Card.Img variant="top" src="/IconeLogo.png" />
      <Card.Body>
        <Card.Title>Receita Genérica</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dificuldade:  </ListGroup.Item>
        <ListGroup.Item> Porções</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <button type="button" title="Favoritar" className="buttonCards">
              <i className="px-2 fa-regular fa-heart text-danger iconeCardDetalheFav" title="Favoritar"></i>
            </button>   vou engavetar essa ideia*/}
        <button
          type="button"
          title="Excluir"
          className="buttonCards" onClick={handleDelete}
        >
          <i className="px-2 fa-solid fa-trash apagarDetalheDieta" ></i>
        </button>
        <OverlayTrigger
          trigger="click"
          placement="auto"
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">Receita</Popover.Header>
              <Popover.Body>
                Calorias:
                <br />
                Carboidratos: g
                <br />
                Gorduras: g
                <br />
                Proteinas: g
                <div className="border-bottom border-dark my-1" />
                {/*                 {
                  props.ingredientes.length < 1 ?
                    "Não há ingredientes salvos"
                    :
                    props.ingredientes.map((i, index) => {
                      return (
                        <span key={index}>{i.nome} - {i.qtd}</span>
                      )
                    })
                } */}
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
    </Card >


  );
}
