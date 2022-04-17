import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/home#services">Services</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </div>
  );
};

export default Header;
