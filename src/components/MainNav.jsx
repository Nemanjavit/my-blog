import React, { useContext, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function MainNav() {
  const { currentUser } = useContext(AuthContext);
  // useEffect(()=>{

  // },[])

  return (
    <Navbar className="mainNav" expand="lg">
      <Container>
        <Link className="mainNav__logo" to="/">
          BLOG
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mainNav__menu">
            {currentUser ? (
              <>
                <NavLink className="link" to="/myposts">
                  My Posts
                </NavLink>
                <NavLink className="link" to="/dashboard">
                  Dashboard
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="link" to="/">
                  Posts
                </NavLink>
                <NavLink className="link" to="/auth">
                  Sign In
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;

{
  /* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */
}
