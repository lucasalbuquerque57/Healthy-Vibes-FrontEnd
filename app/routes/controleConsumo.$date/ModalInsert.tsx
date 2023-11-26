import { useEffect, type FormEvent, useState } from "react";
import { Button, Modal, type ModalProps } from "react-bootstrap";
import { axiosHealthyApi } from "~/configs/https";


interface ModalInsert_AguaProps {
    modal: ModalProps
    formFor: string
    updateOrInsert: string
    handleClose: Function
    id: string,
    actualDate: Date
}

export default function ModalInsert(props: ModalInsert_AguaProps) {
    const [measure, setMeasure] = useState("")

    useEffect(() => {
        if (props.formFor == "Água")
            setMeasure("Ml")
        else
            setMeasure("Kcal")
    }, [props.formFor])


    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (props.updateOrInsert == "Inserir") {
            await axiosHealthyApi.post("/consumptions", {
                quantidade: data.quantidade,
                tipoConsumo: props.formFor,
                belongDate: props.actualDate
            }).catch((e) => { console.log(e) })
        } else {
            await axiosHealthyApi.patch(`/consumptions/${props.id}`, {
                quantidade: data.quantidade,
                tipoConsumo: props.formFor
            }).catch((e) => { console.log(e) })
        }

        props.handleClose()
        window.location.reload()
    }

    return (
        <Modal {...props.modal} size="sm" centered>
            <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.updateOrInsert} {props.formFor}</Modal.Title>
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
                        Confirmar
                    </Button>
                </Modal.Footer>
            </form >
        </Modal >

    )
}