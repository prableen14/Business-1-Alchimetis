import React from "react";
import {
  PieChart as ReChartPieChart,
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import "./style.scss";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function LineGraph({ data, dataKey }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ReChartPieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={60}
          fill='#8884d8'
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </ReChartPieChart>
    </ResponsiveContainer>
  );
}
