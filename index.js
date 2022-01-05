// JavaScript-calcBMI

/*BMI steht für body mass index und ist eine gebräuchliche Formel zur Gewichtsberechnung.
Der BMI errechnet sich durch folgende Formel:
BMI = (Gewicht in kg) / (Höhe in Meter) / (Höhe in Meter).
Beispiel: John wiegt 80kg und ist 1,77 Meter hoch.
BMI (John) = 80 / 1.77 / 1.77 = 25.5*/

/* Aufgabenstellung - Teil 1
Schreibe in JavaScript eine Funktion, die den BMI berechnet.
Die Funktion nimmt die Größe und das Gewicht als Parameterwert auf.
In der Funktion berechnet sie den BMI und gibt ihn über return als Rückgabewert aus.*/

function calcBMI(kg, meter){
    return kg / meter / meter;
};


/* Aufgabenstellung - Teil 2
Teste deine Funktion.
Berechne dazu deinen eigenen BMI oder den BMI einer fiktiven Person. 
Übergebe Gewicht und Höhe als Argument an die Funktion.*/

let return1 = calcBMI(120, 1.75);
let return2 = calcBMI(83, 1.56);

console.log(return1.toFixed(2));
console.log(return2.toFixed(2));