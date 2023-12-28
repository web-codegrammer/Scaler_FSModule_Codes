const names = ['atul', 'kavya', 'sandhya'];

// Output : ['ATUL', 'KAVYA', 'SANDHYA']

function convertToUpperCase(listOfNames) {
    // Steps folllowed
    // 1. Create a new array
    // 2. Loop through arr
    // 3. Push data to array
    // 4. Return the new array

    /* I. Using Imperative way */
    // const result = [];
    // for (let i = 0; i < listOfNames.length; i++) {
    //     result.push(listOfNames[i].toUpperCase());
    // }
    // return result;

    /* II. Declarative way using forEach */
    // const result = [];
    // listOfNames.forEach(function (name, idx) {
    //     result.push(name.toUpperCase());
    // })
    // return result;

    /* III. Declarative way using 'Map' */
    // Map is by default going to return array of same size as of input
    // It doesn't mutate your original data
    const result = listOfNames.map(function (name, idx) {
        return name.toUpperCase();
    })
    return result;
}

console.log(convertToUpperCase(names));