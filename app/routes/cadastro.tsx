import type { LinksFunction, MetaFunction } from "@remix-run/node";
import cadastro from "~/styles/cadastro.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: cadastro },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Cadastro"
});

export default function Index() {
  return (

    <body >

      <div className="box">
        <div className="box-img">
          <p>Healthy<br />Vibes</p>
          <img src="/cadImg1.png" alt="img temporaria" />
        </div>
        <div className="form-box">
          <h1>Cadastro</h1>
          <form>
            <div className="input-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" name="nome" placeholder="Digite o seu nome completo" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="Digite seu e-mail" required />
            </div>
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Digite o sua senha" required />
            </div>
            <div className="input-group">
              <label htmlFor="Confirmarsenha">Confirmar Senha</label>
              <input type="password" name="Confirmarsenha" placeholder="Confirme a senha" required />
            </div>
            <div className="input-group">
              <button>Cadastrar</button>
            </div>
            <p className="link-login">Já é um membro?<Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>

    </body>

  );
}