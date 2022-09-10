/*
 * Eloquent Javascript Chapter 3-3
 * 
 * Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
 * Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted
 * 
 * Driver - Two strings that tests the functions
 */

/* const countB = (string) => {
     let counter = 0;
     for (let i = 0; i < string.length; i++)
         if (string[i] === 'B')
             counter++;
     return counter;
} */

const countB = (string) => { return countChar(string, 'B') };

const countChar = (string, char) => {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char)
            counter++;
    }
    return counter;
}

console.log(countB("BaseBall")); // 2
console.log(countChar("Henry Cejudo CCC", "C")); // 4