import React from "react";
import './Header.css';
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="lg:flex lg:justify-center grid sm:grid-cols-1 bg-blue-900 text-white text-center py-5">
      <CustomLink className="md:mr-10" to="/">Home</CustomLink>
      <CustomLink className="md:mr-10" to="/reviews">Reviews</CustomLink>
      <CustomLink className="md:mr-10" to="/dashboard">Dashboard</CustomLink>
      <CustomLink className="md:mr-10" to="/blogs">Blogs</CustomLink>
      <CustomLink className="md:mr-10" to="/about">About</CustomLink>
    </div>
  );
};

export default Header;
