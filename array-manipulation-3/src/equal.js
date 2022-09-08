/* exported equal */
function equal(first, second) {
  if (typeof first[0] !== 'object') {
    var stringFirst = first.join();
    var stringSecond = second.join();
    if (stringFirst === stringSecond) {
      return true;
    } else {
      return false;
    }
  } else {
    for (var key in Object.keys(first)) {
      if (second[key] !== null && first[key] === second[key]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}
