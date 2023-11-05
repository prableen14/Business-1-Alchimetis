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

export default function LineGraph({
  data,
  label,
  dataKey,
  image,
  xAxisDataKey,
}) {
  return (
    <div className='line-graph'>
      <div className='line-graph-header'>
        <div className='line-graph-header-value-wrapper'>
          <div className='line-graph-header-title'>{label}</div>
        </div>

        <img
          src={image || Store}
          alt='Store icon'
          className='line-graph-header-icon'
        />
      </div>

      <div className='line-graph-chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart width={300} height={100} data={data}>
            <XAxis
              dataKey={xAxisDataKey}
              // tickFormatter={(tick) => tick[0]}
            />
            <YAxis
              tickFormatter={(tick) => formatter.format(tick)}
              width={20}
            />
            <Tooltip />

            <Line
              type='monotone'
              dataKey={dataKey}
              stroke='#8884d8'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
