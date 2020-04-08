var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input'); //ou poderia utilizar getElementsByTagName('input')
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//FUNCAO QUE O DIEGO DA ROCKETSEAT FEZ, UTILIZOU UM FOR EXPECIFICO PARA ARRAYS
    //EXPLICANDO O FOR ABAIXO, O TODOS SE TRATA DA NOSSA VARIAVEL CRIADO ACIMA, LOGO O FOR IRA PERCORRER TODO NOSSO ARRAY E,
    //IRA ARMAZENAR NA VARIAVEL TODO.

function renderTodos(){
    //tudo que estiver dentro do 'ul' vai ser vazio(nulo) ou seja, estamo removendo todo conteudo contido no listElement
    listElement.innerHTML = '';


    

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        //armazenando o todoText dentro da variavel todoElement
        todoElement.appendChild(todoText);
        //armazenando o todoElement dentro do listElement que ira criar as lis com os arrays sendo o conteudo de cada linha
        listElement.appendChild(todoElement);


        //criando link para exclusao
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        listElement.appendChild(linkElement); 

        //ira procurar no array o indice que esta atualmente rolando no programa e retonrar pra variavel todo
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    }
}

//chamando a funcao para exibir na tela
renderTodos();

//funcao que ira pegar o valor digitado no input e colocar no array e exibir na tela
function addTodo(){
    var todoText = inputElement.value;
    //push e uma funcao que adiciona um novo elemento no ultimo lugar do array
    todos.push(todoText);
    inputElement.value = '';
    //chamando a funcao novamente para renderizar uma nova lista de todos com o novo elemento
    renderTodos();
    saveToStorage();
}

//chamando a funcao addTodo apos clicar no botao Adicionar
btnElement.onclick = function(){
    addTodo();
}

function deleteTodo(pos){
    //splice remove uma quantidade de itens do array baseao na posicao que passarmos
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//funcao que ira armazenar dados locais

function saveToStorage(){
    //convertendo o nosso vetor(todos) em string para salvar localmente atraves do localStorage
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

