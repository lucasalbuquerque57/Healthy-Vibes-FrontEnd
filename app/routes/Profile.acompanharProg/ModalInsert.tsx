import type { FormEvent } from "react";
import { Button, Modal, type ModalProps } from "react-bootstrap";


interface ModalInsert_AguaProps {
    modal: ModalProps
    imcId: string

}

export default function ModalInsertAcompanharProg(props: ModalInsert_AguaProps) {

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

    }

    return (
        <Modal {...props.modal} size="sm" centered>
            <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar IMC 20.2</Modal.Title>
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