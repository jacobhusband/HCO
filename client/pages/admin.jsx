import React, { useRef, useState, useEffect } from "react";
import AdminContent from "../components/admin-content";
import { Row, Col, Container, Button } from "react-bootstrap";

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
    <div className="pt-2 text-center" data-view={view}>
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
      <div>
        {content}
      </div>
      <div>
        <Row className="p-2 border border-dark m-2 add item flex row-rl-center">
          <Button variant="light" href="#new_entry">
            <p className="m-0 plus center">+</p>
          </Button>
        </Row>
      </div>
    </div>
  );
}
