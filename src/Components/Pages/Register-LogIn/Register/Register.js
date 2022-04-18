import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.init";
import SocialLogIn from "../Social-LogIn/SocialLogIn";
import "./Register.css";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const validPassword =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(
        e.target.value
      );

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password:
          "The passwords consist of a combination of uppercase and lowercase letters, numbers and special symbols and length will be minimum 6 Character",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password don't match",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };



  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Sign Up</h2>
      <form onSubmit={handleLogIn}>
        <input type="text" name="name" id="" placeholder="Enter Name" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          required
        />
        {errors?.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
        {errors?.password && <p className="error">{errors.password}</p>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        {hookError && <p className="error">{hookError?.message}</p>}
        <p className="text-center">
          Already user?{" "}
          <Link to="/login" role="button" className="text-danger">
            Log In
          </Link>
        </p>
      </form>
      <SocialLogIn/>
    </div>
  );
};

export default Register;
