// Get the refrence of 'ul list'
const ulListRef = document.querySelector('.todo-list');

// Function to create new 'liref' adds the text in it and return it at end
function CreateATodoRef(text, completed) {
    const liRef = document.createElement('li');
    // We have to add HTML to leverage checkboxes along with 'li'
    // 'checked' here is attribute due to which all checkboxes are colored blue
    liRef.innerHTML = `
        <input type = "checkbox" ${completed ? "checked" : ""}/>
        <span>${text}</span>
    `;
    return liRef;
}

// function to create/render multiple 'li's'
function renderLiList(todoList) {
    // Iterate over todoList
    todoList.forEach(item => {
        console.log(item.todo);
        // Create new Li from 'todo' extracted above
        const newLi = CreateATodoRef(item.todo, item.completed);
        // Append newly create 'li' to ulRef
        ulListRef.appendChild(newLi);
    })
}

// Fetching the data from API and then rendering it to display to UI
function fetchTodos() {
    fetch("https://dummyjson.com/todos")
        // Convert/parse to json format 
        .then(res => res.json())
        // Once you get the json data you will read that data and do some activity
        .then(data => renderLiList(data.todos))
        .catch(e => console.log(e));
}

// Calling the function on load itself as someone needs to initiate it
// When index.js loads this function will trigger first
// So flow of my program starts from here
fetchTodos();