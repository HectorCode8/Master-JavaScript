
const array1 = ["Alo", "Agu", "Car", "Ped", "Mim"];
const array2 = ["f", "g", "h", "i", "j"];

console.log(array1[1]);
console.log(array1.length);
console.log(array1[ array1.length - 1 ]);

array1[1] = "Agua";
console.log(array1);

const firstName = 'hector'
const hector = [firstName, 'haro', 1993]
console.log(hector);


//Excercise 1
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1993, 1992, 1991, 2010];

const age1 = calcAge(years[0]);
console.log(age1);
const age2 = calcAge(years[1]);
console.log(age2);
const age3 = calcAge(years[years.length - 1]);
console.log(age3);