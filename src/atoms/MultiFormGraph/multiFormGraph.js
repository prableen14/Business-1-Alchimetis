import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const MultiFormGraph = ({ data, charts, xaxisDataKey, styles }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ComposedChart width={800} height={400} data={data}>
        <XAxis dataKey={xaxisDataKey} />
        <YAxis tickFormatter={(tick) => formatter.format(tick)} width={30} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        {charts?.map((chart, index) => {
          if (chart.type === "bar") {
            return <Bar key={index} dataKey={chart.dataKey} fill={(styles && styles['bar']?.fill) ?? '#8884d8'} />;
          } else if (chart.type === "line") {
            return (
              <Line
                type='monotone'
                key={index}
                dataKey={chart.dataKey}
                stroke={(styles && styles['line']?.stroke) ?? '#82ca9d'}
              />
            );
          } else if (chart.type === "area") {
            return (
              <Area
                key={index}
                type='monotone'
                dataKey={chart.dataKey}
                stroke={(styles && styles['area']?.stroke) ?? '#ffc658'}
                fill={(styles && styles['area']?.fill) ?? '#ffc658'}
              />
            );
          }
        })}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default MultiFormGraph;
