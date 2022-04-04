import React from "react";
import banner from "../../images/cheese.jpg";

const Home = () => {
  return (
    <div className="flex items-center w-full mt-20">
      <section className="box-border">
        <h1 className="text-6xl text-slate-600 font-bold">
          WELCOME TO <br /> <span className="text-blue-700">CHEESE PLAZA</span>
        </h1>
        <p className="w-2/3 text-slate-700 font-semibold mt-4">
          It is thought that cheese was first discovered around 8000 BC around
          the time when sheep were first domesticated.
        </p>
        <button className="bg-amber-200 hover:bg-amber-300 duration-150 rounded text-blue-700 font-bold mt-4 p-3">
          Live Demo
        </button>
      </section>
      <section className="w-5/6">
        <img className="w-fit rounded-lg" src={banner} alt="cheese" />
      </section>
    </div>
  );
};

export default Home;
