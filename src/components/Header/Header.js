import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-900 text-white text-center py-3">
      <Link className="mr-10 hover:text-gray-400 duration-150" to="/">Home</Link>
      <Link className="mr-10 hover:text-gray-400 duration-150" to="/reviews">Reviews</Link>
      <Link className="mr-10 hover:text-gray-400 duration-150" to="/dashboard">Dashboard</Link>
      <Link className="mr-10 hover:text-gray-400 duration-150" to="/blogs">Blogs</Link>
      <Link className="mr-10 hover:text-gray-400 duration-150" to="/about">About</Link>
    </div>
  );
};

export default Header;
