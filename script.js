// Get elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Event listener for adding a task
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create the list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteTask);

    // Add a click event to toggle the "done" state
    li.addEventListener('click', toggleTaskDone);

    // Append the delete button and the task item to the list
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
    const task = event.target.parentElement;
    task.remove();
}

// Function to toggle the "done" state of a task
function toggleTaskDone(event) {
    const task = event.target;
    task.classList.toggle('done');
}
