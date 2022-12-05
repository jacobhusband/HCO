import React from 'react';
import ItemContainer from '../components/item-container';
import { Container, Col, Row} from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <div className='homepage'>
        <Container className="text-center">
          <img className='mt-3 logo' src="/images/HCO.webp" alt="HCO logo"/>
          <img className='header-img ratio ratio-16x9' src="/images/couch-header-lg.webp" alt="White Header Couch" />
          <p className='h5 m-2'>E-commerce furniture store in Orange County, California </p>
          <p><span className='fw-bold'>FREE DELIVERY</span> to Orange County Residents<br/>Delivery to surrounding counties for a fee<br/>Check out our couches, tables, and mattresses (coming soon)</p>
        </Container>
        <Container>
          <div className="text-center">
            <h1 className='fw-bold mb-2 mt-4'>Current Inventory</h1>
          </div>
          <Row className='mb-3'>
            <Col xs={12} md={6} xl={4}>
              <ItemContainer title={"Couches | Sectionals | Recliners"} img={"/images/couch-blue.webp"} hash={"#inventory?sofas"}/>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <ItemContainer title={"Dining Table Sets"} img={"/images/table-white.webp"} hash={"#inventory?tables"}/>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <ItemContainer title={"Mattresses"} img={"/images/mattress.webp"} hash={"#inventory?mattresses"}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
