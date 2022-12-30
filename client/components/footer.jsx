import React from 'react';
import { Nav, Container} from 'react-bootstrap';

export default function Footer(props) {

  const footerClass = (props.width) ? '' : 'footer'

  return (
    <Nav className='mt-3 justify-content-around bg-light p-3 mt-auto'>
      <Container className={`${footerClass} d-flex justify-content-around`}>
            <a className='text-dark text-decoration-none' data-link="homepage" href="#">Home</a>
            <a className='text-dark text-decoration-none' data-link="inventory" href="#inventory">Inventory</a>
            <a className='text-dark text-decoration-none' data-link="about" href="#about">About</a>
            <a className='text-dark text-decoration-none' data-link="contact" href="#contact">Contact</a>
            <a className='text-dark text-decoration-none' data-link="faq" href="#faq">FAQ</a>
      </Container>
    </Nav>
  )
}
