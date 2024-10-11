/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', orders: 400 },
  { month: 'Feb', orders: 300 },
  { month: 'Mar', orders: 500 },
  { month: 'Apr', orders: 200 },
  { month: 'May', orders: 278 },
  { month: 'Jun', orders: 189 },
  { month: 'Jul', orders: 239 },
  { month: 'Aug', orders: 349 },
  { month: 'Sep', orders: 400 },
  { month: 'Oct', orders: 450 },
  { month: 'Nov', orders: 470 },
  { month: 'Dec', orders: 520 },
];

function GraphChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="month" />
          <YAxis dataKey="orders" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#FF018D" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphChart;
