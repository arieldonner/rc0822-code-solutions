function ExampleConstructor() {

}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log('result of new:', newFunction);

var instanceCheck = newFunction instanceof ExampleConstructor;
console.log('instanceof check:', instanceCheck);
