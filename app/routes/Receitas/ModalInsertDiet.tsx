import type { FormEvent } from "react";
import type { ModalProps } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import type { RecipeInterface } from "./route";
import { axiosHealthyApi } from "~/configs/https";
import Swal from "sweetalert2";
import { useNavigate } from "@remix-run/react";

interface ModalDietProps {
    modal: ModalProps;
}

export default function ModalInserDiet(props: ModalDietProps) {

    const navigate = useNavigate();
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        const recipes: RecipeInterface[] = JSON.parse(localStorage.getItem("RecipesLocalStorage") || "");
        const result = JSON.parse(localStorage.getItem("resultsCalc") || "");

        await axiosHealthyApi.post('/diets', {
            nome: data.nome,
            recipes: recipes.map(r => { return r._id }),
            opcaoPeso: result.opcaoPeso,
            descricao: data.descricao
        })
            .then(() => {
                Swal.fire({
                    title: "Salvo com sucesso",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    icon: "success"
                }).then(() => {
                    localStorage.removeItem("RecipesLocalStorage")
                    return navigate("/Profile")
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (

        <Modal {...props.modal} centered>
            <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Salvar Dieta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome da dieta:</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                        <div id="emailHelp" className="form-text"></div>
                        <div className="invalid-feedback">
                            Insira um valor válido
                        </div>
                        <label htmlFor="descricao" className="form-label">descrição da dieta:</label>
                        <textarea className="form-control caixaTexto" placeholder="Descrição de como preparar" id="floatingTextarea" name="descricao" style={{ height: "10rem" }}></textarea>
                        <div id="emailHelp" className="form-text"></div>
                        <div className="invalid-feedback">
                            Insira um valor válido
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.modal.onHide} type="reset">
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Confirmar
                    </Button>
                </Modal.Footer>
            </form >
        </Modal >
    )
}