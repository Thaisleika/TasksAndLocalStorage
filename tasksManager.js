import { storage } from './storage.js';
/**
 @description: taskManager: é o  arquivo que manipula as açoes das tasks
 @property tasks: recebe a função getTask que veio do import da storage. Assim temos as tasks dentro do tasksManager
 @property addTask recebe uma funcao que tem task como argumento e adiciona(push) essa task e a
salva usando a @function saveTasks do storage;
@property removeTask guarda uma funcao que tem index como argumento pois sera usado para
poder usa lo para deletar(splice) e novamente seta/salva as tasks da localstorage com o novo valor
@property currentyTasks guarda uma funçao que retorna um array de tasks atualizada
 */

export const tasksManager = {
  tasks: storage.getTasks(), 
  
  addTask: function(task) { 
    this.tasks.push(task);
    storage.saveTasks(this.tasks); 
  },

  removeTask: function(index) {
    this.tasks.splice(index, 1);
    storage.saveTasks(this.tasks);
  },

  currentyTasks: function() {
    return this.tasks;
  }
};


