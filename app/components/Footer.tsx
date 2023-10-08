import { Link } from "@remix-run/react";



export function Footer() {

    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col pb-4 pt-4">
                    <img src="/IconeLogo.png" alt="Logo do HealthyVibes" className="col-12 col-md-6 logoFooter" />
                    <div className="footer-socials px-4 px-md-0 pt-2">
                        <Link to="#" className="footer-link" id="youtube" title="YouTube">
                            <i className="fa-brands fa-youtube"></i>
                        </Link>
                        <Link to="#" className="footer-link" id="whatsapp" title="Whatsapp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                        <Link to="#" className="footer-link" id="facebook" title="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className="footer-link" id="instagram" title="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3>Deixe-nos ajudar você</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Receita</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Dietas</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Calculadora</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Exercícios</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Controle de Água</Link>
                        </li>
                    </ul>
                </div>
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3>Bem-vindo</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Contato</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Termos de Serviço</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Política de Privacidade</Link>
                        </li>
                    </ul>
                </div>

            </div>



        </footer>
    )

}