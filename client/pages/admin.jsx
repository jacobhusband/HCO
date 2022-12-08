import React, { useRef, useState, useEffect } from "react";
import AdminContent from "../components/admin-content";
import { Row, Col, Container, Button } from "react-bootstrap";
import DeleteModal from "../components/delete-modal";

export default function Admin(props) {
  const [inventory, setInventory] = useState(null);
  const [view, setView] = useState("sofas");
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [removedInventory, setRemovedInventory] = useState([]);

  const handleDeleteModalClose = () => setDeleteModalShow(false);

  useEffect(() => {
    if (!inventory)
      fetch("/api/products")
        .then((res) => res.json())
        .then((res) => {
          setInventory(res);
        });
  });

  function removeProduct(event) {
    const {id} = event.target;
    setSelectedId(id);
    setDeleteModalShow(true);
  }

  function continueRemovingProduct(event) {
    let tempInventory;
    const token = JSON.parse(localStorage.getItem('user')).token;
    fetch('/api/products', {
      method: 'delete',
      body: JSON.stringify({product_no: selectedId}),
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
      }
    }).then(result => {
      tempInventory = [...removedInventory];
      tempInventory.push(selectedId);
      setRemovedInventory(tempInventory);
      setDeleteModalShow(false);
    }).catch(err => console.log(err));
  }

  const content = (inventory) && inventory.map((obj,index) => <AdminContent category={obj.category} items={obj.items} subview={view} key={index} removeProduct={removeProduct} removedInventory={removedInventory}/>);

  return (
    <>
      <Button className='position-absolute m-1' href="#home">Home</Button>
      <Container className="pt-2 text-center" data-view={view}>
        <h1>ADMIN</h1>
        <Row>
          <Col>
            <a
              role='button'
              data-link="sofas"
              onClick={() => {
                setView("sofas");
              }}
            >
              Sofas
            </a>
          </Col>
          <Col>
            <a
              role='button'
              data-link="mattresses"
              onClick={() => {
                setView("mattresses");
              }}
            >
              Mattresses
            </a>
          </Col>
          <Col>
            <a
              role='button'
              data-link="tables"
              onClick={() => {
                setView("tables");
              }}
            >
              Tables
            </a>
          </Col>
        </Row>
        <div>
          {content}
        </div>
        <div>
          <Row className="p-2 border border-dark m-2 add item flex row-rl-center">
            <Button variant="light" href={`#new_entry?${view}`}>
              <p className="m-0 plus center">+</p>
            </Button>
          </Row>
        </div>
      </Container>
      <DeleteModal
        show={deleteModalShow}
        onHide={handleDeleteModalClose}
        onSubmit={continueRemovingProduct}
      />
    </>
  );
}
