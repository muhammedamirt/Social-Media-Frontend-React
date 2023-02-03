import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";



const LineChartComponent = () => {
    const data = [
        {
            name: "Day-1",
            Inactive: 30,
            Active: 50,
            amt: 2400
        },
        {
            name: "Day-2",
            Inactive: 22,
            Active: 34,
            amt: 2210
        },
        {
            name: "Day-3",
            Inactive: 21,
            Active: 33,
            amt: 2290
        },
        {
            name: "Day-4",
            Inactive: 33,
            Active: 22,
            amt: 2000
        },
        {
            name: "Day-5",
            Inactive: 11,
            Active: 5,
            amt: 2181
        },
        {
            name: "Day-6",
            Inactive: 55,
            Active: 2,
            amt: 2500
        },
        {
            name: "Day-7",
            Inactive: 22,
            Active: 11,
            amt: 2100
        }
    ];
    return (
        // <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={450} 
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="Active"
                    stroke="#008000"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone"
                    dataKey="Inactive"
                    stroke="#ff0000" />
            </LineChart>
        //  {/* </ResponsiveContainer> */}
    )
}

export default LineChartComponent

