function bmiCalc (height, kilo) {
    let result = kilo/height/height;
    return result;
}
let resultFinal = bmiCalc (1.80, 80);

console.log ("Felix ist 1.80 groß und hat 80 kilogramm, seinen BMI ist : " ,resultFinal.toFixed (2));