import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita } from "./CardReceita";
import { Button } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";
import { axiosHealthyApi } from "~/configs/https";
import { useCallback, useEffect, useState } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: receitas }];
};

export const meta: MetaFunction = () => ({
  title: "Receitas",
});

// Vou colocar aqui para pegar localStorage ou hookstate e toda a logica que eu preciso

export interface RecipeInterface {
  id: string
  periodoRef: string
  titulo: string
  ingredientes: [
    nome: string,
    qtd: string
  ],
  calorias: number
  carboidratos: number
  gordura: number
  proteína: number
  user: string
  modoDePreparo: string
  image: string
}


export default function Receitas() {
  const navigate = useNavigate();
  const [recipesFiltered, setRecipesFiltered] = useState<RecipeInterface[]>([])

  function generateRecipe(recipes: RecipeInterface[]) {

    if (localStorage.getItem("resultsCalc")) {
      const result = JSON.parse(localStorage.getItem("resultsCalc") || "")
      console.log(result.calorias)

      console.log(recipes[0])

      return (
        setRecipesFiltered(recipes)
      )

    }

  }

  const handleGet = useCallback(async () => {
    await axiosHealthyApi.get("/recipes/recipesWIthNoUser")
      .then(r => {
        generateRecipe(r.data)
        console.log(r.data)
      })
      .catch(e => console.log(e));
  }
    , [])


  useEffect(() => {
    handleGet()
  }, [handleGet])


  return (
    <main>
      <Header />




      {
        recipesFiltered.length == 0 ?
          <h1 className="py-5 my-5 text-center container-fluid">Não há valores, use a Calculadora Nutricional para obter</h1>
          :
          <>
            <h2 className="dietaNome">Café da Manhã</h2>
            <div className="container-fluid d-flex justify-content-center align-items-center">
              <section className="card-container">
                {
                  recipesFiltered.filter(recipe => recipe.periodoRef == "Café da manhã")
                    .map(recipe => {
                      return (
                        <CardReceita
                          key={recipe.id}
                          title="Pão com Ovo"
                          dificuldade="Fácil"
                          porcao="1"
                          descricao="Não esqueça do sal"
                        />
                      )
                    })
                }
              </section>
            </div>
          </>
      }
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center py-5 me-5">
          <div className="row gap-3">

            <Button
              type="submit"
              className="ms-5 buttonForm col"
              size="lg"
              onClick={() => {
                navigate("/CalculadoraNutricional");
              }}
            >
              Voltar para Calculadora
            </Button>

            {recipesFiltered.length > 0 &&
              <>
                <Button
                  type="button"
                  className="ms-5 buttonForm col"
                  size="lg"
                  onClick={() => {
                    navigate("/Macros/notSaved");
                  }}
                >
                  Detalhes Macro
                </Button>

                <Button type="button" className="ms-5 buttonForm col" size="lg">
                  Salvar Dieta
                </Button>
              </>
            }
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
