
import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import stats from './row.json'
import { Chart as ChartJS } from 'chart.js/auto'
import { SelectLabel } from './components/SelectLabel';

const DynamicChart = ({ chartType, unit}) => {
    // const [label, setLabel] = useState("meters")
    const [chartData, setChartData] = useState({
        labels: stats.data.map((data) => data.date),
        datasets: [
            {
            label: unit,
            data: stats.data.map((data) => data[unit]),
        }
    ]
    
    });


return (

    <div>
            <Line data={chartData} />
    </div>
)
}

export default DynamicChart;