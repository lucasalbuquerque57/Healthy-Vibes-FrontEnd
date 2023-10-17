import { Button, Modal, type ModalProps } from "react-bootstrap";


interface ModalInsert_AguaProps {
    modal: ModalProps
}

export default function ModalInsertAgua(props: ModalInsert_AguaProps) {


    return (
        <>
            <Modal {...props.modal}>
                <Modal.Header closeButton>
                    <Modal.Title>E ai, você bebeu água?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.modal.onHide}>
                        Inserir Informação
                    </Button>
                </Modal.Footer>
            </Modal >
        </>



    )
}