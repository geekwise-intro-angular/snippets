console.log('snippets');

//Dependency injection example
console.log('DependencyExample\n\\\==========/')
var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

// function logPerson() {
// var john = new Person('Mike', 'Tyson');
// console.log(john);
// }
//logPerson();

function logPerson(person) {
  console.log(person);
}
var john = new Person('Mike', 'Tyson');
logPerson(john.firstname + " " +john.lastname);
