import Swal from "sweetalert2";

interface CardsProps {
    IMC: number;
    data: string;
    handleShow: Function;
    imcId: React.Dispatch<string>;
}

export function CardIMC(props: CardsProps) {

    function changeAnimation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.currentTarget.className += " fa-shake"
    }

    function changeToDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "")
    }

    function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        // Vou colocar os bglhs do axios aqui
        e.preventDefault();
        props.imcId("")
        Swal.fire({
            title: 'Quer deletar?',
            showDenyButton: true,
            /* showCancelButton: true, */
            denyButtonText: `Cancelar`,
            confirmButtonText: 'Deletar',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Deletado!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Não deletado', '', 'info')
            }
        })

    }

    function handleUpdate() {
        props.imcId("")
        props.handleShow(true)

    }

    return (
        <div className="col p-0">
            <div className="cardimc">
                <div className="card-body p-2">
                    <div className="conteudo">
                        <h5 className="card-title">IMC: {props.IMC}</h5>
                        <h5 className="card-text">Data: {props.data}</h5>
                    </div>
                    <div className="icon text-end">
                        <i className="fa-solid fa-trash mx-2"
                            onClick={handleDelete}
                            onMouseEnter={changeAnimation}
                            onMouseLeave={changeToDefault}
                        ></i>
                        <i className="fa-solid fa-pen-to-square"
                            onClick={handleUpdate}
                            onMouseEnter={changeAnimation}
                            onMouseLeave={changeToDefault}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
