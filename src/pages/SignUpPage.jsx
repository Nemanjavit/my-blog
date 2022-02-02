import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [data, setData] = useState({ email: "", password: "" });

  console.log(data);
  const signUp = async () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <Link to="/home">HOme</Link>
      <form onSubmit={signUp}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* sign in */}
      <form onSubmit={signUp}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpPage;
