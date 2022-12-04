import React from "react";
import ControlledCarousel from "./carousel";

export default function Entry(props) {
  if (props.admin) {
    return (
    <div className="item row shadow" key={props.id}>
      <p className="title col-two-thirds">{props.title}</p>
      <p className="date col-third text-align-right">{props.date}</p>
      <button className="item delete col-eighth">X</button>
    </div>
  )
  } else {
    return (
      <li className="item sofa">
        <h2>{props.title}</h2>
        <div className="img-container pos-rel">
          <ControlledCarousel images={props.images}/>
        </div>
        <div className="description">
          <span className="price">${props.price}</span>
          <p className="text">{props.description}</p>
          <a className="link">I want it</a>
        </div>
      </li>
    )
  }
}
