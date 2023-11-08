// src/components/PieChart.tsx
import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { roomData } from './Data';

const COLORS = ['#0088FE', '#00C49F'];

const DashboardPieChart: React.FC = () => {
  return (
    <div className="w-[100%] mx-auto">
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={roomData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {roomData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DashboardPieChart;
