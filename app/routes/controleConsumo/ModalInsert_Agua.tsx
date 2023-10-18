import { useEffect, type FormEvent } from "react";
import { Button, Modal, type ModalProps } from "react-bootstrap";


interface ModalInsert_AguaProps {
    modal: ModalProps
    formFor: String
}

export default function ModalInsertAgua(props: ModalInsert_AguaProps) {

    useEffect(() => {

        if ()

    }, [])


    function handleSubmit(e: FormEvent) {
        // depois eu boto
    }

    return (
        <form onSubmit={handleSubmit}>
            <Modal {...props.modal}>
                <Modal.Header closeButton>
                    <Modal.Title>E ai, você bebeu água?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Insira a quanto ingeriu de.</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.modal.onHide}>
                        Inserir Informação
                    </Button>
                </Modal.Footer>
            </Modal >
        </form >

    )
}