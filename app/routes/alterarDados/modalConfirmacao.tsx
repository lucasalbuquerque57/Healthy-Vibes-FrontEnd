import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


export default function ModalConfirmacao() {

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
                <Modal.Title className="text-center warning-diferenciado fw-bold">
                    <i className="fa-solid fa-triangle-exclamation"></i> Confirme sua senha original
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                    <div className="input-group">
                        <label htmlFor="senha">Confirme sua Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua Senha" required/>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-comum" onClick={handleClose}>
                    Confirmo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}