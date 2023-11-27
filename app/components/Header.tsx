import { Link } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import { themePage } from "../script/changeTheme";
import { useHookstate } from "@hookstate/core";
import Hotjar from "@hotjar/browser";
import { axiosHealthyApi } from "~/configs/https";
import Swal from "sweetalert2";

interface UserInterface {
  nome: string,
}

export function Header() {

  const [user, setUser] = useState<UserInterface>()

  const handleGet = useCallback(async () => {
    await axiosHealthyApi
      .get("/users/myuser")
      .then((r) => {
        setUser(r.data);
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  useEffect(() => {
    handleGet()
  }, [handleGet])


  const siteId = 3702227;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion, {
    debug: true,
  });

  const [size, setSize] = useState(1);

  const changeFontSize = (tipoOperacao: string) => {
    if (tipoOperacao == "aumentar" && size < 2) {
      setSize(1.25);
    } else if (tipoOperacao == "diminuir" && size > 1) {
      setSize(1);
    }
    document.documentElement.style.fontSize = `${size}rem`;
  };

  const changeTheme = useHookstate(themePage);
  const [theme, setTheme] = useState(changeTheme.get());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    changeTheme.set(theme);
  }, [changeTheme, theme]);

  const switchContraste = () => {
    const newTheme = theme === "contraOn" ? "contraOff" : "contraOn";
    setTheme(newTheme);
  };

  function logout() {
    Swal.fire({
      title: 'Quer realmente sair?',
      showCancelButton: true,
      confirmButtonText: 'Deslogar',
    }).then((result) => {

      if (result.isConfirmed) {
        localStorage.removeItem("access-token")
        Swal.fire({
          title: "Deslogado",
          allowEscapeKey: false,
          allowOutsideClick: false,
          icon: "success"
        }).then(() => { window.location.reload() })
      }
    })

  }

  return (
    <header>
      <nav className="navbar navbar-expand-xl" id="topo">
        <div className="container-fluid baseNav">
          <div className="navbar-brand trapezio">
            <Link to="/">
              <img
                src="/IconeLogo.png"
                alt="Logo do Healthy Vibes"
                className="logoHeader"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler navBarButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars navBarIcon"></i>
          </button>
          <div
            className="collapse navbar-collapse navSla"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Dietas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CalculadoraNutricional">
                  Calculadora
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Exercicios">
                  Exercícios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/controleConsumo">
                  Controle de Consumo
                </Link>
              </li>
            </ul>
            <hr className="nav-item-divider w-100 d-block d-lg-none mx-2" />
            <div className="profile nav-item">
              <div className="logCadButtons">

                {user?.nome == null ?
                  <>
                    <Link to="/Login">
                      <button className="btn  loginButton">Entrar</button>
                    </Link>

                    <Link to="/Cadastro">
                      <button className="btn  cadButton">Cadastre-se</button>
                    </Link>
                  </>
                  :
                  < div className="nav-item dropdown perfilDropdownSummoner">
                    <button
                      className="nav-link dropleft dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Olá, {user?.nome}
                    </button>
                    <div className="dropdown-menu dropdown-menu-end perfilDropdown">
                      <Link className="dropdown-item ItemDropdown" to="/profile">
                        <i className="fa fa-user-o"></i> Minhas coisas
                      </Link>{" "}


                      <button className="dropdown-item ItemDropdown" onClick={logout}>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
                        Logout
                      </button>

                    </div>
                  </div>
                }




              </div>
              <div className="itensAcessibilidade">
                <img
                  src="/AcessFontSizeBiggerV2.png"
                  className="iconeAcessibilidade"
                  title="Aumentar Fonte"
                  alt="Aumentar fonte"
                  onClick={() => changeFontSize("aumentar")}
                />
                <img
                  src="/AcessFontSizeLowerV2.png"
                  className="iconeAcessibilidade"
                  title="Diminuir Fonte"
                  alt="Diminuir Fonte"
                  onClick={() => changeFontSize("diminuir")}
                />
                <img
                  src={`/AcessFontHighConrV2${theme == "contraOn" ? "-inverso" : ""
                    }.png`}
                  className="iconeAcessibilidade"
                  title="Alto contraste"
                  alt="Alto contraste"
                  onClick={switchContraste}
                />
                <Link to="/Acessibilidade">
                  <img
                    src="/AcessFontInfoV2.png"
                    className="iconeAcessibilidade infoAcess"
                    alt="acesso a acessibilidae"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
}
