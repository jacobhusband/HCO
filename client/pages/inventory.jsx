import React, {useState, useEffect} from 'react';

export default function Inventory() {

  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    if(!inventory) {
      console.log('hi')
    }
  })

  return (
    <div className="container" data-view="inventory" data-subview="sofas">
      <h1 className="text-align-center">Inventory</h1>
      <div className="categories row row-ud-center row-space-between">
        <a data-link="sofas" className="" href="#">Sofas</a>
        <a data-link="mattresses" className="text-align-center" href="#">Mattresses</a>
        <a data-link="tables" className="text-align-right" href="#">Tables</a>
      </div>
      <div className="products">
        <ul className="sofas">
          <li className="item sofa">
            <h2>Gray Three Seater Sofa</h2>
            <div className="img-container pos-rel">
              <img src="/images/couch-blue.webp" alt="blue couch" />
              <img className="left pos-abs" src="/images/arrow-head-right-circle.webp" alt="arrow" />
              <img className="right pos-abs" src="/images/arrow-head-right-circle.webp" alt="arrow" />
              <div className="dots row pos-abs row-rl-center row-flex-end">
                <div className="dot filled"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="description">
              <span className="price">$499</span>
              <p className="text">Like new sofa with 100% cotten fabric along with 50/50 polyester linen pillows included.</p>
              <a className="link" href="#">I want it</a>
            </div>
          </li>
          <li className="item sofa">
            <h2>Gray Three Seater Sofa</h2>
            <div className="img-container pos-rel">
              <img src="/images/couch-blue.webp" alt="blue couch" />
              <img className="left pos-abs" src="/images/arrow-head-right-circle.webp" alt="arrow" />
              <img className="right pos-abs" src="/images/arrow-head-right-circle.webp" alt="arrow" />
              <div className="dots row pos-abs row-rl-center row-flex-end">
                <div className="dot filled"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="description">
              <span className="price">$499</span>
              <p className="text">Like new sofa with 100% cotten fabric along with 50/50 polyester linen pillows included.</p>
              <a className="link" href="#">I want it</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
