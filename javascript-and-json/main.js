var books = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('Array:', books);
console.log('typeof array:', typeof books);

var stringify = JSON.stringify(books);
console.log('JSON.stringify:', stringify);

var student = '{"id": 123456789, "name": "Bob Random"}';

console.log('Student:', student);
console.log('typeof JSON:', typeof student);

var parse = JSON.parse(student);
console.log('JSON.parse:', parse);
console.log('typeof parse:', typeof parse);
