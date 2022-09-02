/* exported truncate */
function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
