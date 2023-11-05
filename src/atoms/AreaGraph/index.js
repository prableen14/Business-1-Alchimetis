import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import "./style.scss";

import Store from "../../assets/images/Store.svg";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function AreaGraph({
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
          <AreaChart width={300} height={100} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={xAxisDataKey} />
            <YAxis
              tickFormatter={(tick) => formatter.format(tick)}
              width={20}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Area
              type='monotone'
              dataKey={dataKey}
              stroke='#2d55b4'
              fill='#2d55b4'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
