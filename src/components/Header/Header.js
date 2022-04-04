import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-900 text-white py-3">
      <Link className="mr-4" to="/">Home</Link>
      <Link className="mr-4" to="/reviews">Reviews</Link>
      <Link className="mr-4" to="/dashboard">Dashboard</Link>
      <Link className="mr-4" to="/blogs">Blogs</Link>
      <Link className="mr-4" to="/about">About</Link>
    </div>
  );
};

export default Header;