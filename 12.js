//Combinação de Estruturas
/* 12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */

const estoque = [
    { produto: 'Feijão', quantidade: 5, minimo: 10 },
    { produto: 'Arroz', quantidade: 12, minimo: 15 },
    { produto: 'Macarrão', quantidade: 8, minimo: 10 },
    { produto: 'Extrato de Tomate', quantidade: 20, minimo: 5 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2; 
    }
});

console.log(estoque);

