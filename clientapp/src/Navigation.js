import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm p-3 mb-5 bg-white rounded"
    >
      <Container>
        <Navbar.Brand>
          <p className="font-italic">tickets</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink exact activeClassName="active" to="">
                Сейчас в кино
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact activeClassName="active" to="/tickets">
                Мои билеты
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact activeClassName="active" to="/account">
                Вход
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
