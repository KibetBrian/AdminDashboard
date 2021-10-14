import React from 'react'
import "./mainBodyChart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function MainBodyChart({title, data, dataKey}) {
    return (
        <div className="mainBodyChart"> 
            <div className="chartTitle">{title}</div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="Month" stroke="#AAAAAA"></XAxis>                    
                    <Line type="monotone" dataKey={dataKey}></Line>
                    <Tooltip/>
                    <CartesianGrid stroke="#EEEEEE"/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MainBodyChart
