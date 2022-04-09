"use strict";

const weekdays = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //Enhanced Object Literals

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and
         ${this.mainMenu[mainIndex]} will be delivered to ${address} 
         at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta 😋 with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/*    STRINGS: PART 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(6));
console.log(airline.slice(4, 9)); // Since the string starts from 0, airline is "SLICED" till the 8th index.
console.log(airline.slice(0, airline.indexOf("g")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


// Example: Create a function which checks whether the person will get a middle seat or not

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);

  if (s == "B" || s == "E") console.log("Middle seats are available");
  else console.log("Not available");
};

checkMiddleSeat("11B");
checkMiddleSeat("7D");
checkMiddleSeat("21C");
*/

/* STRINGS: PART 2

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('aditya'.toUpperCase());

// Fix capitalization in name
const passenger = 'aDiTyA'
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect)

// Comparing emails
const email = 'hello@jonas.io'
const loginEmail = '  Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// Replacing
const priceGB = '288,97€'
const priceUS = priceGB.replace('€', '$').replace(',' , '.');
console.log(priceUS)

const announcement = 'All passengers come to boarding door 23. Boarding door 23'
console.log(announcement.replace('door' , 'gate'))
console.log(announcement.replaceAll('door' , 'gate'))       // New Feature

console.log(announcement.replace(/door/g , 'gate'))         // Regular Expression method

// Booleans
const plane = 'A320neo';
console.log(plane.includes('eo'))
console.log(plane.includes('A2'))
console.log(plane.startsWith('A3'))

const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  }
  else {
    console.log('Welcome Aboard 🙏');
  }
}

checkBaggage('I have a laptop and gun')
checkBaggage('camera')
*/

/* STRINGS PART 3

console.log('E+ve+r+y'.split('+'))
console.log('Aditya Singh'.split(' '))

const [firstName, lastName] = 'Aditya Singh'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)


//Much better way 😉
const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
   
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('aditya singh');

capitalizeName('aditya kumar singh')

// Padding a string
const message = 'Go to Gate 25';

console.log(message.padStart(25, '+').padEnd(35, '+'))
console.log(message.padStart(23, '-'))


const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(551278436946));
console.log(maskCreditCard('1928017619349'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...  '
console.log(message2.repeat(5))

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
}

planesInLine(5)
*/

/* STRINGS METHOD PRACTICE

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//                Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");

  const output = `${type.startsWith("_Delayed") ? "🔴" : ' '}${type.replaceAll(
    "_",
    " "
  )}  ${getCode(from)} ${getCode(to)} (${time.replace
    (":", "h")})`.padStart(36);
  
  console.log(output);
}
*/

// MAPS: Fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");
console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear()
console.log(rest);

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);

console.log(rest.get(arr));


/* MAPS: Iteration

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

// Convert OBJECT to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === "number")
       console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;

console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert MAP to Array -> Using th Spread Operator
console.log([...question])
console.log(question.entries())
console.log([...question.keys()]);
console.log([...question.values()])
*/

/* SETS
// Set has to be unique, it doesnt take repeated elements

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

console.log(new Set("titane"));
console.log(new Set("titane").size);

console.log(ordersSet.size);

console.log(ordersSet.has("Pizza")); // We can check whether a certain element is present or not
console.log(ordersSet.has("Biryani"));

ordersSet.add("Garlic Bread"); // We can add elements in the set
ordersSet.delete("Risotto"); // We can delete elements using this
// ordersSet.clear();                    Clears the array
console.log(ordersSet);

for (const order of ordersSet) 
console.log(order);

//  Example
const staff = ['Waiter','Chef', 'Waiter', 'Manager', 'Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter','Chef', 'Waiter', 'Manager', 'Chef','Waiter']));

console.log(new Set(['Waiter','Chef', 'Waiter', 'Manager', 'Chef','Waiter']).size);
console.log(new Set('adityakumarsingh').size)

*/

/* Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties)

let openStr = `We are open for ${properties.length} days: `;

for(const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);


// Property VALUES
const values = Object.values(openingHours);
console.log(values)


// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries)

// [key, value]
for(const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
*/

/* OPTIONAL CHAINING 

The optional chaining operator (?.) allows you to access the value of a property located 
deep within a chain of objects without explicitly checking if each reference in the chain is null or undefined.

If one of the references in the chain is null or undefined, the optional chaining operator (?.) 
will short circuit and return undefined.


// without
if(restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

    
//With OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri ?. close)
console.log(restaurant.openingHours?.mon?.open);

// EXAMPLE
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat','sun'];

for(const day of days) {

    const open = restaurant.openingHours[day]?.open ?? 'closed';             // day is a variable, so we use the [] notation
    console.log(`On ${day}, we open at ${open}`)
}


// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [
    {name: 'Jonas' , email: 'hello@jonas.io'
}];

console.log(users[0]?.name ?? 'User array is empty' );

if(users.length > 0)   console.log(users[0].name);
else    console.log('User array empty')

*/

/* The FOR LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item)

for(const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries())

*/
/* NULLISH COALESCING OPERATOR (??)
    // It is a logical operator that returns its right-hand side operand when its left-hand side operand 
    // is null or undefined, and otherwise returns its left-hand side operand.
    restaurant.numGuests = 0;
    
    const guests = restaurant.numGuests || 10
    console.log(guests)

    const guestCorrect = restaurant.numGuests ?? 10;
    console.log(guestCorrect);

*/

/*
        SHORT CIRCUITING (&&  and   ||)

USE ANY data type, return ANY data type, short circuting
console.log(3 || 'Adi');
console.log('' || 'ADI')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Pushpa' || 14 || NULL);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 15;
console.log(guests1 )

const guests2 = restaurant.numGuests || 10
console.log(guests2)

/* AND
console.log(0 && 'Aditya')
console.log(12 && 'Rick')

console.log('hello' && 34 && null && 'jonas')

if(restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza
('mushrooms' , 'spinach');

restaurant.numGuests = 0;

/*




*******************************************************************************************************
    REST PATTERN AND PARAMETERS

// 1) Destructuring

// SPREAD, BECOZ ... ON RIGHT SIDE OF =
const arr = [1 , 2, ...[3,4]];


// REST, BECOZ ...ON LEFT SIDE OF =
const [a, b, ...others] = [1,2,3,4,5];
console.log(a, b, others);

const[pizza, ,risottto, ...otherFood ] =  [ ...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risottto, otherFood);

// Objects
const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function(...numbers) {
    let sum =0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum)
};

add(2,4);
add(4,1,4,3,7,9);
add(4,1,-2);

const x = [1,6,9,1];
add(...x)

restaurant.orderPizza('Mushroom', 'tomatoes', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms');


/*
*******************************************************************************
//   THE SPREAD OPERATOR

const a = [4,5,6];
const badNewarr = [1,2,3, a[0]];
console.log(badNewarr)

const b = [1,2,3, ...a];
console.log(b)


const newMenu = [...restaurant.mainMenu, 'Biryani'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); 

const str = 'Aditya';
const letters = [...str, ' ', 'S'];
console.log(letters);


const ingredients = [
    prompt("Let's make pasta ! Ingredient 1"),
    prompt("Ingredient 2"),
    prompt("Ingredient 3"),
];

console.log(ingredients)

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
    foundedIn: 2002,
    ...restaurant, 
    founder: 'Adi'
};

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Kareem's";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
