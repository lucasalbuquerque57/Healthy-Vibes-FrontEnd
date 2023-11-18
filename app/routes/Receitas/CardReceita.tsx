import { Card, ListGroup, OverlayTrigger, Popover } from "react-bootstrap";

 interface CardsProps {
  title: string;
  dificuldade: string;
  porcao: string;
  descricao: string;
} 

export function CardReceita(props: CardsProps) {

  return (

      <Card style={{ width: '18rem' }} className="cardDetalheDieta">
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
                Calorias:
                <br/>
                Carboidratos:
                <br/>
                Lipídios:
                <br/>
                Proteina:
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