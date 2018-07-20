import React, { Component } from 'react';
import './FlagGame.css';
import Display from '../Display/Display';
import shuffle from "shuffle-array";

const apiUrl = 'https://restcountries.eu/rest/v2/all';

class FlagGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: [],
      selected: "",
      guessed: false,
      countries: [],
      correct: undefined,
      correctOption: undefined,
      index: 0
    };
    this.newQuestion = this.newQuestion.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => this.setState({flags: shuffle(response)},() => this.newQuestion()))
  }

  newQuestion() {
    const { flags } = this.state;
    const index = Math.floor(Math.random() * flags.length);
    const country = flags[index].name;
    const otherCountries = Array.from(Array(3)).map(() => {
      const randInt = Math.floor(Math.random() * flags.length);
      return flags[randInt].name !== country ? flags[randInt].name : flags[randInt +1].name
    });
    this.setState({
      countries: shuffle([...otherCountries, country]),
      correct: undefined,
      correctOption: undefined,
      selected: "",
      guessed: false,
      index
    });
  }

  handleGuess(e) {
    e.preventDefault();
    this.setState({
      guessed: true,
      correct: this.state.selected === this.state.flags[this.state.index].name,
      correctOption: this.state.flags[this.state.index].name
    })
  }

  handleSelection(e) {
    this.setState({selected: e.target.value})
  }

  render() {

    const { flags } = this.state;
    const { flag } = flags && flags.length > 0 ? flags[this.state.index] : {};

    return (
      <div className="game">
        {flags.length > 0 ?
        [
          <Display
            key="display"
            guessed={this.state.guessed}
            countries={this.state.countries}
            onGuess={this.handleGuess}
            makeSelection={this.handleSelection}
            correct={this.state.correct}
            correctOption={this.state.correctOption}
            newGame={this.newQuestion}
            selected={this.state.selected}
          />,
          <img key="image" src={flag} alt="flag" />
        ] : <div className="loading">Loading...</div>
        }
      </div>
    )
  }
};

export default FlagGame;