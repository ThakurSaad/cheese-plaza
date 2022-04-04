import React from "react";
import banner from "../../images/cheese.jpg";

const Home = () => {
  return (
    <div className="flex items-center w-full mt-20">
      <section>
        <h1 className="text-6xl text-slate-600 font-bold">
          WELCOME TO <br /> <span className="text-blue-700">CHEESE PLAZA</span>
        </h1>
        <p>
          It is thought that cheese was first discovered around 8000 BC around
          the time when sheep were first domesticated
        </p>
      </section>
      <section className="w-1/2">
        <img className="w-fit rounded-lg" src={banner} alt="cheese" />
      </section>
    </div>
  );
};

export default Home;
