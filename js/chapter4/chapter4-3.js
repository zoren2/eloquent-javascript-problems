/*
 * Eloquent Javascript Chapter 4-3
 * 
 * 1. Write function arrayToList that takes an array of objects and returns a list
 * 2. Write function listToArray that takes a list and returns an array
 * 3. Write a helper function prepend which takes an element and a list and creates
 * a new list that adds the element to the front of the input list, and nth, which
 * takes a list and a number and returns hte element at given position in the list
 * 
 * Driver - Test the functions with a sample list and an sample array
 * 
 */

const arrayToList = (array) => {
    let tempObject = {};
    let currentListItem = tempObject;
    for (let item of array) {
        let newListItem = {
            value: item,
            rest: null
        };
        /* If the tempObject is empty  */
        if (typeof currentListItem.rest === 'undefined') {
            tempObject = newListItem;
        } else {
            currentListItem.rest = newListItem;
        }
        currentListItem = newListItem;
    }
    return tempObject;
}

const listToArray = (list) => {
    let tempArray = [];
    tempArray.push(list.value);
    while (list.rest !== null) {
        list = list.rest;
        tempArray.push(list.value);
    }
    return tempArray;
}


/* Adds to the beginning of the list */
const prepend = (element, list) => {
    return {
        value: element,
        rest: list
    };
}

/* Takes list and finds nth item */
const nth = (list, number) => {
    return listToArray(list)[number];
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

let numArray = [4, 5, 6];

/*
 * Driver - 
 * 1. Prints List in Array Format
 * 2. Grabs nth item (third element)
 * 3. Prints Array in List Format
 */

// 1
newArray = listToArray(list);
console.log(newArray);

// 2
console.log(nth(list, 2));

// 3
newList = arrayToList(numArray);
console.log(newList);
