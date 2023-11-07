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

export default function AreaGraph({ data, dataKey, xAxisDataKey }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart width={300} height={100} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis tickFormatter={(tick) => formatter.format(tick)} width={20} />
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
  );
}
