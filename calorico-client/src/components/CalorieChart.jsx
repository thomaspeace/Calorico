import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { color } from 'chart.js/helpers'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CalorieChart = ( {calories} ) => {

    const barChartData = {
        labels: [],
        datasets: [
            {
                label: "Calories(kcal)",
                data: [],
                backgroundColor: "rgb(75, 192, 192)",
            },
        ],
    }
    for (let i = 0; i < calories.length && i < 7; i++) {
        barChartData.labels.push(calories[i].dateConsumed)
        barChartData.datasets[0].data.push(calories[i].caloriesConsumed)
    }
    barChartData.labels.reverse();
    barChartData.datasets[0].data.reverse();


    const options = {}

    return(
        <>
            <Bar data={barChartData} options={options}/>
        </>
    )
}

export default CalorieChart