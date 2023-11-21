import { Link } from "@remix-run/react";
import { CardDietaDetalhe } from "./CardDietaDetalhe";
import { Carousel } from 'primereact/carousel';

interface CardRefeicao {
  titulo: string
  qtdReceita: number
  idDieta: string
}

export function CardRefeicao(props: CardRefeicao) {

  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  function cardTemplate() {
    return (
      <CardDietaDetalhe />
    )
  }
  return (
    <>
      <h2 className="dietaNome">Café da Manhã</h2>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <section className="card-container container-fluid">

          <Carousel
            value={
              Array.from({ length: props.qtdReceita })
            }
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={cardTemplate}
          />

        </section>
      </div>
      <div className="d-flex justify-content-center align-items-center py-5 me-5">
        <div className="row gap-3">
          <Link to={`/adicionarReceitas/dietaId=${props.idDieta}&periodoRef=${props.titulo}`}>
            <button className="ms-5 buttonForm col btn btn-primary btn-lg">
              Adicionar outras
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
