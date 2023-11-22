import type { LinksFunction, MetaFunction } from "@remix-run/node";
import cadastro from "~/styles/cadastro.css";
import { Link, useNavigate } from "@remix-run/react";
import { useState, type FormEvent } from "react";
import { axiosHealthyApi } from "~/configs/https";
import type { AxiosError } from "axios";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: cadastro },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Cadastro"
});

export default function Index() {
  const navigate = useNavigate();
  const [errorValidate, setErrorValidate] = useState(false);

  // email
  const [carregandoEmailMenssagem, setCarregandoEmailMessagem] = useState(false);

  // senha
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")
  const [carregandoConfirmaSenhaMenssagem, setCarregandoConfirmaSenhaMessagem] = useState(false);

  async function handleForm(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (data.senha != data.confirmarsenha)
      setErrorValidate(true)
    else {
      await axiosHealthyApi.post("/users",
        {
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          role: "normal"
        })
        .then(() => {
          navigate("/login")
        })
        .catch((e: AxiosError) => {
          if (e.message == "Email já cadastrado")
            setCarregandoEmailMessagem(true)

          console.log(e)
        })
    }
  }

  function validaSenha() {
    setCarregandoConfirmaSenhaMessagem(false)

    if (senha != confirmaSenha) {
      setCarregandoConfirmaSenhaMessagem(true)
      return false
    }

    return true
  }


  return (

    <main >

      <div className="box">
        <div className="box-img fundoPossivel">
          <p>Healthy<br />Vibes</p>
          <img src="/cadImg1.jpg" alt="img temporaria" />
        </div>
        <div className="form-box">
          <h1>Cadastro</h1>
          <form onSubmit={handleForm}>
            <div className="input-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" name="nome" placeholder="Digite o seu nome completo" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
              {carregandoEmailMenssagem && (
                <p className='text-danger'>E-mail em uso</p>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Digite o sua senha" required
                onChange={(e) => setSenha(e.target.value)}
              />
              {carregandoConfirmaSenhaMenssagem && (
                <p className='text-danger'>As senhas precisam ser iguais</p>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="Confirmarsenha">Confirmar Senha</label>
              <input type="password" name="confirmarsenha" placeholder="Confirme a senha" required
                onChange={(e) => setConfirmaSenha(e.target.value)}
                onBlur={validaSenha}
              />
            </div>

            {errorValidate && (
              <p className='text-danger text-end'>Senha não conferem</p>
            )
            }
            <div className="input-group">
              <button>Cadastrar</button>
            </div>
            <p className="link-login">Já é um membro?<Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>

    </main>

  );
}