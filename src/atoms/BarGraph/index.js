import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
} from "recharts";

import "./style.scss";

export default function BarGraph({ data, dataKey }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={500} height={300} data={data}>
        <Tooltip />
        <Bar
          dataKey={dataKey}
          fill='#2d55b4'
          activeBar={<Rectangle fill='pink' />}
          radius={16}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
