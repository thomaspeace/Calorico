import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const WeightChart = ( {weights} ) => {

    const lineChartData = {
        labels: [],
        datasets: [
            {
                label: "Weight(kg)",
                data: [],
                borderColor: "rgb(75, 192, 192)",
            },
        ],
    }
    for (let i = 0; i < weights.length && i < 7; i++) {
        lineChartData.labels.push(weights[i].dateWeighed)
        lineChartData.datasets[0].data.push(weights[i].weightMetric)
    }
    lineChartData.labels.reverse();
    lineChartData.datasets[0].data.reverse();


    const options = {}

    return(
        <>
            <Line data={lineChartData} options={options}/>
        </>
    )
}

export default WeightChart