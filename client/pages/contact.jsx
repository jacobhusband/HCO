import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className='contact'>
      <h1 className="fw-bold m-3 text-center">Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="john.smith@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="888-888-8888" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
