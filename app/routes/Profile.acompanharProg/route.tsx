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
import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import ModalInsertAcompanharProg from "./ModalInsert";
import { axiosHealthyApi } from "~/configs/https";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: acompanharProgresso },
  ];
};

export interface ImcInterface {
  _id: string,
  valor: number,
  createdAt: Date
}

export default function AcompanharProgresso() {
  const changeTheme = useHookstate(themePage);

  const [imcID, setImcId] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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

  const [imcs, setImcs] = useState<ImcInterface[]>([])

  const handleGet = useCallback(async () => {
    await axiosHealthyApi
      .get("/imcs/myImcs")
      .then((r) => {
        setImcs(r.data);
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  useEffect(() => {
    handleGet()
  }, [handleGet])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    await axiosHealthyApi.post('/imcs', {
      peso: Number(data.peso),
      altura: Number(data.altura)
    })
      .then(() => { window.location.reload() })
      .catch(e => { console.log(e) })
  }


  return (

    <main>

      <div className="conteudoprog">

        <div className="container-fluid d-flex justify-content-center align-items-center gap-3">
          <form onSubmit={handleSubmit}>
            <div className="row gap-3">
              <div className="campo-prog col p-0">
                <div>
                  <label className="rotulo">Altura</label>
                </div>
                <input className="inpProg" type="number" id="altura" name="altura" placeholder="Altura em Cm" min={0} />
              </div>
              <div className="campo-prog col p-0">
                <div>
                  <label className="rotulo">Peso</label>
                </div>
                <input className="inpProg" type="number" id="peso" name="peso" placeholder="Peso em Kg" step="0.01" min={0} />
              </div>
              <div className="buttonAdd col my-2 p-0">
                <button type="submit" className="stylebuttonadd">Adicionar</button>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid d-flex justify-content-center align-items-center mt-4 ">

          <div className="row mx-1 gap-2">
            {
              imcs.map(i => {
                const date = new Date(i.createdAt)
                return (
                  <CardIMC
                    key={i._id}
                    IMC={i.valor}
                    data={date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getFullYear()}
                    imcId={setImcId}
                    handleShow={handleShow}
                  />
                )
              })

            }

          </div>

        </div>

        <ModalInsertAcompanharProg
          imcId={imcID}
          modal={{
            show: show,
            onHide: handleClose
          }}
        />

        <div className='container-fluid d-flex justify-content-center align-items-center graphic-imc mt-4 w-md-50'>
          <Line options={options} data={data} />
        </div>

      </div>

    </main>
  );
}
