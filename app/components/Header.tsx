import { Link } from "@remix-run/react";

export function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-xl" id="topo">
                <div className="container-fluid baseNav">
                    <div className="navbar-brand trapezio">
                        <Link to="/">
                            <img src="/IconeLogo.png" alt="Logo do Healthy Vibes" className="logoHeader" />
                        </Link>
                    </div>
                    <button className="navbar-toggler navBarButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars navBarIcon"></i>
                    </button>
                    <div className="collapse navbar-collapse navSla" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="">Receitas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Dietas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CalculadoraNutricional">Calculadora</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Exercicios">Exercícios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Controle de Consumo</Link>
                            </li>

                        </ul>
                        <hr className="nav-item-divider w-100 d-block d-md-none mx-2" />
                        <div className="profile nav-item">

                            <div className="logCadButtons">

                                <Link to="/Login"><button className="btn  loginButton">Entrar</button></Link>

                                <Link to="/Cadastro"><button className="btn  cadButton" >Cadastre-se</button></Link>

                            </div>
                            <div className="itensAcessibilidade">
                                <img src="/AcessFontSizeBiggerV2.png" className="iconeAcessibilidade" title="Aumentar Fonte" alt="Aumentar fonte" />
                                <img src="/AcessFontSizeLowerV2.png" className="iconeAcessibilidade" title="Diminuir Fonte" alt="Diminuir Fonte" />
                                <img src="/AcessFontHighConrV2.png" className="iconeAcessibilidade" title="Alto contraste" alt="Alto contraste" />
                                <Link to="/Acessibilidade"><img src="/AcessFontInfoV2.png" className="iconeAcessibilidade infoAcess" alt="acesso a acessibilidae" /></Link>
                            </div>


                        </div>

                    </div>


                </div>
            </nav>

        </header>
    )

}