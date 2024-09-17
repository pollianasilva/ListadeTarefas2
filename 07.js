//Manipulação de Arrays de Objetos com forEach
/* 7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

const produtos = [
    { nome: 'Cadeira', preco: 150, desconto: 0.15 },
    { nome: 'Mesa', preco: 300, desconto: 0.10 },
    { nome: 'Lâmpada', preco: 50, desconto: 0.20 },
    { nome: 'Couch', preco: 500, desconto: 0.35 }
];

function aplicarDescontoExibir(preco, desconto) {
    return preco - (preco * desconto);
}

produtos.forEach(produto => {    
    const precoComDesconto = aplicarDescontoExibir(produto.preco, produto.desconto);
   
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço original: R$ ${produto.preco.toFixed(2)}`);
    console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
    console.log(''); 
});
