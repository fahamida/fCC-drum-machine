import React, { Component } from 'react';
import Volume from './components/Volume';
import Display from "./components/Display";
import Title from "./components/Title";
import Sounds from './components/Sounds';
import Square from './components/Square';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isToggleOn: false,
      bank:true,
      display:"click or type"
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }
  handleDisplay=(display)=> {
    this.setState({ display });
};

handleClick() {
  this.setState(function(prevState) {
    return {isToggleOn: !prevState.isToggleOn};
  });
}
changeBank() {
  this.setState(function(prevState) {
    return {bank: !prevState.bank};
  });
}

  render() {

    const { isToggleOn, bank } = this.state;
    let keyboard;

    if(isToggleOn && bank)
    {
      keyboard = Sounds.map(d=>(
      <Square
      id={d.bank1.id}
      letter={d.letter}
      src={d.bank1.url}
      handleDisplay={this.handleDisplay}
       />
    ))}  
    else if(isToggleOn && !bank){
      keyboard = Sounds.map(d=>(
      <Square
      id={d.bank2.id}
      letter={d.letter}
      src={d.bank2.url}
      handleDisplay={this.handleDisplay}
       />
    ))}
    else{
      keyboard = <div>
        <h2>Turn on to play!</h2>
      </div>
    } 
    return (
      <div className="App container">
        <Title />
        <div className="row">
        <div className="col-sm-6">
        <div>
         {keyboard}

      </div>
        </div>


          <div className="col-sm-6">
          <div className="">
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
          </div>

            <Display name={this.state.display} />
            <Volume />
            <div>
              <button onClick={this.changeBank}>
                {this.state.bank ? 'Bank 1' : 'Bank 2'}
              </button>
            </div>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
