import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { axiosHealthyApi } from "~/configs/https";


export default function ModalConfirmacao() {

    const [show, setShow] = useState(false);

    const [invalidFeedback, setInvalidFeedback] = useState(false)


    async function handleForm(e: FormEvent) {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        await axiosHealthyApi.post("/users/verifyPassword", {
            senha: data.senha,
        })
            .then(() => { setShow(false) })
            .catch((e) => {
                if (e.response?.data.message == "Senha inválida") {
                    setInvalidFeedback(true)
                }
                console.log(e)
            })


    }

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
            <form onSubmit={handleForm}>
                <Modal.Body >
                    <div className="input-group">
                        <label htmlFor="senha">Confirme sua Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua Senha" required />
                        {invalidFeedback &&
                            <p className='text-danger'>Senha inválida</p>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-comum" type="submit">
                        Confirmo
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}