import type { FormEvent } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";                                                               

export function Header() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-xl" id="topo">
                <div className="container-fluid baseNav">
                    <div className="trapezio">
                        <Link to="/">
                            <img src="/IconeLogo.png" alt="Imagem Temporária" className="logoHeader"/>
                        </Link>
                    </div>
                    <button className="navbar-toggler navBarButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars navBarIcon"></i>
                    </button>
                    <div className="collapse navbar-collapse navSla" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="">Receitas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Dietas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/CalculadoraNutricional">Calculadora</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Exercícios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Controle de Consumo</a>
                            </li>
                            
                        </ul>

                        <div className="profile nav-item">                                                      
                                
                                <div className="logCadButtons">

                                    <Link to="/Login"><button className="btn  loginButton">Entrar</button></Link>

                                    <Link to=""><button className="btn  cadButton" >Cadastre-se</button></Link>

                                </div> 
                                <div className="itensAcessibilidade">
                                    <img src="/AcessFontSizeBiggerV2.png" className="iconeAcessibilidade" title="Aumentar Fonte"/>
                                    <img src="/AcessFontSizeLowerV2.png" className="iconeAcessibilidade"/>
                                    <img src="/AcessFontHighConrV2.png" className="iconeAcessibilidade"/>
                                    <Link to="/Acessibilidade"><img src="/AcessFontInfoV2.png" className="iconeAcessibilidade infoAcess"/></Link>
                                    

                                    {/* <Link to="/Acessibilidade" className="atalhoParaAcessibilidade"><i className="fa-solid fa-circle-info iconeAcessibilidade"></i></Link> */}
                                </div>
                                
                            
                    </div> 
  
                    </div>

                    


                    {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="">Login/Cad Area</a>
                            </li>
                            
                            sla
                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>
    )

}