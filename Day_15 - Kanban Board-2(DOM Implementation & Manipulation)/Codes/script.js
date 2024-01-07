const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');
const rightCategorySelection = document.querySelectorAll('.right-section .category');
const taskListDeleteRef = document.querySelectorAll('.task-wrapper .task .task-delete-icon');

// Add eventListener to addRef
addRef.addEventListener('click', function (e) {
    togglemodal();
});

function defaultCategorySelection() {
    // Before i do default selection i need to remove all the selections also
    removeAllCategorySelection();
    const firstCategory = document.querySelector('.right-section .category.p1');
    firstCategory.classList.add('selected');
}

function togglemodal() {
    const isHidden = modalRef.classList.contains('hide');
    // if modal is hidden make it visible by removing 'hide' class
    if (isHidden) {
        modalRef.classList.remove('hide');

    } else {
        defaultCategorySelection();
        modalRef.classList.add('hide');
    }
}

const tasks = [];

textareaRef.addEventListener('keydown', function (e) { // Should not use 'keyup' here
    if (e.key === "Enter") {
        const rightSelectedCategory = document.querySelector('.right-section .category.selected');
        const selectedCategoryName = rightSelectedCategory.getAttribute('data-category');
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: selectedCategoryName,
        };
        tasks.push(newTask);
        // console.log(tasks);
        // clear the text area before entering new task
        e.target.value = "";
        togglemodal();
        createTask(newTask);
    }
});

function createTask(task) {
    const taskRef = document.createElement('div');
    // className is keyword here
    taskRef.className = 'task';
    taskRef.innerHTML = `
        <div class="task-category ${task.category}"></div>
        <div class="task-id">${task.id}</div>
        <div class="task-title">${task.title}</div>
        <div class="task-delete-icon"><i class="fa-solid fa-trash"></i></div>
        `;

    taskWrapperRef.appendChild(taskRef);
    /* Delete feature functionality */
    // Add eventListener at moment when i inserted/creating the items
    const deleteIconRef = taskRef.querySelector('.task-delete-icon .fa-trash');
    // We added a listener only on the item
    // deleteIconRef.addEventListener('click', function (e) {
    //     // Get the parent of target --> Reverse of querySelector()
    //     const selectedTask = e.target.closest('.task');
    //     selectedTask.remove();
    //     // After removing from DOM delete task from data
    //     deleteTaskFromData(task.id);
    // });
}

rightCategorySelection.forEach(function (categoryRef) {
    categoryRef.addEventListener('click', function (e) {
        // we are able to get whichever item we clicked
        // console.log(e.target);
        // reomve selection from all of them
        removeAllCategorySelection();
        // then add only to selected one
        e.target.classList.add("selected");
    })
})

function removeAllCategorySelection() {
    rightCategorySelection.forEach(function (categoryRef) {
        categoryRef.classList.remove('selected');
    })
}

// By doing below now our data is in sync with DOM
function deleteTaskFromData(taskId) {
    const selectedTaskIdx = tasks.findIndex((task) => task.id === taskId);
    // Below means remove that task from tasks[]
    tasks.splice(selectedTaskIdx, 1);
}

// Adding eventListener at ParentLevel
taskWrapperRef.addEventListener('click', function (e) {
    console.log(e.target);
    // TODO: Add logic to identify delete icon and remove respective task
})