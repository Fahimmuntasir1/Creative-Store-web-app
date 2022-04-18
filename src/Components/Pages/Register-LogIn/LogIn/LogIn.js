import React, { useState } from "react";
import "./LogIn.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase.init";
import SocialLogIn from "../Social-LogIn/SocialLogIn";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

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
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const resetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    }else{
      toast('Please enter a valid email for reset password')
    }
  };

  return (
    <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Log In</h2>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          id="user-email"
          placeholder="Email Address"
          required
        />
        {errors?.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          id="user-pass"
          placeholder="Password"
          required
        />
        {errors?.password && <p className="error">{errors.password}</p>}
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>

        {hookError && <p className="error">{hookError?.message}</p>}

        <p className="text-center">
          Already user?{" "}
          <Link to="/register" role="button" className="text-danger">
            Sign Up
          </Link>
        </p>
        <p className="text-center">
          Forget Password??{" "}
          <Link
            to=""
            onClick={resetPassword}
            role="button"
            className="text-danger"
          >
            Reset Now
          </Link>
        </p>
      </form>
      <SocialLogIn></SocialLogIn>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
