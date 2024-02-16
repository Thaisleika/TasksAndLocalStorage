import { tasksManager } from './tasksManager';

document.addEventListener('DOMContentLoaded', () => {
 const addTaskButton = document.getElementById('addTaskButton');
 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');
 const removeTaskButton = document.getElementById('removeTaskButton');

  function renderTasks() {
     const tasks = tasksManager.getTasks();
      taskList.innerHTML = " ";
      
      tasks.forEach((task, index) => {
       const list = document.createElement('list');
       list.className = 'task-item';
       list.innerHTML = <p>${task}</p>
       list.innerHTML = <p class='removetaskButton'> X </p>

       list.addEventListener('click', () => {
        list.classList.toggle('done');
       })

       list.children[1].addEventListener('click', () =>{
        tasksManager.removeTask(index);
        renderTasks();
       });

       taskList.appendChild(list);
      })
   }

   addTaskButton.addEventListener('click', validateTaskInput)

}
)