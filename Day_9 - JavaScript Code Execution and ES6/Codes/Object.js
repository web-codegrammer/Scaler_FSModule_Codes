var marriageBioData = {
    name: 'Atul',
    salary: 1000000,
    address: {
        city: 'Banglore',
        pincode: 560067
    },
    skills: ["HTML", "JS", "CSS"],
    hello: function () {
        console.log('hello uncle!')
    }
};

// Name
// console.log(marriageBioData.name);
// console.log(marriageBioData['name']);
// Salary
// console.log(marriageBioData.salary);
// console.log(marriageBioData['salary']);
// City
// console.log(marriageBioData.address.city);
// console.log(marriageBioData['address']['city']);
// Pincode
// console.log(marriageBioData['address']['pincode']);
// Skills
// console.log(marriageBioData.skills[1]);

// Accessing function
// console.log(marriageBioData.hello); // It will print only function definition
// console.log(marriageBioData.hello()); // It will execute the fucntion

// Updating an Object
marriageBioData.name = "Prasad";
marriageBioData['address']['pincode'] = 110003;
// Delete key from object
delete marriageBioData.salary;
// console.log(marriageBioData);

// Accessing all keys and values of object
// console.log(Object.keys(marriageBioData));
console.log(Object.values(marriageBioData));