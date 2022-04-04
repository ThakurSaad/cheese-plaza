import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const MyLineChart = () => {
  // custom hook
  const [chartData, setChartData] = useChart();

  return (
    <div>
      <LineChart width={500} height={400} data={chartData}>
        <Line dataKey={"revenue"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
      <p className="lg:text-2xl text-center text-gray-600 font-semibold">
        Revenue vs Month BarChart
      </p>
    </div>
  );
};

export default MyLineChart;
