console.log('hello, world');

var h1 = document.querySelector('h1');
console.log('h1 query:', h1);
console.dir(h1);

var explanation = document.querySelector('#explanation');
console.log('explanation query:', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('hint query:', hint);
console.dir(hint);

var allP = document.querySelectorAll('p');
console.log('p query', allP);

var example = document.querySelectorAll('.example-link');
console.log('example query', example);
