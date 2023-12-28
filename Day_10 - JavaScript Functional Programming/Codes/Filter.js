const names = ['atul', 'kavya', 'sandhya'];

function filterNameWithAChar(listOfNames, ch) { // I can't use 'Map' here
    // Steps folllowed
    // 1. Create a new array
    // 2. Loop through arr
    // 3. Check if word contains given character & push to new array
    // 4. Return the new array

    // const result = [];

    // listOfNames.forEach(function (item, idx) {
    //     if (item.includes(ch)) {
    //         result.push(item);
    //     }
    // });
    // return result;

    /* Using filter() method */
    const result = listOfNames.filter(function (item, idx) { // filter will always gives you a array[]
        return item.includes(ch);
    })
    return result;
}

console.log(filterNameWithAChar(names, 'y')); // An array[] with filtered names