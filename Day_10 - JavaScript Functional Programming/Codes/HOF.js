// 4. Higher Order Functions (HOF)
// HOF : Either it takes function as input OR returns function as O/P

// Three functions nested under each other
/* Ex_1 */
function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

// console.log(sum(1)(2)(3)); // 6

/* Ex:2 */
function multiply(x) {
    return function (y) {
        return x * y;
    }
}

// console.log(multiply(1)(2)); // 2

/* Ex:3 */
function total(x) {
    const totalWithY = function (y) {
        return x + y;
    }
    return totalWithY;
}

const r1 = total(2);
console.log(typeof r1);
const r2 = r1(3);
console.log(r2);