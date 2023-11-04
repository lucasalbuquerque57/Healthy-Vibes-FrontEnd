import type { LinksFunction, MetaFunction } from "@remix-run/node";
import cadastro from "~/styles/cadastro.css";
import { Link } from "@remix-run/react";
import ModalConfirmacao from "./modalConfirmacao";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: cadastro },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Atualização de Dados"
});

export default function alterarDados() {

    return (

        <main >

            <div className="box">
                <div className="box-img fundoPossivel">
                    <Link className="nav-link" to="/">
                        <p>Healthy<br />Vibes</p>
                    </Link>
                    <img src="/cadImg1.jpg" alt="img temporaria" />
                </div>
                <div className="form-box">
                    <h1>Atualização de Dados</h1>
                    <form>
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" placeholder="Digite seu nome atualizado"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail*</label>
                            <input type="email" name="email" placeholder="Digite seu novo e-mail" /* required */ />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Confirmar E-mail*</label>
                            <input type="email" name="email" placeholder="Confirme seu novo e-mail" /* required */ />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Senha*</label>
                            <input type="password" name="senha" placeholder="Digite nova senha" /* required */ />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Confirmar Senha*</label>
                            <input type="password" name="senha" placeholder="Confirme a senha" /* required */ />
                        </div>
                        <div className="input-group">
                            <button>Salvar</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <ModalConfirmacao/>
        </main>

    );
}