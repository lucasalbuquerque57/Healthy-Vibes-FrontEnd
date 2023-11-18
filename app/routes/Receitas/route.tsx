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

export interface RecipeInterface {
  _id: string;
  periodoRef: string;
  titulo: string;
  ingredientes: [nome: string, qtd: string];
  calorias: number;
  carboidratos: number;
  gordura: number;
  proteína: number;
  user: string;
  modoDePreparo: string;
  image: string;
}

export default function Receitas() {
  const navigate = useNavigate();
  const [recipesFiltered, setRecipesFiltered] = useState<RecipeInterface[]>([]);



  function generateRecipe(recipes: RecipeInterface[]) {
    if (localStorage.getItem("resultsCalc")) {
      const result = JSON.parse(localStorage.getItem("resultsCalc") || "");
      const r: RecipeInterface[] = [];
      const caloriasPorRefeicao = {
        cafeDaManha: result.calorias * 0.25,
        almoco: result.calorias * 0.3,
        lanche: result.calorias * 0.15,
        janta: result.calorias * 0.3,
      };

      let calorias = {
        cafeDaManha: 0,
        almoco: 0,
        lanche: 0,
        janta: 0,
        total: 0,
      };

      do {
        const randomIdex = Math.floor(Math.random() * recipes.length);

        if (recipes[randomIdex].periodoRef == "Café da Manhã") {
          if (calorias.cafeDaManha < caloriasPorRefeicao.cafeDaManha) {
            calorias.cafeDaManha += recipes[randomIdex].calorias;
            calorias.total += calorias.cafeDaManha;
            console.log(calorias.cafeDaManha + "q")
            r.push(recipes[randomIdex]);
          }
        }
        if (recipes[randomIdex].periodoRef == "Almoço") {
          if (calorias.almoco < caloriasPorRefeicao.almoco) {
            calorias.almoco += recipes[randomIdex].calorias;
            calorias.total += calorias.almoco;
            r.push(recipes[randomIdex]);
          }
        }
        if (recipes[randomIdex].periodoRef == "Lanche") {
          if (calorias.lanche < caloriasPorRefeicao.lanche) {
            calorias.lanche += recipes[randomIdex].calorias;
            calorias.total += calorias.lanche;
            r.push(recipes[randomIdex]);
          }
        }
        if (recipes[randomIdex].periodoRef == "Janta") {
          if (calorias.janta < caloriasPorRefeicao.janta) {
            calorias.janta += recipes[randomIdex].calorias;
            calorias.total += calorias.janta;
            r.push(recipes[randomIdex]);
          }
        }
      } while (calorias.total < result.calorias);

      console.log(calorias.cafeDaManha)


      localStorage.setItem("RecipesLocalStorage", JSON.stringify(r))

      return setRecipesFiltered(r);

    }
  }

  const handleGet = useCallback(async () => {
    await axiosHealthyApi
      .get("/recipes/recipesWIthNoUser")
      .then((r) => {
        generateRecipe(r.data);
      })
      .catch(() => {
        throw new Error("Não foi possível conectar");
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("RecipesLocalStorage")) handleGet();
    else {
      const recipes: RecipeInterface[] = JSON.parse(localStorage.getItem("RecipesLocalStorage") || "");
      setRecipesFiltered(recipes)
    }
  }, [handleGet]);

  return (
    <main>
      <Header />

      {recipesFiltered.length == 0 ? (
        <h1 className="py-5 my-5 text-center container-fluid">
          Não há valores, use a Calculadora Nutricional para obter
        </h1>
      ) : (
        <>
          <h2 className="dietaNome">Café da Manhã</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container">



              {recipesFiltered
                .filter((recipe) => recipe.periodoRef.includes("Café da Manhã"))
                .map((recipe, index) => {
                  return (
                    <CardReceita
                      key={`${recipe._id}${index}`}
                      title={recipe.titulo}
                      dificuldade="Fácil"
                      porcao="1"
                      descricao="Não esqueça do sal"
                    />
                  );
                })}

            </section>
          </div>
          <h2 className="dietaNome">Almoço</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container">
              {recipesFiltered
                .filter((recipe) => recipe.periodoRef.includes("Almoço"))
                .map((recipe, index) => {
                  return (
                    <CardReceita
                      key={`${recipe._id}${index}`}
                      title={recipe.titulo}
                      dificuldade="Fácil"
                      porcao="1"
                      descricao="Não esqueça do sal"
                    />
                  );
                })}
            </section>
          </div>
          <h2 className="dietaNome">Lanche</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container">
              {recipesFiltered
                .filter((recipe) => recipe.periodoRef.includes("Lanche"))
                .map((recipe, index) => {
                  return (
                    <CardReceita
                      key={`${recipe._id}${index}`}
                      title={recipe.titulo}
                      dificuldade="Fácil"
                      porcao="1"
                      descricao="Não esqueça do sal"
                    />
                  );
                })}
            </section>
          </div>
          <h2 className="dietaNome">Janta</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container">
              {recipesFiltered
                .filter((recipe) => recipe.periodoRef.includes("Janta"))
                .map((recipe, index) => {
                  return (
                    <CardReceita
                      key={`${recipe._id}${index}`}
                      title={recipe.titulo}
                      dificuldade="Fácil"
                      porcao="1"
                      descricao="Não esqueça do sal"
                    />
                  );
                })}
            </section>
          </div>
        </>
      )}
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

            {recipesFiltered.length > 0 && (
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
