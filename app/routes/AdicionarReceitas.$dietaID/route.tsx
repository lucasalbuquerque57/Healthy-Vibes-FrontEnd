import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import adicionarReceitas from "~/styles/adicionarReceitas.css";
import FormularioReceita from "./FormularioReceita";

export async function loader({
    params,
}: LoaderArgs) {

    const urlParams = new URLSearchParams(params.dietaID)
    // Talvez vo ter que botar horário refeicao tb
    if (urlParams.has('receitaId') && urlParams.has('periodoRef')) {
        console.log(urlParams.get('periodoRef'))

        // consulta axios aqui dp

        /* return axios(`http://127.0.0.1:8080/api/v1/usuarios/${email}`)
            .catch(() => { return null })
            .then((response) => {
                const user: User = response?.data
                if (!user)
                    return null

                if (password != user.senha)
                    return null

                return { id: user.id, email }

            }

            )  Exemplo de codigo*/

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


    return (
        <main>
            <Header />

            <div className="container-fluid pt-5">
                <FormularioReceita />
            </div>

            <Footer />
        </main>

    );
}
