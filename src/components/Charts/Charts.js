import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";

const Charts = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <MyBarChart></MyBarChart>
      <MyLineChart></MyLineChart>
    </div>
  );
};

export default Charts;
