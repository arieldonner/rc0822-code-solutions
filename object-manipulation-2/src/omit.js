/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var k in source) {
    if (!keys.includes(k)) {
      newObject[k] = source[k];
    }
  }
  return newObject;
}
