function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('.task-list-item element:', closest);
    closest.remove();
  }
}

var $list = document.querySelector('.task-list');
$list.addEventListener('click', handleClick);
