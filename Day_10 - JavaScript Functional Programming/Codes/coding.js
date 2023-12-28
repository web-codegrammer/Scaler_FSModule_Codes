const names = ['atul', 'kavya', 'sandhya'];

// O/P : ['ATUL', 'KAVYA', 'SANDHYA']

function convertToUpperCase(listOfNames) {
    // Code goes here
    const result = [];
    for (var i = 0; i < listOfNames.length; i++) {
        result.push(listOfNames[i].toUpperCase());
    }
    return result;
}

console.log(convertToUpperCase(names)); // New data
console.log(names); // Original data