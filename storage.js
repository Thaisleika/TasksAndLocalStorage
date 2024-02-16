export const storage = {
 getTasks: function() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks || [];
 },
 saveTasks: function(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
 }
}

/*
aqui definimos as responsabilidade/funcoes de salvar e buscar as tasks
na localStorage no nosso browser.
getTasks é uma funcao que ira receber as taks vindas da localStorage e transforma-las em objeto JS.
saveTasks é uma funcao que recebe como parametro as tasks para funcionar e seta/salva os novos valores gravados 
na localStorage, alem de transforma-los de objeto JS para Json.
o metodo JSON.stringify serve para converter dados/objetos JS em '{string Json}', 
fazendo assim com que o browser entenda esses dados/objetos.
O metodo JSON.parse serve para fazer o inverso, pega o dado/objeto que esta em '{Json string}' e o transforma em objeto JS.
*/