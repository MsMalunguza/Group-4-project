import React from "react";
import "./LoginSignup.css";

import email from "../Assets/email.png";
import password from "../Assets/password.png";
import profile from "../Assets/profile.png";
function LoginSignup() {
  return (
    <div className="container ">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>

        <div className="inputs">
          <div className="inputs">
            <img src={profile} alt="" />
            <input type="text" />
          </div>
        </div>
        <div className="inputs">
          <div className="inputs">
            <img src={email} alt="" />
            <input type="email" />
          </div>
        </div>
        <div className="inputs">
          <div className="inputs">
            <img src={password} alt="" />
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
