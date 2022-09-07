var $char = document.querySelectorAll('span');
var counter = 0;
var currentChar = $char[counter].textContent;
var $again = document.querySelector('.hide');
var $button = document.querySelector('button');

document.addEventListener('keydown', function (event) {
  var key = event.key;
  if (key === currentChar) {
    $char[counter].className = 'green';
    if (counter === $char.length - 1) {
      $again.className = 'show';
      $button.addEventListener('click', function (event) {
        location.reload();
      });
    } else {
      counter++;
      currentChar = $char[counter].textContent;
      $char[counter].className = 'underline';
    }
  } else {
    $char[counter].className = 'red';
  }
});
