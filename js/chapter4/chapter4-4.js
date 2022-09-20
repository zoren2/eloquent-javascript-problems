/*
 * Eloquent Javascript Chapter 4-4
 * 
 * Write a function deepEqual that takes two values and returns true only if they are the same
 * value or are objects with the same properties where the values of the properties are equal
 * when compared with a recursive call to deepEqual.
 * 
 * Driver - Test deepEqual function with variables with cookie objects, numbers, strings, and null
 * 
 */

const deepEqual = (object1, object2) => {
    if (object1 === object2)
        return true;
    // Checks if the objects are null
    if (object1 == null || typeof object1 != "object" ||
        object2 == null || typeof object2 != "object")
        return false;
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }
    return true;
}

const isObject = (object) => {
    return object != null && typeof object === 'object';
}

/*
 * Driver
 * Tests the deepEqual function with objects (empty, 'cookie'), strings, numbers, and null
 */

let cookie1 = {
    radius: 5,
    chips: 5
}

let cookie2 = {
    radius: 5,
    chips: 5
}

console.log(deepEqual(1, 1));
console.log(deepEqual(null, {}));
console.log(deepEqual('equal', 'equal'));
console.log(deepEqual(null, null));
console.log(deepEqual(cookie1, cookie2));
