import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap';

export default function NavbarCustom() {
  return (
    <Navbar bg="primary" expand="small" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-primary"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#inventory">Inventory</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
