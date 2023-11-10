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

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export default function LineGraph({ data, dataKey, xAxisDataKey, styles }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart width={300} height={100} data={data}>
        <XAxis
          dataKey={xAxisDataKey}
          // tickFormatter={(tick) => tick[0]}
        />
        <YAxis tickFormatter={(tick) => formatter.format(tick)} width={30} />
        <Tooltip />

        <Line
          type='monotone'
          dataKey={dataKey}
          stroke={styles?.stroke ?? "#8884d8"}
          fill={styles?.fill ?? "none"}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
