import React from 'react';

import type { LinksFunction } from "@remix-run/node";
import acompanharProgresso from "~/styles/acompanharProgresso.css";
import { CardIMC } from "~/components/Card_IMC";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


const labels = ['Dezembro (2022)', 'Janeiro', 'Fevereiro', 'Abril', 'Maio'];

export const data = {
  labels,
  datasets: [
    {
      label: "IMC",
      data: [23.3, 22.2, 20.2, 23, 21.4],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};








export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: acompanharProgresso },
  ];
};


export default function AcompanharProgresso() {
  return (

    <main>

      <div className="conteudoprog">
        <div className="container-prog">
          <div className="campo-prog">
            <div>
              <label className="rotulo">Altura</label>
            </div>
            <input type="text" id="nome" name="nome" placeholder="1.87" />
          </div>
          <div className="campo-prog">
            <div>
              <label className="rotulo">Peso</label>
            </div>
            <input type="email" id="email" name="email" placeholder="87.6" />
          </div>
          <div className="buttonAdd">
            <button type="button" className="stylebuttonadd">Adicionar</button>
          </div>
        </div>

        <div className="card-imc-prog">
          <CardIMC
            IMC="23.2"
            data="23/12/2022"
          />
          <CardIMC
            IMC="22.2"
            data="13/02/2023"
          />
          <CardIMC
            IMC="20.2"
            data="25/03/2023"
          />
        </div>

        <div className='graphic-imc'>
          <Line options={options} data={data} />
        </div>



      </div>



    </main>
  );
}
