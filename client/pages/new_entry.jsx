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
    <Container className="mt-2 new-entry">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Grey Sectional" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Beautiful 100% linen sofa made in California." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Upload images</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}
