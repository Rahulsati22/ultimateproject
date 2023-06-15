import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend)


function getLastYearMonths() {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const labels = [];

    // firstly we are getting the current month like its july
    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;
    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element)
        if (i === 0) break;
    }

    for (let i = 11; i >= remain; i--) {
        if (i === currentMonth) break;
        const element = months[i];
        labels.unshift(element)
    }

    return labels;

}

const Chart = ({stats}) => {
    const labels = getLastYearMonths();
    const data = {
        labels,
        datasets: [
            {
                label: "Views",
                data: [stats[0].views, stats[1].views, stats[2].views, stats[3].views, stats[4].views, stats[5].views, stats[6].views, stats[7].views, stats[8].views, stats[9].views, stats[10].views, stats[11].views],
                borderColor: 'rgba(107,70,193,0.5)',
                backgroundColor: '#6b46c1'
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        title: {
            display: true,
            text: "Yearly views"
        }
    }
    return (
        <Line options={options} data={data} />
    )
}

export default Chart