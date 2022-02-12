import React, { useState } from "react";
import Input from "./Input";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";
import useError from "../hooks/useError";

function SignInPage({ toggler }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useError();
  const [displayName, setDisplayName] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      auth.currentUser.displayName = displayName;
      setUser({ email: "", password: "" });
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className="form  form--signIn">
      <h2 className="form__heading form__heading--signIn">SIGN IN</h2>
      {/* icon */}
      <div className="formIcon">
        <BsFillLockFill
          className={`formIcon__lock ${
            isLoggedIn ? "formIcon__lock--hide" : ""
          }`}
        />
        <BsFillUnlockFill
          className={`formIcon__unlock ${
            isLoggedIn ? "formIcon__unlock--show" : ""
          }  `}
        />
      </div>
      {/* error message */}
      <h3 className={`form__error form__error${errorMessage ? "--show" : ""}`}>
        {errorMessage ? errorMessage : ""}
      </h3>
      <form className="" onSubmit={signIn}>
        <Input
          label="Email"
          value={user.email}
          name="email"
          id="signInEmail"
          changeHandler={(e) => setUser({ ...user, email: e.target.value })}
          style="input"
        />
        <Input
          label="Password"
          type="password"
          value={user.password}
          id="signInPassword"
          name="password"
          style="input"
          changeHandler={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Input
          label="Display name"
          type="text"
          value={displayName}
          id="displayName"
          name="displayName"
          style="input"
          changeHandler={(e) => setDisplayName(e.target.value)}
        />
        <span className="form__showToggler" onClick={toggler}>
          You don't have an account? Sign up
        </span>
        <button className="form__button form__button--signIn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
