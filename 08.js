//Manipulação de Arrays de Objetos com forEach
/* 8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */

const filmes = [
    { titulo: 'O Senhor dos Anéis', diretor: 'Peter Jackson', anoLancamento: 2001 },
    { titulo: 'Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 },
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 }
];

let titulosDosFilmes = [];

filmes.forEach(filme => {
    titulosDosFilmes.push(filme.titulo); 
});

console.log(titulosDosFilmes);
