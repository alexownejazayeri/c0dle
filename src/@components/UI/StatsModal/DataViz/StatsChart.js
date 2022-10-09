import React from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = (props) => {
  const guesses = props.guesses;

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: '18px',
          },
        },
        gridLines: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const labels = ['1', '2', '3', '4', '5', '6'];

  const data = {
    labels,
    datasets: [
      {
        data: [guesses['1'], guesses['2'], guesses['3'], guesses['4'], guesses['5'], guesses['6']],
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(53, 180, 250, 0.8)',
        borderRadius: 15,
        gridLines: false,
      },
    ],
  };

  return (
    <React.Fragment>
      <Bar options={options} data={data} height={225} aria-label="bar-chart" />
    </React.Fragment>
  );
};

export default StatsChart;
