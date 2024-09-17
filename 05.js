//Manipulação de Arrays de Objetos com for of
/* 5. Calculando Valores em Arrays de Objetos 
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Acrescentei classificar a situação do aluno com base na média
function mediaNotas(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media > 4 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const alunos = [
    { nome: 'Joãozinho', notas: [0, 10, 9, 8, 6, 10] },
    { nome: 'Mariazinha', notas: [5, 6, 9, 4] },
    { nome: 'Fernandinho', notas: [3, 2, 6] }
];

console.log('============= Programa de Média de Notas =============');

// Loop para calcular a média e situação de cada aluno
for (let aluno of alunos) {
    let media = calcularMedia(aluno.notas);
    console.log(`Notas de ${aluno.nome}: ${aluno.notas.join(', ')}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${mediaNotas(media)}`);
    console.log(''); 
}
