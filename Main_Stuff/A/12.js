document.write("CHECK THE CONSOLE");

let itemsArr = ["Milk" , "Bread" , "Potato"];
// quantityArr consists of values - 5, 2, 3
let quantityArr = [5 , 2 , 3];
/* 
Print the following result:
Milk - 5
Bread - 2
Potato - 3
*/

for(let i=0; i < itemsArr.length; i++)
{
    console.log(itemsArr[i] + " - " + quantityArr[i]);
}