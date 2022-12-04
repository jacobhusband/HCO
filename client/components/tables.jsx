import React from "react";
import Entry from "./entry";

export default function Tables(props) {
  let tables;
  if(props.admin) {
    tables = (props.tables)
    ? props.tables.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} date={item.date.split('T')[0]} admin={props.admin}/>)
    : null;
  } else {
    tables = (props.tables)
    ? props.tables.items.map(item => <Entry title={item.name} key={item.product_no} id={item.product_no} price={item.price} description={item.description} images={item.images}/>) : null;
  }
  return (
    <div className={props.className}>
      {(tables) ? tables : null}
    </div>
  )
}
