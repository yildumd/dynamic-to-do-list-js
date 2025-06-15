document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage when page loads
    loadTasks();

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create new task item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            li.remove();
            saveTasks();
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
        
        // Save tasks to localStorage
        saveTasks();
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(function(taskLi) {
            tasks.push(taskLi.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(function(taskText) {
                if (taskText.trim() !== '') {
                    const li = document.createElement('li');
                    li.textContent = taskText;
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.textContent = 'Remove';
                    removeBtn.className = 'remove-btn';
                    removeBtn.onclick = function() {
                        li.remove();
                        saveTasks();
                    };
                    
                    li.appendChild(removeBtn);
                    taskList.appendChild(li);
                }
            });
        }
    }
});
