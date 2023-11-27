import type { LinksFunction, MetaFunction } from "@remix-run/node";
import receitas from "~/styles/receitas.css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { CardReceita, ImageInterface } from "./CardReceita";
import { Button } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";
import { axiosHealthyApi } from "~/configs/https";
import { useCallback, useEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';


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
  descricao: string;
  ingredientes: [{ nome: string, qtd: string }];
  calorias: number;
  carboidratos: number;
  gordura: number;
  proteína: number;
  user: string;
  modoDePreparo: string;
  image: ImageInterface;
}

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

export default function Receitas() {
  const navigate = useNavigate();
  const [recipesFiltered, setRecipesFiltered] = useState<RecipeInterface[]>([]);
  const [numVisible, setNumVisible] = useState(0)
  const [numScroll, setNumScroll] = useState(0)

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
      };

      do {
        const randomIdex = Math.floor(Math.random() * recipes.length);
        if (recipes[randomIdex].periodoRef == "Café da Manhã") {

          calorias.cafeDaManha += recipes[randomIdex].calorias
          r.push(recipes[randomIdex])
        }
      } while (calorias.cafeDaManha < caloriasPorRefeicao.cafeDaManha)

      do {
        const randomIdex = Math.floor(Math.random() * recipes.length);
        if (recipes[randomIdex].periodoRef == "Almoço") {

          calorias.almoco += recipes[randomIdex].calorias
          r.push(recipes[randomIdex])
        }
      } while (calorias.almoco < caloriasPorRefeicao.almoco)

      do {
        const randomIdex = Math.floor(Math.random() * recipes.length);
        if (recipes[randomIdex].periodoRef == "Lanche") {

          calorias.lanche += recipes[randomIdex].calorias
          r.push(recipes[randomIdex])
        }
      } while (calorias.lanche < caloriasPorRefeicao.lanche)

      do {
        const randomIdex = Math.floor(Math.random() * recipes.length);
        if (recipes[randomIdex].periodoRef == "Janta") {

          calorias.janta += recipes[randomIdex].calorias
          r.push(recipes[randomIdex])
        }
      } while (calorias.janta < caloriasPorRefeicao.janta)



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

  useEffect(() => {
    if (window.innerWidth < 1199) {
      setNumScroll(1)
      setNumVisible(1)
    }
    else if (window.innerWidth < 991) {
      setNumScroll(1)
      setNumVisible(2)
    }
    else if (window.innerWidth < 767) {
      setNumScroll(1)
      setNumVisible(1)
    }
    else {
      setNumScroll(3)
      setNumVisible(3)
    }

  }, [])


  function cardTemplate(recipe: RecipeInterface) {
    return (

      <CardReceita
        title={recipe.titulo}
        descricao={recipe.descricao}
        calorias={recipe.calorias}
        carboidratos={recipe.carboidratos}
        gordura={recipe.gordura}
        proteína={recipe.proteína}
        ingredientes={recipe.ingredientes}
        image={recipe.image}
      />
    )
  }

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
            <section className="card-container container-fluid">

              <div className={`
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Café da Manhã")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`
              }>
                <Carousel
                  value={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Café da Manhã"))
                  }
                  numVisible={numVisible}
                  numScroll={numScroll}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={cardTemplate}
                  className={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Café da Manhã")).length < 3 ?
                      "adaptLenght" : ""
                  }
                  containerClassName="mx-lg-5 px-lg-5"
                />
              </div>

            </section>
          </div>
          <h2 className="dietaNome">Almoço</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container container-fluid">

              <div className={`
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almoço")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`
              }>
                <Carousel
                  value={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almoço"))
                  }
                  numVisible={numVisible}
                  numScroll={numScroll}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={cardTemplate}
                  className={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almoço")).length < 3 ?
                      "adaptLenght" : ""
                  }
                  containerClassName="mx-lg-5 px-lg-5"
                />
              </div>

            </section>
          </div>
          <h2 className="dietaNome">Lanche</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container container-fluid">

              <div className={`
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`
              }>
                <Carousel
                  value={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche"))
                  }
                  numVisible={numVisible}
                  numScroll={numScroll}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={cardTemplate}
                  className={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche")).length < 3 ?
                      "adaptLenght" : ""
                  }
                  containerClassName="mx-lg-5 px-lg-5"
                />
              </div>

            </section>
          </div>
          <h2 className="dietaNome">Janta</h2>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <section className="card-container container-fluid">

              <div className={`
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`
              }>
                <Carousel
                  value={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta"))
                  }
                  numVisible={numVisible}
                  numScroll={numScroll}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={cardTemplate}
                  className={
                    recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta")).length < 3 ?
                      "adaptLenght" : ""
                  }
                  containerClassName="mx-lg-5 px-lg-5"
                />
              </div>

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
