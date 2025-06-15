document.addEventListener('DOMContentLoaded', function() {
    // 1. Select all required DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Create the addTask function
    function addTask() {
        // Get and clean the task text
        const taskText = taskInput.value.trim();
        
        // Check for empty input
        if (taskText === '') {
            alert('Please enter a task');
            return; // Exit if empty
        }

        // 3. Create task elements
        const li = document.createElement('li'); // Create list item
        li.textContent = taskText; // Set task text
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // 4. Add removal functionality
        removeBtn.onclick = function() {
            li.remove(); // Remove the task when clicked
        };
        
        // 5. Put everything together
        li.appendChild(removeBtn); // Add button to task
        taskList.appendChild(li); // Add task to list
        
        // 6. Clear the input field
        taskInput.value = '';
    }

    // 7. Add event listeners
    addButton.addEventListener('click', addTask); // Click add button
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Press Enter to add
        }
    });
});
