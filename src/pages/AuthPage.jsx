import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignInPage from "../components/SignIn";
import SignUpPage from "../components/SignUp";

function AuthPage() {
  const [show, setShow] = useState(false);

  const toggler = () => setShow(!show);
  return (
    <Container>
      <div className="authPage">
        <div className="authPage__wrapper">
          <div
            className={`authPage__slider ${
              show ? "authPage__slider--active" : ""
            }`}
          ></div>
          <SignUpPage toggler={toggler} />
          <SignInPage toggler={toggler} />
        </div>
      </div>
    </Container>
  );
}

export default AuthPage;
