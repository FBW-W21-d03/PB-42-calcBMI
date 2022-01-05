function bmi(weight, size) {
  let BMI = weight / size / size;
  return BMI;
}

let num = bmi(80, 1.77);
console.log(num.toFixed(2));
