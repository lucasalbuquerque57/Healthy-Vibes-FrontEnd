interface CardsProps {
  title: string;
  dificuldade: string;
  porcao: string;
}

export function CardReceita(props: CardsProps) {

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-13 mt-4">
          <div className="card">
            <div className="card-horizontal">
              <div className="img-square-wrapper">
                <img
                  className=""
                  src="/PastaIcon.png"
                  alt="Card cap"
                />
              </div>
              <div className="card-body">
                <div className="card-titulo-botoes">
                  <h4 className="card-title">{props?.title}</h4>
                  <button className="opcoes">
                    <img src="/FavoriteIcon.png" alt=""></img>
                  </button>
                  <button className="opcoes">
                    <img src="/MoreIcon2.png" alt=""></img>
                  </button>
                </div>
                <p className="card-text">
                  Dificuldade: {props?.dificuldade}
                </p>
                <p>
                  {props?.porcao} Porção(ões)
                </p>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}