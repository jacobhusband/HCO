import React from "react";
import ControlledCarousel from "./carousel";
import { Row, Col } from "react-bootstrap";

export default function Entry(props) {
  if (props.admin) {
    return (
    <Row className="justify-content-center m-2 border border-dark" key={props.id}>
      <Col className="d-flex align-items-center" xs={5}>
        <p className="m-0 text-start">{props.title}</p>
      </Col>
      <Col className="d-flex align-items-center" xs={5}>
        <p className="m-0 text-end">{props.date}</p>
      </Col>
      <Col xs={2}>
        <button className="m-2 border border-dark">X</button>
      </Col>
    </Row>
  )
  } else {
    return (
      <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
        <h2>{props.title}</h2>
        <ControlledCarousel images={props.images}/>
        <div>
          <span>${props.price}</span>
          <p className="mb-0">{props.description}</p>
          <a className="link-primary">I want it</a>
        </div>
      </Col>
    )
  }
}
