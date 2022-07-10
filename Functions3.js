// Functions calling other functions

function cutFruit(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples)
    const orangePieces = cutFruit(oranges)

    const juice = `Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges`;
    return juice;
}

fruitProcessor(2, 3);
console.log(fruitProcessor(2, 3));

