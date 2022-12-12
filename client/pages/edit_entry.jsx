import React, { useRef, useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import DeleteModal from "../components/delete-modal";

export default function EditEntry(props) {
  let title, description, price, images;

  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [removedImages, setRemovedImages] = useState([]);
  const handleDeleteModalClose = () => setDeleteModalShow(false);

  const {info} = props;

  if (info) {
    console.log(info)
    title = info.name;
    description = info.description;
    price = info.price;
    images = info.images.map((url, ind) => {
      if (removedImages.includes(info.image_ids[ind])) return null;
      return (
        <Col xs={4} className="img-container position-relative" key={info.image_ids[ind]}>
          <Button id={info.image_ids[ind]} className="text-dark position-absolute icon" onClick={removeImage}><i id={info.image_ids[ind]} className="fa-solid fa-times"></i></Button>
          <img className="img-fluid" src={url}/>
        </Col>
      )
    })
  }

  const fileRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    const {price, description, title} = event.target.elements;
    const shipment = {price: price.value,
                  description: description.value,
                  name: title.value };

    fetch(`/api/product/${info.product_no}`, {
      method: 'put',
      body: JSON.stringify(shipment),
      headers: {
        'X-Access-Token': user.token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        const { product_no } = res;
        const files = Array.from(fileRef.current.files);
        if (!files.length) return;
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
          }).catch (err => console.log(err))
        })
      })
      .catch(err => console.log(err));
  }

  function removeImage(event) {
    const {id} = event.target;
    setSelectedId(id);
    setDeleteModalShow(true);
  }

  function cancelEditEntry(event) {
    window.location.hash = '#admin_panel'
  }

  function continueRemovingImage(event) {
    let tempInventory;
    const token = JSON.parse(localStorage.getItem('user')).token;
    fetch(`/api/image/${selectedId}`, {
      method: 'delete',
      headers: {
        'X-Access-Token': token
      }
    }).then(result => {
      const newRemovedImages = [...removedImages];
      newRemovedImages.push(Number(selectedId));
      setRemovedImages(newRemovedImages);
      handleDeleteModalClose();
    }).catch(err => console.log(err));
  }

  return (
    <>
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
        <Form.Group controlId="oldFiles" className="mb-3">
          <Form.Label>Remove old images</Form.Label>
          <Row className="imgs-container">
            {images}
          </Row>
        </Form.Group>
        <Form.Group controlId="files" className="mb-3">
          <Form.Label>Upload new images</Form.Label>
          <Form.Control type="file" ref={fileRef} multiple/>
        </Form.Group>
        <Button className="me-2" type="submit">Submit</Button>
        <Button variant="secondary" onClick={cancelEditEntry}>Cancel</Button>
      </Form>
    </Container>
    <DeleteModal
      show={deleteModalShow}
      onHide={handleDeleteModalClose}
      onSubmit={continueRemovingImage}
    />
    </>
  )
}
