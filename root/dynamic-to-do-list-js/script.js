document.addEventListener('DOMContentLoaded', function() {
    // 1. Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Load saved tasks when page loads
    loadTasks();

    // 3. Main addTask function with all required features
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Input validation with alert as specified
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create and append task element
        createTaskElement(taskText);
        
        // Clear input field
        taskInput.value = '';
        
        // Save to localStorage
        saveTasks();
    }

    // 4. Helper function to create task elements
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button with exact specifications
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Removal functionality that updates localStorage
        removeBtn.onclick = function() {
            li.remove();
            saveTasks();
        };
        
        // Append elements exactly as required
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // 5. Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        // Get all current tasks
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            tasks.push(taskItem.textContent.replace('Remove', '').trim());
        });
        // Store in localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // 6. Load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            JSON.parse(savedTasks).forEach(task => {
                if (task.trim() !== '') {
                    createTaskElement(task);
                }
            });
        }
    }

    // 7. Event listeners exactly as specified
    addButton.addEventListener('click', addTask);
    
    // Enter key functionality
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
