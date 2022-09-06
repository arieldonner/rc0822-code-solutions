var $button = document.querySelector('.click');
var $container = document.querySelector('body');
var on = true;

function handleClick(event) {
  if (on === true) {
    $button.className = 'click circle-dark';
    $container.className = 'background-dark';
    on = false;
  } else {
    $button.className = 'click circle-light';
    $container.className = 'background-light';
    on = true;
  }
}

$button.addEventListener('click', handleClick);
