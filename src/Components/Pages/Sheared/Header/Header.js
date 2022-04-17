import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='#services'>Services</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>LogIn</Link>
      </nav>
    </div>
  );
};

export default Header;
