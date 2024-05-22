//criando um modo de angular pra preencher mais tarde - lista:
angular.module("contatos", []); 
//criando um controller para o módulo para chamar no body epegar os elementos:
angular.module("contatos").controller("Lista", function ($scope){ 
	
	$scope.titulo = "Contatos";

	$scope.contatos = [
		{
			name: 'Aline Zenker',
			phone: '9898-9999',
			email: 'aline@gmail.com'
		},
		{
			name: 'Anderson Zenker',
			phone: '9898-8888',
			email: 'anderson@gmail.com'
		},
		{
			name: 'Eduarda Zenker',
			phone: '9999-8787',
			email: 'duda@gmail.com'
		}
	];
});