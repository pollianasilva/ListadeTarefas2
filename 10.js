//Combinação de Estruturas
/* 10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

const vendas = [
    { produto: 'Feijão', quantidade: 50, valor: 10.00 },
    { produto: 'Arroz', quantidade: 30, valor: 7.50 },
    { produto: 'Macarrão', quantidade: 25, valor: 2 },
    { produto: 'Extrato de Tomate', quantidade: 40, valor: 3 }
];

let valorTotal = 0;

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor; 
});

console.log(`Valor total das vendas: R$${valorTotal}`);
