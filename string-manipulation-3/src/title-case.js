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
      } else if (arr[i].includes('api')) {
        apiUpper();
      } else {
        generalUpper();
      }
      nextColon = true;
    } else if (nextColon === true) {
      generalUpper();
      nextColon = false;
    } else if (i === 0) {
      generalUpper();
    } else if (nextColon === false && ((arr[i].length < 3 && arr[i] !== 'i') || arr[i] === 'and' || arr[i] === 'nor' || arr[i] === 'but' || arr[i] === 'the' || arr[i] === 'for' || arr[i] === 'per')) {
      newArr.push(arr[i]);
    } else if (arr[i].includes('javascript')) {
      jsUpper();
    } else if (arr[i] === 'api') {
      apiUpper();
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
      generalUpper();
    }
  }
  function generalUpper() {
    var word = arr[i];
    var upper = word[0].toUpperCase() + word.slice(1);
    newArr.push(upper);
  }
  function jsUpper() {
    var js = arr[i];
    var jsUpper = js[0].toUpperCase() + js.slice(1, 4) + js[4].toUpperCase() + js.slice(5);
    newArr.push(jsUpper);
  }
  function apiUpper() {
    var api = arr[i];
    var apiUpper = api.toUpperCase();
    newArr.push(apiUpper);
  }
  var finalString = newArr.join(' ');
  return finalString;
}
