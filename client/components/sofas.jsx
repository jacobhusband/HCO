import React from "react";
import Entry from "./entry";

export default function Sofas(props) {
  const sofas = (props.sofas)
    ? props.sofas.items.map(item => <Entry title={item.name} id={item.product_no} date={item.date.split('T')[0]}/>)
    : null;

  return (
    <div className={props.className}>
      {sofas}
    </div>
  )
}
