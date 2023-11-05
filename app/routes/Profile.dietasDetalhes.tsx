import type { LinksFunction, MetaFunction } from "@remix-run/node";

import dietaDetalhes from "~/styles/detalhesDietas.css"; /* troquei a folha de estilo p testar o uso de cards, o nome original era 'dietasDetalhes' */

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dietaDetalhes },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Dieta Genérica",
});

export default function DietasDetalhes() {
  return (

    <main>
     {/* <div className="container-fluid">
      <div className="row">
        <div className="col-13 mt-4">
          <div className="card">
            <div className="card-horizontal">
              <div className="img-square-wrapper">
                <img
                  className=""
                  src="/PastaIcon.png"
                  alt="Card cap"
                />
              </div>
              <div className="card-body">
                <div className="card-titulo-botoes">
                  <h4 className="card-title">Algo vai aqui</h4>
                  <button className="opcoes">
                    <img src="/FavoriteIcon.png" alt=""></img>
                  </button>
                  <button className="opcoes">
                    <img src="/MoreIcon2.png" alt=""></img>
                  </button>
                </div>
                <p className="card-text">
                  Dificuldade: Médio
                </p>
                <p>
                  3 Porção(ões)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

  <h2 className="dietaNome">Dieta Broxa</h2>

    <div className="container-fluid d-flex justify-content-center align-items-center">
      
      <section className="card-container">
                        
                    
        <Card style={{ width: '18rem' }} className="cardDetalheDieta">
          <Card.Img variant="top" src="/IconeLogo.png" />
          <Card.Body>
            <Card.Title>Café da Manhã</Card.Title>
            <Card.Text>
              Torrada integral com Salsa
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Dificuldade:  Fácil</ListGroup.Item>
            <ListGroup.Item>2 Porções</ListGroup.Item>     
          </ListGroup>
          <Card.Body>
            <button type="button" title="Favoritar" className="buttonCards">
              <i className="px-2 fa-regular fa-heart text-danger iconeCardDetalheFav" title="Favoritar"></i>
            </button>  
            <button type="button" title="Opcoes" className="buttonCards">
              <i className="px-2 fa-solid fa-ellipsis iconeCardDetalheMais" title="Opcoes"></i>
            </button>
         
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }} className="cardDetalheDieta">
          <Card.Img variant="top" src="/IconeLogo.png" />
          <Card.Body>
            <Card.Title>Almoço</Card.Title>
            <Card.Text>
              Feijoada
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Dificuldade:  Média</ListGroup.Item>
            <ListGroup.Item>4 Porções</ListGroup.Item>        
          </ListGroup>
          <Card.Body>
            <button type="button" title="Favoritar" className="buttonCards">
              <i className="px-2 fa-regular fa-heart text-danger iconeCardDetalheFav" title="Favoritar"></i>
            </button>  
            <button type="button" title="Opcoes" className="buttonCards">
              <i className="px-2 fa-solid fa-ellipsis iconeCardDetalheMais" title="Opcoes"></i>
            </button>
         
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="cardDetalheDieta">
          <Card.Img variant="top" src="/IconeLogo.png" />
          <Card.Body>
            <Card.Title>Janta</Card.Title>
            <Card.Text>
              Arroz e Salada
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Dificuldade:  Fácil</ListGroup.Item>
            <ListGroup.Item>2 Porções</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button type="button" title="Favoritar" className="buttonCards">
              <i className="px-2 fa-regular fa-heart text-danger iconeCardDetalheFav" title="Favoritar"></i>
            </button>  
            <button type="button" title="Opcoes" className="buttonCards">
              <i className="px-2 fa-solid fa-ellipsis iconeCardDetalheMais" title="Opcoes"></i>
            </button>
         
          </Card.Body>
        </Card>
        

      </section>
    </div>




    </main>
  );
}
