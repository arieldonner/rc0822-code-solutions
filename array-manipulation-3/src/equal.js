/* exported equal */
function equal(first, second) {
  var stringFirst = first.join();
  var stringSecond = second.join();
  if (stringFirst === stringSecond) {
    return true;
  } else {
    return false;
  }
}
