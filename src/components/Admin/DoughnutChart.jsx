import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = () => {
    const data = {
        labels: ['Subscribed', 'Not Subscribed'],
        datasets: [{
            label: 'Views',
            data: [3, 20],
            borderColor: ['rgba(62,12,171)', 'rgb(214,43,129)'],
            backgroundColor: ['rgba(62,12,171,0.3)', 'rgb(214,43,129,0.3)'],
            borderWidth: 1
        }]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
    return (
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart