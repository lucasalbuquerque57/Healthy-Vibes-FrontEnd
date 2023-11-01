import type { LinksFunction } from "@remix-run/node";
import acompanharProgresso from "~/styles/acompanharProgresso.css";
import { CardIMC } from "~/routes/Profile.acompanharProg/Card_IMC";
import { useHookstate } from "@hookstate/core";
import { themePage } from "~/script/changeTheme";

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

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: acompanharProgresso },
  ];
};

export default function AcompanharProgresso() {
  const changeTheme = useHookstate(themePage);

  const labels = ['Dezembro (2022)', 'Janeiro', 'Fevereiro', 'Abril', 'Maio'];


  const data = {
    labels,
    datasets: [
      {
        label: "IMC",
        data: [23.3, 22.2, 20.2, 23, 21.4],
        borderColor: changeTheme.get() == "contraOn" ? "rgba(101,87,5,0.8)" : "rgba(10,153,6,0.60)",
        backgroundColor: [changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(10,50,6,0.60)"],
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(0,0,0,1)",
        }
      },
      x: {
        ticks: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(0,0,0,1)",
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)",
        }
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)",
      },

    }
  }



  return (

    <main>

      <div className="conteudoprog">

        <div className="container-fluid d-flex justify-content-center align-items-center gap-3">
          <div className="row gap-3">
            <div className="campo-prog col p-0">
              <div>
                <label className="rotulo">Altura</label>
              </div>
              <input className="inpProg" type="number" id="altura" name="nome" placeholder="Altura em Cm" />
            </div>
            <div className="campo-prog col p-0">
              <div>
                <label className="rotulo">Peso</label>
              </div>
              <input className="inpProg" type="number" id="peso" name="text" placeholder="Peso em Kg" step="0.01" />
            </div>
            <div className="buttonAdd col p-0">
              <button type="button" className="stylebuttonadd">Adicionar</button>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center align-items-center mt-4 ">

          <div className="row mx-1 gap-2">
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

        </div>

        <div className='container-fluid d-flex justify-content-center align-items-center graphic-imc mt-4 w-md-50'>
          <Line options={options} data={data} />
        </div>



      </div>



    </main>
  );
}
