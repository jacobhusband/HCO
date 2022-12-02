import React from 'react';

export default function About() {
  return (
    <div className="container" data-view="about">
      <h1 className="text-align-center">About Us</h1>
      <div className="img-container">
        <img src="/images/truck-leaning.webp" alt="people leaning on truck" />
      </div>
      <p>
        HCO Furniture is an online refurbished furniture store that offers couches, dining tables and mattresses. We serve Orange County and surrounding
        counties in Southern California. A family business, HCO or H-Co, stands for Husband Company furniture, with Husband being the family last name
        (weird/different I know). Our goal is to bring the highest quality, yet affordable furniture to our local community.
      </p>
      <div className="img-container">
        <img src="/images/truck-riding.webp" alt="people leaning on truck" />
      </div>
      <p>
        We strive to make the furniture sales process as easy and transparent as possible. All of our listings will show exactly what you will get with high
        quality photos and accompanying video tours.
      </p>
      <div className="img-container">
        <img src="/images/couch-staged.webp" alt="people leaning on truck" />
      </div>
      <p>
        In person tours of the furniture is also available so you can see and/or test before you buy! We also offer free delivery to all Orange County
        Residents! (Delivery to surrounding counties as well for an added fee). If you live in Southern California and need high quality furniture but don't
        want to break the bank to furnish your living space, then you came to the right place!
      </p>
    </div>
  )
}
