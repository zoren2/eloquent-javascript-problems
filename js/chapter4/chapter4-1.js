/*
 * Eloquent Javascript Chapter 4-1
 * 
 * Write a range function that takes two arguments start and end, and returns an array containing all the
 * numbers from start up to end.
 * 
 * Write a sum function that takes an array of numbers and return sthe sum of these numbers.
 * 
 * Driver - Two sample arguments that uses both the sum and range function eg: console.log(sum(range(1,10)))
 * 
 */

const range = (start, end) => {
    let tempArray = [];
    for (let i = start; i <= end; i++) {
        tempArray.push(i);
    }
    return tempArray;
};

const sum = (numbers) => {
    let temp = 0;
    for (let number of numbers)
        temp += number;
    return temp;
}

console.log(sum(range(1, 10))); // 55
console.log(sum(range(2, 30))); // 464
