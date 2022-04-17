import React from 'react';

const LogIn = () => {
    return (
        <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Log In</h2>
      <form >
        <input
          type="email"
          name="email"
        //   ref={emailRef}
          id="user-email"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
        //   ref={passwordRef}
          id="user-pass"
          placeholder="Password"
          required
        />

        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <span role="button" className="text-danger" >
            Sign Up
          </span>
        </p>
      </form>
    </div>
    );
};

export default LogIn;