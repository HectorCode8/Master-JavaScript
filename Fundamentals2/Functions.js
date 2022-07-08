function logger() {
  console.log("My name is Hector");
}
// calling / running / inmvoking function
logger();
logger();
logger();

/////////////////////////////////////////////
// function expression
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(10, 20);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
