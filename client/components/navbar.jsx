import React from 'react';
import { Navbar, Nav, Offcanvas, Form, Container, Button } from 'react-bootstrap';

export default function NavbarCustom(props) {
  let expand = 'sm';

  const containerClass = (props.width) ? '' : 'header'

  return (
    <Navbar key={expand} bg="primary" variant="dark" expand={expand}>
      <Container className={containerClass}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header className='align-items-start' closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img className='img-fluid pe-2' src="/images/HCO.webp"/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-0">
            <Nav className="justify-content-center flex-grow-1 position-relative">
              <img className='position-absolute' src="/images/HCO.webp" alt="HCO logo"></img>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#inventory">Inventory</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
