document.addEventListener('DOMContentLoaded', function() {
    // 1. Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Main addTask function with exactly required features
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Required input validation with alert
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create task elements exactly as specified
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Required removal functionality
        removeBtn.onclick = function() {
            li.remove();
        };
        
        // Append elements exactly as required
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear input field as specified
        taskInput.value = '';
    }

    // 3. Event listeners exactly as specified
    addButton.addEventListener('click', addTask);
    
    // Required Enter key functionality
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
