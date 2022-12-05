import React from 'react';
import ItemContainer from '../components/item-container';

export default function Home() {

  return (
    <>
      <div>
        <div className="text-center p-3 pt-4">
          <img src="/images/HCO.webp" alt="HCO logo"/>
          <p className='h5 m-2'>E-commerce furniture store in Orange County, California </p>
          <p><span className='fw-bold'>FREE DELIVERY</span> to Orange County Residents<br/>Delivery to surrounding counties for a fee<br/>Check out our couches, tables, and mattresses (coming soon)</p>
        </div>
        <div className="text-center">
          <h1 className='fw-bold mb-4'>Current Inventory</h1>
        </div>
        <div>
          <ItemContainer title={"Couches | Sectionals | Recliners"} img={"/images/couch-blue.webp"} hash={"#inventory?sofas"}/>
          <ItemContainer title={"Dining Table Sets"} img={"/images/table-white.webp"} hash={"#inventory?tables"}/>
          <ItemContainer title={"Mattresses"} img={"/images/mattress.webp"} hash={"#inventory?mattresses"}/>
        </div>
      </div>
    </>
  )
}
