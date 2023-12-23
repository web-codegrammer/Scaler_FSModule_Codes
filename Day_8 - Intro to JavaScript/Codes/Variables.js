console.log('1.');
console.log('2.');
console.log('3.');
console.log('4.');
// assigning a value to variable 'a'
var a = 10;
console.log('a --- ', a);
console.log('5.');
console.log('6.');
console.log('7.');

var b = 5;
var c = a + b;
console.log('a,b,c > ', a, b, c);

// Old Code
console.log(d);
var d = 10;

// New code in Execution context
// Any variable that you have in JS file that get hoisted(moved) to top of fucntion
var d;
console.log(d);
d = 10;
console.log(d);

// function in JS
function sum() {
    console.log(e);
    var e = 10;
}

// Question with old code
console.log(e, f, g); // 1.
var e = 10;
console.log(e, f, g); // 2.
var f;
console.log(e, f, g); // 3.
f = 15;
console.log(e, f, g); // 4.
var g = 20;
console.log(e, f, g); // 5.

// New code of above for finding out answers
var e, f, g; // Hoisting of variables in JS
console.log(e, f, g); // 1 --> u, u, u

e = 10; // initialization remains same i.e stay at original position
console.log(e, f, g); // 2 --> 10, u, u
console.log(e, f, g); // 3 --> 10, u, u
f = 15;
console.log(e, f, g); // 4 --> 10, 15, u
g = 20;
console.log(e, f, g); // 5 --> 10, 15, 20

console.log('1');
console.log('2');
console.log('3');
console.log('h > ', h); // Can't access 'h' before its initialization
let h = 10; // There is no hoisting that had happened
console.log(h);
h = 20;
console.log(h);

/* Block Scope */
{
    let j = 10; // Block scoped
}

console.log(j);

/* Functional scope */
function abc() {
    var k = 15;
}

console.log(k);

const productDetails = {
    name: "Chana Dal",
    price: 137,
    isSponsored: true,
    weights: ["500g", "150g"]
}

console.log(productDetails);