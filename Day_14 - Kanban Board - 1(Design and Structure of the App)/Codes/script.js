const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');
const taskCategorySelectionRef = document.querySelector('.right-section .category');

// Add eventListener to addRef
addRef.addEventListener('click', function (e) {
    togglemodal();
});

function togglemodal() {
    const isHidden = modalRef.classList.contains('hide');
    // if modal is hidden make it visible by removing 'hide' class
    if (isHidden) {
        modalRef.classList.remove('hide');
    } else {
        modalRef.classList.add('hide');
    }
}

const tasks = [];

textareaRef.addEventListener('keydown', function (e) { // Should not use 'keyup' here
    if (e.key === "Enter") {
        console.log("Add Task", e.target.value);
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: "p1",
        };
        tasks.push(newTask);
        console.log(tasks);
        // clear the text area before entering new task
        e.target.value = "";
        togglemodal();
        createTask(newTask);
    }
});

function createTask(task) {
    const taskRef = document.createElement('div');
    taskRef.className = 'task';
    taskRef.innerHTML = `
        <div class="task-category ${task.category}"></div>
        <div class="task-id">${task.id}</div>
        <div class="task-title">${task.title}</div>
        `;

    taskWrapperRef.appendChild(taskRef);
}