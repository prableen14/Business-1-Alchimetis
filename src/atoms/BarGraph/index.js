import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

import "./style.scss";

export default function BarGraph({ data, dataKey, twoBars=false, dataKey2, radius=16 }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={500} height={300} data={data}>
        <Legend />
        <Tooltip />
        <XAxis dataKey="date" />
        <YAxis />
        <Bar
          dataKey={dataKey}
          fill='#2d55b4'
          activeBar={<Rectangle fill='pink' />}
          radius={radius}
        />
        {
          twoBars && 
          <Bar
            dataKey={dataKey2}
            fill='#80CBBD'
            activeBar={<Rectangle fill='pink' />}
            radius={radius}
          />
        }
      </BarChart>
    </ResponsiveContainer>
  );
}
