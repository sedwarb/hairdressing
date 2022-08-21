import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ganancias por Trabajador',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Paola',
        data: [10,20,30,40,50,70,100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'La Otra',
        data: [7,25,29,45,45,60,50],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  export function ShowChart(){
    return(
        <>
            <h1>Grafico de Ganancias por Trabajador</h1>
            <Bar options={options} data={data}></Bar>
        </>
        
    )
  }