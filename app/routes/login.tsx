import type { LinksFunction, MetaFunction } from "@remix-run/node";
import login from "~/styles/login.css";
import { Link, useNavigate } from "@remix-run/react";
import type { FormEvent } from "react";
import { axiosHealthyApi } from "~/configs/https";
import Swal from "sweetalert2";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: login }];
};

export const meta: MetaFunction = () => ({
  title: "Login",
});

// Login vou precisar botar um localStorage pro Token

export default function Index() {
  const navigate = useNavigate();

  async function handleForm(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    Swal.fire({
      title: "Realizando Login",
      timer: 1000,
      timerProgressBar: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(null);

      },
    }).then(async (result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        await axiosHealthyApi.post("/users/login", {
          email: data.email,
          senha: data.senha,
        })
          .then(r => {
            localStorage.setItem("access-token", r.data.accessToken)
            return navigate("/")
          })
          .catch(e => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${e.code == 401 ? e.response?.data.message : e.message}`
            })
          })

      }
    });


  }

  return (
    <main>
      <div className="container-fluid d-flex justify-content-center align-items-center box">
        <div className="img-box">
          <p>
            Healthy
            <br />
            Vibes
          </p>
          <img src="/treino/mulherLogin.jpg" alt="mulher" />
        </div>
        <div className="form-box">

          <form onSubmit={handleForm} method="post">
            <h1 className="tituloLogin">Login</h1>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite a sua senha"
                required
              />
            </div>
            <div className="input-group">
              <Link to="#">Esqueceu a senha?</Link>
            </div>

            <div className="input-group">
              <button>Entrar</button>
            </div>
            <p className="link-login">
              Não é um membro?
              <Link to="/cadastro" className="cadRedirect">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
