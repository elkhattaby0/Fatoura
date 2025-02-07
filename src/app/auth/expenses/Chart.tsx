"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ infoTable }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); 
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const dates = infoTable.map(item => item.date);
    const amounts = infoTable.map(item => item.amount);

    const generateBackgroundColors = (data) => {
      return data.map(value => {
        const opacity = (value / Math.max(...data)) * 0.5 + 0.2;
        return `rgba(75, 192, 192, ${opacity})`;
      });
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: 'Expense Amount',
          data: amounts,
          backgroundColor: generateBackgroundColors(amounts),
          borderColor: '#2a9d8f',
          borderWidth: 1,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [infoTable]); 
  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;