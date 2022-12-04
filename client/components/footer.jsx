import React from 'react';

export default function Footer() {
  return (
    <nav className="footer flex row-space-between">
      <a data-link="homepage" href="#">Home</a>
      <a data-link="inventory" href="#inventory">Inventory</a>
      <a data-link="about" href="#about">About</a>
      <a data-link="contact" href="#contact">Contact</a>
      <a data-link="faq" href="#faq">FAQ</a>
      <a data-link="reviews" href="#reviews">Reviews</a>
    </nav>
  )
}
