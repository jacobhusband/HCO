import React from 'react'
import Entry from './entry'
import { Row } from 'react-bootstrap';

export default function InventoryContent(props) {

  const entries = props.items.map((item,index) => <Entry title={item.name} price={item.price} key={index} description={item.description} images={item.images}/>);

  const className = (props.subview === props.category + 's' || props.subview === props.category + 'es')
  ? props.category + 's'
  : props.category + ' hidden';

  return (
    <Row className={className + ' mt-3 mb-3'}>
      {entries}
    </Row>
  )
}
