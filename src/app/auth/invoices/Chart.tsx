"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Invoice {
  Date: string;
  Amount: number;
}

const LineChart: React.FC<{ infoTable: Invoice[] }> = ({ infoTable }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const dates = infoTable.map((item: Invoice) => item.Date);
    const amounts = infoTable.map((item: Invoice) => item.Amount);

    const generateBackgroundColors = (data: number[]) => {
      return data.map((value: number) => {
        const opacity = (value / Math.max(...data)) * 0.5 + 0.2;
        return `rgba(75, 192, 192, ${opacity})`;
      });
    };

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Invoice Amount",
            data: amounts,
            backgroundColor: generateBackgroundColors(amounts),
            borderColor: "#2a9d8f",
            borderWidth: 1,
            fill: undefined,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [infoTable]);

  return (
    <div className="bg-background rounded-xl border p-6 my-4 w-3/6">
      <canvas ref={chartRef}></canvas>
    </div>
  )
};

export default LineChart;
