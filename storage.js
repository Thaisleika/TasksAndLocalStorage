export const storage = {
   /**
   @description storage: aqui definimos as responsabilidade/funcoes de salvar e buscar as tasks
    na localStorage no nosso browser.
   
   @function saveTasks recebe como parametro as tasks pois usa-o para setar/salvar os novas tasks gravados 
    na localStorage, alem de transforma-los de objeto JS(estao em string) para JSON 
    @method JSON.stringify serve para 
    converter dados/objetos JS em '{string Json}',fazendo assim com que o browser entenda esses dados/objetos.

   @function getTasks recebe as tasks vindas da localStorage (que estao em JSON) e transforma-las em objeto JS (string).
    @method JSON.parse serve para fazer o inverso, pega o dado/objeto que esta em '{Json string}' e o transforma em objeto JS.
    */

 getTasks: function() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks || [];
 },
 
 saveTasks: function(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
 }
}
