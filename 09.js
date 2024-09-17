//Manipulação de Arrays de Objetos com forEach
/* 9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

const clientes = [
    { nome: 'Patricia', idade: 25, cidade: 'Acre' },
    { nome: 'Gustavo', idade: 18, cidade: 'Rio de Janeiro' },
    { nome: 'Joana', idade: 38, cidade: 'Belo Horizonte' },
    { nome: 'Pedro', idade: 40, cidade: 'Curitiba' },
    { nome: 'Marcelo', idade: 50, cidade: 'Porto Alegre' },
    { nome: 'Afonso', idade: 32, cidade: 'Palmas' }
];

let contador = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++; 
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contador}`);