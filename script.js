// Fungsi untuk menambahkan tugas
async function createTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    // Pastikan nama tugas dan deadline diisi
    if (taskName && taskDeadline) {
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: taskName, deadline: taskDeadline })
        });

        if (response.ok) {
            alert('Task created successfully!');
            displayTasks();
            document.getElementById('task-name').value = '';
            document.getElementById('task-deadline').value = '';
        }
    } else {
        alert('Please fill in both the task name and deadline.');
    }
}

// Fungsi untuk menampilkan daftar tugas
async function displayTasks() {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.textContent = `${task.name} - Due: ${task.deadline}`;
        taskList.appendChild(taskElement);
    });
}

// Panggil displayTasks saat halaman dimuat
window.onload = displayTasks;
