import React from "react";
import { Navbar, Container, Nav, NavDropdown, Col } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Col xl={12} md={12} lg={12} sm={12} xs={12}>
        <Navbar className="mb-4 headerNavbar" expand="lg">
          <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>Hoşgeldiniz: <b>&nbsp;username</b></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </>
  );
};

export default Header;
