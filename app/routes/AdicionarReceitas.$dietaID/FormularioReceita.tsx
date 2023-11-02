import type { FormEvent } from "react";
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function FormularioReceita() {
    // Botar bglh de imagem no formulario
    const [ingredientes, setIngredientes] = useState(1)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const nomeIngredientes = formData.getAll("nomeIngrediente")
        const qtds = formData.getAll("qtd")

        const ingredientes: { nome: string, qtd: number }[] = [];
        nomeIngredientes.forEach((value, index) => {
            const qtd = Number(qtds[index])
            const nome = value.toString()
            ingredientes.push({
                nome,
                qtd
            })
        });

        console.log(ingredientes)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col d-flex flex-column justify-content-start align-items-center">

                    <div className="start" >

                        <div className="pt-1">
                            <label htmlFor="Titulo" className="form-label">Digite o Nome da sua Receita</label>
                            <input type="text" className="inputPadrao form-control" id="Titulo" name="titulo" placeholder="Dieta da Lua" required />
                        </div>
                        <div className="pt-3">
                            <label htmlFor="ingredientes" className="form-label">Quais são os ingredientes</label>

                            {
                                Array.from({ length: ingredientes }).map((_, idx) => (
                                    <div className="row mb-2" key={idx}>
                                        <input type="text" className="inputPadrao form-control" id="Titulo" name="nomeIngrediente" />
                                        <input type="text" className="inputPadrao form-control" id="Titulo" name="qtd" />
                                    </div>
                                ))
                            }
                            <Button variant="primary" onClick={() => setIngredientes((prevCounter) => prevCounter + 1)}>Primary</Button>

                        </div>
                        <Button variant="primary" type="submit">Submit</Button>


                    </div>


                </div>
                <div className="col d-flex flex-column justify-content-start align-items-center">
                    <div className="end" >
                        <label htmlFor="Titulo" className="form-label">Email address</label>
                        <input type="email" className="inputPadrao form-control" id="Titulo" name="titulo" placeholder="name@example.com" />


                    </div>
                </div>
            </div>
        </form>
    )
}