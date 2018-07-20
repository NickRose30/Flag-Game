import React from 'react';
import './FlagAnswer.css';

const FlagAnswer = ({
  correct,
  correctOption,
  nextQuestion
}) => (
  <div className="answer">
    { correct ?
      'Correct!' :
      `Incorrect! Correct answer was ${correctOption}!`
    }
    <button className="next_question_btn" onClick={nextQuestion}>Next</button>
  </div>
);

export default FlagAnswer;