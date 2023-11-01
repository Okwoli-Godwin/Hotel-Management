import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

// Define your chart data
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales Revenue',
      data: [15000, 25000, 18000, 30000, 22000, 35000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
      borderColor: 'rgba(75, 192, 192, 1)', // Border color
      borderWidth: 1,
    },
  ],
};

const Barcharts: React.FC = () => {
  return (
    <ChartContainer>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export default Barcharts;
