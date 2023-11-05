import { Link } from "@remix-run/react";
import { CardDietaDetalhe } from "./CardDietaDetalhe";

interface CardRefeicao{
    titulo: string
    qtdReceita: number
    idDieta: string
}

export function CardRefeicao(props: CardRefeicao) {
  return (
    <div className="refeicao container">
      <h2 className="dietaNome">{props.titulo}</h2>

      <div className="container d-md-flex justify-content-center align-items-center">
        <section className="card-container">
          {Array.from({ length: props.qtdReceita })
          .map((_, idx) => (
                <CardDietaDetalhe key={idx}/>
            ))
          }
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
    </div>
  );
}
