import React from 'react';


export default function Home() {

  return (
    <>
      <div className="container" data-view="homepage">
        <div className="homepage-header text-align-center">
          <img src="/images/HCO.webp" alt="HCO logo" />
          <p>E-commerce furniture store in Orange County, California</p>
          <p>FREE DELIVERY to Orange County Residents</p>
          <p>Delivery to surrounding counties for a fee</p>
          <p>Check out our couches, tables, and mattresses (coming soon)</p>
        </div>
        <div className="homepage-title text-align-center">
          <h1>Current Inventory</h1>
        </div>
        <div className="content">
          <div className="item-container">
            <div className="item-header row row-ud-center row-space-between">
              <h2>Couches | Sectionals | Recliners</h2>
              <a href="#">See Inventory</a>
            </div>
            <div className="img-container">
              <img src="/images/couch-blue.webp" alt="couch blue" />
            </div>
          </div>
          <div className="item-container">
            <div className="item-header row row-ud-center row-space-between">
              <h2>Dining Table Sets</h2>
              <a href="#">See Inventory</a>
            </div>
            <div className="img-container">
              <img src="/images/table-white.webp" alt="couch blue" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
