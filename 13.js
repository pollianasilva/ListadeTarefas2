//Combinação de Estruturas
/* 13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */

const carrinho = {
    itens: [
        { nome: 'Feijão', quantidade: 2, precoUnitario: 10.00 },
        { nome: 'Arroz', quantidade: 1, precoUnitario: 7.50 },
        { nome: 'Macarrão', quantidade: 3, precoUnitario: 2.00 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario; 
});

console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}`);
