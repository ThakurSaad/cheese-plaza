import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const MyBarChart = () => {
  const [chartData, setChartData] = useChart();

  return (
    <div>
      <BarChart width={500} height={400} data={chartData}>
        <Bar dataKey="investment" fill="#3e3a8a" />
        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
      </BarChart>
      <p className="lg:text-2xl text-center text-gray-600 font-semibold">
        Investment vs Month BarChart
      </p>
    </div>
  );
};

export default MyBarChart;
