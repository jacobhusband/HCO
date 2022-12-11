import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Contact(props) {
  let formGroup;
  const {params} = props;
  if (params?.id && params?.title) {
    formGroup = (
      <Form.Group className="mb-3" controlId='product'>
        <Form.Label>Desired Item</Form.Label>
        <Form.Control type="hidden" value={`
        Title: ${params.title} <br/>
        Product_no: ${params.id}
        `} readOnly/>
        <h5>{params.title}</h5>
      </Form.Group>
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {name, email, phone, message, product} = event.target.elements;
    Email.send({
        Host : process.env.SMTP_SERVER,
        Username : process.env.SMTP_USERNAME,
        Password : process.env.SMTP_PASSWORD,
        To : process.env.TARGET_EMAIL,
        From : process.env.TARGET_EMAIL,
        Subject : `${name.value} is trying to contact you about furniture`,
        Body : `
        Name: ${name.value} <br/>
        Email: ${email.value} <br/>
        Phone Number: ${phone.value} <br/>
        ${product.value} <br/>
        Message: ${message.value} <br/>
        `
    }).then(
      message => {
        if (message === 'OK') alert('The email has been sent!')
        else alert(message)
      }
    ).catch(err => console.log(err));
  }

  return (
    <Container className='contact'>
      <h1 className="fw-bold m-3 text-center">Contact</h1>
      <Form onSubmit={handleSubmit}>
        {formGroup}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="john.smith@gmail.com" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="888-888-8888" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="I am interested in..." />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
