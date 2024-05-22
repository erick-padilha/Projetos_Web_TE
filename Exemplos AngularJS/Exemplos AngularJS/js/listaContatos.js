//criando um modo de angular pra preencher mais tarde - lista:
angular.module("contatos", []); 
//criando um controller para o módulo para chamar no body epegar os elementos:
angular.module("contatos").controller("contatosController", function ($scope){ 
	
	//Criamos uma variável no scopo para utilizarmos no body:
	$scope.titulo = "Contatos";
	
	$scope.titulo2 = "Insira um Novo Contato";
	
	$scope.contatos = [
		{nome: "Aline", telefone: "99807-1409", email: "aline@teste.com.br"},
		{nome: "Anderson", telefone: "99807-1407", email: "ander@teste.com.br"},
		{nome: "Eduarda", telefone: "99999-9999", email: "duda@teste.com.br"	}	
	];
	
	$scope.adicionarContato = function (contato) {
		
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	};	
	
});