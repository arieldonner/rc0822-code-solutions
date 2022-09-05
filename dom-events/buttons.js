function handleClick(event) {
  console.log('button clicked');
  console.log('Click event:', event);
  console.log('Click target:', event.target);
}

var click = document.querySelector('.click-button');

click.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('Mouseover event:', event);
  console.log('Mouseover target:', event.target);
}

var hover = document.querySelector('.hover-button');

hover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('DoubleClick event:', event);
  console.log('DoubleClick target:', event.target);
}

var double = document.querySelector('.double-click-button');

double.addEventListener('dblclick', handleDoubleClick, false);
