var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var values = {
    name: $contact.elements.name.value,
    email: $contact.elements.email.value,
    message: $contact.elements.message.value
  };
  console.log('Contact Us Info:', values);
  $contact.reset();
}
