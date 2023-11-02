import { Button } from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form";


export default function FormularioReceita() {


    type FormValues = {
        titulo: string;
        ingredientes: {
            nome: string,
            qtd: number
        }[];
        modoDePreparo: string;
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
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col d-flex flex-column justify-content-start align-items-center">

                    <div className="start" >

                        <div className="pt-1">
                            <label htmlFor="Titulo" className="form-label fs-4">Digite o Nome da sua Receita</label>
                            <input type="text" className="inputPadrao form-control" id="Titulo" {...register(`titulo`)} placeholder="Dieta da Lua" required />
                        </div>
                        <div className="pt-3">
                            <label htmlFor="ingredientes" className="form-label fs-4">Quais são os ingredientes?</label>

                            {
                                fields.map((field, index) => (
                                    <div className="row column-gap-2 mb-2 mx-0" key={field.id}>
                                        <input type="text" className="inputPadrao form-control" id={`titulo${index}`} style={{ width: "8rem" }} required
                                            placeholder="Nome"
                                            {...register(`ingredientes.${index}.nome`)}
                                        />

                                        <input type="text" className="inputPadrao form-control" id="qtd" style={{ width: "4rem" }} required
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
                            <p className="fs-4">Qual modo de preparo?</p>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Descrição de como preparar" id="floatingTextarea" {...register(`modoDePreparo`)} style={{ height: "10rem" }}></textarea>
                                <label htmlFor="floatingTextarea">Descrição</label>
                            </div>
                        </div>


                    </div>


                </div>
                <div className="col d-flex flex-column justify-content-start align-items-center">
                    <div className="end py-2 valoresNutricionais rounded" >

                        <div className="head px-5">
                            <h4>Definir Valores Nutricionais</h4>
                        </div>


                    </div>
                </div>

            </div>
            <div className="d-md-flex justify-content-center align-items-center py-5 px-0 mx-3">
                <div className="col">
                    <Button type="reset" className="ms-5 buttonForm float-lg-end">Limpar</Button>
                </div>
                <div className="col">
                    <Button type="submit" className="ms-5 buttonForm">Salvar</Button>
                </div>
            </div>
        </form>
    )
}