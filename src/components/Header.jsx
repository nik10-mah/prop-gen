import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { currentUser, logout } = useAuth();
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Chat Gpt Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {currentUser && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/chat-gpt">Chat Gpt</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};
