//Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

//Function expression
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1993);
console.log(age2);

//Arrow function
const calcAge3 = (birthYear) => {
    return 2022 - birthYear;
}
console.log(calcAge3(2002));

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(1993, 'Hector'));
console.log(yearUntilRetirement(2002, 'Alondra'));z