import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts";

const MultiFormGraph = (props) => {
  const data = props?.data || [];
  return (
    <div>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Actual' fill='#8884d8' />
        {/* Add more bars for other properties if needed */}
      </BarChart>

      <AreaChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type='monotone'
          dataKey='Accrued'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        {/* Add more areas for other properties if needed */}
      </AreaChart>

      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='Estimated' stroke='#ffc658' />
        {/* Add more lines for other properties if needed */}
      </LineChart>
      <ComposedChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Actual' fill='#8884d8' />
        <Area
          type='monotone'
          dataKey='Accrued'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        {/* <Line type='monotone' dataKey='Estimated' stroke='#ffc658' /> */}
        {/* Add more bars, areas, or lines for other properties if needed */}
      </ComposedChart>
    </div>
  );
};

export default MultiFormGraph;
