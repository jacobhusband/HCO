import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function NewEntry() {

  const fileRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const parameter = window.location.hash.split('?')[1]
    const category = (parameter.includes('sofa')) ? 'sofa'
      : (parameter.includes('table')) ? 'table' : 'mattress';
    console.log(category);
    const user = JSON.parse(localStorage.getItem('user'));
    const {price, description, title} = event.target.elements;
    const info = {price: price.value,
                  description: description.value,
                  title: title.value,
                  category };


    fetch('/api/products', {
      method: 'post',
      body: JSON.stringify(info),
      headers: {
        'X-Access-Token': user.token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        const files = Array.from(fileRef.current.files);
        files.forEach(file => {
          const form = new FormData();
          form.append('image', file);
          return fetch('/api/uploads', {
            method: 'post',
            body: form,
            headers: {
              'X-Access-Token': user.token
            }
          })
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" name="price" className="form-control" aria-label="Amount (to the nearest dollar)"/>
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="files" className="mb-3">
          <Form.Label>Upload images</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}
