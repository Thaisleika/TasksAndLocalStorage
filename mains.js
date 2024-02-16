import { tasksManager } from './tasksManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function TaskPage() {
    const tasks = tasksManager.getTasks();
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
      listItem.innerHTML = `
        <p>${task}</p>
        <p class='delete-btn'>X</p>
      `;

      listItem.addEventListener('click', () => {
        listItem.classList.toggle('done');
      });

      listItem.children[1].addEventListener('click', () => {
        tasksManager.removeTask(index);
        TaskPage();
      });

      taskList.appendChild(listItem);
    });
  }

  function validateTaskInput() {
    const task = taskInput.value;
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
