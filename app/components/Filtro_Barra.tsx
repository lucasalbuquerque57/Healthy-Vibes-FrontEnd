import { Link } from "@remix-run/react";

interface CardsProps {
  
}

export function Filtro_Barra(props: CardsProps) {
    

  return (

            /* n to conseguindo fzr esse fdp ser do tamanho do body */

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light barraDeFiltros" id="barraDeFiltros">
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
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Alongamento
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Perna
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Braço
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Tríceps
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Peito
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />
                <li className="mb-1 listaCategoria">
                    <button className="btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro" data-bs-toggle="collapse" data-bs-target="#intensidade-collapse" aria-expanded="true">
                        Intensidade
                    </button>
                    <div className="collapse show" id="intensidade-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria">
                            <input type="range" className="form-range" min="0" max="3" defaultValue={"0"} id="customRange2"/>
                        </ul>
                    </div>
                </li>
                <hr />
                <li className="mb-1 listaCategoria">
                    <button className="btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro" data-bs-toggle="collapse" data-bs-target="#duracao-collapse" aria-expanded="true">
                        Duração
                    </button>
                    <div className="collapse show" id="duracao-collapse" >
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Curto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Longo
                            </label>
                        </div>
                    </div>
                </li>
            </div>
    
  )
}

