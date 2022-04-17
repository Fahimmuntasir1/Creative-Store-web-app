import React, {  useState } from "react";
import "./LogIn.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase.init";

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
          type="text"
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
          <span role="button" className="text-danger">
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
