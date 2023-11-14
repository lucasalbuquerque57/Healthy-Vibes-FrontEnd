

/* Sedentary (little or no exercise): AMR = BMR x 1.2
Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
Active (exercise 6–7 days/week): AMR = BMR x 1.725
Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9 */

import type { Resultados } from "~/routes/CalculadoraNutricional/route"

type BRMequation =
    {
        peso: number,
        altura: number,
        genero: string,
        idade: number,
        opcaoPeso: string,
        nivelAtividade: number,
        tipoDieta: string
    }

export function BRMequation(values: BRMequation): Resultados {
    let caloriasNivelAtiv = 0

    if (values.genero == "M") {
        caloriasNivelAtiv =
            (88.4 + (13.4 * values.peso))
            + (4.8 * values.altura)
            - (5.68 * values.idade)
    } else {
        caloriasNivelAtiv =
            (447.6 + (9.25 * values.peso))
            + (3.10 * values.altura)
            - (4.33 * values.idade)
    }

    switch (values.nivelAtividade) {
        case 1:
            caloriasNivelAtiv *= 1.2
            break;
        case 2:
            caloriasNivelAtiv *= 1.375
            break;
        case 3:
            caloriasNivelAtiv *= 1.55
            break;
        case 4:
            caloriasNivelAtiv *= 1.725
            break;
        case 5:
            caloriasNivelAtiv *= 1.9
            break;
    }

    if (values.opcaoPeso == "Perder Peso") {
        caloriasNivelAtiv *= 0.8
    }
    else if (values.opcaoPeso == "Ganhar músculo") {
        caloriasNivelAtiv *= 1.15
    }
    const carboidratos = (caloriasNivelAtiv * 0.45) / 4
    const gorduras = (caloriasNivelAtiv * 0.25) / 9
    const proteinas = (caloriasNivelAtiv * 0.3) / 4

    return {
        calorias: caloriasNivelAtiv,
        carboidratos: carboidratos,
        gorduras: gorduras,
        proteina: proteinas,
        opcaoPeso: values.opcaoPeso,
        tipoDieta: values.tipoDieta
    }

}