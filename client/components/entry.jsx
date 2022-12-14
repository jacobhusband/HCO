import React from "react";
import ControlledCarousel from "./carousel";
import { Row, Col } from "react-bootstrap";

export default function Entry(props) {

  function handlePageSwap(event) {
    const {id, title} = event.target
    if(isNaN(id) || id === "") window.open(id);
    else window.location.hash = `#contact?id=${id}&title=${title}`;
  }

  if (props.admin) {
    if (props.removedInventory.includes((props.id).toString())) return null;
    return (
    <Row className="justify-content-center m-2 border border-dark rounded" key={props.id}>
      <Col className="d-flex align-items-center" xs={5} sm={4}>
        <p className="m-0 text-start">{props.title}</p>
      </Col>
      <Col className="d-flex align-items-center justify-content-center" xs={4} sm={4}>
        <p className="m-0">{props.date}</p>
      </Col>
      <Col xs={3} sm={4} className='text-end'>
        <button id={props.id} onClick={props.editInventory} className="m-1 text-primary"><i id={props.id} className="fa-solid fa-pen"></i></button>
        <button id={props.id} onClick={props.removeProduct} className="m-1 text-danger"><i id={props.id} className="fa-solid fa-xmark fa-xl"></i></button>
      </Col>
    </Row>
  )
  } else {
    const link = (props.link) && (
      <a role='button' className="left-a link-primary fst-italic position-absolute" id={props.link} title={props.title} onClick={handlePageSwap}>Link</a>
    )

    return (
      <Col xs={12} md={6} lg={6} xl={6} className="mb-3">
        <div className="item position-relative m-1">
          <h2>{props.title}</h2>
          <ControlledCarousel images={props.images}/>
          <p className="mt-1 mb-4"><span className="me-2">${props.price}</span>{props.description}</p>
          <a role='button' className="right-a link-primary fst-italic position-absolute" id={Number(props.product_no)} title={props.title} onClick={handlePageSwap}>I want it</a>
          {link}
        </div>
      </Col>
    )
  }
}
