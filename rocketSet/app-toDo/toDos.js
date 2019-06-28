//acessa a div app e pega o elemento ul
var listElement = document.querySelector('#app ul');
//acessa a div app e pega o elemento ul
var inputElement = document.querySelector('#app input');
//acessa a div app e pega o elemento button
var buttonElement = document.querySelector('#app button');

//atribui para todos um array, se não retonar nada atribui um array vazio "[]"
var todos = JSON.parse(localStorage.getItem('List_todos')) || [];

function renderTodos(){
    
    listElement.innerHTML = '';//remova o conteúdo do ul 

    for(todo of todos){//percorre os elementos da lista
        
        var todoElement = document.createElement('li');//cria o atributo li        
        var todoText = document.createTextNode(todo);//cria um texto 
        todoElement.appendChild(todoText);//adiciona o texto no todoElement        
        
        //criação do botão excluir
        var linkElement = document.createElement('a');//cria o elemento a
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');//adiciona texto nele
        linkElement.appendChild(linkText);//adiciona o "Exlcuir" no list
    
        //deletar toDo
        var pos = todos.indexOf(todo);//atribui para var "pos" o index de cada elemento da lsita
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')');//atribui um onclick para o li com o método "deleteTodo()"

        
        todoElement.appendChild(linkElement);//coloca o "a href" dentro do li
        listElement.appendChild(todoElement);//coloca o li no listElement(ul)
     
    }

}   

renderTodos();

function addTodo(){
    
    var todoText = inputElement.value;//atribui o texto para a variável todoText
     
    todos.push(todoText);//adiciona na lista
    
    inputElement.value = '';//"limpa o inputElement"
    
    saveToStorage();
    renderTodos();//mostra na tela
}

function deleteTodo(position){

    todos.splice(position, 1);
    saveToStorage();
    renderTodos();
}

function saveToStorage(){

    //localStorage.setItem armazena os dados "chave e valor"
    //JSON.stringfy quebra a lista em strings
    localStorage.setItem('List_todos',JSON.stringify(todos));

}
buttonElement.onclick = addTodo;