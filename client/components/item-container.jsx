import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function ItemContainer(props) {
  return (
    <Container>
      <Col>
        <Row>
          <Col xs={9}>
            <h6 className='lh-lg mb-0'>{props.title}</h6>
          </Col>
          <Col xs={3} className='text-end'>
            <a className='lh-lg' href={props.hash}>Inventory</a>
          </Col>
        </Row>
        <Row>
          <div className='ratio ratio-16x9'><img src={props.img}/></div>
        </Row>
      </Col>
    </Container>
  )
}
