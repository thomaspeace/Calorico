import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const WeeklyGraph = ({ data, labels, title }) => {

    const chartData = {
        labels: labels,
        datasets: [
        {
            label: title,
            data: data,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                title: {
                display: true,
                text: 'Week',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                display: true,
                text: 'Value',
                },
            },
            },
        };

    return <Line data={chartData} options={options} />;
};


export default WeeklyGraph
