import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function NewEntry() {

  const fileRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const parameter = window.location.hash.split('?')[1]
    const category = (parameter.includes('sofa')) ? 'sofa'
      : (parameter.includes('table')) ? 'table' : 'mattress';
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
        const { product_no } = res;
        const files = Array.from(fileRef.current.files);
        files.forEach((file,ind) => {
          const form = new FormData();
          form.append('image', file);
          form.append('productId', product_no)
          fetch('/api/uploads', {
            method: 'post',
            body: form,
            headers: {
              'X-Access-Token': user.token
            }
          }).then(res => {
              if (ind === files.length - 1) window.location.hash = '#admin_panel'
            }).catch(err => console.log(err))
        })
      })
      .catch(err => console.log(err));
  }

  function cancelNewEntry(event) {
    event.preventDefault();
    event.target.closest('form').reset();
    window.location.hash = '#admin_panel';
  }

  return (
    <Container className="mt-2 new-entry">
      <h1 className="mb-3">New Entry</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Grey Sectional" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Beautiful 100% linen sofa made in California." required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" name="price" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="files" className="mb-3">
          <Form.Label>Upload images</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple required/>
        </Form.Group>
        <Button className="me-2" type="submit">Submit</Button>
        <Button variant="secondary" onClick={cancelNewEntry}>Cancel</Button>
      </Form>
    </Container>
  )
}
