import React from 'react'
import { Pie, PieChart } from 'recharts'
import { pieChartData1, pieChartData2 } from '../../../utils/charts'

const PieChartComponent = () => {
    return (
        <div >
            <PieChart width={400} height={400}>
                <Pie data={pieChartData1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={pieChartData2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </div>
    )
}

export default PieChartComponent