// Variáveis
let nome = "João";
const idade = 30;

// Funções
function saudacao() {
    return "Olá, mundo!";
}

// Eventos
document.addEventListener("DOMContentLoaded", function() {
    console.log("O DOM foi completamente carregado");
});

// Arrays
let numeros = [1, 2, 3, 4, 5];

// Objetos
let pessoa = {
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
};

// Condicionais
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Loops
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Operadores
let x = 5;
let y = 10;
let resultado = x + y;

// Strings
let mensagem = "Olá, mundo!";

// Escopos
{
    let escopoLocal = "Esta variável só é visível dentro deste bloco";
    console.log(escopoLocal);
}

// DOM
let titulo = document.querySelector("h1");
titulo.textContent = "Novo Título";

// Eventos de Tempo
setTimeout(function() {
    console.log("Este console.log será exibido após 2 segundos.");
}, 2000);
