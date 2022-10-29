import React from 'react';

function Accordion(props) {
  const topics = props.topics;
  const listItems = topics.map((item, index) =>
      <li className='list' key={index}>{item.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default Accordion;
