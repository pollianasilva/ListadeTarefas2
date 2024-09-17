//Manipulação de Objetos
/*1. Acessando Propriedades de Objetos 
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/ 

const prompt = require('prompt-sync')();

let carro = {
    marca: prompt('Digite a marca do carro: '),
    modelo: prompt('Digite o modelo do carro: '),
    ano: prompt ('Digite o ano do carro: '),
    cor: prompt('Digite a cor do carro: ')
};

console.log('\nDados:');
for (let objeto in carro) {
    console.log(objeto + ': ' + carro[objeto]);
}

