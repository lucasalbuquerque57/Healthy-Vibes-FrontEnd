import type { LinksFunction, MetaFunction } from "@remix-run/node";
import login from "~/styles/login.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: login },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Login"
});

export default function Index() {
  return (

    <main >

      <div className="container-fluid d-flex justify-content-center align-items-center box">
        
          <div className="img-box">
            <p>Healthy<br />Vibes</p>
            <img src="/treino/mulherLogin.jpg" alt="mulher" />
          </div>
          <div className="form-box">
            <h1>Login</h1>
            <form>
              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="Digite seu e-mail" required />
              </div>
              <div className="input-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" placeholder="Digite a sua senha" required />
              </div>
              <div className="input-group">
                <Link to="#">Esqueceu a senha?</Link>
              </div>

              <div className="input-group">
                <button>Entrar</button>
              </div>
              <p className="link-login">Não é um membro?<Link to="/cadastro" className="cadRedirect">Cadastre-se</Link></p>
            </form>
          </div>
        
      </div>

    </main>

  );
}
