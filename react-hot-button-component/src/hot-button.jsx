import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const count = this.state.count;
    let btnColor = '';
    if (count < 3) {
      btnColor = 'dark-purple';
    } else if (count >= 3 && count < 6) {
      btnColor = 'light-purple';
    } else if (count >= 6 && count < 9) {
      btnColor = 'red';
    } else if (count >= 9 && count < 12) {
      btnColor = 'orange';
    } else if (count >= 12 && count < 15) {
      btnColor = 'yellow';
    } else {
      btnColor = 'white';
    }
    return <button className={`btn ${btnColor}`} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
