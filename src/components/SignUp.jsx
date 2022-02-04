import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AiOutlineUser } from "react-icons/ai";
import Input from "./Input";

function SignUpPage({ toggler }) {
  const [user, setUser] = useState({ email: "", password: "" });

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const userCredentials = response.user;
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form form--signUp">
      <h2 className="form__heading form__heading--signUp">SIGN UP</h2>
      <div className="formIcon">
        <AiOutlineUser className="formIcon__user" />
      </div>
      <form className="" onSubmit={signUp}>
        <Input
          label="Email"
          value={user.email}
          name="email"
          id="email"
          changeHandler={(e) => setUser({ ...user, email: e.target.value })}
          style="input"
        />
        <Input
          label="Password"
          value={user.password}
          id="password"
          name="password"
          style="input"
          changeHandler={(e) => setUser({ ...user, password: e.target.value })}
        />
        <span className="form__showToggler" onClick={toggler}>
          You have an account? Sign in...
        </span>
        <button className="form__button form__button--signUp" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
