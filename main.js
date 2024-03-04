import { tasksManager } from './tasksManager.js';

/**
   * @method getElementById busca o elemento pelo id indicado no html.
   * @method addEventListener escuta o elemento que foi passado para ele
   no caso o conteudo da DOM, qdo ha uma alteração ele percebe e renderiza.
   * @var document.addEventListener guarda toda essa função de carregamento da pagina.
  * @var task recebe a lista atual contina na @function currentyTasks do taskManager.
  * 
   */

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const dateTaskInput = document.getElementById('dateTaskInput');
  const taskList = document.getElementById('taskList');

  function TaskPage() {
    const tasks = tasksManager.currentyTasks();

    taskList.innerHTML = '';

    tasks.forEach((task) => {
      const li = document.createElement('li');
          li.className = 'task-item';
          li.innerHTML = `<span class="bg-task">${task}</span> <button class="remove-btn"> delete </button>`
          ;

      li.addEventListener('click', () =>
      li.classList.addTask())

      li.addEventListener('click', () => {
        li.classList.toggle('done');
      });

      li.children[1].addEventListener('click', () => {
        tasksManager.removeTask()
        TaskPage()
      });

      taskList.appendChild(li);
    });
  }

  function validateTaskInput() {
    const task = taskInput.value.trim();
    const date = dateTaskInput.value.trim()
    if (task && date) {
      tasksManager.addTask(task);
      tasksManager.addTask(date)
      taskInput.value = '';
      dateTaskInput.value ='';
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
