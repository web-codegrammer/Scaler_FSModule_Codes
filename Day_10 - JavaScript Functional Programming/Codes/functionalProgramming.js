/* 1. Anonymous Function --> Function can be assigned to a varibale */
const sum = function (a, b) {
    return a + b;
}

// console.log(sum); // I will get function refernce here
// console.log(sum, 1, 2); // Along with fn refernce '1&2' will be printed

// cb --> callback, It is called callback bcz it will be called/invoked/executed later
// In JS pass functions as argument/parameter
const compute = function (cb) {
    // console.log(cb);
    // any computation here
    // calling sum function as below
    cb(10, 20); // refernce to sum() function only
}
// passing refernce of sum function to another function compute
compute(sum);

/* Concept : 2
Function can be returned from another function */

const multiply = function (a, b, c) {
    return a * b * c;
}

const compute1 = function (cb) {
    // returning the function refernce/Callback from here as it is.
    return cb; // returns function
}

const multiplyfn = compute1(multiply);
// console.log(multiplyfn(1, 5, 3)); // multiply function

/* 2. Pure Function : There is no external source impacting the quality and outcome of data */

// const generatePaneer = function (milk) {
//     return milk / 4;
// }

// console.log(generatePaneer(10));
// console.log(generatePaneer(20));
// // For below the outcome will be consistent
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));

// 2.1 Impure Functions --> Some outsider is going to impact the quality and outcome of data
/* In JS you shouldn't try to create impure functions */
// let water = 1;
// const generateCurd = function (milk) {
//     return (milk - water) / 3;
// }

// console.log(generateCurd(10));
// water = 2;
// console.log(generateCurd(10));
// water = 3;
// console.log(generateCurd(10));

"use strict";

// 3. Immutability
const getTotalBillAmount = (items) => {
    // Below we are mutating data :-> I am modifying the original source inside the fucntion which ideally we shouldn't
    items[1] = 100; // mutated or modified the items[] element by refernce
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}

const bills = [100, 200, 100, 400];

// bills = []; // If i pass this as refernce : "TypeError: Assignment to constant variable."
console.log(getTotalBillAmount(bills)); // [...arr_name] and arr.slice() is are methods in ES6 to create copy of arr[] in JS
console.log(bills);