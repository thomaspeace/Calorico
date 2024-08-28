import {Bar, Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend} from 'chart.js'
import { color } from 'chart.js/helpers'

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

const CalorieChart = ({ calories }) => {
    const mixedChartData = {
        labels: [],
        datasets: [
            {
                type: 'bar',
                label: "Calories (kcal)",
                data: [],
                backgroundColor: "rgb(75, 192, 192)",
                order: 2,
            },
            {
                type: 'line',
                label: "Average Calories (kcal)",
                data: [],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(255, 144, 0)",
                fill: false,
                tension: 0.4,
                order: 1,
                pointRadius: 0,
            },
        ],
    };

    let totalCalories = 0;
    let dayCount = 0;

    for (let i = 0; i < calories.length && i < 7; i++) {
        dayCount++;
        totalCalories += calories[i].caloriesConsumed; // Fixing to use caloriesConsumed
        mixedChartData.labels.push(calories[i].dateConsumed); // Date for labels
        mixedChartData.datasets[0].data.push(calories[i].caloriesConsumed); // Bar data
    }

    mixedChartData.labels.reverse();
    mixedChartData.datasets[0].data.reverse();

    // Fill the line chart with the average calories per day
    const averageCalories = totalCalories / dayCount;
    mixedChartData.datasets[1].data = new Array(dayCount).fill(averageCalories).reverse();

    const options = {};

    return (
        <>
            <Bar data={mixedChartData} options={options} />
        </>
    );
};

export default CalorieChart;