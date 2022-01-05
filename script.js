
function bmiRechner(gewicht, hoeche){
    let bmi = gewicht / hoeche / hoeche;
    return bmi;
}

let bmiRechner1 = bmiRechner(64, 1.75) 

console.log(bmiRechner1);