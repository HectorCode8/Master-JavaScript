const hectorArray = [
    'Hector',
    'haro',
    1993 - 2022,
    'developer',
    ['html', 'css', 'javascript', 'react']
]

const hector = {
    firstName: 'Hector',
    age: 22,
    job: 'developer',
    hobbies: ['html', 'css', 'javascript', 'react']
}



// Dot VS Bracket Notation
//Dot notation
console.log(hector.hobbies)
console.log(hector['age'])

const nameKey = 'Name'
console.log(hector['first' + nameKey])