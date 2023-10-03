import type { FormEvent } from "react"
import type { Resultados } from "./route";

interface FormCalculadoraProps {
    show: React.Dispatch<boolean>,
    resultados: React.Dispatch<Resultados>,
}


export default function FormCalculadora(props: FormCalculadoraProps) {

    function handleForm(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        const resultados: Resultados = {
            calorias: 50,
            carboidratos: 50,
            proteina: 50,
            gorduras: 50,
            opcaoPeso: `${data.options}`
        }

        props.resultados(
            resultados
        )

        props.show(true)

    }

    return (
        <form onSubmit={handleForm} method='post'>

            <div className="row m-auto cardBox">
                <div className="card cardTeste">
                    <input
                        className="form-check-input TipoAli"
                        type="radio"
                        name="tipoAli"
                        id="tudo"
                        required
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="tudo">
                        <img
                            className="card-img-top imgTipoDieta"
                            src="/calculadora/tudo_Cnutricional.png"
                            alt="Variados alimentos"
                        />
                        <div className="card-body">
                            <p className="card-text cardTxtTipoDieta" >Tudo</p>
                        </div>
                    </label>
                </div>
                <div className="card cardTeste">
                    <input
                        className="form-check-input TipoAli"
                        type="radio"
                        name="tipoAli"
                        id="vegetariana"
                        required
                    />
                    <label htmlFor="vegetariana" className="form-check-label lblFdp">
                        <img
                            className="card-img-top imgTipoDieta"
                            src="/calculadora/vegetariana_Cnutricional.png"
                            alt="Diversas frutas e vegetais"
                        />
                        <div className="card-body">
                            <p className="card-text cardTxtTipoDieta">Vegetariana</p>
                        </div>
                    </label>

                </div>
                <div className="card cardTeste">
                    <input
                        className="form-check-input TipoAli"
                        type="radio"
                        name="tipoAli"
                        id="cetogenica"
                        required
                    />
                    <label htmlFor="cetogenica">
                        <img
                            className="card-img-top imgTipoDieta"
                            src="/calculadora/cetogenica_Cnutricional.png"
                            alt="Aveia e um abacate"
                        />
                        <div className="card-body">
                            <p className="card-text cardTxtTipoDieta">Cetogênica</p>
                        </div>
                    </label>
                </div>
            </div>

            <h3 className="tituloCategoria">Deseja...?</h3>
            <div className="d-flex justify-content-center">
                <input
                    type="radio"
                    className="btn-check "
                    name="options"
                    id="option1"
                    autoComplete="off"
                    value="Perder Peso"
                    required
                />
                <label className="btn btn-secondary pontaEsquerda" htmlFor="option1">
                    Perder peso
                </label>
                <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option2"
                    autoComplete="off"
                    value="Manter-se ativo"
                    required
                    defaultChecked
                />
                <label className="btn btn-secondary pontaNenhuma" htmlFor="option2">
                    Manter-se ativo
                </label>
                <input
                    type="radio"
                    className="btn-check "
                    name="options"
                    id="option3"
                    autoComplete="off"
                    value="Manter-se ativo"
                    required

                />
                <label className="btn btn-secondary pontaDireita" htmlFor="option3">
                    Ganhar músculo
                </label>
            </div>

            <h3 className="tituloCategoria">Sexo</h3>
            <div className="d-flex justify-content-center">
                <div className="form-check sexo">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="sexoFeminino"
                        required
                    />
                    <label className="form-check-label" htmlFor="sexoFeminino">
                        Feminino
                    </label>
                </div>
                <div className="form-check sexo">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="sexoMasculino"
                        required
                    />
                    <label className="form-check-label" htmlFor="sexoMasculino">
                        Masculino
                    </label>
                </div>
            </div>

            <div className="container col-md-3 col-lg-2 pt-1">
                <div className="row d-flex justify-content-center">

                    <div className="pt-2">
                        <label>Idade:</label>
                        <input className="form-control border border-secondary " type="number" name="idade" placeholder="Idade" required />
                    </div>

                    <div className="pt-2">
                        <label>Altura</label>
                        <input className="form-control border border-secondary" type="number" name="altura" placeholder="Altura em Cm" required />
                    </div>

                    <div className="pt-2">
                        <label>Peso</label>
                        <input className="form-control border border-secondary" type="number" name="peso" placeholder="Peso em Kg" required />
                    </div>

                </div>
            </div>
            <h3 className="tituloCategoria">Nível de Atividade</h3>
            <div className="container col-lg-2">
                <select className="form-select form-select-sm selectCalculadora" aria-label="Default select example" defaultValue="" required>
                    <option value="" disabled>Selecione</option>
                    <option value="1">Sedentário</option>
                    <option value="2">Baixa atividade</option>
                    <option value="3">Ativo</option>
                    <option value="4">Muito ativo</option>
                </select>
            </div>
            <div className="container pt-5 col-lg-2 d-flex justify-content-center">
                <button className="botaoCalcular w-50" type="submit">
                    Calcular
                </button>
            </div>

        </form>
    )
}   