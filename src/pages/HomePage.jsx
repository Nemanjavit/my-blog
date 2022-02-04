import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function HomePage() {
  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("signed out");
    });
  };
  return (
    <div>
      <h2>HOME PAGE</h2>
      <button onClick={onSignOut}>Log out</button>
    </div>
  );
}

export default HomePage;
