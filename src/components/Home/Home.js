import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import banner from "../../images/cheese.jpg";
import Review from "../Review/Review";

const Home = () => {
  // custom hook
  const [reviews, setReviews] = useReviews();
  const slicedReviews = reviews.slice(0, 3);
  console.log(slicedReviews);

  // handle see all review
  let navigate = useNavigate();
  const seeAllReview = () => {
    navigate(`/reviews`);
  };

  return (
    <main>
      <header className="grid lg:grid-cols-2 items-center w-full mt-20">
        <section className="box-border">
          <h1 className="text-6xl text-amber-400 font-bold">
            WELCOME TO <br />{" "}
            <span className="text-blue-700">CHEESE PLAZA</span>
          </h1>
          <p className="w-2/3 text-slate-700 font-semibold mt-4">
            It is thought that cheese was first discovered around 8000 BC around
            the time when sheep were first domesticated.
          </p>
          <button className="bg-amber-200 hover:bg-amber-300 duration-150 rounded text-blue-700 font-bold mt-4 p-3">
            Live Demo
          </button>
        </section>
        <section className="w-full">
          <img className="w-fit mt-5 lg:mt-0 rounded-lg" src={banner} alt="cheese" />
        </section>
      </header>
      <hr className="my-14 border-t-2" />
      <h2 className="text-5xl text-amber-400 font-bold text-center mt-0 mb-8">
        Customer Review
      </h2>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 box-border">
          {slicedReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={seeAllReview}
            className="bg-amber-200 hover:bg-amber-300 duration-150 rounded text-blue-700 font-bold mt-4 p-3"
          >
            See All Reviews
          </button>
        </div>
      </section>
      <div className="my-14"></div>
    </main>
  );
};

export default Home;
