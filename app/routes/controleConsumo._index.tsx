
import controleConsumo from "~/styles/controleConsumo.css";
import type { CalendarDateTemplateEvent } from 'primereact/calendar';
import { Calendar } from 'primereact/calendar';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";
import { axiosHealthyApi } from "~/configs/https";


export const meta: MetaFunction = () => ({
    title: "controle Consumo"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};

interface consumptionDate {
    belongDate: Date
}

export default function ControleConsumo() {
    const [date, setDate] = useState<Date>(new Date())
    const navigate = useNavigate();
    const [createdAt, setCreatedAt] = useState<consumptionDate[]>([])

    const handleGet = useCallback(async () => {
        await axiosHealthyApi
            .get("/consumptions/myConsumptions")
            .then((r) => {
                setCreatedAt(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])

    const dateTemplate = (date: CalendarDateTemplateEvent) => {
        if (createdAt) {
            for (let index = 0; index < createdAt.length; index++) {
                const dateC = new Date(createdAt[index].belongDate)
                if (dateC.getUTCDay() == date.day && dateC.getMonth() == date.month && dateC.getFullYear() == date.year)
                    return <strong className="border border-3 border-selecionado rounded-circle px-1">{date.day}</strong>;
            }
        }
        return date.day;
    };


    function useHandleSearch(e: FormEvent) {

        e.preventDefault();

        navigate(`date=${date.toDateString()}`)
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
                                Os dias circulados em verde possuem dados registrados
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
                            dateTemplate={dateTemplate}
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
