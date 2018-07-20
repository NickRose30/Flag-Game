import React from 'react';
import './FlagQuestion.css';

const FlagQuestion = ({
                        countries,
                        onGuess,
                        makeSelection,
                        enableGuess
}) => {
  const optionsRow = countries.map((c, i) => (
    <label className="choice" key={i}>
      <input
        type="radio"
        name="country_selection"
        value={c}
        onChange={makeSelection}
      />{c}
    </label>
  ));

  return (
    <div>
      <form className="questionForm" onSubmit={onGuess}>
        {optionsRow}
        <button type="submit" disabled={!enableGuess}>Guess</button>
      </form>
    </div>
  )
};

export default FlagQuestion;