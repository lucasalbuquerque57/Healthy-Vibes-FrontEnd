import { Card, ListGroup, OverlayTrigger, Popover } from "react-bootstrap";

interface CardsProps {
  title: string;
  dificuldade: string;
  porcao: string;
  descricao: string;
  calorias: number,
  carboidratos: number;
  gordura: number;
  proteína: number;
  ingredientes: [{ nome: string, qtd: string }];
}

export function CardReceita(props: CardsProps) {

  return (

    <Card className="cardDetalheDieta mx-md-5">
      <Card.Img variant="top" src="/IconeLogo.png" />
      <Card.Body>
        <Card.Title>{props?.title}</Card.Title>
        <Card.Text>
          {props?.descricao}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dificuldade:  {props?.dificuldade}</ListGroup.Item>
        <ListGroup.Item>{props?.porcao} Porções</ListGroup.Item>
      </ListGroup>
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
                        <span key={index}>{i.nome} - {i.qtd}</span>
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