import React, { Component } from 'react';
import Helper from './helper'

const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10, null: 0, '': 0,
};

class App extends Component {
  constructor() {
    super();

  }

  scoreWord(guess) {
    let scoreArray = [];
    let word = guess.toUpperCase().replace(/\s+/g, '').split('');

    for (var i = 0; i < word.length; i++) {
      let score = letterScores[word[i]];
      scoreArray.push(score);
    }
    return scoreArray.reduce((a, b) => a + b);
  }

  // inputState(e) {
  //   this.setState({
  //     input: e.target.value,
  //   });
  // }

    // <input
    //   placeholder="Enter word"
    //   onChange={e => this.updateGuessState(e)}
    // />
}

export default App;
