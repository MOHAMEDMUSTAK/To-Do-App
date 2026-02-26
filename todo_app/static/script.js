document.addEventListener("DOMContentLoaded", loadTasks);
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.title}</span>
            <span class="task-date">${task.date}</span>
            <div class="task-actions">
                <button class="complete" onclick="completeTask(${index})">✔</button>
                <button class="delete" onclick="deleteTask(${index})">❌</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}
function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let taskDate = document.getElementById("taskDate").value;
    if (!taskInput.trim() || !taskDate) return alert("Enter task and date!");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ title: taskInput, date: taskDate, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));   
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    loadTasks();
}

function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index].completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}







