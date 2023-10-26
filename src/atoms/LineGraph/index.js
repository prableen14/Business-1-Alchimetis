import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "./style.scss";

import Store from "../../assets/images/Store.svg";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function LineGraph({ data, label }) {
  return (
    <div className="histogram">
      <div className="histogram-header">
        <div className="histogram-header-value-wrapper">
          <div className="histogram-header-title">{label}</div>
          <div className="histogram-header-value">
            $
            {data
              .reduce((prev, curr) => prev + curr.sales, 0)
              .toFixed(2)
              .toLocaleString()}
          </div>
        </div>

        <img src={Store} alt="Store icon" className="histogram-header-icon" />
      </div>

      <div className="histogram-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <XAxis dataKey="day" tickFormatter={(tick) => tick[0]} />
            <YAxis
              tickFormatter={(tick) => formatter.format(tick)}
              width={20}
            />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
