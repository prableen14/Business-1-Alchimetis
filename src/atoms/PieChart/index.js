import React from "react";
import {
  PieChart as ReChartPieChart,
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import "./style.scss";

import Store from "../../assets/images/Store.svg";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function LineGraph({ data, label }) {
  return (
    <div className="pie-chart">
      <div className="pie-chart-header">
        <div className="pie-chart-header-value-wrapper">
          <div className="pie-chart-header-title">{label}</div>
          <div className="pie-chart-header-value">
            $
            {data
              .reduce((prev, curr) => prev + curr.value, 0)
              .toFixed(2)
              .toLocaleString()}
          </div>
        </div>

        <img src={Store} alt="Store icon" className="pie-chart-header-icon" />
      </div>

      <div className="pie-chart-chart">
        <ResponsiveContainer width="100%" height="100%">
          <ReChartPieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </ReChartPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
