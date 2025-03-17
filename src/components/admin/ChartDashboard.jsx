import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Jan",
    Customer: 1000,
    Provider: 1400,
  },
  {
    name: "Fab",
    Customer: 500,
    Provider: 1098,
  },
  {
    name: "Mar",
    Customer: 500,
    Provider: 800,
  },
  {
    name: "Apr",
    Customer: 780,
    Provider: 908,
  },
  {
    name: "May",
    Customer: 1890,
    Provider: 1800,
  },
  {
    name: "Jun",
    Customer: 2390,
    Provider: 3800,
  },
  {
    name: "Jul",
    Customer: 3490,
    Provider: 4300,
  },
  {
    name: "Aug",
    Customer: 3080,
    Provider: 4908,
  },
  {
    name: "Sep",
    Customer: 3790,
    Provider: 4800,
  },
  {
    name: "Oct",
    Customer: 3390,
    Provider: 3800,
  },
  {
    name: "Nov",
    Customer: 4490,
    Provider: 4800,
  },
  {
    name: "Dec",
    Customer: 4490,
    Provider: 5300,
  },
];

function ChartDashboard() {
  return (
    <div className="mt-9">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Customer" fill="#76e415" />
        <Bar dataKey="Provider" fill="#9dd6e5" />
      </BarChart>
      <div></div>
    </div>
  );
}

export default ChartDashboard;
