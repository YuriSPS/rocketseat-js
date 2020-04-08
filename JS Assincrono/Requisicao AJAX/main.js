//REQUISISAO AJAX
//a classe XMLHTTPREQUEST QUEM IRA NOS DAR ACESSAR A FUNCIONALIDADE DO AJAX PARA RECUPERAR INFO DE ALGUM SERVIDOR
var xhr = new XMLHttpRequest();

//buscando url para buscar uma informacao, no qual 1.o o parametro e o metodo e 2.o parametro e o url 
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

