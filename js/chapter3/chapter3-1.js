/*
 * Eloquent Javascript Chapter 3-1
 * Write A Find Minimum Function using Arrow Functions
 * Driver - Generates 20 sets of numbers and finds the minimum
 */

const minimum = (num1, num2) => {
    if (num1 > num2)
        return num2;
    return num1;
}

for (let i = 0; i < 20; i++) {
    let randomNumber1 = Math.floor(Math.random() * 10 + 1);
    let randomNumber2 = Math.floor(Math.random() * 10 + 1);
    console.log("Current Run: " + (i + 1));
    console.log("First Number is: " + randomNumber1);
    console.log("Second Number is: " + randomNumber2);
    console.log("The minimum between " + randomNumber1 + " and " + randomNumber2 + " is: " +
        minimum(randomNumber1, randomNumber2)
    );
}