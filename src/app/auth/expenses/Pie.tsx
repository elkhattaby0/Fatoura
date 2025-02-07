"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ infoTable }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const categories = [...new Set(infoTable.map(item => item.category))]; 
    const categoryAmounts = categories.map(
      category => infoTable
        .filter(item => item.category === category)
        .reduce((sum, item) => sum + item.amount, 0)
    );

    const generateBackgroundColors = (count) => {
      const colors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
        '#9966FF', '#FF9F40', '#C9CBCF', '#2A9D8F'
      ];
      return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
    };

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [{
          label: 'Expense Amount',
          data: categoryAmounts,
          backgroundColor: generateBackgroundColors(categories.length),
          borderColor: '#fff',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
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

export default PieChart;
