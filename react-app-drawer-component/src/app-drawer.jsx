import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className !== 'menu' && event.target.className !== 'rectangle') {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    if (this.state.isOpen === false) {
      return <FontAwesomeIcon icon={faBars} className='icon' onClick={this.handleClick}/>;
    }
    if (this.state.isOpen === true) {
      return (
        <div className='modal' onClick={this.handleClick}>
          <div className='rectangle'>
            <h1 className='menu'>Menu</h1>
            <h3 onClick={this.handleClick}>About</h3>
            <h3 onClick={this.handleClick}>Get Started</h3>
            <h3 onClick={this.handleClick}>Sign In</h3>
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;
