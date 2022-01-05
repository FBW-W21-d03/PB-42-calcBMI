// Aufgabe 1
function calcBMI(mass, higher) {

    let bmi = mass / higher / higher;
    return bmi;
    
}

let person1 = calcBMI(75, 1.80);
console.log(person1.toFixed(2));