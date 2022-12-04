import React from "react";

export default function Entry(props) {
  return (
    <div className="item row shadow" key={props.id}>
      <p className="title col-two-thirds">{props.title}</p>
      <p className="date col-third text-align-right">{props.date}</p>
      <button className="item delete col-eighth">X</button>
    </div>
  )
}
