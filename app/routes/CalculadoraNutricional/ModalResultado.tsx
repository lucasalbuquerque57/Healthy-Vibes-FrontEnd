import type { ModalProps } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import type { Resultados } from "./route";

interface ModalResultadoProps {
    modal: ModalProps,
    resultados: Resultados | undefined
}

export default function ModalResultado(props: ModalResultadoProps) {
    return (
        <Modal
            {...props.modal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.resultados?.opcaoPeso} </h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.modal.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}