import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
} from "recharts";

import "./style.scss";

import Store from "../../assets/images/Store.svg";

export default function BarGraph({ data, label }) {
  return (
    <div className="bar-graph">
      <div className="bar-graph-header">
        <div className="bar-graph-header-value-wrapper">
          <div className="bar-graph-header-title">{label}</div>
          <div className="bar-graph-header-value">
            $
            {data
              .reduce((prev, curr) => prev + curr.sales, 0)
              .toFixed(2)
              .toLocaleString()}
          </div>
        </div>

        <img src={Store} alt="Store icon" className="bar-graph-header-icon" />
      </div>

      <div className="bar-graph-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
