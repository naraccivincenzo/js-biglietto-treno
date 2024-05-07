'use strict';
//init the variables
let age = parseInt(Number(prompt('Quanti anni hai?')));
let km = parseInt(Number(prompt('Quanti chilometri devi percorrere?')));
const pricexkm = 0.21;
const youngDiscount = 20;
const seniorDiscount = 40;
let grossPrice = km * pricexkm;
let finalPrice = 0;

//check if the passenger is young or senior
if (age < 18) {
    finalPrice = grossPrice - (grossPrice * youngDiscount / 100);
} else if (age > 65) {
    finalPrice = grossPrice - (grossPrice * seniorDiscount / 100);
} else {
    finalPrice = grossPrice;
}

/*check if the user inserted numbers
if not, show an error message
if yes, show the result
and and shows the discount applied 
if the passenger are entitled to it */

if (isNaN(age) || isNaN(km)) {
    document.getElementById("message").innerHTML = `Bisogna inserire valori numerici!`;
}
else {
    document.getElementById("age").innerHTML = `L'età del passeggero è ` + age + ` anni`;
    document.getElementById("km").innerHTML = `Il passeggero deve percorrere ` + km + ` Km`;
    document.getElementById("pricexkm").innerHTML = `Il prezzo a chilometro è € ` + pricexkm;
    document.getElementById("grossprice").innerHTML = `Il prezzo senza sconto è € ` + grossPrice.toFixed(2);
    if (age < 18) {
        document.getElementById("discount").innerHTML = `Lo sconto applicato è ` + youngDiscount + `%`;
    } else if (age > 65) {
        document.getElementById("discount").innerHTML = `Lo sconto applicato è ` + seniorDiscount + `%`;
    } else {
        document.getElementById("discount").innerHTML = `Non si ha diritto a nessuno sconto!`;
    }
    document.getElementById("price").innerHTML = 'Il prezzo finale è € ' + finalPrice.toFixed(2);
}