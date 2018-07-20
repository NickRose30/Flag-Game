import React from 'react';
import FlagQuestion from '../Question/FlagQuestion';
import FlagAnswer from '../Answer/FlagAnswer';

const Display = ({
                   guessed,
                   countries,
                   onGuess,
                   makeSelection,
                   correct,
                   correctOption,
                   newGame,
                   selected
}) => (
  !guessed ?
    <FlagQuestion
      countries={countries}
      onGuess={onGuess}
      makeSelection={makeSelection}
      enableGuess={!!selected}
    /> :
    <FlagAnswer
      correct={correct}
      correctOption={correctOption}
      nextQuestion={newGame}
    />
);

export default Display;