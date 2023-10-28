
interface CardsProps {
    IMC: string;
    data: string;
}

export function CardIMC(props: CardsProps) {
    return (
        <div className="col p-0">
            <div className="cardimc">
                <div className="card-body p-2">
                    <div className="conteudo">
                        <h5 className="card-title">IMC: {props.IMC}</h5>
                        <h5 className="card-text">Data: {props.data}</h5>
                    </div>
                    <div className="icon text-end">
                        <i className="fa-solid fa-trash mx-2" ></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
