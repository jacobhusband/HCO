import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function QuestionAnswer(props) {

  const answer = props.answer.split('<br />')

  return (
    <Accordion.Item eventKey={props.id}>
      <Accordion.Header>{props.question}</Accordion.Header>
      <Accordion.Body>
        {answer}
      </Accordion.Body>
    </Accordion.Item>
  )
}
