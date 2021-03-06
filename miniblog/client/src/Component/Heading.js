import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

function Heading() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const LoginOutHandler = () => {
    firebase.auth().signOut();
    navigate("/", { replace: true });
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">I'm SoSorry's blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              home
            </Nav.Link>
            <Nav.Link as={Link} to="/upload">
              upload
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse
          className="justify-content-end"
          style={{
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {user.accessToken === "" ? (
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
          ) : (
            <Navbar.Text
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={LoginOutHandler}
            >
              Logout
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
