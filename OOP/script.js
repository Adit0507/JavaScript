"use strict";
////////////////////////////////////////
// Constructor functions and the new operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this !!!!!!!
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear)
  // }
};

const Aditya = new Person("Aditya", 2002);
console.log(Aditya);
// 1. New{} is created
// 2. function is called, this = {}
// 3. {} linke to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2018);
const jack = new Person("Jack", 2005);
console.log(matilda, jack);

// const jay = "Jay"
// console.log(jay instanceof Person)
// console.log(Aditya instanceof Person)

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Aditya.calcAge();
matilda.calcAge();

console.log(Aditya.__proto__);
console.log(Aditya.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Aditya));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(Aditya.species, matilda.species);
console.log(Aditya.hasOwnProperty("firstName"));
console.log(Aditya.hasOwnProperty("species"));

//////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(Aditya.__proto__);

