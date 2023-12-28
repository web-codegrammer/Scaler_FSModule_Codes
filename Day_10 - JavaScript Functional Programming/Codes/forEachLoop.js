/* 1. Using Simple for loop */
const getTotalBillAmount = (items) => {
    // Imperative way of coding : Here my implementation details are leaked
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}

const bills = [100, 200, 100, 400];

// console.log(getTotalBillAmount(bills)); // [...arr_name] and arr.slice() is are methods in ES6 to create copy of arr[] in JS
// console.log(bills);

/* 2. Using forEach */
const getTotalBillAmount1 = (items) => { // [100, 200, 100, 400]
    // Declarative way of coding : Here my implementation details aren't leaked
    let total = 0;
    items.forEach(function (item, idx) {
        // console.log(item, idx);
        total += item;
    })
    return total;
}

console.log(getTotalBillAmount1(bills));