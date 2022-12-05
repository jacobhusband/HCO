import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function NewEntry() {

  const fileRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const files = Array.from(fileRef.current.files);
    files.forEach(file => {
      const form = new FormData();
      form.append('image', file);
      fetch('/api/uploads', {
        method: 'post',
        body: form
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
    })
  }

  return (
    <Container className="mt-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFileMultiple" className="mb-2">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple />
        </Form.Group>
        <Button type="submit">Upload</Button>
      </Form>
    </Container>
  )
}
