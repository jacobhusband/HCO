import React from "react";
import Entry from "./entry";
import { Container } from "react-bootstrap";

export default function AdminContent(props) {
  const entries = props.items.map(item => <Entry key={item.product_no} title={item.name} id={item.product_no} date={item.date.split('T')[0]} admin="true"/>);

  const className = (props.subview === props.category + 's' || props.subview === props.category + 'es')
  ? ''
  : ' hidden';

  return (
    <div className={className}>
      {entries}
    </div>
  )
}
