import { tasksManager } from './tasksManager.js';

document.addEventListener('DOMContentLoaded', () => {
 const addTaskButton = document.getElementById('addTaskButton');
 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');

  function TaskPage() {
     const tasks = tasksManager.getTasks();
      taskList.innerHTML = "";
      
      tasks.forEach((task, index) => {
       const list = document.createElement('li');
       list.className = 'task-item';
       list.innerHTML = `<p>${task}</p> <p class='delete-btn'> X </p>`;

       list.addEventListener('click', () => {
        list.classList.toggle('done');
       });

       list.children[1].addEventListener('click', () =>{
        tasksManager.removeTask(index);
        TaskPage();
       });

       taskList.appendChild(list);
      })
   }
   function validateTaskInput() {
      const task = taskInput.value;
      if (task) {
         tasksManager.addtask(task);
         taskInput.value= '';
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