function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    var deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    taskInput.value = "";
}
