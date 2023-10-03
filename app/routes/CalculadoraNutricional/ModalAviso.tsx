import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalAviso() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title className="text-center text-warning fw-bold">
                    <i className="fa-solid fa-triangle-exclamation"></i> Aviso em nome
                    de sua saúde
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p className="alert alert-info border border-info border-2 p-2">
                    Essa calculadora utiliza do cálculo Gasto Energético Basal (GEB)
                    para determinar quantas calorias, proteínas e gordura deve-se
                    consumir
                </p>
            </Modal.Body>
            <Modal.Footer>
                <p className="alert alert-light"> <span className="fw-bold">Vale Ressaltar:</span> Este site não substitui uma consulta com
                    especialistas médicos
                </p>
                <Button variant="success" onClick={handleClose}>
                    Estou Ciente
                </Button>
            </Modal.Footer>
        </Modal>
    )
}