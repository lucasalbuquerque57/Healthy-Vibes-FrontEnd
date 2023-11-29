import type { FormEvent } from "react";
import type { ModalProps } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { axiosHealthyApi } from "~/configs/https";
import Swal from "sweetalert2";

interface ModalDietProps {
    modal: ModalProps;
    id: string;
}

export default function ModalUpdateDiet(props: ModalDietProps) {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axiosHealthyApi.patch(`/diets/${props.id}`, {
            nome: data.nome,
            descricao: data.descricao
        })
            .then(() => {
                Swal.fire({
                    title: "Salvo com sucesso",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    icon: "success"
                }).then(() => {
                    window.location.reload()
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
                    <Modal.Title>Editar Dieta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome da dieta:</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                        <div id="emailHelp" className="form-text"></div>
                        <div className="invalid-feedback">
                            Insira um valor válido
                        </div>
                        <label htmlFor="descricao" className="form-label">Descrição da dieta:</label>
                        <textarea className="form-control caixaTexto" placeholder="Coloque algo para lembrar da dieta" id="floatingTextarea" name="descricao" style={{ height: "10rem" }}></textarea>
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