import React from "react";

const Reviews = ({ review }) => {
  const { name, comment, rating } = review || {};
  return (
    <div className="w-full h-52 rounded-lg bg-slate-50 p-2 relative">
      <h4 className="text-3xl text-blue-700 mb-2">{name}</h4>
      <p className="text-slate-800 font-semibold mb-2">{comment}</p>
      <p className="text-slate-800 font-semibold absolute bottom-1">
        Rating : {rating}
      </p>
    </div>
  );
};

export default Reviews;
