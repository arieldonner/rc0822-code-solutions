/* exported reverseWords */
function reverseWords(string) {
  var arr = string.split(' ');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].split('');
    var reverse = word.reverse();
    var final = reverse.join('');
    newArr.push(final);
  }
  var finalString = newArr.join(' ');
  return finalString;
}
