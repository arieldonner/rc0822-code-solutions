var $tab = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tab.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTab.length; i++) {
      if (event.target === $allTab[i]) {
        $allTab[i].className = 'tab active';
      } else {
        $allTab[i].className = 'tab';
      }
      var viewValue = event.target.getAttribute('data-view');
      for (var j = 0; j < $allView.length; j++) {
        if (viewValue === $allView[j].getAttribute('data-view')) {
          $allView[j].className = 'view';
        } else {
          $allView[j].className = 'hidden';
        }
      }
    }
  }
}
