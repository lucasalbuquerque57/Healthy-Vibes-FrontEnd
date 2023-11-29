import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";

import dietaDetalhes from "~/styles/detalhesDietas.css";

import { CardRefeicao } from "./CardRefeicao";
import { Toast, ToastContainer } from "react-bootstrap";
import { axiosHealthyApi } from "~/configs/https";
import type { DietInterface } from "../Profile._index/route";
import type { RecipeInterface } from "../Receitas/route";
import { useState, useCallback, useEffect } from "react";
import { useLoaderData } from "@remix-run/react";


export async function loader({
  params,
}: LoaderArgs) {

  const urlParams = new URLSearchParams(params.dietaID)

  if (urlParams.has('dietaId')) {


    return urlParams.get('dietaId')

  } else {
    throw new Error("Url inválida")
  }


}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: dietaDetalhes }];
};

export const meta: MetaFunction<typeof loader> = () => {
  return ({
    title: "Dieta"
  })

};

export interface DietInterfaceWithRecipes extends DietInterface {
  recipes: RecipeInterface[]
}


export default function DietasDetalhes() {
  const data = useLoaderData<typeof loader>();
  const [diet, setDiet] = useState<DietInterfaceWithRecipes>()


  const handleGet = useCallback(async () => {
    await axiosHealthyApi
      .get(`/diets/${data}`)
      .then((r) => {
        setDiet(r.data);
        document.title = "Dieta " + r.data.nome;
      })
      .catch((e) => {
        console.log(e)
      });
  }, [data]);

  useEffect(() => {
    handleGet()

  }, [handleGet])




  return (
    <main>
      <ToastContainer
        className="position-sticky container-fluid"
        position="top-start"
        style={{ zIndex: 1 }}
      >
        <Toast>
          <Toast.Body className="fw-bold text-center fs-5">Dieta {diet?.nome}</Toast.Body>
        </Toast>
      </ToastContainer>

      <CardRefeicao titulo="Café da Manhã" diet={diet} />
      {/* <CardRefeicao titulo="Al Mossar" diet={diet} /> */}


    </main>
  );
}
