import { storage } from './storage.js';

export const tasksManager = {
 tasks: storage.getTasks(),

 addtask: function(task) {
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

/*
este arquivo é quem manipula as açoes das tasks
-a propriedade tasks chama a funcao getTasks que esta dentro do storage(assim ele 
 recebe as taks do localStorage),
-a prop add task é uma funcao que recebe task como argumento e adiciona(push) essa task e a
salva usando a funcao saveTasks do storage;
-a prop removeTask é uma funcao que recebe index como argumento pois sera usado para
poder usa lo para deletar(splice) e novamente seta/salva as tasks da localstorage com o novo valor
-currentyTasks recebe uma funçao que retorna um array de tasks atualizada
*/ 