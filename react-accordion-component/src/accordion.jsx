import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentId: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target === event.currentTarget) {
      if (this.state.currentId === event.target.id) {
        this.setState({ currentId: 0 });
      } else {
        this.setState({ currentId: event.target.id });
      }
    }
  }

  render() {
    let display = 'hide';
    const topics = this.props.topics;
    const listItems = topics.map((item, index) => {
      if (Number(this.state.currentId) === item.id) {
        display = 'show';
      } else {
        display = 'hide';
      }
      return (
        <div key={index} className='container'>
          <h3 className='name' id={item.id} onClick={this.handleClick}>{item.name}</h3>
          <p className={`details ${display}`}>{item.detail}</p>
        </div>
      );
    }
    );
    return (
      <div>{listItems}</div>
    );
  }
}

export default Accordion;
