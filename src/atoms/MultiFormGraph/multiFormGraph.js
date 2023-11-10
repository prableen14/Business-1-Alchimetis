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
} from "recharts";

const MultiFormGraph = ({ data, charts }) => {
  return (
    <ComposedChart width={800} height={400} data={data}>
      <XAxis dataKey='Month' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      {charts?.map((chart) => {
        if (chart.type === "bar") {
          return <Bar dataKey={chart.dataKey} fill='#8884d8' />;
        } else if (chart.type === "line") {
          return (
            <Line type='monotone' dataKey={chart.dataKey} stroke='#82ca9d' />
          );
        } else if (chart.type === "area") {
          return (
            <Area
              type='monotone'
              dataKey={chart.dataKey}
              stroke='#ffc658'
              fill='#ffc658'
            />
          );
        }
      })}
    </ComposedChart>
  );
};

export default MultiFormGraph;
