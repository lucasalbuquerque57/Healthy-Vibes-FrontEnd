import { Card, OverlayTrigger, Popover } from "react-bootstrap";


interface CardsProps {
  title: string;
  descricao: string;
  calorias: number,
  carboidratos: number;
  gordura: number;
  proteína: number;
  ingredientes: [{ _id: string, nome: string, qtd: string }];
  image: ImageInterface;
  modoDePreparo: string
}

export interface ImageInterface {

  name: string,
  img: {
    data: Buffer,
    contentType: string
  }

}

export function CardReceita(props: CardsProps) {

  function image() {
    if (props.image != null) {

      return `data:image/png;base64,${Buffer.from(props.image.img.data).toString('base64')}`
    } else {
      return "/IconeLogo.png"
    }
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

    <Card className="cardDetalheDieta mx-md-5 h-100">
      <Card.Img variant="top"
        width="200px" height="200px"
        src={
          image()
        } alt={props.title} />
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
                      const key = i._id + index

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