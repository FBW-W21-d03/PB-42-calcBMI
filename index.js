'use strict';

console.log('JavaScript-calcBMI');

// aufgabe teil1

function bmi(kg , height){
    return(kg / height / height)
}

let return1 = bmi(58 , 1.6);
let return2 = bmi(120 , 1.8);

// aufgabe teil2

console.log(return1.toFixed(2));
console.log(return2.toFixed(2));