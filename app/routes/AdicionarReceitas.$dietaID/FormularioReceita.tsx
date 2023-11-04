import { Button } from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form";


interface FormularioReceitaProps {
    dietaId: string,
    periodoRef: string
}


export default function FormularioReceita(props: FormularioReceitaProps) {


    type FormValues = {
        titulo: string;
        ingredientes: {
            nome: string,
            qtd: number
        }[];
        modoDePreparo: string;
        calorias: number
        carboidratos: number
        gordura: number
        proteína: number
        user: string
    };
    // Botar bglh de imagem no formulario

    const {
        register,
        control,
        handleSubmit,
    } = useForm<FormValues>({
        defaultValues: {
            ingredientes: [{ nome: "", qtd: 1 }]
        },
        mode: "onBlur"
    });

    const { fields, append, remove } = useFieldArray({
        name: "ingredientes",
        control
    });


    function onSubmit(data: FormValues) {
        console.log(data)
        // vou ter que postar a receita dp, botar o id nela na dieta
        // vou ter que postar a imagem primeiro, antes da receita, FAZ O L
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col d-flex flex-column justify-content-start align-items-center">

                    <div className="start" >

                        <div className="pt-1">
                            <label htmlFor="Titulo" className="form-label fs-4 tituloInput">Digite o Nome da sua Receita</label>
                            <input type="text" className="inputPadrao form-control" id="Titulo" {...register(`titulo`)} placeholder="Ex: Dieta da Lua" required />
                        </div>
                        <div className="pt-3">
                            <h4 className="form-label fs-4 tituloInput">Quais são os ingredientes?</h4>

                            {
                                fields.map((field, index) => (
                                    <div className="row column-gap-2 mb-2 mx-0" key={field.id}>
                                        <input type="text" className="inputPadrao form-control" id={`titulo${index}`} style={{ width: "8rem" }} required
                                            placeholder="Nome"
                                            {...register(`ingredientes.${index}.nome`)}
                                        />

                                        <input type="text" className="inputPadrao form-control" id={`qtd${index}`} style={{ width: "4rem" }} required
                                            {...register(`ingredientes.${index}.qtd`)}
                                            placeholder="Qtd"
                                        />
                                        <Button onClick={() => remove(index)} size="sm" className="ms-4 rounded-circle buttonRemove my-1">
                                            <i className="fa-solid fa-xmark"></i>
                                        </Button>
                                    </div>
                                ))
                            }
                            <Button className="buttonAdd rounded-circle" onClick={() => append({ nome: "", qtd: 1 })}>
                                <i className="fa-solid fa-plus"></i>
                            </Button>

                        </div>

                        <div className="py-md-5 mb-3">
                            <p className="fs-4 tituloInput">Qual modo de preparo?</p>
                            <div className="form-floating">
                                <textarea className="form-control caixaTexto" placeholder="Descrição de como preparar" id="floatingTextarea" {...register(`modoDePreparo`)} style={{ height: "10rem" }}></textarea>
                                {/* <label htmlFor="floatingTextarea">Descrição</label> */}  {/* isso aq ta encima do placeholder e n da p enxergar nada */}
                            </div>
                        </div>


                    </div>


                </div>
                <div className="col d-flex flex-column justify-content-start align-items-center">
                    <div className="end py-2 valoresNutricionais rounded" >

                        <div className="head px-5">
                            <h4>Definir Valores Nutricionais</h4>
                        </div>
                        <div className="body">
                            <div className="row my-2">
                                <label htmlFor="calorias" className="form-label labelNutri mx-1 mx-md-2 py-2"><strong>Calorias</strong></label>
                                <input type="text" className="inputPadrao form-control" id="calorias" style={{ width: "10rem" }} required
                                    placeholder="qtd em Total"
                                    {...register(`calorias`)}
                                />
                            </div>
                            <div className="row my-2">
                                <label htmlFor="carboidratos" className="form-label labelNutri mx-1 mx-md-2 py-2"><strong>Carboidratos</strong></label>
                                <input type="text" className="inputPadrao form-control" id="carboidratos" style={{ width: "10rem" }} required
                                    placeholder="qtd em gramas (g)"
                                    {...register(`carboidratos`)}
                                />
                            </div>
                            <div className="row my-2">
                                <label htmlFor="gordura" className="form-label labelNutri mx-1 mx-md-2 py-2"><strong>Gordura</strong></label>
                                <input type="text" className="inputPadrao form-control" id="gordura" style={{ width: "10rem" }} required
                                    placeholder="qtd em gramas (g)"
                                    {...register(`gordura`)}
                                />
                            </div>
                            <div className="row my-2">
                                <label htmlFor="proteina" className="form-label labelNutri mx-1 mx-md-2 py-2"><strong>Proteína</strong></label>
                                <input type="text" className="inputPadrao form-control" id="proteina" style={{ width: "10rem" }} required
                                    placeholder="qtd em gramas (g)"
                                    {...register(`proteína`)}
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center py-5 pe-5">

                    <Button type="reset" className="ms-5 buttonForm float-lg-end col col-md-12" size="lg">Limpar</Button>

                    <Button type="submit" className="ms-5 buttonForm col col-md-12" size="lg">Salvar</Button>

                </div>
            </div>
        </form>
    )
}