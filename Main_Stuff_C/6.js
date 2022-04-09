'use strict';

var NoOfBottles = 9;


while(NoOfBottles >= 0){

    var BottleWord = "bottle";

    if(NoOfBottles == 1){
        BottleWord = "bottles";
    }

    console.log(NoOfBottles + " " + BottleWord + " of beer on the wall");
    console.log(NoOfBottles + " " + BottleWord + " of beer,");
    console.log("Take one down, pass it around");
        NoOfBottles --;

    console.log (NoOfBottles + " " + BottleWord + " of beer on the wall");

}