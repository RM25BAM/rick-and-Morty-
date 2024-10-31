import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = ({ data }) => {
    const chartData = [
        {
            name: 'Alive',
            value: data.filter(character => character.status === 'Alive').length,
        },
        {
            name: 'Dead',
            value: data.filter(character => character.status === 'Dead').length,
        },
    ];

    return (
        <BarChart width={600} height={300} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};

export default Chart;
