import { CardDieta } from "~/components/Card_Dieta";

export default function dietasProfile() {
    return (
        <main>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <section className="card-container">
                    <CardDieta
                        title="Dieta Sla"
                    />
                </section>
            </div>
        </main>
    )
}