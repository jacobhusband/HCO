import React from "react";

export default function NewEntry() {
  return (
    <form class="new entry">
      <h1 class="text-align-center">NEW ENTRY</h1>
      <label for="title">Title</label>
      <input type="text" id="title" class="shadow" />
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="8" class="shadow"></textarea>
      <label class="price" for="price">Price<span class="dollar">$</span></label>
      <input type="text" id="price" class="shadow" />
      <label for="images">Images</label>
      <button type="button" class="img plus shadow">+</button>
      <div class="options">
        <button class="save shadow">SAVE</button>
        <button type="button" class="cancel shadow">CANCEL</button>
      </div>
    </form>
  )
}
