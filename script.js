document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const task = taskInput.value;

    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
