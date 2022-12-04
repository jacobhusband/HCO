import React from "react";
import Entry from "./entry";

export default function Mattresses(props) {
  let mattresses;
  if(props.admin) {
    mattresses = (props.mattresses)
    ? props.mattresses.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} date={item.date.split('T')[0]} admin={props.admin}/>)
    : null;
  } else {
    mattresses = (props.mattresses)
    ? props.mattresses.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} price={item.price} description={item.description} images={item.images}/>) : null;
  }
  return (
    <div className={props.className}>
      {(mattresses) ? mattresses : null}
    </div>
  )
}
