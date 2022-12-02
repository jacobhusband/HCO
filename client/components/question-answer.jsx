import React, {useState} from 'react';

export default function QuestionAnswer(props) {

  let arrowStyle, answerClass;
  const [open, setOpen] = useState(false);

  if (open) {
    arrowStyle = {transform: `rotate(90deg)`}
    answerClass = "bg-d b-1 p-1";
  } else {
    arrowStyle = {transform: `rotate(0deg)`}
    answerClass = "hidden bg-d b-1 p-1";
  }

  function handleClick(event) {
    setOpen(!open);
  }

  return (
    <div className="row flex-col">
      <div className="row row-ud-center row-space-between w-100 p-lr-1">
        <p>{props.question}</p>
        <button onClick={handleClick} className='arrow'>
          <img className="img-questions" src="/images/arrow-head-right.webp" alt="arrow right" style={arrowStyle}/>
        </button>
      </div>
      <p className={answerClass}>{props.answer}</p>
    </div>
  )
}
