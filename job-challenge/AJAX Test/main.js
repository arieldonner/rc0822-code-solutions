var targetUrl = encodeURIComponent('https://steamcommunity.com/actions/SearchApps/' + 'runefactory');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
xhr.setRequestHeader('token', 'abc123');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  // console.log(xhr.response);
});
xhr.send();

var targetUrl2 = encodeURIComponent('https://store.steampowered.com/api/appdetails?appids=' + '1702330');

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl2);
xhr2.setRequestHeader('token', 'abc123');
xhr2.responseType = 'json';
xhr2.addEventListener('load', function () {
  // console.log(xhr2.response);
});
xhr2.send();

var targetUrl3 = encodeURIComponent('https://store.steampowered.com/api/featured');
var xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl3);
xhr3.setRequestHeader('token', 'abc123');
xhr3.responseType = 'json';
xhr3.addEventListener('load', function () {
  // console.log(xhr3.response);
});
xhr3.send();
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://x-math.herokuapp.com/api/random?max=999&negative=1');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();
