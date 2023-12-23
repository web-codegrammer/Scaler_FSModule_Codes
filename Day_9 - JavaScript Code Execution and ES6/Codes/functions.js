/* function in JS */
// function sum() {
//     var x = 0;
//     var y = 10;
//     console.log(x + y); // function is not returing anything so o/p = 'undefined'
//     return x + y;
// }

// console.log(sum());


/*Argument (Or Parameter) passed to function in JS*/
// function multiply(x, y) {
//     return x * y;
//     return "Won't return any value";
// }
// console.log(multiply(2, 5));

/* Function to print sum of array in JS */
// function total(arr) { // Objects/arrays are always passed as reference
//     arr[2] = 30; // modification being done in original source
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// var arr1 = [1, 2, 3, 4];
// console.log(total(arr1));
// console.log(arr1);


/* 1. Named function */

// console.log(multiply(2, 5));

// function multiply(x, y) { // function declaration moves to the top
//     return x * y;
// }


/* 2. Anonymous function */
// var multiply; // Function declaration along with variable moves(gets hoisted at top) current value is 'undefined'
// console.log(multiply(2, 5)); // We get TypeError
// var multiply = function (x, y) { // X and Y are areguments here and don't need to be declared
//     return x * y;
// }


/* Arrow function in JS */
// var multiply = (x, y) => x * y; // ANything on RHS the O/p of this going to be returned to function

// /* Arrow function in JS for multiple lines*/
// var multiply = (x, y) => {
//     return x * y;
// }
// console.log(multiply(2, 5));

/* Arguments is JS */
function multiply(x, y, z, xx, yy) {
    // There is special datatype 'Object' of this argument but that is not an array
    // We can access the argument inside the function only not 'outside'
    console.log(typeof arguments);
    var result = 1;
    for (var i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
    // return x * y * z * xx * yy;
}

console.log(multiply(1, 2, 3, 4, 5));