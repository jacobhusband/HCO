import React, {useState} from 'react';

export default function QuestionAnswer(props) {

  let arrowStyle, answerClass;
  const [open, setOpen] = useState(false);

  if (open) {
    arrowStyle = {transform: `rotate(90deg)`}
    answerClass = "bg-d b-1 p-3";
  } else {
    arrowStyle = {transform: `rotate(0deg)`}
    answerClass = "hidden bg-d b-1 p-3";
  }

  function handleClick(event) {
    setOpen(!open);
  }

  return (
    <div className="flex flex-col">
      <div className="flex row-ud-center row-space-between w-100 p-lr-1">
        <p style={{marginBottom: 0}}>{props.question}</p>
        <button onClick={handleClick} className='arrow'>
          <img className="img-questions" src="/images/arrow-head-right.webp" alt="arrow right" style={arrowStyle}/>
        </button>
      </div>
      <p className={answerClass}>{props.answer}</p>
    </div>
  )
}
