interface FiltroProps {
    update: Function
    duracao: React.Dispatch<string>
}

export function FiltroBarra(props: FiltroProps) {


    return (

        /* n to conseguindo fzr esse fdp ser do tamanho do body */

        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light barraDeFiltros col col-md-4 my-2" id="barraDeFiltros">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Filtros</span>
            </a>
            <hr />
            <li className="mb-1 listaCategoria">
                <button className="btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro" data-bs-toggle="collapse" data-bs-target="#areas-collapse" aria-expanded="true">
                    Áreas
                </button>
                <div className="collapse show" id="areas-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                                    value="alongamento"
                                    onChange={(e) => props.update(e.target.checked, "alongamento")}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Alongamento
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault2"
                                    value="perna"
                                    onChange={(e) => props.update(e.target.checked, "perna")}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    Perna
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault3"
                                    value="braco"
                                    onChange={(e) => props.update(e.target.checked, "braco")}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                    Braço
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault4"
                                    value="triceps"
                                    onChange={(e) => props.update(e.target.checked, "triceps")} />
                                <label className="form-check-label" htmlFor="flexCheckDefault4">
                                    Tríceps
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault5"
                                    value="peito"
                                    onChange={(e) => props.update(e.target.checked, "peito")}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault5">
                                    Peito
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <hr />
            <li className="mb-1 listaCategoria">
                <button className="btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro" data-bs-toggle="collapse" data-bs-target="#duracao-collapse" aria-expanded="true">
                    Duração
                </button>
                <div className="collapse" id="duracao-collapse" >
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="input1"
                            value="Curto"
                            onChange={(e) => {
                                if (e.target.checked)
                                    props.duracao(e.target.value)
                            }}
                        />
                        <label className="form-check-label" htmlFor="input1">
                            Curto
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="input2"
                            value="Longo"
                            onChange={(e) => props.duracao(e.target.value)}

                        />
                        <label className="form-check-label" htmlFor="input2">
                            Longo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked
                            value="Todos"
                            onChange={(e) => props.duracao(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Todos
                        </label>
                    </div>
                </div>
            </li>
        </div>

    )
}

