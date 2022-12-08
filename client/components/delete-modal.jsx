import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DeleteModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete this item?<br/>This action cannot be undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onSubmit}>Confirm</Button>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
