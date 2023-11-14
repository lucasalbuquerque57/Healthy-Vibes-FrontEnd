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

    const calorias = Number((props.resultados?.calorias)?.toFixed(0))
    const minCarb = ((props.resultados?.carboidratos || 0) * 0.9).toFixed(0)
    const maxCarb = ((props.resultados?.carboidratos || 0) * 1.1).toFixed(0)
    const minProtein = ((props.resultados?.proteina || 0) * 0.9).toFixed(0)
    const maxProtein = ((props.resultados?.proteina || 0) * 1.1).toFixed(0)
    const minFat = ((props.resultados?.gorduras || 0) * 0.9).toFixed(0)
    const maxFat = ((props.resultados?.gorduras || 0) * 1.1).toFixed(0)

    function navigateReceitas() {
        // Provavelmente aqui vai criar um localStorage ou um hookstate dos valores obtidos e gerar receit

        const resultStorage = {
            calorias: calorias,
            carb: {
                max: maxCarb,
                min: minCarb
            },
            protein: {
                max: maxProtein,
                min: minProtein
            },
            fat: {
                max: maxFat,
                min: minFat
            },
            tipoDieta: props.resultados?.tipoDieta
        }

        localStorage.setItem("resultsCalc", JSON.stringify(resultStorage))

       /*  const data = localStorage.getItem("userData");
console.log("data: ", JSON.parse(data)); */

        return navigate('/Receitas')
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
                    <p>{calorias} calorias</p>
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
                            <p>{calorias / 1000} kcal</p>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Carboidratos</h6>
                            <p>{minCarb} - {maxCarb}g</p>
                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Proteínas</h6>
                            <p>{minProtein} - {maxProtein} g</p>

                        </div>
                        <div className="col-md-3 pt-3">
                            <h6>Gorduras</h6>
                            <p>{minFat} - {maxFat} g</p>

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