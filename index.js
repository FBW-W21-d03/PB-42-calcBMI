

function bmiCalculate(weights, height){
    let bmi = weights / height / height;
    return bmi;
}

let Return1 = bmiCalculate(80, 1.78) 

console.log(Return1);