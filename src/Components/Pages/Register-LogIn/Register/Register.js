import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Sign Up</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <span role="button" className="text-danger">
            Log In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
