import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function NewEntry() {
  return (
    <Container className="mt-2">
      <Form>
        <Form.Group controlId="formFileMultiple" className="mb-2">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button>Upload</Button>
      </Form>
    </Container>
  )
}
