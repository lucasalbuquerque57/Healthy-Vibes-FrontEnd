import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita } from "./CardReceita";
import { Button } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";
import { axiosHealthyApi } from "~/configs/https";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: receitas }];
};

export const meta: MetaFunction = () => ({
  title: "Receitas",
});

// Vou colocar aqui para pegar localStorage ou hookstate e toda a logica que eu preciso

export interface RecipeInterface {
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
  const [recipes, setRecipes] = useState<RecipeInterface[]>([])

  function generateRecipe() {

    if (localStorage.getItem("resultsCalc")){
    const result = JSON.parse(localStorage.getItem("resultsCalc") || "")
    console.log(result.calorias)

    return (
      recipes.filter(teste => teste.calorias)
    )
    }


  }

  useEffect(() => {
    axiosHealthyApi.get("/recipes/recipesWIthNoUser")
    .then(r => {setRecipes(r.data)})
    .catch(e => console.log(e))

    generateRecipe()
  }, [])


  return (
    <main>
      <Header />

      <h2 className="dietaNome">Café da Manhã</h2>

      <div className="container-fluid d-flex justify-content-center align-items-center">
        <section className="card-container">
          <CardReceita title="Pão com Ovo" dificuldade="Fácil" porcao="1" descricao="Não esqueça do sal" />

          <CardReceita title="Café" dificuldade="Fácil" porcao="2" descricao="Farinha de beterraba queimada no lugar de café" />
        </section>
      </div>

      {/* {generateRecipe()?.map(e => {return (
        <h1>a</h1>
      )})}
 */}
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center py-5 me-5">
          <div className="row gap-3">
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
            <Button type="button" className="ms-5 buttonForm col" size="lg">
              Salvar Dieta
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
