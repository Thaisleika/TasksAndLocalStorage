import { tasksManager } from './tasksManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');


  function TaskPage() {
    const tasks = tasksManager.currentyTasks();

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
          li.className = 'task-item';
          li.innerHTML = `<span>${task}</span> <button class="remove-btn"> del </button>`
          ;

      li.addEventListener('click', () => {
        li.classList.toggle('done');
      });

      li.children[1].addEventListener('click', () => {
        tasksManager.removeTask(index)
        TaskPage()
      });

      taskList.appendChild(li);
    });
  }

  function validateTaskInput() {
    const task = taskInput.value.trim();
    if (task) {
      tasksManager.addTask(task);
      taskInput.value = '';
      TaskPage();
    }
  }

  addTaskButton.addEventListener('click', validateTaskInput);

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      validateTaskInput();
    }
  });

  TaskPage();
});
