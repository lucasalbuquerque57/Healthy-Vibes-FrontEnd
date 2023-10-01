

export default function homeProfile() {
    return (
        <div>
            <div>
                <h1 className="titulo">Alterar informações de cadastro</h1>
            </div>
            <div className="formulario">
                <div className="campo">
                    <div>
                        <label className="rotulo">Nome</label>
                    </div>
                    <input type="text" id="nome" name="nome" placeholder="Ricardão José Almeida" />
                </div>
                <div className="campo">
                    <div>
                        <label className="rotulo">Email</label>
                    </div>
                    <input type="email" id="email" name="email" placeholder="ricardao.jose@gmail.com" />
                </div>

                <div className="campo">
                    <div>
                        <label className="rotulo">Senha</label>
                    </div>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua Senha" />
                </div>
                <div className="button">
                    <button type="button" className="stylebutton">Salvar Alterações</button>
                </div>
            </div>
        </div>

        /* 
        <div className="form-check sexo">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="sexoMasculino"
          />
          <label className="form-check-label" htmlFor="sexoMasculino">
            Masculino
          </label>
        </div>
        
        
        */

    )
}