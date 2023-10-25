
import controleConsumo from "~/styles/controleConsumo.css";
import { Calendar, CalendarDateTemplateEvent } from 'primereact/calendar';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";

export const meta: MetaFunction = () => ({
    title: "controle Consumo"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: controleConsumo }];
};
export default function ControleConsumo() {
    const [date, setDate] = useState<Date>(new Date())

    const dateTemplate = (date: CalendarDateTemplateEvent) => {
        if (date.day > 10 && date.day < 15) {
            return <strong className="border border-3 border-success rounded-circle px-1">{date.day}</strong>;
        }

        return date.day;
    };

    return (
        <main>
            <Header />
            <div id="conteudo" className="container-fluid texto">
                <h1 className='first-title'>Controle de Consumo</h1>

                <form className="d-flex align-items-center justify-content-center">
                    <Calendar value={date}
                        onChange={(e) => {
                            setDate(new Date(e.target.value || ""))
                        }}
                        dateFormat="dd/mm/yy"
                        inline
                        dateTemplate={dateTemplate}
                    />
                </form>

            </div>

            <Footer />
        </main>
    );
}
