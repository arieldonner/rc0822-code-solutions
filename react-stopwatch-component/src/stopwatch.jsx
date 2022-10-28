import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isPlaying: false, count: 0 };
  }

  handleClick() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let button = 'fa-play';

    if (this.state.isPlaying) {
      button = 'fa-pause';
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      clearInterval(this.timerID);
    }

    return (
      <div className='column'>
        <div className='circle'>
          <p className='number'>{this.state.count}</p>
        </div>
        <i className={`fa-solid ${button}`} onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default Stopwatch;
