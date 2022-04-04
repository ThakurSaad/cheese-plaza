import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  // custom hook
  const [reviews, setReviews] = useReviews();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 box-border mt-4 mb-20">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
