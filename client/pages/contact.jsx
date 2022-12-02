import React from 'react';

export default function Contact() {
  return (
    <div className="container" data-view="contact">
      <h1 className="text-align-center">Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="John Smith" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="johnsmith@gmail.com" required />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="888-888-8888" required />
        <label htmlFor="information">Message</label>
        <textarea rows="6" name="message" id="information" placeholder="I am interested in..." required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}
