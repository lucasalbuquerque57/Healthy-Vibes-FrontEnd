
import controleConsumo from "~/styles/controleConsumo.css";
import { Calendar } from 'primereact/calendar';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import type { FormEvent } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";
import { handleControleConsumo } from "~/script/handleData";


export const meta: MetaFunction = () => ({
    title: "controle Consumo"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};


export default function ControleConsumo() {
    const [date, setDate] = useState<Date>(new Date())
    const navigate = useNavigate();

    /* const handleGet = useCallback(async () => {
        await axiosHealthyApi
            .get("/consumptions")
            .then((r) => {
                setDateComnsuption(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()

    }, [handleGet]) */



    function useHandleSearch(e: FormEvent) {

        e.preventDefault();

        navigate(handleControleConsumo(date))
    }

    return (
        <main>
            <Header />
            <div id="conteudo" className="container-fluid texto">
                <h1 className='first-title'>Controle de Consumo</h1>

                <div className="d-flex justify-content-center align-items-center my-3">
                    <Card
                        bg={"info"}
                        key={"info"}
                        text={"white"}
                        style={{ width: '26rem' }}
                    >
                        <Card.Body>
                            <Card.Title>Instrução </Card.Title>
                            <Card.Text>
                                Seleciona a data e pesquise
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={useHandleSearch} >
                    <div className="row">
                        <Calendar value={date}
                            onChange={(e) => {
                                setDate(new Date(e.target.value || ""))
                            }}
                            dateFormat="dd/mm/yy"
                            inline
                        />
                    </div>
                    <div className="row">
                        <Button type="submit" size="lg" className="my-4 btn-comum">
                            Pesquisar <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </div>
                </form>

            </div>

            <Footer />
        </main>
    );
}
