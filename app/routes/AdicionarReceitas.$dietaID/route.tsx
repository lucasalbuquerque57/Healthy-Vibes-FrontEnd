import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import adicionarReceitas from "~/styles/adicionarReceitas.css";
import FormularioReceita from "./FormularioReceita";
import { useLoaderData } from "@remix-run/react";

export async function loader({
    params,
}: LoaderArgs) {

    const urlParams = new URLSearchParams(params.dietaID)
    if (urlParams.has('dietaId') && urlParams.has('periodoRef')) {

        return params.dietaID

    } else {
        throw new Error("Url inválida")
    }

}

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: adicionarReceitas }];
};

export const meta: MetaFunction = () => ({
    title: "Adicionar Receita"
});

export default function Index() {
    const data = useLoaderData<typeof loader>();

    const urlParams = new URLSearchParams(data)

    return (
        <main>
            <Header />

            <div className="container-fluid pt-5">
                <FormularioReceita
                    dietaId={`${urlParams.get('dietaId')}`}
                    periodoRef={`${urlParams.get('periodoRef')}`}
                />
            </div>

            <Footer />
        </main>

    );
}
