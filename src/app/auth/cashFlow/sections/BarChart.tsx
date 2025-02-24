"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Original Invoice Data
const invoices = [
  { id: 1, name: "Invoice A", amount: 5000, date: "2024-03-01" },
  { id: 2, name: "Invoice B", amount: 3000, date: "2024-03-05" },
  { id: 3, name: "Invoice C", amount: 7000, date: "2024-03-10" },
  { id: 4, name: "Invoice D", amount: 2500, date: "2024-03-15" },
  { id: 5, name: "Invoice E", amount: 4800, date: "2024-03-20" },
  { id: 6, name: "Invoice F", amount: 6200, date: "2024-03-25" },
  { id: 7, name: "Invoice G", amount: 4100, date: "2024-03-28" },
  { id: 8, name: "Invoice H", amount: 3900, date: "2024-03-30" },
  { id: 9, name: "Invoice I", amount: 8000, date: "2024-04-02" },
  { id: 10, name: "Invoice J", amount: 5600, date: "2024-04-05" }
];

// Format Data for Chart
const chartData = invoices
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort by date
  .map(invoice => ({
    date: invoice.date, // X-Axis (Date)
    amount: invoice.amount // Y-Axis (Amount)
  }));

export default function InvoiceBarChart() {
  return (
    <div className="w-full p -4 bg-lightGr ay rounded-lg">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="date" stroke="#374151" tick={{ fontSize: 12 }} />
            <YAxis stroke="#374151" tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="amount" fill="#1E3A8A" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
