import React, { Component } from 'react';
import tribonacci from './vanilla';
import letterScores from './letterScores'
import Helper from './helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      signature: [],
      arrayLength: 1,
      tribList: []
    }
  }

  clearState() {
    this.setState({userInput: '', signature: [], });
  }

  createArray() {
    let tribArray = this.state.signature;
    let numberToPush = parseInt(this.state.userInput)
    tribArray.push(numberToPush);
    if (this.state.signature.length === 3){
      this.setState({tribList: tribonacci(this.state.signature, this.state.arrayLength)});
    }
    this.setState({tribList: tribArray});
  }

  render(){
    return(
    <div>
      <input
        placeholder='Submit Three Numbers'
        onChange={(e)=> this.setState({userInput: e.target.value})}
      />
      <input
        placeholder='Submit Array Length'
        onChange={(e)=> this.setState({arrayLength: e.target.value})}
      />
      <Helper name='RESET' handleClick={this.clearState.bind(this)}/>
      <Helper name='SUBMIT' handleClick={this.createArray.bind(this)}/>
      {this.state.tribList}
    </div>
    )
  }
}

export default App;
