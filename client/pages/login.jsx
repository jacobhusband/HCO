import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import redirect from "../lib/redirect";

export default function Login() {

  const handleEmail = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email === process.env.TARGET_EMAIL) {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }).then(response => response.json())
        .then(user => {
          localStorage.setItem('user', JSON.stringify(user));
          redirect({to: 'admin_panel'})
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <Form className='login' onSubmit={handleEmail}>
      <h1>LOGIN</h1>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control autoComplete="current-email" type="email" placeholder="person@cox.net" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control autoComplete="current-password" type="password" placeholder="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
