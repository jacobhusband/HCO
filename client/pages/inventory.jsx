import React, {useState, useEffect} from 'react';
import InventoryContent from '../components/inventory-content';
import { Row, Col, Container } from 'react-bootstrap';

export default function Inventory(props) {

  const [inventory, setInventory] = useState(null);
  const [view, setView] = useState(props.subview);

  useEffect(() => {
    if(!inventory) fetch('/api/products').then(res => res.json()).then(res => {
      setInventory(res);
    }).catch(err => console.log(err));
  })

  const content = (inventory) && inventory.map((obj,index) => <InventoryContent category={obj.category} key={index} items={obj.items} subview={view}/>);

  return (
    <div className='text-center' data-view={view}>
      <h1 className="fw-bold m-3">Inventory</h1>
      <Row className='bg-light p-2'>
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
      <Container className="text-start">
        {content}
      </Container>
    </div>
  )
}
