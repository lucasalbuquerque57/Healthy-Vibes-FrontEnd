import { Link } from "@remix-run/react";
                                                      


export function Footer() {
    
    return (
        <footer>
        <div>
            <h3 className="footer-logo">Logo</h3>
            <p>Redes Sociais</p>
            <div className="footer-socials">
                <Link to="#" className="footer-link" id="youtube">
                    <i className="fa-brands fa-youtube"></i>
                </Link>

                <Link to="#" className="footer-link" id="whatsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                </Link>

                <Link to="#" className="footer-link" id="facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
                
                <Link to="#" className="footer-link" id="instagram">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
            </div>
        </div>
    <div>
        
    
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
    <div>
        <ul className="footer-list">
            <li>
                <h3>Bem-vindo</h3>
            </li>
            <li>
                <Link to="#" className="footer-link">Sobre Nos</Link>
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
            
    </footer>
    )

}