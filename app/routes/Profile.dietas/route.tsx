import { Link } from "@remix-run/react";
import { CardDieta } from "./Card_Dieta";

export default function dietasProfile() {
    return (
        <main>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <section className="card-container">
                    <CardDieta
                        title="Dieta Sla"
                    />
                    <CardDieta
                        title="Dieta Sla"
                    />
                    <CardDieta
                        title="Dieta Sla"
                    />
                </section>
            </div>
            <div className="container-fluid mb-5">
                <Link to="/CalculadoraNutricional">
                    <button className="float-end stylebutton me-4 p-0 px-4 py-2" type="button">Adicionar Dieta</button>
                </Link>
            </div>
        </main>
    )
}