import type { LinksFunction, MetaFunction } from "@remix-run/node";
import cadastro from "~/styles/cadastro.css";
import { Link, useNavigate } from "@remix-run/react";
import ModalConfirmacao from "./modalConfirmacao";
import { axiosHealthyApi } from "~/configs/https";
import Swal from "sweetalert2";
import type { FormEvent } from "react";
import { useState } from "react";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: cadastro },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Atualização de Dados"
});

class UserUpdate {
    nome: string | undefined;
    senha: string | undefined;
    email: string | undefined;
}

export default function AlterarDados() {
    const navigate = useNavigate();


    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [carregandoConfirmaSenhaMenssagem, setCarregandoConfirmaSenhaMessagem] = useState(false);
    const [errorValidate, setErrorValidate] = useState(false);

    function validaSenha() {
        setCarregandoConfirmaSenhaMessagem(false)

        if (senha != confirmaSenha) {
            setCarregandoConfirmaSenhaMessagem(true)
            return false
        }

        return true
    }

    async function onSubmit(e: FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        const userUpdate = new UserUpdate();
        if (data.nome) {
            userUpdate.nome = data.nome.toString()
        }
        if (data.senha) {
            userUpdate.senha = data.senha.toString()
        }
        if (data.email) {
            userUpdate.senha = data.email.toString()
        }

        if (data.senha != data.confirmarsenha)
            setErrorValidate(true)
        else {
            await axiosHealthyApi.patch('/users/myuser', userUpdate)
                .then(() => {
                    Swal.fire({
                        title: "Atualizado",
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        icon: "success"
                    }).then(() => {
                        return navigate("/")
                    })
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${e.code == 401 ? e.response?.data.message : e.message}`
                    })
                })
        }
    }

    function handleDelete() {

        Swal.fire({
            title: 'Quer deletar?',
            showDenyButton: true,
            /* showCancelButton: true, */
            denyButtonText: `Cancelar`,
            confirmButtonText: 'Deletar',
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosHealthyApi.delete(`/users/myuser`)
                    .then(() => {
                        Swal.fire('Deletado!', '', 'success').then(() => {
                            localStorage.removeItem("access-token")
                            return navigate("/")
                        })
                    })
                    .catch(e => console.log(e))

            } else if (result.isDenied) {
                Swal.fire('Não deletado', '', 'info')
            }
        })

    }

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
                    <form onSubmit={onSubmit}>
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" placeholder="Digite seu nome atualizado" name="nome" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail*</label>
                            <input type="email" placeholder="Digite seu novo e-mail" name="email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Senha*</label>
                            <input type="password" placeholder="Digite nova senha" name="senha" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Confirmar Senha*</label>
                            <input type="password" placeholder="Confirme a senha" name="confirmarsenha" onChange={(e) => setConfirmaSenha(e.target.value)}
                                onBlur={validaSenha} />
                            {carregandoConfirmaSenhaMenssagem && (
                                <p className='text-danger'>As senhas precisam ser iguais</p>
                            )}
                        </div>
                        {errorValidate && (
                            <p className='text-danger text-end'>Senha não conferem</p>
                        )
                        }
                        <div className="input-group">
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="bg-danger" onClick={handleDelete}>Apagar conta</button>
                        </div>
                    </form>

                </div>
            </div>
            <ModalConfirmacao />
        </main>

    );
}