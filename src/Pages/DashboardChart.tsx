// src/components/MonthlyBarChart.tsx

import React from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MonthlyBarChartProps {
  data: Array<{ month: string; value: number }>;
}

const DashboardChart: React.FC<MonthlyBarChartProps> = ({ data }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          {/* <XAxis dataKey="month" />
          <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
