import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: true };
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let switchTxt = 'ON';
    let switchColor = 'green';
    let position = 'right';

    if (this.state.isOn === false) {
      switchTxt = 'OFF';
      switchColor = 'grey';
      position = 'left';
    }

    return (
      <div className='flex'>
        <div className={`oval ${switchColor}`} onClick={this.handleClick}>
          <div className={`circle ${position}`} onClick={this.handleClick}></div>
        </div>
        <p className='text'>{switchTxt}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
