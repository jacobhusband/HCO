import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function ItemContainer(props) {
  return (
    <Container className="mb-4">
      <Row>
        <Col xs={8}>
          <h6 className='lh-lg mb-0'>{props.title}</h6>
        </Col>
        <Col xs={4} className='text-end'>
          <a className='lh-lg' href={props.hash}>See Inventory</a>
        </Col>
      </Row>
      <Row>
        <Container>
          <div className='ratio ratio-16x9'><img src={props.img}/></div>
        </Container>
      </Row>
    </Container>
  )
}


