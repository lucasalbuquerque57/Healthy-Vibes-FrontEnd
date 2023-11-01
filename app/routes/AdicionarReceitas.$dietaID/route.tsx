import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import adicionarReceitas from "~/styles/adicionarReceitas.css";

export async function loader({
    params,
}: LoaderArgs) {

    const urlParams = new URLSearchParams(params.dietaID)

    if (urlParams.has('receitaId')) {

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

    const [ingredientes, setIngredientes] = useState(1)


    return (
        <main>
            <Header />
            {/* <Button variant="primary" onClick={() => setIngredientes((prevCounter) => prevCounter + 1)}>Primary</Button>
            {
                Array.from({ length: ingredientes }).map((_, idx) => (
                    <h2 key={idx}>Faz O L</h2>
                ))
            }
 */}
            <div className="container-fluid pt-4">
                <form >
                    <div className="row">
                        <div className="col mx-2">

                            <div className="container w-50" >
                                <label htmlFor="Titulo" className="form-label">Email address</label>
                                <input type="email" className="inputPadrao form-control" id="Titulo" name="titulo" placeholder="name@example.com" />
                                <h2>Teste</h2>
                            </div>


                        </div>
                        <div className="col mx-2">
                            <div className="container d-flex flex-column align-items-center justify-content-start">
                                <label htmlFor="Titulo" className="form-label">Email address</label>
                                <input type="email" className="inputPadrao form-control" id="Titulo" name="titulo" placeholder="name@example.com" />
                                <h2>Teste</h2>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* Vou ter que botar bglh de imagem aqui */}
            <Footer />
        </main>

    );
}
