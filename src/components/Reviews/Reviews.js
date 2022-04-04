import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  // custom hook
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h2 className="text-5xl text-amber-400 font-bold text-center mt-4 mb-8">
        Happy Customer Says
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 box-border mt-4 mb-20">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
