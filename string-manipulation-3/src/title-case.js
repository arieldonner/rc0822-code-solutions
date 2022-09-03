/* exported titleCase */
function titleCase(title) {
  var lower = title.toLowerCase();
  var arr = lower.split(' ');
  var newArr = [];
  var nextColon = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes(':')) {
      if (arr[i].includes('javascript')) {
        jsUpper();
      } else {
        var colonWord = arr[i];
        var colonUpper = colonWord[0].toUpperCase() + colonWord.slice(1);
        newArr.push(colonUpper);
      }
      nextColon = true;
    } else if (nextColon === true) {
      var nextWord = arr[i];
      var nextUpper = nextWord[0].toUpperCase() + nextWord.slice(1);
      newArr.push(nextUpper);
      nextColon = false;
    } else if (i === 0) {
      var firstWord = arr[i];
      var firstUpper = firstWord[0].toUpperCase() + firstWord.slice(1);
      newArr.push(firstUpper);
    } else if (nextColon === false && ((arr[i].length < 3 && arr[i] !== 'i') || arr[i] === 'and' || arr[i] === 'nor' || arr[i] === 'but' || arr[i] === 'the' || arr[i] === 'for' || arr[i] === 'per')) {
      newArr.push(arr[i]);
    } else if (arr[i].includes('javascript')) {
      jsUpper();
    } else if (arr[i] === 'api') {
      var api = arr[i];
      var apiUpper = api.toUpperCase();
      newArr.push(apiUpper);
    } else if (arr[i].includes('-')) {
      var dashWord = arr[i];
      var dashArr = dashWord.split('-');
      var dashCap = [];
      for (var j = 0; j < dashArr.length; j++) {
        var dashHold = dashArr[j];
        dashCap.push(dashHold[0].toUpperCase() + dashHold.slice(1));
      }
      var dashJoin = dashCap.join('-');
      newArr.push(dashJoin);
    } else {
      var word = arr[i];
      var upper = word[0].toUpperCase() + word.slice(1);
      newArr.push(upper);
    }
  }
  function jsUpper() {
    var js = arr[i];
    var jsUpper = js[0].toUpperCase() + js.slice(1, 4) + js[4].toUpperCase() + js.slice(5);
    newArr.push(jsUpper);
  }
  var finalString = newArr.join(' ');
  return finalString;
}

titleCase('the cat in the hat');

/* Need to finish dash situation - need to capitalize both words between dash and then join with dash
Need to capitalize the word after a colon.
Need to figure out why the extra 'the' is being capitalized in some cases. */
