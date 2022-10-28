import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const length = this.state.password.length;
    let color = 'red';
    let icon = faXmark;
    let err = 'A password is required.';
    if (length > 0 && length < 8) {
      err = 'Your password is too short.';
    }
    if (length >= 8) {
      color = 'green';
      icon = faCheck;
      err = '';
    }
    return (
      <form>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' className='box' value={this.state.password} onChange={this.handlePassword}></input>
        <FontAwesomeIcon icon={icon} className={`icon ${color}`} />
        <p className='red-txt'>{err}</p>
      </form>
    );
  }
}

export default ValidatedInput;
