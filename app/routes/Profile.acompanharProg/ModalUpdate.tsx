import type { FormEvent } from "react";
import { Button, Modal, type ModalProps } from "react-bootstrap";
import { axiosHealthyApi } from "~/configs/https";


interface ModalUpdate_AguaProps {
    modal: ModalProps
    imcId: string
    imcValue: number

}

export default function ModalUpdateAcompanharProg(props: ModalUpdate_AguaProps) {

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()


        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        await axiosHealthyApi.patch(`/imcs/${props.imcId}`, {
            peso: Number(data.peso),
            altura: Number(data.altura)
        })
            .then(() => { window.location.reload() })
            .catch(e => { console.log(e) })
    }

    return (
        <Modal {...props.modal} size="sm" centered>
            <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar IMC {props.imcValue}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="altura" className="form-label">Altura:</label>
                        <input type="number" className="form-control" id="altura" name="altura" required />
                        <div id="emailHelp" className="form-text">Insira a altura em Cm</div>
                        <div className="invalid-feedback">
                            Insira um valor válido
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="peso" className="form-label">Peso:</label>
                        <input type="number" className="form-control" id="peso" name="peso" required />
                        <div id="emailHelp" className="form-text">Insira o peso em Kg</div>
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