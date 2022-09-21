var intervalID = setInterval(countdown, 1000);

var numbers = document.querySelector('.countdown-display');
var counter = 3;

function countdown() {
  numbers.textContent = counter;
  counter--;
  if (counter < 0) {
    numbers.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
