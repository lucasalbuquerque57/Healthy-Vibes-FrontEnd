import type { ModalProps } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import type { Resultados } from "./route";
import { useNavigate } from "@remix-run/react";

interface ModalResultadoProps {
    modal: ModalProps,
    resultados: Resultados | undefined
}

export default function ModalResultado(props: ModalResultadoProps) {

    const navigate = useNavigate();

    function navigateReceitas() {
        navigate('/Receitas')
        // Talvez vou ter que usar o HookState
    }

    return (
        <Modal
            {...props.modal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="container-fluid text-center">
                    <p className="fw-bold">Seu gasto calórico por dia é:</p>
                    <p>{props.resultados?.calorias} calorias</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row text-center">
                        <h4>Sugerido para: {props.resultados?.opcaoPeso}</h4>
                    </div>
                    <div className="row text-center pt-2">
                        <div className="col-md-3">
                            <h6>Calorias Sugeridas</h6>
                            <p>{(props.resultados?.calorias || 0) / 1000} kcal</p>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Carboidratos</h6>
                            <p>{props.resultados?.carboidratos} g</p>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Proteínas</h6>
                            <p>{props.resultados?.proteina} g</p>

                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Gorduras</h6>
                            <p>{props.resultados?.gorduras} g</p>

                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center align-items-center">
                <button className="botaoCalcular w-50" type="button" onClick={navigateReceitas}>
                    Gerar Receitas
                </button>
            </Modal.Footer>
        </Modal>
    )
}