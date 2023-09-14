import type { FormEvent } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";                                                               

export function Header() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-sm" id="topo">
                <div className="container-fluid">
                    <img src="/IconeLogo.png" alt="Imagem Temporária" className="logoHeader"/>

                    <div className="collapse navbar-collapse navSla" id="collapsibleNavbar">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="">Receitas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Dietas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Calculadora</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Exercícios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Controle de Consumo</a>
                            </li>
                            
                        </ul>


                        {/* <div className="profile">
                            
                                <ul className="navbar-nav">
                                    <div className="nav-item dropdown">

                                        <button className="nav-link dropleft dropdown-toggle" data-bs-toggle="dropdown">
                                            <img src="" alt="Foto de Perfil" className="imagemPerfil" />
                                        </button>
                                        
                                    </div>
                                </ul>
                                
                                <div>

                                    <Link to=""><button className="btn  loginButton">Entrar</button></Link>

                                    <Link to=""><button className="btn  cadButton" >Cadastre-se</button></Link>

                                </div>
                            
                        </div> */}
                    </div>
                    {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="">Login/Cad Area</a>
                            </li>
                            
                            
                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>
    )

}