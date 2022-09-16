/*
 * Eloquent Javascript Chapter 4-2
 * 
 * Write two functions, reverseArray and reverseArrayInPlace. 
 * 
 * - The first takes an array and produces a new array that has the same items in reverse order.
 * - The second modifies the array given as argument by reversing its elements. Must be in-place.
 * - Do not use the standard reverse method to implement your solutions.
 * 
 * Driver - Reverse contents of two arrays using both reverseArray and reverseArrayInPlace and print 
 * resulting arrays in the console.
 * 
 */

/* Push items by iterating through array in reverse order */
const reverseArray = (array) => {
    let tempArray = [];
    for (let i = array.length - 1; i >= 0; i--)
        tempArray.push(array[i]);
    return tempArray;
}

/* Switch items around the middle index in order to switch elements in-place */
const reverseArrayInPlace = (array) => {
    for (let i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
}


let numArray1 = [1, 2, 3, 4, 5]; // Odd amount of elements
let numArray2 = [6, 7, 8, 9, 10, 11]; // Even amount of elements

/* First array */
console.log(reverseArray(numArray1));
reverseArrayInPlace(numArray1);
console.log(numArray1);

/* Second Array */
console.log(reverseArray(numArray2));
reverseArrayInPlace(numArray2);
console.log(numArray2);
