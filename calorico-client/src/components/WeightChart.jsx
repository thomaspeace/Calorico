import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend)

const WeightChart = ( {weights} ) => {

    const lineChartData = {
        labels: [],
        datasets: [
            {
                label: "Weight(kg)",
                data: [],
                borderColor: "rgb(75, 192, 192)",
                fill: true,
                tension: .4,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            // {
            //     label: "Average(kg)",
            //     data: [],
            //     borderColor: "rgb(75, 192, 192)",
            //     fill: true,
            //     tension: .4,
            // },
        ],
    }
    for (let i = 0; i < weights.length && i < 7; i++) {
        lineChartData.labels.push(weights[i].dateWeighed)
        lineChartData.datasets[0].data.push(weights[i].weightMetric) 
    }
    lineChartData.labels.reverse();
    lineChartData.datasets[0].data.reverse();

    // const calculateSMA = (data, windowSize) => {
    //     return data.map((_, idx, arr) => {
    //         const start = Math.max(0, idx - windowSize + 1);
    //         const subset = arr.slice(start, idx + 1);
    //         const sum = subset.reduce((acc, value) => acc + value, 0);
    //         return sum / subset.length;
    //     });
    // }
    // lineChartData.datasets[1].data = calculateSMA(lineChartData.datasets[0].data, lineChartData.datasets[0].data.length)
    


    const options = {}

    return(
        <>
            <Line data={lineChartData} options={options}/>
        </>
    )
}

export default WeightChart