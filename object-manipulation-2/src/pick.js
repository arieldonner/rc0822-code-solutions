/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var k in source) {
    if (keys.includes(k) && source[k] !== undefined) {
      newObject[k] = source[k];
    }
  }
  return newObject;
}
