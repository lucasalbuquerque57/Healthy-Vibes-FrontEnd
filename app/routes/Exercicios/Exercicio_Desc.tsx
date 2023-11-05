import { useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';


export default function ExercicioDescricao() {

    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    

    /* useEffect(() => {
        setLgShow(true);
    }, []); */

    return (
        <Modal
            size="lg"
            show={lgShow}
            onHide={()=> setLgShow(false)}
            centered
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center warning-diferenciado fw-bold">
                    <i className="fa-solid fa-triangle-exclamation"></i> Nome do exercicio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className="container-fluid text-center py-4" >
                    <iframe className="video" src="https://www.youtube.com/embed/A2FAa4Q-4eg?si=1y-fgwSsrG1coOM5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                    </iframe>
                </div>

                <div className="mx-3 mx-md-5 labelSimples">
                    <h5>Repetições</h5>
                    <p className="rep rounded">Fazer no mínimo 4 x 10</p>
                </div>

                <div>
                    <h5 className="texto-justificado m-md-4 mx-md-5 mx-3 labelSimples">
                        Fazer pranchas melhora significativamente uma postura erecta e estável.
                        Através do fortalecimento de core, o corpo será capaz de manter uma
                        postura correcta porque os músculos no abdómen têm grande influência
                        sobre a estabilidade do pescoço, ombros, peito e costas.
                    </h5>
                </div>
            </Modal.Body>
        </Modal>
    )
}