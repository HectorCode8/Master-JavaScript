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