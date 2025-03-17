import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const data = [
  {
    name: "Caring",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Cleaning",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "Laundry",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Fixing",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "Pet care",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "Gardening",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
];

function RadialBarChartComponent() {
  return (
    <div className="flex justify-center items-center p-4 flex-col">
      <div className="font-bold text-[22px]">Total Category</div>
      <RadialBarChart
        width={400}
        height={300}
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
}

export default RadialBarChartComponent;
