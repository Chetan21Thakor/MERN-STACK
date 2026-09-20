let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("taskList");
let taskAddBtn = document.getElementById("taskAddBtn");
let taskCount = document.getElementById("taskCount");
let completedTaskBtn = document.getElementById("completedTaskBtn");
let completedTaskList = document.getElementById("completedTaskList");
let todoApp = document.getElementById("todoApp");

let listOfCompletedTask = [];
let count = 0;

taskAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let task = taskInput.value;
    let li = document.createElement("li");
    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.innerText = "❌";
    let taskCompleteBtn = document.createElement("button");
    taskCompleteBtn.innerText = "✅";
    taskCompleteBtn.className = "complete-task-btn";
    removeTaskBtn.className = "remove-task-btn";

    removeTaskBtn.addEventListener("click", () => {
        li.remove();
        taskCount.innerText = `${--count}`;
    });


    taskCompleteBtn.addEventListener("click", () => {
        let completedTask = li.firstChild.textContent;
        listOfCompletedTask.push(completedTask);
        li.remove();
        taskCount.innerText = `${--count}`;
    });

    if (task) {
        li.innerText = `${++count}. ${task}`;
        li.append(removeTaskBtn);
        li.append(taskCompleteBtn);
        taskList.append(li);
        taskCount.innerText = `${count}`;
        taskInput.value = "";
    } else {
        alert("Enter Task First...");
    }
});

completedTaskBtn.addEventListener("click", () => {
    completedTaskList.replaceChildren();

    for (let task of listOfCompletedTask) {
        let li = document.createElement("li");
        li.innerText = task;
        completedTaskList.append(li);
    }
    completedTaskList.hidden = !completedTaskList.hidden;
});



