import React from "react";
import ControlledCarousel from "./carousel";
import { Row, Col } from "react-bootstrap";

export default function Entry(props) {

  function handlePageSwap(event) {
    const {id, title} = event.target
    console.log(id, title)
    window.location.hash = `#contact?id=${id}&title=${title}`;
  }

  if (props.admin) {
    if (props.removedInventory.includes((props.id).toString())) return null;
    return (
    <Row className="justify-content-center m-2 border border-dark" key={props.id}>
      <Col className="d-flex align-items-center" xs={5}>
        <p className="m-0 text-start">{props.title}</p>
      </Col>
      <Col className="d-flex align-items-center" xs={5}>
        <p className="m-0 text-end">{props.date}</p>
      </Col>
      <Col xs={2} className='text-end'>
        <button id={props.id} onClick={props.removeProduct} className="m-2 border border-dark">X</button>
      </Col>
    </Row>
  )
  } else {
    return (
      <Col xs={12} md={6} lg={4} xl={3} className="mb-3 item position-relative">
        <h2>{props.title}</h2>
        <ControlledCarousel images={props.images}/>
        <p className="mt-1 mb-4"><span className="me-2">${props.price}</span>{props.description}</p>
        <a role='button' className="link-primary fst-italic position-absolute" id={props.product_no} title={props.title} onClick={handlePageSwap}>I want it</a>
      </Col>
    )
  }
}
