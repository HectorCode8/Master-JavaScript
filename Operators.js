// Rest
const ageHector = 2037 - 1993
console.log(ageHector)

// Sum
const ageChocha = 1992 + 30
console.log(ageChocha)

// Mult
const hector = 3
const mult = hector * 2
console.log(mult)

// Div
console.log(hector / 3)

async function getData() {
  const response = await fetch('https://dog.ceo/api/breed/hound/images')
  const data = await response.json()
  console.log(data)
}
getData()