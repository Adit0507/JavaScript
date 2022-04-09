'use strict';
/* THIS KEYWORD
// console.log(this)
const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    // console.log(this)
}
calcAge(2002)

const calcAgeArrow = birthYear =>{
    console.log(this);
    console.log(2037 - birthYear)
}
calcAgeArrow(1980)

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};

jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*//////////////////////////////////////
ARROW FUNCTION 
*/

var firstName = 'Aditya'

const jonas = {

    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial()
    },

    greet: () =>{
        console.log(this)
        console.log(`Hey ${this.firstName}`);
    },
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
};

addExpr(2,5);
addExpr(3, 1,9,7);

var addArrow = (a,b) => {
    console.log(arguments);

    return a + b;
};
// For Arrow function arguments keyword is not defined
addArrow(4,1)       