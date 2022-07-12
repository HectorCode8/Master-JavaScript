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

hector.location = 'Bogota'
hector['twitter'] = '@hector_haro'
console.log(hector)

console.log(`${hector.firstName} is a ${hector.job}. He lives in ${hector.location}, he loves ${hector.hobbies[0]} and ${hector.hobbies[1]}`)