// Aufgabe 1
function calcBMI(mass, higher) {
    
    console.log("Deine Mase ist:", mass);
    console.log("Deine Höher ist:", higher);
    let bmi = mass / higher / higher;
    return bmi;
    
}

let person1 = calcBMI(75, 1.80);
console.log(person1.toFixed(2));