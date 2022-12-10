import React, { useRef, useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import DeleteModal from "../components/delete-modal";

export default function EditEntry(props) {
  let title, description, price, images;

  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleDeleteModalClose = () => setDeleteModalShow(false);

  const {info} = props;

  if (info) {
    title = info.name;
    description = info.description;
    price = info.price;
    images = info.images.map((url, ind) => {
      return (
        <Col xs={4} className="img-container position-relative" key={info.image_ids[ind]}>
          <Button id={info.image_ids[ind]} className="text-dark position-absolute icon" onClick={removeImage}><i id={info.image_ids[ind]} className="fa-solid fa-times"></i></Button>
          <img className="img-fluid" src={url}/>
        </Col>
      )
    })
  }

  const fileRef = useRef();

  function handleSubmit(event) {}

  function removeImage(event) {
    const {id} = event.target;
    setSelectedId(id);
    setDeleteModalShow(true);
  }

  function cancelEditEntry(event) {
    window.location.hash = '#admin_panel'
  }

  function continueRemovingImage(event) {
    console.log(event.target)
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
          <Form.Control type="file" ref={fileRef} multiple required/>
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
