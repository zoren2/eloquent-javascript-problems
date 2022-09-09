/*
 * Eloquent Javascript Chapter 3-2
 * Recursively determine if a number is odd or even
 * Driver - Generates 20 random numbers ranging from 1 - 10 and determine if each number is odd or even
 */

const isEven = (n) => {
    if (n === 1)
        return false;
    else if (n === 2)
        return true;
    return isEven(n - 2);
}

for (let i = 0; i < 20; i++) {
    let randomNumber1 = Math.floor(Math.random() * 10 + 1);
    console.log("Current Run: " + (i + 1));
    if (isEven(randomNumber1))
        console.log(randomNumber1 + " is even.");
    else if (isEven(randomNumber1) === false)
        console.log(randomNumber1 + " is odd.");
    else
        console.log("We encountered a bug!"); // Catches unexpected behavior
}