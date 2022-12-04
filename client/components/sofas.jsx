import React from "react";
import Entry from "./entry";

export default function Sofas(props) {
  let sofas;
  if(props.admin) {
    sofas = (props.sofas)
    ? props.sofas.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} date={item.date.split('T')[0]} admin={props.admin}/>)
    : null;
  } else {
    sofas = (props.sofas)
    ? props.sofas.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} price={item.price} description={item.description} images={item.images}/>) : null;
  }
  return (
    <div className={props.className}>
      {(sofas) ? sofas : null}
    </div>
  )
}
