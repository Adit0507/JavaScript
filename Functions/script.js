"use strict";

/* Default Parameters

const bookings = [];
// DEFAULT VALUES
const createBooking = function (
  flightNum = "AH120",
  numPassengers = 2,
  price = 100 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("HY43");
createBooking(undefined, 17, 230);
createBooking("UE", 7);
createBooking("Yt71", undefined, 430);
*/

/* Passing Arguements Works: Values & References

const flight = 'LH143';
const jonas = {
  name : 'Jonas Schmedtmann',
  passport: 25381917,
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH199';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport == 25381917) {
    alert('Checked In');
  }
  else {
    alert('Wrong Passport!');
  }
};

//  checkIn(flight, jonas);
// console.log(flight)
// console.log(jonas)

// Is the same as doing
// const flightNum = flight;
// const passenger = jonas; 


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

///////////////////////////////////////
// Functions Accepting Callback functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, second, ...others] = str.split(" ");
  return [first.toUpperCase(), second.toUpperCase(), ...others].join(" ");
};


// Higher-order function
const transformer = function (str, fn) {
  // fn is a function, taking function as an arguement
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("javascript is the best", upperFirstWord);

transformer("javascript is and always will be the best", oneWord);

// JS use callbacks all the time
const high5 = function() {
  console.log("👋");
}

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

///////////////////////////////////////
/* Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Aditya");

greet("Hello")("Peter"); // Really Important

// Challenge = Do the same using Arrow Function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Hank");
*/
///////////////////////////////////////
// The call and apply Methods
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // book: function() {}    Old Method
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} 
      flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Aditya Singh");
lufthansa.book(240, "Hugo Stiglitz");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EU",
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Serena Jones');

// Call Method
book.call(eurowings, 23, "Young Thug");
console.log(eurowings);

book.call(lufthansa, 35, "Florence Pugh");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 584, "Mary Cooper");
console.log(swiss);

// Apply Method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
*/

///////////////////////////////////////
// Bind Method
// book.call(eurowings, 23, 'Sarah Williams')
/*
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schemdtmann");
bookEW23("Aditya Singh");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++; // Planes are increasing because of this logic
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));


// Partial Applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 20))

const addVAT = addTax.bind(null, .23)
// addVat = value => value + value * 0.23;  SAME THING AS ABOVE

console.log(addVAT(100));
console.log(addVAT(17)); 

// Function returning functions
const addTaxRate = function(rate){
  return function(value) {
    return value + value*rate;
  }
}

const addVAT2 = addTaxRate(.35);
console.log(addVAT(100));
console.log(addVAT(17));
*/

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function() {
  console.log('This will never run again')
};
runOnce(); 

// IIFE
(function() {
  console.log('This will never run again')
  const isPrivate = 23;
  var b = 7
})();

(() =>   console.log('This will ALSO never run again'))
();

{
  const isPrivate = 23;
  var notPriv = 5;
}
// console.log(isPrivate)
console.log(notPriv)
*/



///////////////////////////////////////
// CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);


var a = 10; 
function foo(){
  console.log(a);
};
function bar(){
  var a = 20; 
  foo();
};
bar();


// More Closure Examples

let f;

const g = function(){
    const a = 23;
    f = function() {
      console.log(a * 2);
    };
};


const h = function() {
  const b = 77;
  f = function() {
    console.log(b * 2);
  };
}

g();
f()
console.dir(f)

// Re-assigning f function
h();
f()
console.dir(f)

// Example 2
const boardPassengers = function(n, wait){
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
   
    console.log(`There are 3 groups, each with 
    ${perGroup} passengers`);

  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 5);