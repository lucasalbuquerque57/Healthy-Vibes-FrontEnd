import { useEffect, type FormEvent, useState } from "react";
import { Button, Modal, type ModalProps } from "react-bootstrap";


interface ModalInsert_AguaProps {
    modal: ModalProps
    formFor: String
}

export default function ModalInsert(props: ModalInsert_AguaProps) {
    const [measure, setMeasure] = useState("")

    useEffect(() => {
        if (props.formFor == "Água")
            setMeasure("Ml")
        else
            setMeasure("Kcal")
    }, [props.formFor])


    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // depois eu boto
    }

    return (
        <Modal {...props.modal} size="sm" centered>
            <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Inserir {props.formFor}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="quantidade" className="form-label">Valor:</label>
                        <input type="number" className="form-control" id="quantidade" name="quantidade" required />
                        <div id="emailHelp" className="form-text">Insira a quanto ingeriu de {props.formFor} em {measure}</div>
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
                        Inserir Informação
                    </Button>
                </Modal.Footer>
            </form >
        </Modal >

    )
}