import React from "react";
import {
  PieChart as ReChartPieChart,
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#06BA63", "#FFCA3A", "#FFBB28", "#FF8042"];

export default function HollowPieChart({ data, dataKey, label = false }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChartPieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={60}
          innerRadius={40}
          fill="#8884d8"
          dataKey={dataKey}
          label={label}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="bottom" />
      </ReChartPieChart>
    </ResponsiveContainer>
  );
}
