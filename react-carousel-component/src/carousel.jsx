import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, url: '', dotState: faCircle };
    this.handleDots = this.handleDots.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this);
    this.handleArrowLeft = this.handleArrowLeft.bind(this);
    this.change = this.change.bind(this);
  }

  handleDots(event) {
    if (event.target === event.currentTarget) {
      const eventId = Number(event.target.id);
      this.setState({ counter: eventId, url: this.props.img[eventId] });
    }
  }

  handleArrowRight(event) {
    const img = this.props.img;
    if (event.target === event.currentTarget && this.state.counter < img.length) {
      this.setState({ counter: this.state.counter + 1, url: this.props.img[this.state.counter] });
    } else {
      this.setState({ counter: 0, url: this.props.img[0] });
    }
  }

  handleArrowLeft(event) {
    const img = this.props.img;
    if (event.target === event.currentTarget) {
      if (event.target === event.currentTarget && this.state.counter > 0) {
        this.setState({ counter: this.state.counter - 1, url: this.props.img[this.state.counter] });
      } else {
        this.setState({ counter: img.length, url: this.props.img[img.length] });
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.change(),
      3000);
  }

  change() {
    if (this.state.counter < 3) {
      this.setState({ counter: this.state.counter + 1, url: this.props.img[this.state.counter] });
    } else {
      this.setState({ counter: 0, url: this.props.img[0] });
    }
  }

  render() {
    const img = this.props.img;
    const listItems = img.map(item => {
      if (this.state.counter === item.id) {
        return (
          <img key={item.id} src={item.url} />
        );
      } else {
        return '';
      }
    });
    const dots = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
    let dotState = faCircle;
    const dotItems = dots.map(dot => {
      if (this.state.counter === dot.id) {
        dotState = faCircle;
        return (
          <FontAwesomeIcon key={dot.id} icon={dotState} className='dot' id={dot.id} onClick={this.handleDots} />
        );
      } else {
        dotState = farCircle;
        return (
          <FontAwesomeIcon key={dot.id} icon={dotState} className='dot' id={dot.id} onClick={this.handleDots} />
        );
      }
    });
    return (
      <div className='container'>
        <div className='column-fifth'>
          <FontAwesomeIcon icon={faChevronLeft} className='chevron' onClick={this.handleArrowLeft} />
        </div>
        <div className='column-three-fifths'>
          {listItems}
          <div className='dots'>
            {dotItems}
          </div>
        </div>
        <div className='column-fifth'>
          <FontAwesomeIcon icon={faChevronRight} className='chevron' onClick={this.handleArrowRight} />
        </div>
      </div>
    );
  }
}

export default Carousel;
