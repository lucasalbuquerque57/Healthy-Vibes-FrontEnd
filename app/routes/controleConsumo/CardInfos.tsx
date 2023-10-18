interface CardsProps {
    horario: string;
    quantidade: string;
}

export function CardInfos(props: CardsProps) {
    return (
        <div className="col col-lg-4">
            <div className="cardcontrole p-2">
                <div className="card-body">
                    <div className="conteudo">
                    <p className="card-title">Horário: {props.horario} </p>
                    <p className="card-text">Quantidade: {props.quantidade}</p>
                    </div>
                    <div className="icon text-end">
                        <i className="fa-solid fa-trash mx-2" ></i>
                        <i className="fa-solid fa-pen-to-square pens"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
