import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "30vh", minWidth: "400px"}}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
