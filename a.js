'use strict';

/*
const massMark = 78;
const heightMark = 1.69

const massJohn = 95;
const heightJohn = 1.88

const BMIMark = (massMark)/heightMark**2;
const BMIJohn = (massJohn)/ heightJohn**2;

console.log(BMIMark)
console.log(BMIJohn)

const markHigherBMI = BMIMark < BMIJohn

console.log(BMIMark, BMIJohn, markHigherBMI)


if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's BMI(${BMIJohn})!`);
}
else{
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's BMI(${BMIMark})!`);
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

const firstName = 'Adi';
const job="stockbroker"
const birthYear = 1991;
const year = 2049


const adinew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(adinew)

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

const inputYear = '1991';

/* Type conversion taking place from ""string" to number using Number()
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)
console.log(inputYear + 18)

console.log(Number('Jonas'))
console
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const scoreDolphin = (5 + 111 + 100) / 3;
const scoreKoala = (120 + 98 + 5) / 3;
console.log(scoreDolphin, scoreKoala);

if(scoreDolphin > scoreKoala && scoreDolphin >= 100) {
    console.log("Dolphins win the trophy");
}
else if(scoreDolphin == scoreKoala & scoreDolphin >= 100 ){
    console.log("Its a draw between Dolphins and Koalas")
}
else if(scoreKoala > scoreDolphin && scoreKoala >= 100) {
    console.log("Koala wins the trophy");
}
else{
    console.log("No one wins the trophy 😶");
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const age = 23;
age >= 18 ? console.log('I like to drink wine 🎉') :
console.log('I like to drink water')

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const bill = 400;
const tip = bill <= 300 && bill >= 50 ?  bill * .15 :bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ARROW FUNCTION


const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName}  retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1971, 'Bob'));

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 FUNDAMENTALS - 2
 CODING CHALLENGE 2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data 
below

3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array)



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 :
    bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = bills + tips
console.log(bills, tips, totals);

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CODING CHALLENGE 3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.



const mac = {
    fullName: 'Mac Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;

        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 900,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
    
        return this.bmi;
    }   
};

mac.calcBMI();
john.calcBMI();


if(mac.bmi > john.bmi) {
    console.log(`${mac.fullName}'s BMI (${mac.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})'`)
}

else if (john.bmi > mac.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mac.fullName}'s BMI (${mac.bmi})`)
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CODING CHALLENGE - 4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:

4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together

4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array  



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip  = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return sum/ arr.length;
}

console.log(calcAverage([2 , 3 , 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips))

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
'use strict'

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            
            var millenial = true;                                                   // REALLY IMPORTANT POINT HERE !!!!
            const str = `Oh you are a millenial, ${firstName} !!!`;
            console.log(str);
        
            function add(a,b) {
                return a + b;
            }
        }
         // console.log(str);           // var variables are function scoped and they dont care about blocks at all 
        console.log(millenial);         // This is why it works 
        // add(2, 3);   
    }

    printAge();
    return age;
}

const firstName = 'Adi'; 
calcAge(1990)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


var x = 3;
let y = 3;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(y === window.x);
console.log(z === window.x)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b*2);
    }
}

g()
f()
console.dir(f)

h()
f()
console.dir(f)

// Example 2
const boardPassengers = (n, wait) =>{
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait*1000)

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(51, 2)