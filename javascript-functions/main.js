function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
