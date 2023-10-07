interface CardsProps {
    horario: string;
    quantidade: string;
}

export function CardAgua(props: CardsProps) {
    return (
        <div className="col container-fluid">
            <div className="card" style={{ height: "15rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Horário: </h5>
                    <p className="card-text">Quantidade: </p>
                </div>
            </div>
        </div>
    )
}
