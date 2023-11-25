import Swal from "sweetalert2";
import { axiosHealthyApi } from "~/configs/https";

interface CardsProps {
    id: string
    horario: string;
    quantidade: string;
    typeCard: string;
    setUpdateOrInsert: React.Dispatch<string>;
    setId: React.Dispatch<string>;
    handleShow: Function
}

export function CardInfos(props: CardsProps) {

    function handleClickUpdate() {
        props.setUpdateOrInsert("Atualizar")
        props.setId(props.id)
        props.handleShow(props.typeCard)
    }

    function changeAnimation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.currentTarget.className += " fa-shake"
    }

    function changeToDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "")
    }

    function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        // Vou colocar os bglhs do axios aqui
        e.preventDefault();
        Swal.fire({
            title: 'Quer deletar?',
            showDenyButton: true,
            /* showCancelButton: true, */
            denyButtonText: `Cancelar`,
            confirmButtonText: 'Deletar',
        }).then(async (result) => {

            if (result.isConfirmed) {
                await axiosHealthyApi.delete(`/consumptions/${props.id}`)
                    .catch((e) => { console.log(e) })
                    .then(() => { Swal.fire('Deletado!', '', 'success').then(() => { window.location.reload() }) })

            } else if (result.isDenied) {
                Swal.fire('Não deletado', '', 'info')
            }
        })

    }

    return (
        <div className="col-4" style={{ width: "10rem" }}>
            <div className="cardcontrole p-2 border rounded">
                <div className="card-body">
                    <div className="conteudo">
                        <p className="card-title">Horário: {props.horario} </p>
                        <p className="card-text">Qtd: {props.quantidade}</p>
                    </div>
                    <div className="icon text-end">
                        <i className="fa-solid fa-trash mx-2" onClick={handleDelete}
                            onMouseEnter={changeAnimation}
                            onMouseLeave={changeToDefault}
                        ></i>
                        <i className="fa-solid fa-pen-to-square pens"
                            onClick={() => {
                                handleClickUpdate()
                            }}
                            onMouseEnter={changeAnimation}
                            onMouseLeave={changeToDefault}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
