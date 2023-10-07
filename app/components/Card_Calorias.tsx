interface CardsProps {
    horario: string;
    quantidade: string;
}

export function CardCalorias(props: CardsProps) {
    return (
        <div className="col container-fluid">
            <div className="cardcontrolecal">
                <div className="card-body">
                    <div className="conteudo">
                    <h5 className="card-title">Horário: {props.horario} </h5>
                    <h5 className="card-text">Quantidade: {props.quantidade} kcal</h5>
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
