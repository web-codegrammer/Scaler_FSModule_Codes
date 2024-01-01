// ? --> quey param in API endpoint
// In below API we have 2 dynamic parameters
// Steps in order to get the data from server
// 1. On Submit get the location name or detail

// 2. Make API call to server to get the weather detail : https://api.weatherapi.com/v1/current.json?key=570f71705cb0413da62160736232812&q="New Delhi"&aqi=no

// 3. Get information/data from response json, display the data into DOM references/element.

// Get all my required references first
// I. input field reference
const inputRef = document.querySelector('.searchField');
// II. submit button reference
const buttonRef = document.querySelector('button[type="submit"]');
// III. Temprature field reference
const tempRef = document.querySelector('.weather .temp');
// IV. Location field reference
const locationRef = document.querySelector('.weather .time_location p');
// V. Timestamp field reference
const timeDateRef = document.querySelector('.weather .time_location span');
// VI. Weather condition text field reference
const conditionTextRef = document.querySelector('.weather .weather_condition span');
// VII. Weather condition Icon field reference
const conditionIconRef = document.querySelector('.weather .weather_condition p img');


// 1. On click get the location name
buttonRef.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputRef.value);
    fetchData(inputRef.value);
});

// In JS to get the data after hitting API endpoint we use method called 'fetch()'
// 2. Fetch Data by making API call

function fetchData(location) {
    // fetch() is built in browser function to make API call
    fetch(`https://api.weatherapi.com/v1/current.json?key=570f71705cb0413da62160736232812&q=${location}&aqi=no`)
        // Parse the stringified data recieved from server
        .then(function (res) {
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
            return res.json();
        })
        // Then use/consume that data --> Print that data
        .then((data) => updateWeatherDetails(data))
        .catch(function (e) {
            console.log(e);
            window.alert("Inavalid location. Please try again.");
        });
}

// Extract the data from API call using references and update it using innerText
function updateWeatherDetails(obj) {
    // Get the temprature
    const tempC = obj.current.temp_c;
    // Weather Condition
    const conditionText = obj.current.condition.text;
    // Weather condition Icon
    const conditionIcon = obj.current.condition.icon;
    // Get the Location Name
    const locationName = obj.location.name;
    //Get the TimeStamp
    const dateTime = obj.location.localtime;

    // Update the refrences
    tempRef.innerText = tempC;
    conditionTextRef.innerText = conditionText;
    // for some reason the default is file:// and you are looking for https:// so append string "https" in beginning to rectify this
    conditionIconRef.src = "https:" + conditionIcon;
    locationRef.innerText = locationName;
    timeDateRef.innerText = dateTime;
}

/*
String literal Theory part
const pathName = "cart";
const dynamicURL = "https://example.com/cart" + pathName;

Final DynamicURL --> dynamicURL = "https://example.com/cart"

*** Using String literal
const dynamicURL = `https://example.com/${pathName}`;
Final DynamicURL --> dynamicURL = "https://example.com/cart"
*/