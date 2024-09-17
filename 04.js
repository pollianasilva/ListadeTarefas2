//Manipulação de Arrays de Objetos com for of
/* 4. Iterando Sobre Arrays de Objetos 
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const pessoas = [
    { Nome: 'André', Idade: 28, Cidade: 'São Paulo, SP' },
    { Nome: 'Ana Clara', Idade: 34, Cidade: 'Rio de Janeiro, RJ' },
    { Nome: 'Alex', Idade: 23, Cidade: 'Belo Horizonte, MG' },
    { Nome: 'Amanda', Idade: 31, Cidade: 'Curitiba, PR' }
];

for (const pessoa of pessoas) {
    for (const propriedade in pessoa) {
        console.log(propriedade + ': ' + pessoa[propriedade]);
    }
    console.log(''); 
}