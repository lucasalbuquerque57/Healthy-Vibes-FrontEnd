import { Link } from "@remix-run/react";
import { CardDietaDetalhe } from "./CardDietaDetalhe";
import { Carousel } from 'primereact/carousel';
import type { RecipeInterface } from "../Receitas/route";
import { useEffect, useState } from "react";
import type { DietInterfaceWithRecipes } from "./route";


interface CardRefeicao {
  titulo: string
  diet: DietInterfaceWithRecipes | undefined
}

export default function CardRefeicao(props: CardRefeicao) {
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    if (props.diet?.recipes) {
      setRecipes(props.diet?.recipes.filter((recipe) => recipe.periodoRef == props.titulo))
    }
  }, [props.diet?.recipes, props.titulo])


  function cardTemplate(recipe: RecipeInterface) {
    return (
      <CardDietaDetalhe
        id={recipe._id}
        title={recipe.titulo}
        descricao={recipe.descricao}
        calorias={recipe.calorias}
        carboidratos={recipe.carboidratos}
        gordura={recipe.gordura}
        proteína={recipe.proteína}
        ingredientes={recipe.ingredientes}
        image={recipe.image}
        idsReceitas={props.diet?.recipes.map((r) => { return r._id })}
        idDiet={props.diet?._id}
        modoDePreparo={recipe.modoDePreparo}
      />
    )
  }
  return (
    <div className="container-fluid">
      <h2 className="dietaNome">{props.titulo}</h2>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <section className="card-container container-fluid">

          <div className="d-flex align-items-center justify-content-center">
            <Carousel
              value={
                recipes
              }
              numVisible={1}
              numScroll={1}
              itemTemplate={cardTemplate}
              className={
                "adaptLenght"
              }
            />
          </div>

        </section>
      </div>
      <div className="d-flex justify-content-center align-items-center py-5 me-5">
        <div className="row gap-3">
          <Link to={`/adicionarReceitas/dietaId=${props.diet?._id}&periodoRef=${props.titulo}`}>
            <button className="ms-5 buttonForm col btn btn-primary btn-lg">
              Adicionar outra receita
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
