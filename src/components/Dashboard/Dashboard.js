import React from "react";
import Charts from "../Charts/Charts";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-5xl text-amber-400 font-bold text-center mt-4 mb-8">
        Business Overview
      </h2>
      <Charts></Charts>
    </div>
  );
};

export default Dashboard;
