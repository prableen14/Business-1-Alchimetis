import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import "./style.scss";

import Store from "../../assets/images/Store.svg";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function AreaGraph({ data, dataKey, xAxisDataKey, styles }) {

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
          stroke={ styles?.stroke ?? '#2d55b4'}
          fill={ styles?.fill ?? '#2d55b4'}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
