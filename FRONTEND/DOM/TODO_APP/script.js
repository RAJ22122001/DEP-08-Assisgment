document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');

    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value.trim();

    if (taskText) {
        addTask(taskText, dueDate, priority, category);
        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
        categoryInput.value = '';
    }
});

function addTask(taskText, dueDate, priority, category) {
    const taskList = document.getElementById('task-list');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${taskText}</td>
        <td>${dueDate}</td>
        <td>${priority}</td>
        <td>${category}</td>
        <td class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    newRow.querySelector('.edit').addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null) {
            newRow.cells[0].textContent = newTaskText;
        }
    });

    newRow.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(newRow);
    });

    taskList.appendChild(newRow);
}