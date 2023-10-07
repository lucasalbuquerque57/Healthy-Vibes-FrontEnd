
interface CardsProps {
    IMC: string;
    data: string;
}

export function CardIMC(props: CardsProps) {
    return (
        <div className="col container-fluid">
            <div className="cardimc">
                <div className="card-body">
                    <div className="conteudo">
                    <h5 className="card-title">IMC: {props.IMC}</h5>
                    <h5 className="card-text">Data: {props.data}</h5>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-trash" ></i>
                        <i className="fa-solid fa-pen-to-square pens"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
