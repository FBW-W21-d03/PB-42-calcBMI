function bodyMass(gewicht, meter) {
    let bmi = gewicht / meter / meter;
    return bmi;
}
let result = bodyMass(74, 1.81);
console.log(result);
