/* exported titleCase */
function titleCase(title) {
  var lower = title.toLowerCase();
  var arr = lower.split(' ');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0] && ((arr[i].length < 3 && arr[i] !== 'i') || arr[i] === 'and' || arr[i] === 'nor' || arr[i] === 'but' || arr[i] === 'the' || arr[i] === 'for' || arr[i] === 'per')) {
      newArr.push(arr[i]);
    } else if (arr[i].includes('javascript')) {
      var js = arr[i];
      var jsUpper = js[0].toUpperCase() + js.slice(1, 4) + js[4].toUpperCase() + js.slice(5);
      newArr.push(jsUpper);
    } else if (arr[i] === 'api') {
      var api = arr[i];
      var apiUpper = api.toUpperCase();
      newArr.push(apiUpper);
    } else if (arr[i].includes('-')) {
      /*
      var dashWord = arr[i];
      var dashArr = dashWord.split('-'); */
      /* need to capitalize both words between dash and then join with dash */
    } else {
      var word = arr[i];
      var upper = word[0].toUpperCase() + word.slice(1);
      newArr.push(upper);
    }
  }
  var finalString = newArr.join(' ');
  return finalString;
}

titleCase('speaking Javascript: an in-depth guide for programmers');

/* if (arr[i].contains(':')) {
      var afterColon = arr[i + 1];
      var word = arr[i];
      var upper = word[0].toUpperCase() + word.slice(1);
      newArr.push(upper);
      var upperAfterColon = afterColon[0].toUpperCase() + afterColon.slice(1);
      newArr.push(upperAfterColon)
    } */

/* Need to finish dash situation.
Need to capitalize the word after a colon.
Need to figure out why the extra 'the' is being capitalized in some cases. */
