import React, { Component } from 'react';
import Sounds from './Sounds';
import Volume from './Display';
import Display from './Display';

    

class Square extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };
  
    render() {
      return (
        <button className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
        >
        <h1>{this.props.letter}</h1>          
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        />
        </button>
        
      );
    }
  }

  export default Square;