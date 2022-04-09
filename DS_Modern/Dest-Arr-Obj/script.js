'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open:12, 
            close: 22
        },

        fri: {
            open: 11,
            close: 23
        },

        sat: {
            open: 0, 
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], 
        this.mainMenu[mainIndex]]
    }, 

    orderDelivery: function ({starterIndex, mainIndex, 
    time, address}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant.orderDelivery({
    time: '22:45',
    address: 'Via Sole, 35',
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery ({
    address: `Vijay Khand`,
    starterIndex: 1,
    mainIndex: 0,
    time: `19:40`
})


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
    
    } = restaurant;

console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 987;
let b = 147;

const obj = {a: 23, b: 7, c: 14};




/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x , y, z);

const [first,,second] = restaurant.categories;
console.log(first,second)

let [main , secondary] = restaurant.categories;
console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);


// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(1 , 2);
console.log(starter, mainCourse);

 const nested = [2, 3, [5, 6]];
// const [i, j] = nested;
// console.log(i,j);
const [i, , [j,k]] = nested;
console.log(i , j ,k);

// Default values
const [p = 1, q = 2, r = 5] = [8, 9];
console.log(p , q , r);
*/