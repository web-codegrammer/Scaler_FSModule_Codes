const bills = [100, 200, 100, 400];

const getTotalBillAmount1 = (items) => { // [100, 200, 100, 400]
    // Steps included
    // 1. Initialize with default value
    // 2. Loop through array
    // 3. Add item to accumulative value
    // 4. Return accumulative value
    let total = 0;
    items.forEach(function (item, idx) {
        total += item;
    })
    return total;

    // Declarative way
    // const total = items.reduce(function (acc, item) { // {accumulator, item}
    // acc += item;
    // return acc;
    // }, 0); // 0 is initial value here
    // return total;
    // }

    // console.log(getTotalBillAmount1(bills));

    // Input
    const data = [['name', 'Rajeev'], ['city', 'Banglore'], ['age', 20]];

    // OUTPUT : {
    // name: 'Rajeev',
    // city: 'Banglore',
    // age: 20,
    // };

    // Use : Reduce

    /* Solution using Reduce */

    function convertInToObj(arr) {
        return arr.reduce(function (acc, item) {
            // Code goes here
            const key = item[0];
            const val = item[1];
            // Below i am adding dynamic key to my object 'acc'
            // Here we are not harcdcoding the 'key'
            acc[key] = val;
            return acc; // final o/p is in object form
        }, {}); // initial value is empty object '{}' here
    }

    console.log(convertInToObj(data));