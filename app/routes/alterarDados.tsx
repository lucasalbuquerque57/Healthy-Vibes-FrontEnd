import type { LinksFunction, MetaFunction } from "@remix-run/node";
import cadastro from "~/styles/cadastro.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: cadastro },
    ];
};

export const meta: MetaFunction = () => ({
    title: "sla"
});

export default function alterarDados() {
    return (

        <main >

            <div className="box">
                <div className="box-img fundoPossivel">
                    <p>Healthy<br />Vibes</p>
                    <img src="/cadImg1.jpg" alt="img temporaria" />
                </div>
                <div className="form-box">
                    <h1>Alteração de Dados</h1>
                    <form>
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
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
                            <button>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>

        </main>

    );
}