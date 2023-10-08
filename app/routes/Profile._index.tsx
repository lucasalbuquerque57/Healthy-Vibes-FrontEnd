

export default function homeProfile() {
    return (
        <div>
            <div>
                <h1 className="titulo">Alterar informações de cadastro</h1>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center box">
                <div className="img-box">
                    <img src="/treino/treino.jpg" alt="mulher na esteira" />
                </div>
                <div className="form-box">
                    <form>
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" placeholder="Atualize seu nome" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="Atualize seu e-mail" required />
                        </div>
                        <div className="input-group w50">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Atualize a sua senha" required />
                        </div>

                        <div className="input-group">
                            <button>Atualizar</button>
                        </div>
                    </form>

                </div>
            </div>




        </div>


    )
}