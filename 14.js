//Combinação de Estruturas
/* 14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    departamentos: [
        {
            nome: 'Avengers',
            funcionarios: [
                { nome: 'Tony Stark', cargo: 'Iron Man' },
                { nome: 'Wanda Maximoff', cargo: 'Scarlet Witch' },
                { nome: 'Peter Parker', cargo: 'Spider-Man' }
            ]
        },
        {
            nome: 'X-Men',
            funcionarios: [
                { nome: 'Anna Marie', cargo: 'Rogue' },
                { nome: 'Logan', cargo: 'Wolverine' },
                { nome: 'Jean Grey', cargo: 'Phoenix' }
            ]
        },
        {
            nome: 'Justice League',
            funcionarios: [
                { nome: 'Bruce Wayne', cargo: 'Batman' },
                { nome: 'Diana Prince', cargo: 'Wonder Woman' },
                { nome: 'Barry Allen', cargo: 'Flash' }
            ]
        }
    ]
};

for (let i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
    console.log(`Departamento: ${departamento.nome}`);
 
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }

    console.log(''); 
}
