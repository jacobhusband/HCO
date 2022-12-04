import React, { useRef, useState, useEffect } from "react";
import AdminContent from "../components/admin-content";
import { Row, Col, Container } from "react-bootstrap";

export default function Admin(props) {
  const [inventory, setInventory] = useState(null);
  const [view, setView] = useState("sofas");

  useEffect(() => {
    if (!inventory)
      fetch("/api/products")
        .then((res) => res.json())
        .then((res) => {
          setInventory(res);
        });
  });

  const content = (inventory) && inventory.map((obj,index) => <AdminContent category={obj.category} items={obj.items} subview={view} key={index}/>);

  return (
    <Container className="p-2 text-center" data-view={view}>
      <h1>ADMIN</h1>
      <Row>
        <Col>
          <a
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
            data-link="tables"
            onClick={() => {
              setView("tables");
            }}
          >
            Tables
          </a>
        </Col>
      </Row>
      <div className="content">
        {content}
      </div>
      <Container>
        <Row className="p-2 border border-dark m-2 add item flex row-rl-center">
          <p className="m-0 plus center">+</p>
        </Row>
      </Container>
    </Container>
  );
}
