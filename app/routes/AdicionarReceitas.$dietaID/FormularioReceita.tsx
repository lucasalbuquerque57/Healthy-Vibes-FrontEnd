import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { useFieldArray, useForm } from "react-hook-form";
import { axiosHealthyApi } from "~/configs/https";
import type { RecipeInterface } from "../Receitas/route";
import { useNavigate } from "@remix-run/react";


interface FormularioReceitaProps {
    dietaId: string,
    periodoRef: string
}


export default function FormularioReceita(props: FormularioReceitaProps) {
    const navigate = useNavigate();


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
        periodoRef: string
        descricao: string
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

    const [dietRecipes, setDietRecipes] = useState<RecipeInterface[]>([])

    const handleGet = useCallback(async () => {
        await axiosHealthyApi
            .get(`/diets/${props.dietaId}`)
            .then((r) => {
                setDietRecipes(r.data.recipes);
            })
            .catch((e) => {
                console.log(e)
            });

    }, [props.dietaId]);

    useEffect(() => {
        handleGet()
    }, [handleGet])

    async function onSubmit(data: FormValues) {
        data.periodoRef = props.periodoRef


        await axiosHealthyApi.post('/recipes', data)
            .then(async (r) => {
                const idrecipe = r.data.savedID
                const newrecipe = dietRecipes.map((r) => { return r._id }).concat(idrecipe)

                await axiosHealthyApi.patch(`/diets/${props.dietaId}`, {
                    recipes: newrecipe
                })
                    .then(() => { navigate(`/profile/dietasDetalhes/dietaId=${props.dietaId}`) })
                    .catch(e => console.log(e))

            })
            .catch(e => console.log(e))
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
                    <div className="py-md-2 mb-3">
                        <p className="fs-4 tituloInput">Qual descrição?</p>
                        <div className="form-floating">
                            <textarea className="form-control caixaTexto" placeholder="Descrição da receita" id="floatingTextarea" {...register(`descricao`)} style={{ height: "10rem" }}></textarea>
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