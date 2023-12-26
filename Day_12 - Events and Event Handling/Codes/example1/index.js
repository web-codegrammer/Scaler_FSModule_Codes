// 2 ways to add a event listner
/* 1. Using function() --> Directly inline*/
// function handleSubmit() {
//     console.log("Hi");
// }

/* 2 Add a Listner --> Using reference */ // --> This is heavily used everywhere
// const btnRef = document.querySelector('button');

// Single Click event
// btnRef.addEventListener('click', function (e) {
//     // Log the event
//     console.log(e);
//     console.log('Single Click');
// })

// Double Click event
// btnRef.addEventListener('dblclick', function (e) { // Doubleclick event --> dblclick()
//     // Log the event
//     console.log(e);
//     console.log('Double Click');
// })


const btnRef = document.querySelector('button');

btnRef.addEventListener('click', function (event) {
    event.preventDefault(); // To prevent default behaviour 'submit' of form
    const usernameRef = document.getElementById('username');
    const passwordRef = document.getElementById('password');
    // If you are dealing with form you have to extract the value using 'value' and not innerText
    console.log(usernameRef.value);
    console.log(passwordRef.value);
})