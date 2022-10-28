import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { isPlaying: false, seconds: 0 };
  }

  handleClick() {
    if (this.state.isPlaying === true) {
      clearInterval(this.timerID);
    } else if (this.state.isPlaying === false) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  reset() {
    if (this.state.isPlaying === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    let button = faPlay;

    if (this.state.isPlaying) {
      button = faPause;
    }

    return (
      <div className='column'>
        <div className='circle' onClick={this.reset}>
          <p className='number'>{this.state.seconds}</p>
        </div>
        <FontAwesomeIcon icon={button} className='icon' onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Stopwatch;
