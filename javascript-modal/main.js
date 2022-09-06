var $openButton = document.querySelector('.blue');
var $modal = document.querySelector('.container-modal');

function openModal(event) {
  $modal.className = 'container-modal';
}

function closeModal(event) {
  $modal.className = 'container-modal hide';
}

$openButton.addEventListener('click', openModal);
$modal.addEventListener('click', closeModal);
