
function calcBmi(weight, height) {
    let bmi = weight / (height * height);
    return Math.round(bmi);
     
}
let person = calcBmi(88, 1.85);
console.log("Bmi " + "Tom" +" ist: ",person);
