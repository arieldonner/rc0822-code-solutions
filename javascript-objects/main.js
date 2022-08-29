var student = {
  firstName: 'Ariel',
  lastName: 'Donner',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2014
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Junto',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
