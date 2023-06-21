import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../logo.svg"

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Proposal Generator
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/chat-gpt">Chat Gpt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
