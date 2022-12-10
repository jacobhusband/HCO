import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function EditEntry(props) {
  let title, description, price, images;

  const {info} = props;
  console.log(info)

  if (info) {
    title = info.name;
    description = info.description;
    price = info.price;
  }

  const fileRef = useRef();

  function handleSubmit() {}

  function cancelEditEntry() {}

  return (
    <Container className="mt-2 edit-entry">
      <h1 className="mb-3">Edit Entry</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Grey Sectional" required defaultValue={title}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Beautiful 100% linen sofa made in California." required defaultValue={description}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" name="price" className="form-control" aria-label="Amount (to the nearest dollar)" required defaultValue={price}/>
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="files" className="mb-3">
          <Form.Label>Upload new images</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple required/>
        </Form.Group>
        <Button className="me-2" type="submit">Submit</Button>
        <Button variant="secondary" onClick={cancelEditEntry}>Cancel</Button>
      </Form>
    </Container>
  )
}
