setInterval(nextImg, 3000);

var $img = document.querySelector('img');
var counter = 0;
var gallery = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $dots = document.querySelectorAll('.dot');

function nextImg() {
  counter++;
  var newImg = gallery[counter];
  if (counter >= 0 && counter < 5) {
    $img.setAttribute('src', newImg);
    $dots[counter].className = 'fa-solid fa-circle dot';
    $dots[counter - 1].className = 'fa-regular fa-circle dot';
  } else {
    counter = 0;
    $img.setAttribute('src', gallery[0]);
    $dots[4].className = 'fa-regular fa-circle dot';
    $dots[0].className = 'fa-solid fa-circle dot';
  }
}

var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');

$leftArrow.addEventListener('click', handleBack);
$rightArrow.addEventListener('click', handleForward);

function handleBack(event) {
  if (counter > 0) {
    $dots[counter].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', gallery[counter - 1]);
    counter -= 1;
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else {
    $dots[0].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', gallery[4]);
    counter = 4;
    $dots[4].className = 'fa-solid fa-circle dot';
  }
}

function handleForward(event) {
  if (counter < 4) {
    $dots[counter].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', gallery[counter + 1]);
    counter += 1;
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else {
    $dots[4].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', gallery[0]);
    counter = 0;
    $dots[0].className = 'fa-solid fa-circle dot';
  }
}

var $divDots = document.querySelector('.dots');
$divDots.addEventListener('click', handleDots);

function replaceCounter() {
  $img.setAttribute('src', gallery[counter]);
  $dots[counter].className = 'fa-solid fa-circle dot';
}

function handleDots(event) {
  if (event.target.id === 'zero') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 0;
    replaceCounter();
  } else if (event.target.id === 'one') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 1;
    replaceCounter();
  } else if (event.target.id === 'two') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 2;
    replaceCounter();
  } else if (event.target.id === 'three') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 3;
    replaceCounter();
  } else {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 4;
    replaceCounter();
  }
}
