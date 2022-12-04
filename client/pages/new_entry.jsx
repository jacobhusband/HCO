import React from "react";

export default function NewEntry() {
  return (
    <form className="new entry">
      <h1 className="text-align-center">NEW ENTRY</h1>
      <label for="title">Title</label>
      <input type="text" id="title" className="shadow" />
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="8" className="shadow"></textarea>
      <label className="price" for="price">Price<span className="dollar">$</span></label>
      <input type="text" id="price" className="shadow" />
      <label for="images">Images</label>
      <button type="button" className="img plus shadow">+</button>
      <div className="options">
        <button className="save shadow">SAVE</button>
        <button type="button" className="cancel shadow">CANCEL</button>
      </div>
    </form>
  )
}
