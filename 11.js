//Combinação de Estruturas
/* 11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

const pedidos = [
    { cliente: 'Marcelo', produto: 'Feijão', quantidade: 5 },
    { cliente: 'Joana', produto: 'Arroz', quantidade: 3 },
    { cliente: 'Patricia', produto: 'Macarrão', quantidade: 2 },
    { cliente: 'Joana', produto: 'Feijão', quantidade: 4 },
    { cliente: 'Marcelo', produto: 'Arroz', quantidade: 7 },
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
  
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {        
        totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
});


console.log(totalPorCliente);
