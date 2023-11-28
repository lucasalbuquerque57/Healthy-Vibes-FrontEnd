import { Link } from "@remix-run/react";
import { CardDietaDetalhe } from "./CardDietaDetalhe";
import { Carousel } from 'primereact/carousel';
import type { RecipeInterface } from "../Receitas/route";
import { useEffect, useState } from "react";


interface CardRefeicao {
  titulo: string
  qtdReceita: number
  idDieta: string
}

export function CardRefeicao(props: CardRefeicao) {

  const [recipe, setRecipe] = useState<RecipeInterface[]>([])


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

  function cardTemplate(recipe: RecipeInterface) {
    return (
      <CardDietaDetalhe
        title={recipe.titulo}
        dificuldade="Fácil"
        porcao="1"
        descricao="Não esqueça do sal"
        calorias={recipe.calorias}
        carboidratos={recipe.carboidratos}
        gordura={recipe.gordura}
        proteína={recipe.proteína}
        ingredientes={recipe.ingredientes}
      />
    )
  }
  return (
    <>
      <h2 className="dietaNome">Café da Manhã</h2>
      <div className="container-fliu d-flex justify-content-center align-items-center">
        <section className="card-container container-fluid">

          <Carousel
            value={
              recipe
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
