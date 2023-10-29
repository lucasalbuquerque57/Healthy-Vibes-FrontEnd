interface CardsProps {
    horario: string;
    quantidade: string;
    typeCard: string;
    setUpdateOrInsert: React.Dispatch<string>;
    handleShow: Function
}

export function CardInfos(props: CardsProps) {

    function handleClickUpdate() {
        props.setUpdateOrInsert("update")
        props.handleShow(props.typeCard)
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
                        <i className="fa-solid fa-trash mx-2"></i>
                        <i className="fa-solid fa-pen-to-square pens" onClick={() => {
                            handleClickUpdate()
                        }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
