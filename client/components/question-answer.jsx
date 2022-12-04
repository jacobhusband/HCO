import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function QuestionAnswer(props) {

  return (
    <Accordion.Item eventKey={props.id}>
      <Accordion.Header>{props.question}</Accordion.Header>
      <Accordion.Body>
        {props.answer}
      </Accordion.Body>
    </Accordion.Item>
  )
}
